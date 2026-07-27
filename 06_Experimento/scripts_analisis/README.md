# Scripts de análisis

Esta carpeta contiene los scripts utilizados para reproducir las tablas y figuras del componente empírico del proyecto SICST.

Los scripts permiten procesar datos crudos provenientes del cuestionario, entrevistas, codificación temática y validación walkthrough.

## Scripts esperados

- analisis_cuestionario.py
- generar_curva_saturacion.py
- analisis_walkthrough.py
- generar_tablas_resultados.py

## Datos de entrada

Los scripts utilizan archivos ubicados en:

- 06_Experimento/resultados/
- 02_Evidencias/Cuestionario/Respuestas/
- 02_Evidencias/Codificacion_Tematica/

## Salidas esperadas

- Tablas de resultados en CSV o XLSX.
- Figuras en PNG.
- Curva de saturación temática.
- Resúmenes estadísticos del cuestionario.
- Resultados de validación walkthrough.

## Nota de reproducibilidad

Las tablas y figuras del documento ERS/SRS y del manuscrito borrador deben generarse a partir de estos scripts, evitando cifras manuales sin respaldo de datos.
