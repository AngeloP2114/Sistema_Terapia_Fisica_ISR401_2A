#!/usr/bin/env python3
"""
Auditoría reproducible de métricas PE5 — SICST.

El script usa únicamente artefactos de la línea base actual del repositorio:
- 04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv
- 06_Experimento/Metricas_PE5/auditoria_consistencia_pares.csv
- 06_Experimento/Metricas_PE5/impacto_modificabilidad.csv
- 06_Experimento/Metricas_PE5/reinspeccion_fagan.csv
- 06_Experimento/Metricas_PE5/auditoria_metricas_PE5.csv

No genera datos empíricos ni inventa valores. Solo recalcula conteos documentales
a partir de los CSV existentes y compara los resultados con la tabla de auditoría.
"""

from pathlib import Path
import csv
import re
import sys

ROOT = Path(__file__).resolve().parents[2]
METRICAS = ROOT / "06_Experimento" / "Metricas_PE5"
MATRIZ = ROOT / "04_Trazabilidad" / "Matriz_Trazabilidad_Final_PE5_Rubrica.csv"
PARES = METRICAS / "auditoria_consistencia_pares.csv"
MODIFICABILIDAD = METRICAS / "impacto_modificabilidad.csv"
FAGAN = METRICAS / "reinspeccion_fagan.csv"
AUDITORIA = METRICAS / "auditoria_metricas_PE5.csv"

ACTORES_PRIMARIOS = {
    "Fisioterapeuta",
    "Paciente",
    "Administrador",
    "FamiliarCuidador",
}

def leer_csv(ruta):
    if not ruta.exists():
        raise FileNotFoundError(f"No se encontró: {ruta}")
    with ruta.open("r", encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))

def porcentaje(num, den):
    return 0.0 if den == 0 else num / den * 100.0

def normalizar(s):
    return (s or "").strip()

