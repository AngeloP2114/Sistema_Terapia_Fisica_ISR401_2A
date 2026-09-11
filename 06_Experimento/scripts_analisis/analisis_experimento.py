import pandas as pd
import os

# Ruta del archivo de evaluación
archivo = "../datos/evaluacion_experta.csv"

# Leer datos
df = pd.read_csv(archivo)

# Columnas evaluadas
criterios = [
    "claridad",
    "completitud",
    "verificabilidad",
    "trazabilidad",
    "consistencia"
]

# Calcular porcentajes
resultados = []

for criterio in criterios:
    porcentaje = df[criterio].mean() * 100
    
    resultados.append({
        "criterio": criterio,
        "porcentaje_cumplimiento": round(porcentaje,2)
    })


# Crear carpeta resultados si no existe
os.makedirs("../resultados", exist_ok=True)

# Guardar resultados
resultado_df = pd.DataFrame(resultados)

resultado_df.to_csv(
    "../resultados/metricas_resultados.csv",
    index=False
)


print("Análisis terminado")
print(resultado_df)
