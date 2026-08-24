# Informe Final PE5 — SICST

Esta carpeta contiene el Informe Final de la Práctica Experimental Unidad V (PE5) del proyecto:

**Sistema Inteligente de Control y Seguimiento de Terapia Física — SICST**

## Archivo principal

El archivo fuente principal del informe es:

`main.tex`

## PDF generado

El PDF final generado desde LaTeX es:

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

## Compilador

El documento debe compilarse utilizando:

**XeLaTeX**

Se recomienda utilizar `latexmk` para ejecutar automáticamente las pasadas necesarias de compilación.

## Requisitos de compilación

Se requiere:

- Una distribución TeX compatible con XeLaTeX, como TeX Live o MiKTeX.
- XeLaTeX.
- latexmk.
- Los paquetes LaTeX indicados en la sección de dependencias.
- El archivo `references.bib`.
- La carpeta `figuras/` con las imágenes utilizadas por el documento.

## Compilación desde un clon limpio

Después de clonar el repositorio:

```bash
git clone https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A.git
```

Ingresar al repositorio:

```bash
cd Sistema_Terapia_Fisica_ISR401_2A
```

Ingresar a la carpeta del Informe Final PE5:

```bash
cd PE5_Informe_Final
```

Compilar el documento mediante:

```bash
latexmk -xelatex -interaction=nonstopmode main.tex
```

Al finalizar correctamente la compilación se generará:

`main.pdf`

El contenido de `main.pdf` corresponde al Informe Final PE5 publicado también como:

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

## Limpieza de archivos auxiliares

Para eliminar archivos auxiliares generados durante la compilación:

```bash
latexmk -c
```

Para realizar una limpieza completa:

```bash
latexmk -C
```

## Estructura necesaria para la compilación

La carpeta debe conservar la siguiente estructura:

```text
PE5_Informe_Final/
│
├── README.md
├── main.tex
├── references.bib
├── PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf
│
└── figuras/
    ├── casos_uso_10_pe5.png
    └── dfd_nivel1_pe5.png
```

No deben modificarse los nombres ni las rutas de las figuras sin actualizar también las referencias incluidas en `main.tex`.

## Bibliografía

Las referencias utilizadas por el informe se encuentran en:

`references.bib`

El proceso de compilación mediante `latexmk` gestiona las pasadas necesarias para resolver referencias, citas y elementos auxiliares del documento.

## Figuras

Las figuras requeridas por el documento se encuentran en:

`figuras/`

Archivos incluidos:

- `figuras/casos_uso_10_pe5.png`
- `figuras/dfd_nivel1_pe5.png`

Estas imágenes son utilizadas directamente por `main.tex` y deben permanecer disponibles en las rutas indicadas.

## Dependencias LaTeX

El documento utiliza los siguientes paquetes principales:

- geometry
- newtxtext
- newtxmath
- babel
- graphicx
- booktabs
- longtable
- tabularx
- pdflscape
- float
- hyperref
- microtype
- cite
- fancyhdr
- setspace
- titlesec
- caption
- lastpage

Las dependencias se encuentran disponibles en distribuciones TeX completas como TeX Live o MiKTeX.

## Verificación de reproducibilidad

La versión final del informe fue preparada para que pueda reproducirse utilizando únicamente los archivos incluidos en esta carpeta.

La comprobación consiste en:

1. Clonar el repositorio.
2. Entrar en `PE5_Informe_Final/`.
3. Ejecutar:

```bash
latexmk -xelatex -interaction=nonstopmode main.tex
```

4. Verificar que se genere correctamente `main.pdf`.
5. Comprobar que no existan errores de compilación que impidan producir el PDF.

## Correspondencia con el PDF entregado

El archivo generado desde:

`main.tex`

corresponde al Informe Final PE5 del proyecto SICST.

PDF oficial:

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

## Repositorio

Repositorio oficial del proyecto:

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A

## Nota de reproducibilidad G2

Los archivos fuente, bibliografía y figuras necesarios para regenerar el Informe Final PE5 se encuentran incluidos en esta carpeta.

El procedimiento de compilación, compilador utilizado, archivo principal, dependencias y comandos necesarios se documentan explícitamente para permitir la reproducción del PDF a partir de una clonación limpia del repositorio.
## Material de defensa

Los materiales utilizados para la defensa final de PE5 se encuentran en:

`Defensa/`

Archivos disponibles:

- `Defensa/Defensa_PE5_SICST_FINAL.pptx`
- `Defensa/Defensa_PE5_SICST_FINAL.pdf`

La presentación corresponde al Informe Final PE5 disponible en esta misma carpeta.
