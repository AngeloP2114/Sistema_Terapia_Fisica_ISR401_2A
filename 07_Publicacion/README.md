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
