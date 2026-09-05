# 07_Datos — Paquete reproducible SICST

Esta carpeta contiene el paquete de datos reproducible del proyecto
**Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

## Autores

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

## Estructura

- `datos_crudos/`
- `datos_procesados/`
- `scripts/`
- `resultados/`
- `diccionario_datos.csv`
- `README_datos.md`
- `LICENSE-DATA.txt`
- `checksums_datos.sha256`
- `desviaciones.md`
- `registro_deposito.md`

## Datos utilizados

La fuente reproducible principal se encuentra en:

`07_Datos/datos_crudos/respuestas_cuestionario_2B.csv`

El conjunto contiene **79 respuestas codificadas**:

- 62 pacientes o ex pacientes de terapia física;
- 14 familiares o cuidadores;
- 3 fisioterapeutas.

No se crean participantes, respuestas ni resultados ficticios.

## Reproducción

Desde la raíz del repositorio ejecutar:

`python 07_Datos/scripts/orquestar.py`

El script genera:

- `07_Datos/datos_procesados/respuestas_cuestionario_procesadas.csv`
- `07_Datos/resultados/resumen_perfiles.csv`
- `07_Datos/checksums_datos.sha256`

## Integridad

Los valores SHA-256 para verificar los archivos de datos se encuentran en:

`07_Datos/checksums_datos.sha256`

## Privacidad

El paquete no incluye nombres completos, cédulas, teléfonos, firmas ni consentimientos firmados.

Los códigos de participante se conservan para trazabilidad académica y no deben utilizarse para intentar identificar o reidentificar personas.

## Depósito persistente

El paquete reproducible versión 1.0 se encuentra publicado en Zenodo.

- DOI: `10.5281/zenodo.22315298`
- URL: `https://doi.org/10.5281/zenodo.22315298`
- Zenodo: `https://zenodo.org/records/22315298`
- Fecha de publicación: `2026-09-05`
- Acceso: Público / Open
