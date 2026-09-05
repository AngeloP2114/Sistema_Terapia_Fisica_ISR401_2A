# Desviaciones y transformaciones del paquete de datos SICST

## Fuente

La fuente principal utilizada por la cadena reproducible es:

`07_Datos/datos_crudos/respuestas_cuestionario_2B.csv`

El archivo corresponde a las respuestas reales recopiladas para el proyecto SICST.

## Transformaciones previstas

El script:

`07_Datos/scripts/orquestar.py`

realiza únicamente transformaciones reproducibles sobre el archivo de origen.

### Eliminación de fecha y hora

La primera columna del archivo crudo contiene la fecha y hora de envío de cada respuesta.

Esta columna se excluye de la versión procesada para reducir información temporal innecesaria y disminuir el riesgo de identificación indirecta.

### Limpieza

El script elimina espacios al inicio y final de los campos y descarta únicamente filas completamente vacías.

### Conservación de respuestas

No se modifican, completan ni fabrican respuestas de participantes.

No se generan participantes inexistentes.

## Resultados derivados

El script genera un resumen de la cantidad de registros por perfil declarado en el cuestionario.

Los resultados se obtienen exclusivamente desde los datos almacenados en `datos_crudos`.

## Limitaciones

Los códigos de participantes se mantienen para permitir trazabilidad interna del estudio. Antes de cualquier depósito público externo se realizará una revisión adicional de privacidad y consentimiento.

Los consentimientos firmados y demás documentos con datos personales no forman parte del paquete público de datos.
