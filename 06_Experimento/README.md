# Experimento y métricas — SICST PE5

Esta carpeta contiene los artefactos correspondientes al ejercicio controlado de explicabilidad y a las métricas de calidad de la línea base PE5.

## Ejecución controlada de explicabilidad

Los archivos `resultados/ronda1.csv` y `resultados/ronda2.csv` corresponden a una **simulación controlada con datos sintéticos** utilizada para ejercitar el protocolo de evaluación de explicabilidad.

Estos archivos no representan participantes reales, no constituyen validación clínica y no deben confundirse con entrevistas, cuestionarios, consentimientos o walkthrough del trabajo de campo.

El script `scripts_analisis/analizar_explicabilidad.py` permite reproducir los cálculos principales de la ejecución controlada.

## Métricas PE5

La carpeta `Metricas_PE5/` contiene los artefactos utilizados para documentar las métricas M1–M6 y la reinspección final.

Archivos principales:

- `auditoria_metricas_PE5.csv`
- `auditoria_consistencia_pares.csv`
- `impacto_modificabilidad.csv`
- `reinspeccion_fagan.csv`
- `calcular_metricas.py`

## Resultados reportados

- M1 — Completitud: 100 %
- M2 — Consistencia: 1,00; 0/10 conflictos abiertos
- M3 — Verificabilidad: 58/58 = 100 %
- M4 — Trazabilidad: 33/33 = 100 % hacia adelante y hacia atrás
- M5 — Modificabilidad: 13/5 = 2,60
- M6 — Corrección: 0/58 = 0,000 defectos residuales por requisito

## Nota de línea base

Las plantillas antiguas de `resultados/` deben retirarse una vez instalados `ronda1.csv` y `ronda2.csv`, para mantener una sola versión canónica de los resultados PE5.
