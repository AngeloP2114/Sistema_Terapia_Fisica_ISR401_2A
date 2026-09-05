# 07_Datos — Paquete reproducible SICST

Esta carpeta contiene el paquete de datos reproducible del proyecto
Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST).

## Estructura requerida

- datos_crudos/
- datos_procesados/
- scripts/
- resultados/
- diccionario_datos.csv
- README_datos.md
- LICENSE-DATA.txt
- checksums_datos.sha256
- desviaciones.md
- registro_deposito.md

## Datos utilizados

Las fuentes reales utilizadas por el proyecto se encuentran actualmente en:

- `02_Evidencias/Respuestas/respuestas_cuestionario_2B.csv`
- `02_Evidencias/Transcripciones/`
- `02_Evidencias/Codificacion_Tematica/`

No se crean participantes, respuestas ni resultados ficticios.

## Reproducción

El paquete incluirá un único script de orquestación:

`python 07_Datos/scripts/orquestar.py`

Este script generará los datos procesados y los resultados a partir de los datos crudos.

## Privacidad

No se incluirán nombres, cédulas, teléfonos, firmas, consentimientos firmados ni otros identificadores directos en el paquete público.

## Depósito persistente

El DOI u otro identificador persistente será registrado únicamente después de realizar un depósito real y verificable.
