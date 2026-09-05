from pathlib import Path
import csv
import hashlib

# Rutas del repositorio
ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "07_Datos"

RAW = DATA / "datos_crudos" / "respuestas_cuestionario_2B.csv"
PROCESSED = DATA / "datos_procesados" / "respuestas_cuestionario_procesadas.csv"
RESULTS = DATA / "resultados" / "resumen_perfiles.csv"
CHECKSUMS = DATA / "checksums_datos.sha256"


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for bloque in iter(lambda: f.read(65536), b""):
            h.update(bloque)
    return h.hexdigest()


def main():
    if not RAW.exists():
        raise FileNotFoundError(
            f"No se encontró el archivo de datos crudos: {RAW}"
        )

    PROCESSED.parent.mkdir(parents=True, exist_ok=True)
    RESULTS.parent.mkdir(parents=True, exist_ok=True)

    # Leer datos reales
    with open(RAW, "r", encoding="utf-8-sig", newline="") as f:
        filas = list(csv.reader(f))

    if not filas:
        raise ValueError("El archivo de datos crudos está vacío.")

    encabezado = [x.strip() for x in filas[0]]
    datos = filas[1:]

    # La primera columna corresponde a la fecha/hora de respuesta.
    # Se excluye de la versión procesada para reducir información
    # temporal innecesaria en los datos derivados.
    encabezado_procesado = encabezado[1:]

    datos_procesados = []
    for fila in datos:
        if not any(celda.strip() for celda in fila):
            continue

        fila_limpia = [celda.strip() for celda in fila]

        # Eliminar fecha/hora, conservar el resto de respuestas reales.
        datos_procesados.append(fila_limpia[1:])

    # Guardar datos procesados
    with open(PROCESSED, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(encabezado_procesado)
        writer.writerows(datos_procesados)

    # En el archivo procesado, la columna de perfil queda en índice 2.
    conteo_perfiles = {}

    for fila in datos_procesados:
        if len(fila) > 2:
            perfil = fila[2].strip()
            if perfil:
                conteo_perfiles[perfil] = conteo_perfiles.get(perfil, 0) + 1

    # Generar resultado reproducible
    with open(RESULTS, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["perfil", "cantidad"])

        for perfil in sorted(conteo_perfiles):
            writer.writerow([perfil, conteo_perfiles[perfil]])

    # Generar checksums del paquete
    archivos = [RAW, PROCESSED, RESULTS]

    with open(CHECKSUMS, "w", encoding="utf-8") as f:
        for archivo in archivos:
            ruta_relativa = archivo.relative_to(ROOT)
            f.write(f"{sha256(archivo)}  {ruta_relativa.as_posix()}\n")

    print("Cadena reproducible SICST ejecutada correctamente.")
    print(f"Datos procesados: {PROCESSED.relative_to(ROOT)}")
    print(f"Resultados: {RESULTS.relative_to(ROOT)}")
    print(f"Checksums: {CHECKSUMS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
