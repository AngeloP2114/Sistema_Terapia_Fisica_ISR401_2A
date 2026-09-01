# ERS/SRS 2B v2.0 — SICST

Repositorio documental de la **Especificación de Requisitos de Software (ERS/SRS)** del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**, correspondiente a la **Entrega 4 (2B / Defensa Final)** de la asignatura Ingeniería de Requisitos (ISR-401).

## 1. Archivo principal

El archivo fuente canónico de esta carpeta es:

`ERS_SRS_2B_v2.0.tex`

El PDF evaluable generado desde esa fuente es:

`ERS_SRS_2B_v2.0.pdf`

La bibliografía de apoyo se conserva en:

`referencias.bib`

Los recursos gráficos utilizados por el archivo LaTeX se encuentran en:

`assets/`

## 2. Compilador requerido

El documento debe compilarse con **pdfLaTeX**.

Compilador esperado:

`pdfLaTeX`

La fuente actual fue adaptada para evitar dependencias exclusivas de XeLaTeX y utiliza configuración compatible con pdfLaTeX.

## 3. Dependencias

Se requiere una distribución LaTeX actual, por ejemplo:

- TeX Live 2024 o superior;
- MiKTeX actualizado;
- Overleaf configurado con pdfLaTeX.

Paquetes principales utilizados por la fuente:

- `inputenc`
- `fontenc`
- `lmodern`
- `textcomp`
- `graphicx`
- `xcolor`
- `geometry`
- `hyperref`

La fuente incorpora además compatibilidad explícita para caracteres Unicode utilizados en el documento.

## 4. Compilación local

Después de clonar o descargar el repositorio, abrir una terminal dentro de la carpeta:

`01_ERS/`

Ejecutar en este orden:

    pdflatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
    pdflatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex

La segunda compilación se utiliza para estabilizar referencias y elementos internos del documento.

El archivo generado debe ser:

`ERS_SRS_2B_v2.0.pdf`

## 5. Compilación en Overleaf

1. Crear un proyecto nuevo en Overleaf.
2. Subir `ERS_SRS_2B_v2.0.tex`.
3. Subir `referencias.bib`.
4. Subir la carpeta completa `assets/` conservando exactamente su nombre.
5. Abrir la configuración del proyecto.
6. Seleccionar **pdfLaTeX** como compilador.
7. Establecer `ERS_SRS_2B_v2.0.tex` como documento principal.
8. Presionar **Recompile**.
9. Confirmar que el PDF se genera sin errores fatales.

No se deben cambiar los nombres ni mover los archivos de `assets/`, porque la fuente LaTeX los referencia mediante rutas relativas.

## 6. Estructura esperada de `01_ERS/`

    01_ERS/
    ├── ERS_SRS_2B_v2.0.tex
    ├── ERS_SRS_2B_v2.0.pdf
    ├── referencias.bib
    ├── README.md
    └── assets/

No deben utilizarse como línea base final archivos anteriores llamados `main.tex`, `ERS_SRS_SICST_PE5_FINAL1.*` u otros documentos correspondientes a PE5.

Las versiones anteriores se mantienen únicamente en el historial Git cuando sean necesarias para auditoría.

## 7. Línea base documental

La línea base actual corresponde a:

**Entrega Final 2B — Versión 2.0**

El archivo evaluable es:

`ERS_SRS_2B_v2.0.pdf`

La fuente reproducible es:

`ERS_SRS_2B_v2.0.tex`

## 8. Autores de la línea base actual

Los integrantes declarados para la Entrega Final 2B son:

- Contreras Chávez Kevin Germán
- Zambrano Moya Angelo Paul

Los nombres de participantes de etapas anteriores pueden permanecer en secciones históricas cuando correspondan, pero no se presentan como autores actuales de la línea base 2B.

## 9. Resultado esperado de la compilación

La compilación debe producir un PDF de aproximadamente **150 páginas**.

Verificación mínima después de compilar:

- existe `ERS_SRS_2B_v2.0.pdf`;
- el PDF abre correctamente;
- la portada identifica la Entrega 4 (2B / Defensa Final);
- la versión indicada es `2B-v2.0`;
- los autores actuales son Kevin Germán Contreras Chávez y Angelo Paul Zambrano Moya;
- las figuras y diagramas se muestran correctamente;
- no aparecen errores fatales de archivos gráficos faltantes;
- el PDF fue producido desde la fuente LaTeX versionada.

## 10. Reproducibilidad

La relación entre fuente y salida debe ser directa:

`ERS_SRS_2B_v2.0.tex` → pdfLaTeX → `ERS_SRS_2B_v2.0.pdf`

El PDF publicado en el repositorio debe corresponder al resultado de esta compilación y no a una exportación realizada desde LibreOffice u otro procesador de documentos.

## 11. Recursos gráficos

La carpeta `assets/` contiene las imágenes utilizadas por la fuente LaTeX.

Las rutas son relativas a `01_ERS/`.

Ejemplos:

`assets/page-016-img-01.jpeg`

`assets/page-023-img-01.jpeg`

`assets/page-027-img-01.png`

Por este motivo, la carpeta `assets/` debe mantenerse junto al archivo `.tex`.

## 12. Verificación final

Antes de congelar la versión definitiva:

1. compilar dos veces con pdfLaTeX;
2. confirmar que no existan errores fatales;
3. abrir y revisar el PDF generado;
4. verificar portada, autores y versión;
5. sustituir en GitHub el PDF anterior por el generado mediante pdfLaTeX;
6. mantener el `.tex` que produjo exactamente dicho PDF;
7. generar checksums únicamente después de finalizar todos los cambios.

---

**Proyecto:** Sistema Inteligente de Control y Seguimiento de Terapia Física — SICST  
**Entrega:** Final 2B  
**Versión:** 2.0  
**Compilador:** pdfLaTeX
