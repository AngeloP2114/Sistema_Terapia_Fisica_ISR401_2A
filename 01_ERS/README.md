# ERS/SRS 2B v2.0 — SICST

Repositorio documental de la **Especificación de Requisitos de Software (ERS/SRS)** del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**, correspondiente a la **Entrega 4 (2B / Defensa Final)** de la asignatura Ingeniería de Requisitos (ISR-401).

## 1. Archivo principal

El archivo fuente canónico de esta carpeta es:

```text
ERS_SRS_2B_v2.0.tex
```

El PDF evaluable generado desde esa fuente es:

```text
ERS_SRS_2B_v2.0.pdf
```

La bibliografía de apoyo se conserva en:

```text
referencias.bib
```

Los recursos gráficos utilizados por el archivo LaTeX se encuentran en:

```text
assets/
```

## 2. Compilador requerido

El documento debe compilarse con **XeLaTeX**. No usar `pdflatex`, porque la fuente utiliza `fontspec` y fuentes Unicode.

Compilador esperado:

```text
XeLaTeX
```

## 3. Dependencias

Se requiere una distribución LaTeX actual, por ejemplo:

- TeX Live 2024 o superior, o
- MiKTeX actualizado, o
- Overleaf configurado con XeLaTeX.

Paquetes utilizados directamente por la fuente:

- `fontspec`
- `graphicx`
- `xcolor`
- `geometry`
- `hyperref`

Fuentes requeridas por la versión actual:

- Liberation Serif
- Liberation Sans
- Liberation Mono

## 4. Compilación local

Después de clonar o descargar el repositorio, abrir una terminal dentro de la carpeta `01_ERS/`.

Ejecutar en este orden:

```bash
xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
```

La segunda compilación se ejecuta para estabilizar los elementos internos del documento y asegurar una salida reproducible.

El archivo generado debe ser:

```text
ERS_SRS_2B_v2.0.pdf
```

## 5. Compilación en Overleaf

1. Crear un proyecto nuevo en Overleaf.
2. Subir `ERS_SRS_2B_v2.0.tex`.
3. Subir `referencias.bib`.
4. Subir la carpeta completa `assets/` conservando exactamente su nombre.
5. Abrir **Menu > Settings > Compiler**.
6. Seleccionar **XeLaTeX**.
7. Establecer `ERS_SRS_2B_v2.0.tex` como documento principal si Overleaf no lo detecta automáticamente.
8. Presionar **Recompile**.
9. Confirmar que el PDF se genera sin error fatal.

No se deben cambiar los nombres ni mover los archivos de `assets/`, porque la fuente LaTeX los referencia mediante rutas relativas.

## 6. Estructura esperada de `01_ERS/`

```text
01_ERS/
├── ERS_SRS_2B_v2.0.tex
├── ERS_SRS_2B_v2.0.pdf
├── referencias.bib
├── README.md
└── assets/
```

No deben utilizarse como línea base final archivos anteriores llamados `main.tex`, `ERS_SRS_SICST_PE5_FINAL1.*` o documentos PE5. El historial Git conserva las versiones anteriores cuando sea necesario para auditoría.

## 7. Resultado esperado de la compilación

La línea base actual genera un PDF de **150 páginas**.

Verificación mínima después de compilar:

- existe `ERS_SRS_2B_v2.0.pdf`;
- el PDF abre correctamente;
- la portada indica Entrega 4 (2B / Defensa Final) y versión `2B-v2.0`;
- las figuras y diagramas se muestran correctamente;
- no aparecen errores fatales de archivo gráfico faltante;
- el documento conserva las 60 trazas terminales declaradas y los casos de prueba funcionales CP-01 a CP-33.

## 8. Bibliografía

`referencias.bib` forma parte del paquete documental y centraliza las entradas bibliográficas verificadas del ERS. La fuente actual conserva el diseño documental ya consolidado y no requiere ejecutar `bibtex` para producir el PDF base. Por ello, el comando reproducible de esta versión utiliza únicamente XeLaTeX.

## 9. Solución de errores comunes

### Error: `fontspec` requires XeTeX or LuaTeX

Se está intentando compilar con `pdflatex`. Cambiar el compilador a **XeLaTeX**.

### Error: `The font "Liberation Serif" cannot be found`

Instalar las fuentes Liberation o utilizar una distribución/entorno LaTeX que las incluya. No sustituir fuentes en la versión evaluable sin volver a comprobar visualmente el PDF.

### Error: archivo de imagen no encontrado

Comprobar que la carpeta se llame exactamente:

```text
assets
```

y que permanezca en el mismo nivel que `ERS_SRS_2B_v2.0.tex`.

### El PDF se genera pero una imagen no aparece

Verificar que todos los archivos de `assets/` fueron descargados o subidos. GitHub/Overleaf debe conservar nombres y extensiones exactamente.

## 10. Línea base documental

- **Proyecto:** Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)
- **Entrega:** 4 (2B / Defensa Final)
- **Versión:** `2B-v2.0`
- **Fecha de consolidación:** 01/09/2026
- **Requisitos funcionales:** 33
- **Requisitos no funcionales generales:** 15
- **Trazas terminales declaradas:** 60
- **Casos de prueba funcionales documentados:** CP-01 a CP-33

## 11. Separación de evidencias

Esta carpeta contiene únicamente la línea base documental del ERS/SRS.

Las evidencias humanas y de trabajo de campo no se duplican aquí. Consentimientos, archivos audiovisuales, transcripciones, cuestionarios, respuestas, documentos organizacionales, walkthrough, member checking y codificación temática se organizan en `02_Evidencias/` según las zonas pública y restringida definidas para el proyecto.

## 12. Reproducibilidad

Para reproducir el ERS/SRS desde cero:

1. clonar o descargar el repositorio;
2. ingresar a `01_ERS/`;
3. comprobar que `assets/` está presente;
4. disponer de XeLaTeX y las fuentes Liberation;
5. ejecutar dos veces el comando de compilación indicado en la Sección 4;
6. abrir `ERS_SRS_2B_v2.0.pdf` y verificar el resultado esperado.

La fuente `.tex`, el PDF generado, la bibliografía y los recursos gráficos se versionan juntos para permitir auditoría y reproducción del documento.
