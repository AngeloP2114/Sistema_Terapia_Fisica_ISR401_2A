import pandas as pd
import matplotlib.pyplot as plt
import os

archivo = "../datos/evaluacion_experta.csv"

df = pd.read_csv(archivo)

criterios = [
    "claridad",
    "completitud",
    "verificabilidad",
    "trazabilidad",
    "consistencia"
]

resultados = []

for criterio in criterios:
    porcentaje = df[criterio].mean() * 100

    resultados.append({
        "criterio": criterio,
        "porcentaje_cumplimiento": porcentaje
    })


resultado_df = pd.DataFrame(resultados)


os.makedirs("../resultados/graficas", exist_ok=True)


resultado_df.to_csv(
    "../resultados/metricas_resultados.csv",
    index=False
)


plt.figure(figsize=(8,5))

plt.bar(
    resultado_df["criterio"],
    resultado_df["porcentaje_cumplimiento"]
)

plt.xlabel("Criterios evaluados")
plt.ylabel("Cumplimiento (%)")
plt.title("Evaluación de calidad de requisitos SICST")

plt.xticks(rotation=45)

plt.tight_layout()

plt.savefig(
    "../resultados/graficas/cumplimiento_requisitos.png"
)

print("Resultados generados correctamente")
