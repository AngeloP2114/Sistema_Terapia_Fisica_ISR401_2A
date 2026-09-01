# ERS/SRS 2B v2.0 - SICST

Esta carpeta contiene la versión documental evaluable de la **Especificación de Requisitos de Software (ERS/SRS)** del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)** para la Entrega 4 (2B / Defensa Final).

## Archivos evaluables

- `ERS_SRS_2B_v2.0.tex`: fuente LaTeX canónica del ERS/SRS 2B.
- `ERS_SRS_2B_v2.0.pdf`: PDF compilado desde la fuente LaTeX.
- `referencias.bib`: bibliografía del ERS en formato BibTeX.
- `assets/`: recursos gráficos utilizados por la fuente LaTeX.

## Compilación reproducible

La fuente está preparada para **XeLaTeX** porque conserva correctamente los caracteres Unicode y la tipografía del documento.

Desde la carpeta `01_ERS/` ejecutar:

```bash
xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
```

El resultado esperado es `ERS_SRS_2B_v2.0.pdf` con **150 páginas**.

## Línea base documental

- Entrega: 4 (2B / Defensa Final)
- Versión: `2B-v2.0`
- Fecha de consolidación: `01/09/2026`
- Requisitos funcionales: 33
- Requisitos no funcionales generales: 15
- Trazas terminales declaradas: 60
- Casos de prueba funcionales documentados: CP-01 a CP-33

## Integridad

La fuente 2B reemplaza como línea base evaluable a los archivos documentales de PE5. Los artefactos históricos pueden conservarse en el historial Git, pero no deben presentarse como la versión final vigente dentro de esta carpeta.

Las evidencias humanas, consentimientos, videos, audios, transcripciones, cuestionarios, walkthrough y member checking no se duplican en esta carpeta; se mantienen en `02_Evidencias/` según la separación pública/restringida definida para el proyecto.
