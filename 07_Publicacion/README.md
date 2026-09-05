# Publicación académica — SICST

Esta carpeta reúne los artefactos de publicación académica del proyecto
**Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

## Autores actuales

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

## Manuscrito científico

El manuscrito final del proyecto se encuentra disponible en:

- `manuscrito_final.pdf`
- `manuscrito_final.tex`
- `manuscrito_final_springer.tex`
- `manuscrito_final.bbl`
- `references.bib`
- `README_manuscrito.md`

La revista objetivo prioritaria documentada para el trabajo es
**Requirements Engineering (Springer Nature)**.

El archivo:

`manuscrito_final_springer.tex`

contiene una versión preparada para adaptación editorial a la plantilla oficial
de Springer Nature.

Para la evaluación y reproducibilidad del repositorio se utiliza como fuente
principal:

`manuscrito_final.tex`

porque puede compilarse sin depender de archivos externos de la plantilla
editorial.

## Figuras

Las figuras utilizadas por el manuscrito se encuentran en:

`figuras/`

Contenido:

- `figura_perfiles.png`
- `figura_saturacion.png`
- `figura_subtemas.png`

Las rutas relativas de las figuras deben mantenerse sin cambios para permitir
la compilación correcta del manuscrito.

## Evidencia utilizada por el manuscrito

El manuscrito se basa en evidencia real y trazable del proyecto SICST.

La versión reproducible actual del cuestionario contiene **79 respuestas codificadas**:

- 62 pacientes o ex pacientes de terapia física;
- 14 familiares o cuidadores;
- 3 fisioterapeutas.

El análisis cualitativo principal utiliza **11 entrevistas** y un libro de códigos
de **12 subtemas**.

La segunda codificación independiente cubre 3 de las 11 entrevistas
(27,27 % del corpus), con los siguientes resultados:

- 36 decisiones comparadas;
- 33 acuerdos;
- 3 desacuerdos;
- 91,67 % de acuerdo;
- Cohen κ = 0,7187;
- IC 95 % bootstrap = [0,3077, 1,0000].

La matriz de trazabilidad vigente contiene **58 trazas documentales**:

- 33 requisitos funcionales;
- 15 requisitos no funcionales generales;
- 10 requisitos no funcionales específicos de IA.

## Compilación del manuscrito LaTeX

El manuscrito principal compilable se encuentra en:

`07_Publicacion/manuscrito_final.tex`

La bibliografía utilizada se encuentra en:

`07_Publicacion/references.bib`

Las figuras requeridas se encuentran en:

`07_Publicacion/figuras/`

### Requisitos

Se recomienda utilizar una distribución LaTeX completa, por ejemplo:

- TeX Live;
- MiKTeX;
- Overleaf.

El documento utiliza, entre otros, los siguientes paquetes:

- `graphicx`
- `booktabs`
- `tabularx`
- `longtable`
- `natbib`
- `hyperref`
- `caption`
- `float`
- `amsmath`
- `amssymb`
- `lmodern`
- `microtype`
- `geometry`
- `setspace`
- `xcolor`
- `titlesec`

## Compilación desde la raíz del repositorio

Desde la raíz del repositorio ejecutar:

```bash
cd 07_Publicacion
pdflatex manuscrito_final.tex
bibtex manuscrito_final
pdflatex manuscrito_final.tex
pdflatex manuscrito_final.tex
```

El archivo generado será:

`07_Publicacion/manuscrito_final.pdf`

## Compilación desde 07_Publicacion

Si ya se encuentra dentro de la carpeta:

`07_Publicacion/`

ejecutar:

```bash
pdflatex manuscrito_final.tex
bibtex manuscrito_final
pdflatex manuscrito_final.tex
pdflatex manuscrito_final.tex
```

La ejecución de `bibtex` genera la bibliografía.

Las dos ejecuciones finales de `pdflatex` permiten resolver correctamente:

- referencias cruzadas;
- numeración;
- citas;
- bibliografía;
- figuras;
- referencias internas.

## Archivos mínimos necesarios para compilar

La estructura mínima requerida es:

```text
07_Publicacion/
├── manuscrito_final.tex
├── references.bib
└── figuras/
    ├── figura_perfiles.png
    ├── figura_saturacion.png
    └── figura_subtemas.png
```

No deben cambiarse los nombres de estos archivos ni las rutas relativas utilizadas por el manuscrito.

## PDF versionado

El repositorio incluye el archivo:

`manuscrito_final.pdf`

Este PDF representa la versión visual esperada del manuscrito.

Sin embargo, la reproducibilidad se verifica compilando nuevamente:

`manuscrito_final.tex`

junto con:

`references.bib`

y la carpeta:

`figuras/`

## Archivo BBL

También se conserva:

`manuscrito_final.bbl`

Este archivo contiene la bibliografía generada por BibTeX y sirve como evidencia adicional de la compilación realizada.

## Versión Springer Nature

También se incluye:

`manuscrito_final_springer.tex`

Esta versión se encuentra preparada para adaptación a la plantilla editorial de Springer Nature.

No constituye evidencia de que el manuscrito haya sido enviado o aceptado por la revista.

La revista objetivo prioritaria es:

**Requirements Engineering — Springer Nature**

El análisis completo de revistas objetivo se encuentra en:

`analisis_revistas.md`

## Reproducibilidad de los datos

La fuente reproducible vigente de los datos se encuentra en:

`../07_Datos/`

Desde la raíz del repositorio puede ejecutarse:

```bash
python 07_Datos/scripts/orquestar.py
```

La ejecución genera:

- datos procesados;
- resumen de perfiles;
- checksums SHA-256.

## Dataset publicado

El paquete reproducible del proyecto SICST fue publicado en Zenodo como versión 1.0.

- **DOI:** `10.5281/zenodo.22315298`
- **URL DOI:** `https://doi.org/10.5281/zenodo.22315298`
- **Versión:** 1.0
- **Fecha de publicación:** 2026-09-05
- **Acceso:** Público / Open

Los metadatos relacionados con el depósito se encuentran en:

`dataset_zenodo/`

## Alcance del manuscrito

El manuscrito presenta un estudio de caso de ingeniería de requisitos aplicado al seguimiento de terapia física.

El manuscrito **no afirma eficacia clínica del sistema** y tampoco afirma que exista un modelo de inteligencia artificial clínicamente validado.

Los resultados sintéticos utilizados en ejercicios metodológicos o experimentales no se presentan como evidencia de participantes reales.

## Privacidad y protección de datos

El paquete público de publicación no debe contener identificadores directos, consentimientos firmados, firmas, rostros, audios o videos identificables de participantes.

Los materiales sensibles deben mantenerse fuera de la publicación abierta.

## Relación con el repositorio

- ERS/SRS: `../01_ERS/`
- Evidencias: `../02_Evidencias/`
- Trazabilidad: `../04_Trazabilidad/`
- MVP: `../05_MVP/`
- Datos reproducibles: `../07_Datos/`

## Estado de publicación

El manuscrito científico y los materiales de publicación corresponden a la línea base vigente de la **Entrega Final 2B**.

El manuscrito se encuentra preparado como artefacto académico de publicación, pero el repositorio no declara aceptación editorial ni publicación del artículo en una revista científica.

El dataset reproducible sí cuenta con publicación independiente en Zenodo y DOI persistente.
