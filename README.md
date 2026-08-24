# SICST — Sistema Inteligente de Control y Seguimiento de Terapia Física

Repositorio final del Proyecto Integrador de Ingeniería de Requisitos — PE5.

**Universidad:** Universidad Técnica Estatal de Quevedo  
**Carrera:** Ingeniería de Software  
**Asignatura:** Ingeniería de Requerimientos ISR-401  
**Periodo académico:** 2026–2027  

## Integrantes

- Morán Pilaguano Frixon Fernando
- Contreras Chávez Kevin Germán
- Viteri García Jonathan Enrique
- Zambrano Moya Angelo Paul

---

# Entregables principales PE5

## 1. ERS/SRS final

PDF consolidado:

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.pdf`

Versión editable:

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.docx`

Fuente LaTeX principal:

`01_ERS/main.tex`

Recursos:

`01_ERS/assets/`

### Compilación del ERS/SRS

El ERS/SRS utiliza **pdfLaTeX**.

```bash
cd 01_ERS
pdflatex main.tex
pdflatex main.tex
```

---

## 2. Informe Final PE5

PDF final:

`PE5_Informe_Final/PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

Fuente principal:

`PE5_Informe_Final/main.tex`

Bibliografía complementaria:

`PE5_Informe_Final/references.bib`

Figuras requeridas:

`PE5_Informe_Final/figuras/`

Material de defensa:

`PE5_Informe_Final/Defensa/`

---

## 3. Matriz de trazabilidad final

La fuente canónica de trazabilidad de la línea base PE5 es:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

La matriz contiene **58 trazas** y utiliza la cadena:

**Fuente → RF/RNF → CU → Clase UML → Estado → BDD → CP**

Como campos complementarios mantiene Proceso DFD, Historia de Usuario, Prioridad y Estado de la Traza.

La línea base contiene:

- 33 RF;
- 15 RNF generales;
- 10 RNF específicos de IA;
- 58 trazas totales.

La priorización complementaria se encuentra en:

`04_Trazabilidad/priorizacion_moscow_kano.csv`

En ese archivo, `MoSCoW_PE5` refleja la prioridad vigente de la matriz final. Las columnas terminadas en `_2A` preservan la evaluación histórica de Kano/valor/WSJF y no se presentan como una nueva medición PE5.

---

## 4. Modelado

Artefactos:

`03_Modelado/`

Incluye:

- contexto;
- i* SD/SR;
- casos de uso;
- secuencia;
- actividad;
- estados;
- clases;
- componentes;
- despliegue;
- DFD nivel 1;
- mockups.

---

## 5. MVP

El prototipo se encuentra en:

`05_MVP/`

Aplicaciones:

- `05_MVP/SICST_Fisioterapeuta_APP/`
- `05_MVP/SICST_Paciente_APP/`

Cada aplicación contiene código fuente web (`index.html`, `css/`, `js/`) y material de demostración.

---

## 6. Experimento y métricas PE5

Carpeta:

`06_Experimento/`

Los archivos `resultados/ronda1.csv` y `resultados/ronda2.csv` corresponden a una **simulación controlada con datos sintéticos** para ejercitar el protocolo de explicabilidad.

No representan participantes reales ni constituyen validación clínica.

Script de explicabilidad:

`06_Experimento/scripts_analisis/analizar_explicabilidad.py`

Artefactos de métricas:

`06_Experimento/Metricas_PE5/`

Archivos principales:

- `auditoria_metricas_PE5.csv`
- `auditoria_consistencia_pares.csv`
- `impacto_modificabilidad.csv`
- `reinspeccion_fagan.csv`
- `calcular_metricas.py`

### Reproducción de métricas

Desde la raíz del repositorio:

```bash
python 06_Experimento/Metricas_PE5/calcular_metricas.py
```

Resultados esperados:

- M1a: 58/58 = 100 %
- M1b: 10/10 = 100 %
- M1c: 4/4 = 100 %
- M2: 1 - 0/10 = 1,00
- M3: 58/58 = 100 %
- M4a: 33/33 = 100 %
- M4b: 33/33 = 100 %
- M5: 13/5 = 2,60
- M6: 0/58 = 0,000

---

## 7. Publicación académica

Carpeta:

`07_Publicacion/`

Incluye:

- `manuscrito_borrador.pdf`
- `analisis_revistas.md`
- `dataset_zenodo/`

`dataset_zenodo/` representa una **preparación para depósito académico**. No implica por sí mismo la existencia de un DOI ni una publicación efectiva en Zenodo.

---

## 8. Defensa

Archivos:

- `PE5_Informe_Final/Defensa/Defensa_PE5_SICST_FINAL.pptx`
- `PE5_Informe_Final/Defensa/Defensa_PE5_SICST_FINAL.pdf`

---

## 9. Evidencias

Las evidencias se organizan en:

`02_Evidencias/`

Los originales identificables se mantienen en el contenedor cifrado:

`02_Evidencias/00_Restringido/evidencias_restringidas.7z`

La contraseña no se publica en GitHub y se entrega por el medio institucional correspondiente.

> La revisión final de privacidad, anonimización, historial y checksums de `02_Evidencias/` se realiza antes de congelar la línea base definitiva.

---

# Reproducción del Informe Final PE5 — G2

## Compilador

**XeLaTeX**

## Archivo principal

`PE5_Informe_Final/main.tex`

## Clonación

```bash
git clone https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A.git
cd Sistema_Terapia_Fisica_ISR401_2A
cd PE5_Informe_Final
```

## Comando exacto

```bash
latexmk -xelatex -interaction=nonstopmode main.tex
```

El comando debe generar:

`main.pdf`

El contenido de `main.pdf` corresponde al informe publicado como:

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

## Limpieza

```bash
latexmk -c
```

Limpieza completa:

```bash
latexmk -C
```

---

# Dependencias del Informe Final

Se requiere una distribución TeX completa compatible con XeLaTeX, como TeX Live o MiKTeX, y `latexmk`.

Paquetes principales utilizados por `PE5_Informe_Final/main.tex`:

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

Además deben conservarse:

- `PE5_Informe_Final/figuras/`
- `PE5_Informe_Final/references.bib`

La bibliografía utilizada en el PDF se encuentra declarada en `main.tex`; `references.bib` se conserva como archivo bibliográfico complementario y sincronizado.

---

# Estructura principal

```text
Sistema_Terapia_Fisica_ISR401_2A/
│
├── 01_ERS/
├── 02_Evidencias/
├── 03_Modelado/
├── 04_Trazabilidad/
├── 05_MVP/
├── 06_Experimento/
├── 07_Publicacion/
├── PE5_Informe_Final/
│   ├── Aportes/
│   ├── Defensa/
│   ├── figuras/
│   ├── main.tex
│   ├── references.bib
│   ├── PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf
│   └── README.md
├── CHANGELOG.md
├── CITATION.cff
├── LICENSE
├── README.md
├── .gitignore
└── .gitattributes
```

---

# Fuentes canónicas de la línea base

**ERS/SRS final**

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.pdf`

**Informe Final PE5**

`PE5_Informe_Final/PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

**Matriz final**

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

---

# Inteligencia Artificial

El SICST documenta dos componentes de IA:

1. análisis de movimiento por visión por computadora;
2. priorización de alertas y recomendaciones.

La especificación incorpora rendimiento, equidad, explicabilidad, privacidad, supervisión humana, fallback y monitoreo.

Las salidas del sistema no se presentan como diagnóstico médico ni sustituyen la decisión profesional del fisioterapeuta.

---

# Privacidad

No deben publicarse abiertamente:

- nombres completos de participantes;
- cédulas;
- teléfonos;
- firmas;
- rostros identificables;
- voces identificables;
- diagnósticos vinculados a una persona;
- consentimientos sin anonimización.

Los originales sensibles deben mantenerse en el mecanismo restringido del proyecto.

---

# Licencia

La licencia general del repositorio se encuentra en:

`LICENSE`

Los datasets o materiales específicos pueden incluir condiciones adicionales dentro de sus propias carpetas.

---

# Repositorio oficial

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