def main():
    matriz = leer_csv(MATRIZ)
    pares = leer_csv(PARES)
    cambios = leer_csv(MODIFICABILIDAD)
    fagan = leer_csv(FAGAN)
    auditoria = leer_csv(AUDITORIA)

    rf = [r for r in matriz if normalizar(r["Requisito"]).startswith("RF-")]
    total_requisitos = len(matriz)

    # M1a — ID, prioridad, fuente y criterio BDD presentes.
    m1a_ok = sum(
        1
        for r in matriz
        if all(
            normalizar(r[c])
            for c in ("Requisito", "Prioridad", "Fuente", "BDD")
        )
    )

    # M1b — CU explícitos distintos presentes en la línea base.
    cu = set()
    for r in matriz:
        cu.update(re.findall(r"CU-\d{2}", normalizar(r["Caso_Uso"])))
    m1b_num = len(cu)
    m1b_den = 10

    # M1c — cuatro actores primarios documentados con al menos un RF.
    actores_cubiertos = set()
    for r in rf:
        clases = normalizar(r["Clase_UML"])
        for actor in ACTORES_PRIMARIOS:
            if actor in clases:
                actores_cubiertos.add(actor)
    m1c_num = len(actores_cubiertos)
    m1c_den = len(ACTORES_PRIMARIOS)

    # M2 — consistencia de pares.
    conflictos = sum(int(normalizar(r["Conflicto_0_1"]) or "0") for r in pares)
    pares_total = len(pares)
    abiertos = sum(1 for r in pares if normalizar(r["Estado"]).lower() != "cerrado")
    m2 = 1.0 if pares_total == 0 else 1 - conflictos / pares_total

    # M3 — requisito con criterio BDD comprobable identificado.
    m3_ok = sum(1 for r in matriz if normalizar(r["BDD"]))

    # M4 — se aplica a los 33 RF.
    campos_adelante = (
        "Caso_Uso",
        "Clase_UML",
        "Proceso_DFD",
        "Estado",
        "BDD",
        "Caso_Prueba",
    )
    m4a_ok = sum(
        1 for r in rf
        if normalizar(r["Fuente"])
        and all(normalizar(r[c]) for c in campos_adelante)
    )
    m4b_ok = sum(1 for r in rf if normalizar(r["Fuente"]))

    # M5 — muestra de modificabilidad; excluye fila RESUMEN.
    muestra = [r for r in cambios if normalizar(r["Muestra"]).upper() != "RESUMEN"]
    cantidades = [int(float(normalizar(r["Cantidad"]))) for r in muestra]
    m5_total = sum(cantidades)
    m5_n = len(cantidades)
    m5 = 0.0 if m5_n == 0 else m5_total / m5_n

    # M6 — defectos residuales después de la re-inspección.
    residuales = sum(1 for r in fagan if normalizar(r["Estado"]).lower() != "cerrado")
    m6 = 0.0 if total_requisitos == 0 else residuales / total_requisitos

    print("=== AUDITORÍA REPRODUCIBLE PE5 — SICST ===")
    print(f"M1a Completitud: {m1a_ok}/{total_requisitos} = {porcentaje(m1a_ok, total_requisitos):.2f}%")
    print(f"M1b Cobertura de CU: {m1b_num}/{m1b_den} = {porcentaje(m1b_num, m1b_den):.2f}%")
    print(f"M1c Cobertura de actores: {m1c_num}/{m1c_den} = {porcentaje(m1c_num, m1c_den):.2f}%")
    print(f"M2 Consistencia: 1 - {conflictos}/{pares_total} = {m2:.2f}; conflictos abiertos={abiertos}")
    print(f"M3 Verificabilidad: {m3_ok}/{total_requisitos} = {porcentaje(m3_ok, total_requisitos):.2f}%")
    print(f"M4a Trazabilidad adelante: {m4a_ok}/{len(rf)} = {porcentaje(m4a_ok, len(rf)):.2f}%")
    print(f"M4b Trazabilidad atrás: {m4b_ok}/{len(rf)} = {porcentaje(m4b_ok, len(rf)):.2f}%")
    print(f"M5 Modificabilidad: {m5_total}/{m5_n} = {m5:.2f}")
    print(f"M6 Corrección: {residuales}/{total_requisitos} = {m6:.3f}")

    # Comprobaciones de la línea base publicada.
    errores = []
    esperados = {
        "M1a": ("58/58", "100%"),
        "M1b": ("10/10", "100%"),
        "M1c": ("4/4", "100%"),
        "M2": ("1 - 0/10", "1.00"),
        "M3": ("58/58", "100%"),
        "M4a": ("33/33", "100%"),
        "M4b": ("33/33", "100%"),
        "M5": ("13/5", "2.60"),
        "M6": ("0/58", "0.000"),
    }
    audit_por_id = {normalizar(r["Metrica"]): r for r in auditoria}
    for mid, (conteo, resultado) in esperados.items():
        r = audit_por_id.get(mid)
        if not r:
            errores.append(f"Falta {mid} en auditoria_metricas_PE5.csv")
            continue
        if normalizar(r["Conteo"]) != conteo or normalizar(r["Resultado"]) != resultado:
            errores.append(
                f"{mid}: auditoría publicada ({r['Conteo']}, {r['Resultado']}) "
                f"no coincide con línea base esperada ({conteo}, {resultado})"
            )

    # Verificaciones objetivas adicionales.
    if total_requisitos != 58:
        errores.append(f"La matriz contiene {total_requisitos} trazas; se esperaban 58.")
    if len(rf) != 33:
        errores.append(f"La matriz contiene {len(rf)} RF; se esperaban 33.")
    if m1a_ok != 58:
        errores.append("M1a no alcanza 58/58.")
    if m1b_num != 10:
        errores.append(f"Se detectaron {m1b_num} CU distintos; se esperaban 10.")
    if m1c_num != 4:
        errores.append(
            "No se detectaron los cuatro actores primarios con cobertura RF: "
            + ", ".join(sorted(ACTORES_PRIMARIOS - actores_cubiertos))
        )
    if conflictos != 0 or abiertos != 0:
        errores.append("M2 tiene conflictos o pares abiertos.")
    if m3_ok != 58:
        errores.append("M3 no alcanza 58/58.")
    if m4a_ok != 33 or m4b_ok != 33:
        errores.append("M4 no alcanza 33/33 hacia adelante y atrás.")
    if (m5_total, m5_n) != (13, 5):
        errores.append(f"M5 no reproduce 13/5; obtuvo {m5_total}/{m5_n}.")
    if residuales != 0:
        errores.append(f"M6 detecta {residuales} defectos residuales.")

    if errores:
        print("\nRESULTADO: REVISAR")
        for e in errores:
            print(f"- {e}")
        return 1

    print("\nRESULTADO: OK — los conteos reproducen la línea base PE5.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
