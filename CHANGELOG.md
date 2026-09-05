# CHANGELOG — SICST

Registro de los cambios correspondientes a la línea base vigente del proyecto
**Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

## [2B-v2.0] - 2026-09-05

### Línea base

La versión vigente del repositorio corresponde a:

**Entrega Final 2B — versión 2.0**

Autores actuales de la entrega:

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

---

### Agregado

- Estructura reproducible definitiva en `07_Datos/`.
- Datos crudos utilizados para la reproducción del análisis.
- Datos procesados generados a partir de los datos crudos.
- Resultados derivados reproducibles.
- Diccionario de datos actualizado.
- Archivo de checksums SHA-256 para verificación de integridad.
- Archivo `desviaciones.md` para documentar transformaciones y limitaciones.
- Archivo `registro_deposito.md` para registrar el depósito persistente.
- Condiciones específicas de uso en `07_Datos/LICENSE-DATA.txt`.
- Script reproducible:

  `07_Datos/scripts/orquestar.py`

- Ejecución de la cadena reproducible mediante:

  `python 07_Datos/scripts/orquestar.py`

- Resultado reproducible de distribución de perfiles en:

  `07_Datos/resultados/resumen_perfiles.csv`

- Evidencia de doble codificación en:

  `10_Autoria/doble_codificacion/`

- Cálculo del porcentaje de acuerdo entre codificadores.
- Cálculo de Cohen κ.
- Intervalo de confianza mediante bootstrap para el acuerdo.
- Registro de desacuerdos entre codificadores.
- Declaración de uso de inteligencia artificial en:

  `10_Autoria/declaracion_uso_ia.md`

- Archivo `.mailmap` en la raíz para normalizar identidades Git de los autores actuales.

---

### Dataset reproducible

El conjunto reproducible vigente contiene **79 respuestas codificadas**:

- 62 pacientes o ex pacientes de terapia física;
- 14 familiares o cuidadores;
- 3 fisioterapeutas.

La fuente reproducible vigente se encuentra en:

`07_Datos/`

Los archivos generados por el script incluyen:

- `07_Datos/datos_procesados/respuestas_cuestionario_procesadas.csv`
- `07_Datos/resultados/resumen_perfiles.csv`
- `07_Datos/checksums_datos.sha256`

---

### Publicación en Zenodo

El paquete reproducible del proyecto SICST fue publicado en Zenodo.

Datos del depósito:

- **Título:** SICST — Dataset reproducible del Sistema Inteligente de Control y Seguimiento de Terapia Física
- **Versión:** 1.0
- **Fecha de publicación:** 2026-09-05
- **DOI:** `10.5281/zenodo.22315298`
- **URL DOI:** `https://doi.org/10.5281/zenodo.22315298`
- **Zenodo:** `https://zenodo.org/records/22315298`
- **Acceso:** Público / Open

Autores registrados en la publicación:

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

ORCID registrado:

- Zambrano Moya Angelo Paul:
  `https://orcid.org/0009-0006-0056-8482`

---

### Actualizado

- `README.md` principal actualizado con la línea base de Entrega Final 2B.
- DOI de Zenodo agregado al README principal.
- Información de reproducción agregada al README principal.
- Se actualizó `07_Datos/README_datos.md`.
- Se actualizó `07_Datos/registro_deposito.md`.
- Se actualizó la documentación de publicación en `07_Publicacion/dataset_zenodo/`.
- Se actualizó `07_Publicacion/dataset_zenodo/CITATION.cff`.
- Se actualizó `07_Publicacion/dataset_zenodo/README.md`.
- Se actualizó `07_Publicacion/dataset_zenodo/README_dataset.md`.
- Se actualizó `07_Publicacion/dataset_zenodo/LICENSE.txt`.
- Se actualizó `07_Publicacion/dataset_zenodo/resumen_perfiles.csv`.
- Se sincronizó la documentación con el DOI real publicado.
- Se estableció `07_Datos/` como fuente oficial de los datos reproducibles.
- Se documentó que el depósito de Zenodo corresponde a la versión 1.0 del dataset.

---

### Corregido

- Se eliminó la indicación antigua de que todavía no existía un depósito en Zenodo.
- Se eliminó la indicación antigua de que todavía no existía un DOI.
- Se corrigieron referencias a un conjunto anterior de únicamente 31 respuestas.
- Se corrigió la distribución de perfiles a los valores actuales:

  - 62 pacientes o ex pacientes;
  - 14 familiares o cuidadores;
  - 3 fisioterapeutas.

- Se eliminó el archivo antiguo:

  `07_Publicacion/dataset_zenodo/respuestas_cuestionario_anonimizadas.csv`

  debido a que correspondía al conjunto anterior de 31 respuestas.

- Se eliminó la figura antigua:

  `07_Publicacion/dataset_zenodo/figura_distribucion_perfiles.png`

  debido a que había sido generada con la versión anterior del conjunto de datos.

- Se eliminó el diccionario de datos antiguo de:

  `07_Publicacion/dataset_zenodo/diccionario_datos.csv`

  para evitar mantener dos versiones incompatibles.

- Se reemplazó la referencia antigua a licencia CC BY 4.0 por las condiciones de uso específicas del dataset SICST.

- Se eliminaron contradicciones entre:

  `07_Publicacion/dataset_zenodo/`

  y

  `07_Datos/`

- Se sincronizaron README, citación, licencia, resultados y registro de depósito con la publicación real.

---

### Integridad y reproducibilidad

La reproducción del conjunto se realiza desde la raíz del repositorio con:

`python 07_Datos/scripts/orquestar.py`

Los hashes SHA-256 vigentes se encuentran en:

`07_Datos/checksums_datos.sha256`

La cadena reproducible genera los datos procesados y los resultados derivados sin crear participantes ni respuestas ficticias.

---

### Privacidad

El paquete reproducible público no incluye:

- nombres completos;
- números de cédula;
- teléfonos;
- firmas;
- consentimientos firmados.

Los códigos de participante se conservan únicamente para trazabilidad académica.

No se autoriza utilizar los datos para intentar identificar o reidentificar participantes.

Las condiciones completas de uso se encuentran en:

`07_Datos/LICENSE-DATA.txt`

---

### Estado de la versión

La versión `2B-v2.0` constituye la línea base vigente de la Entrega Final 2B.

Las futuras modificaciones deberán registrarse en este archivo sin alterar retroactivamente la información correspondiente a esta versión.
