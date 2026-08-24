# Informe Final PE5 — SICST

Esta carpeta contiene el Informe Final de la Práctica Experimental Unidad V (PE5) del proyecto:

**Sistema Inteligente de Control y Seguimiento de Terapia Física — SICST**

## Archivo principal

`main.tex`

## PDF oficial

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

## Compilador

**XeLaTeX**

Se recomienda `latexmk` para ejecutar automáticamente las pasadas necesarias.

## Compilación desde un clon limpio

```bash
git clone https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A.git
cd Sistema_Terapia_Fisica_ISR401_2A/PE5_Informe_Final
latexmk -xelatex -interaction=nonstopmode main.tex
```

Al finalizar se genera:

`main.pdf`

## Limpieza

```bash
latexmk -c
```

Limpieza completa:

```bash
latexmk -C
```

## Archivos necesarios

```text
PE5_Informe_Final/
├── README.md
├── main.tex
├── references.bib
├── PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf
├── figuras/
│   ├── casos_uso_10_pe5.png
│   └── dfd_nivel1_pe5.png
├── Defensa/
└── Aportes/
```

## Figuras utilizadas

- `figuras/casos_uso_10_pe5.png`
- `figuras/dfd_nivel1_pe5.png`

## Dependencias LaTeX

- geometry
- newtxtext
- newtxmath
- babel
- graphicx
- booktabs
- longtable
- array
- tabularx
- pdflscape
- float
- xcolor
- enumitem
- hyperref
- microtype
- cite
- fancyhdr
- setspace
- titlesec
- caption
- lastpage

## Bibliografía

La bibliografía que aparece en el PDF está declarada en `main.tex`.

`references.bib` se conserva como archivo bibliográfico complementario y sincronizado para facilitar mantenimiento y auditoría.

## Material de defensa

- `Defensa/Defensa_PE5_SICST_FINAL.pptx`
- `Defensa/Defensa_PE5_SICST_FINAL.pdf`

## Reproducibilidad G2

La verificación final debe realizarse desde una clonación limpia del repositorio ejecutando:

```bash
latexmk -xelatex -interaction=nonstopmode main.tex
```

El cierre definitivo de la línea base solo se realiza después de comprobar que el PDF se genera sin errores que impidan la compilación.

## Repositorio

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
