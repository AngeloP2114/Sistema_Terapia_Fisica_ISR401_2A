import csv
import random
import math
from pathlib import Path

BASE = Path(__file__).parent

ARCHIVO_ANGELO = BASE / "codificacion_angelo.csv"
ARCHIVO_KEVIN = BASE / "codificacion_kevin.csv"

RESULTADO_CSV = BASE / "resultado_acuerdo.csv"
RESULTADO_MD = BASE / "resultado_acuerdo.md"
DESACUERDOS_CSV = BASE / "desacuerdos.csv"

N_BOOTSTRAP = 10000
SEMILLA = 401


def leer_codificacion(ruta):
    with open(ruta, "r", encoding="utf-8-sig", newline="") as archivo:
        lector = csv.DictReader(archivo)
        filas = list(lector)
        codigos = [c for c in lector.fieldnames if c != "participante"]

    datos = {}
    for fila in filas:
        participante = fila["participante"]
        datos[participante] = {
            codigo: int(fila[codigo])
            for codigo in codigos
        }

    return datos, codigos


def calcular_kappa(pares):
    n = len(pares)

    acuerdos = sum(1 for a, b in pares if a == b)
    po = acuerdos / n

    p1_a = sum(a for a, _ in pares) / n
    p1_b = sum(b for _, b in pares) / n

    p0_a = 1 - p1_a
    p0_b = 1 - p1_b

    pe = (p1_a * p1_b) + (p0_a * p0_b)

    if abs(1 - pe) < 1e-12:
        return None, po

    kappa = (po - pe) / (1 - pe)

    return kappa, po


def percentil(valores, p):
    valores = sorted(valores)
    posicion = (len(valores) - 1) * p

    inferior = math.floor(posicion)
    superior = math.ceil(posicion)

    if inferior == superior:
        return valores[inferior]

    fraccion = posicion - inferior

    return (
        valores[inferior]
        + (valores[superior] - valores[inferior]) * fraccion
    )


angelo, codigos_a = leer_codificacion(ARCHIVO_ANGELO)
kevin, codigos_k = leer_codificacion(ARCHIVO_KEVIN)

if codigos_a != codigos_k:
    raise ValueError("Los archivos no contienen los mismos códigos.")

if set(angelo.keys()) != set(kevin.keys()):
    raise ValueError("Los archivos no contienen los mismos participantes.")

pares = []
desacuerdos = []

for participante in angelo:
    for codigo in codigos_a:
        valor_a = angelo[participante][codigo]
        valor_k = kevin[participante][codigo]

        pares.append((valor_a, valor_k))

        if valor_a != valor_k:
            desacuerdos.append(
                [participante, codigo, valor_a, valor_k]
            )

kappa, acuerdo = calcular_kappa(pares)

rng = random.Random(SEMILLA)
bootstrap = []

for _ in range(N_BOOTSTRAP):
    muestra = [
        pares[rng.randrange(len(pares))]
        for _ in range(len(pares))
    ]

    k, _ = calcular_kappa(muestra)

    if k is not None:
        bootstrap.append(k)

ci_inferior = percentil(bootstrap, 0.025)
ci_superior = percentil(bootstrap, 0.975)

n = len(pares)
n_acuerdos = sum(1 for a, b in pares if a == b)
n_desacuerdos = len(desacuerdos)

porcentaje_acuerdo = acuerdo * 100

with open(RESULTADO_CSV, "w", encoding="utf-8", newline="") as archivo:
    escritor = csv.writer(archivo)

    escritor.writerow(["metrica", "valor"])
    escritor.writerow(["decisiones_comparadas", n])
    escritor.writerow(["acuerdos", n_acuerdos])
    escritor.writerow(["desacuerdos", n_desacuerdos])
    escritor.writerow(["porcentaje_acuerdo", f"{porcentaje_acuerdo:.2f}"])
    escritor.writerow(["cohen_kappa", f"{kappa:.4f}"])
    escritor.writerow(["ic95_inferior", f"{ci_inferior:.4f}"])
    escritor.writerow(["ic95_superior", f"{ci_superior:.4f}"])
    escritor.writerow(["bootstrap_repeticiones", N_BOOTSTRAP])
    escritor.writerow(["semilla", SEMILLA])

with open(DESACUERDOS_CSV, "w", encoding="utf-8", newline="") as archivo:
    escritor = csv.writer(archivo)

    escritor.writerow(
        ["participante", "codigo", "angelo", "kevin"]
    )

    escritor.writerows(desacuerdos)

with open(RESULTADO_MD, "w", encoding="utf-8") as archivo:
    archivo.write("# Acuerdo entre codificadores\n\n")
    archivo.write(
        "Se realizó una segunda codificación independiente sobre "
        "3 de las 11 entrevistas del corpus principal "
        "(27,27 % del corpus).\n\n"
    )

    archivo.write("## Resultados\n\n")
    archivo.write(f"- Decisiones comparadas: {n}\n")
    archivo.write(f"- Acuerdos: {n_acuerdos}\n")
    archivo.write(f"- Desacuerdos: {n_desacuerdos}\n")
    archivo.write(
        f"- Porcentaje de acuerdo: {porcentaje_acuerdo:.2f} %\n"
    )
    archivo.write(f"- Cohen's kappa: {kappa:.4f}\n")
    archivo.write(
        f"- IC 95 % bootstrap: "
        f"[{ci_inferior:.4f}, {ci_superior:.4f}]\n\n"
    )

    archivo.write("## Método\n\n")
    archivo.write(
        "El intervalo de confianza se estimó mediante "
        f"{N_BOOTSTRAP} remuestreos bootstrap de las decisiones "
        f"de codificación, utilizando la semilla reproducible "
        f"{SEMILLA}.\n\n"
    )

    archivo.write(
        "Los resultados corresponden al acuerdo previo a cualquier "
        "reconciliación de diferencias entre los codificadores.\n"
    )

print("Análisis completado.")
print(f"Acuerdo: {porcentaje_acuerdo:.2f} %")
print(f"Cohen's kappa: {kappa:.4f}")
print(
    f"IC 95 %: [{ci_inferior:.4f}, {ci_superior:.4f}]"
)
print(f"Desacuerdos: {n_desacuerdos}")
