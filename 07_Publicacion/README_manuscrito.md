# Manuscrito final SICST — C7

## Objetivo

Este paquete reemplaza el borrador antiguo de tres páginas y contiene un manuscrito científico completo centrado en la ingeniería y validación de requisitos del proyecto SICST.

**Revista objetivo:** Requirements Engineering — Springer Nature.

## Autores actuales

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

## Archivos

- `manuscrito_final.tex`: fuente LaTeX completa.
- `manuscrito_final.pdf`: PDF compilado desde la fuente.
- `references.bib`: bibliografía propia del manuscrito.
- `figuras/figura_perfiles.png`: distribución de las 79 respuestas por perfil.
- `figuras/figura_saturacion.png`: curva de saturación de las 11 entrevistas.
- `figuras/figura_subtemas.png`: frecuencia de los 12 subtemas.

## Compilación

Desde esta carpeta ejecutar:

```bash
pdflatex manuscrito_final.tex
bibtex manuscrito_final
pdflatex manuscrito_final.tex
pdflatex manuscrito_final.tex
```

El PDF resultante es `manuscrito_final.pdf`.

## Plantilla Springer Nature

Springer Nature recomienda su plantilla LaTeX para artículos de revista y señala que puede utilizarse para sus revistas, incluida la familia Springer. Para un envío editorial real, el contenido de `manuscrito_final.tex` debe transferirse al paquete oficial `sn-jnl` descargado desde el sitio de Springer Nature.

Este paquete no redistribuye archivos de plantilla de terceros. El manuscrito se entrega en LaTeX estándar para que compile de forma reproducible sin depender de archivos externos.

## Evidencia utilizada

El manuscrito utiliza únicamente resultados respaldados por el repositorio actual:

- 79 respuestas del cuestionario: 62 pacientes o expacientes, 14 familiares/cuidadores y 3 fisioterapeutas.
- 11 entrevistas principales para codificación temática.
- 12 subtemas del libro de códigos.
- Saturación observada: 12 subtemas acumulados al llegar a la entrevista 8 y 0 temas nuevos en las entrevistas 9–11.
- Doble codificación: 3/11 entrevistas (27,27 %), 36 decisiones, 33 acuerdos, 3 desacuerdos, 91,67 % de acuerdo, Cohen κ = 0,7187 e IC 95 % bootstrap [0,3077; 1,0000].
- 58 trazas documentales: 33 RF, 15 RNF generales y 10 RNF específicos de IA.
- Dos aplicaciones web del MVP: fisioterapeuta y paciente.
- Dataset Zenodo v1.0: DOI `10.5281/zenodo.22315298`.

Los datos sintéticos ubicados en `06_Experimento/resultados/` se mencionan únicamente como simulación metodológica y **no** se presentan como resultados de participantes reales.

## Ubicación sugerida en GitHub

Subir estos archivos a:

`07_Publicacion/`

Después de verificar el nuevo manuscrito, el archivo histórico `manuscrito_borrador.pdf` puede eliminarse para evitar que el evaluador tome por error el borrador antiguo como documento vigente.

## Fuente preparada para la plantilla oficial Springer Nature

También se incluye `manuscrito_final_springer.tex`. Ese archivo usa:

```latex
\documentclass[pdflatex,sn-basic]{sn-jnl}
```

y está preparado para colocarse dentro del paquete oficial de Springer Nature. Para compilarlo se necesitan los archivos oficiales `sn-jnl.cls` y `sn-basic.bst`, que deben descargarse directamente desde Springer Nature. No se redistribuyen dentro de este paquete.
