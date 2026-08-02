from __future__ import annotations

from pathlib import Path
import sys

import pandas as pd

BASE = Path(__file__).resolve().parents[1]
INPUT = BASE / "resultados" / "respuestas_anonimizadas.csv"
OUT = BASE / "resultados" / "tablas"
DIMENSIONS = [
    "Necesidad", "Claridad", "Utilidad", "Confianza", "Extension",
    "Oportunidad", "Comprension", "Accion", "Privacidad", "Control",
    "Satisfaccion",
]


def main() -> int:
    if not INPUT.exists():
        print(f"No existe {INPUT}.")
        print("Copie la plantilla, renómbrela como respuestas_anonimizadas.csv y complete datos reales anonimizados.")
        return 1

    df = pd.read_csv(INPUT)
    missing = [c for c in ["Ronda", "Perfil", "Escenario", *DIMENSIONS] if c not in df.columns]
    if missing:
        print("Faltan columnas obligatorias:", ", ".join(missing))
        return 2

    for col in DIMENSIONS:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    OUT.mkdir(parents=True, exist_ok=True)

    resumen = (
        df.groupby(["Ronda", "Perfil", "Escenario"])[DIMENSIONS]
        .agg(["count", "mean", "median", "std"])
        .round(3)
    )
    resumen.to_csv(OUT / "resumen_descriptivo.csv", encoding="utf-8-sig")

    cobertura = (
        df.groupby(["Ronda", "Perfil"])[DIMENSIONS]
        .mean()
        .round(3)
    )
    cobertura.to_csv(OUT / "promedios_por_perfil.csv", encoding="utf-8-sig")

    faltantes = df[DIMENSIONS].isna().sum().rename("Valores_faltantes")
    faltantes.to_csv(OUT / "control_datos_faltantes.csv", encoding="utf-8-sig")

    print(f"Análisis completado. Archivos generados en {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
