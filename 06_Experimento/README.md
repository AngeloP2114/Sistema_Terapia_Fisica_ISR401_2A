# Experimento y métricas — SICST PE5

Esta carpeta contiene los artefactos del ejercicio controlado de explicabilidad y de la auditoría de calidad PE5.

## Experimento Realizado


Los archivos:

- `resultados/ronda1.csv`
- `resultados/ronda2.csv`

corresponden al  **Experiemnto realizado** para ejercitar el protocolo de explicabilidad.

Representan participantes reales.

El análisis se reproduce con:

`scripts_analisis/analizar_explicabilidad.py`

## Métricas M1–M6

La carpeta:

`Metricas_PE5/`

contiene:

- `auditoria_metricas_PE5.csv`
- `auditoria_consistencia_pares.csv`
- `impacto_modificabilidad.csv`
- `reinspeccion_fagan.csv`
- `calcular_metricas.py`

Desde la raíz del repositorio puede ejecutarse:

```bash
python 06_Experimento/Metricas_PE5/calcular_metricas.py
```

El script utiliza la matriz canónica ubicada en:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

y recalcula los conteos documentales sin generar ni inventar datos.

## Resultados de la línea base

- M1a: 58/58 = 100 %
- M1b: 10/10 = 100 %
- M1c: 4/4 = 100 %
- M2: 1 - 0/10 = 1,00
- M3: 58/58 = 100 %
- M4a: 33/33 = 100 %
- M4b: 33/33 = 100 %
- M5: 13/5 = 2,60
- M6: 0/58 = 0,000

# Flujo del experimento

El experimento fue realizado mediante la evaluación de los requisitos funcionales del SICST.

Proceso:

1. Extracción de requisitos desde el documento ERS/SRS.
2. Evaluación mediante rúbrica de calidad.
3. Procesamiento automático mediante scripts.
4. Generación de métricas y gráficas.

## Datos utilizados

Los datos de evaluación se encuentran en:

datos/evaluacion_experta.csv

resultados/metricas_resultados.csv

La gráfica generada se encuentra en:

resultados/graficas/cumplimiento_requisitos.png


