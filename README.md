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

El ERS/SRS consolidado del proyecto se encuentra en:

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.pdf`

La carpeta `01_ERS/` contiene además la versión editable y los archivos fuente utilizados para generar el documento.

### Versión editable

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.docx`

### Archivo fuente principal

`01_ERS/main.tex`

### Recursos gráficos

`01_ERS/assets/`

### Compilación del ERS/SRS

El ERS/SRS utiliza **pdfLaTeX**.

Desde la carpeta `01_ERS/` puede compilarse mediante:

```bash
pdflatex main.tex
pdflatex main.tex
```

Las dos pasadas permiten resolver correctamente referencias internas, numeración y elementos auxiliares del documento.

---

## 2. Informe Final PE5

El Informe Final de la Práctica Experimental Unidad V se encuentra en:

`PE5_Informe_Final/`

### PDF final

`PE5_Informe_Final/PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

### Archivo fuente principal

`PE5_Informe_Final/main.tex`

### Bibliografía

`PE5_Informe_Final/references.bib`

### Figuras necesarias

`PE5_Informe_Final/figuras/`

### Compilador

El Informe Final PE5 utiliza:

**XeLaTeX**

Se recomienda utilizar `latexmk` para administrar automáticamente las pasadas necesarias.

---

## 3. Matriz de trazabilidad final

La matriz de trazabilidad oficial de la línea base PE5 se encuentra en:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

Esta constituye la **fuente canónica de trazabilidad** del repositorio.

La cadena principal utilizada para la auditoría es:

**Fuente → RF/RNF → CU → Clase UML → Estado → BDD → CP**

La matriz final contiene **58 trazas** correspondientes a:

- requisitos funcionales;
- requisitos no funcionales generales;
- requisitos no funcionales específicos de IA.

La priorización complementaria se encuentra en:

`04_Trazabilidad/priorizacion_moscow_kano.csv`

---

## 4. Modelado

Los artefactos gráficos y de modelado del sistema se encuentran en:

`03_Modelado/`

### Diagramas

`03_Modelado/Diagramas/`

Esta carpeta contiene los diagramas utilizados para representar el sistema, entre ellos:

- diagrama de contexto;
- modelos de dependencia y justificación estratégica;
- diagrama de casos de uso;
- diagramas de secuencia;
- diagramas de actividad;
- diagrama de estados;
- diagrama de clases;
- diagrama de componentes;
- diagrama de despliegue;
- DFD de nivel 1.

### Mockups

`03_Modelado/Mockups/`

Los mockups representan las interfaces principales de SICST, incluyendo:

- inicio de sesión;
- recuperación de contraseña;
- dashboard del fisioterapeuta;
- registro del paciente;
- evaluación inicial;
- catálogo de ejercicios;
- asignación de rutinas;
- panel del paciente;
- ejecución mediante cámara e IA;
- retroalimentación y reportes.

---

## 5. Producto Mínimo Viable

El prototipo funcional del sistema se encuentra en:

`05_MVP/`

El MVP está compuesto por dos aplicaciones web.

### Aplicación del fisioterapeuta

`05_MVP/SICST_Fisioterapeuta_APP/`

Archivos principales:

- `index.html`
- `css/`
- `js/`
- `Fisioterapeuta.mp4`
- `README.md`

### Aplicación del paciente

`05_MVP/SICST_Paciente_APP/`

Archivos principales:

- `index.html`
- `css/`
- `js/`
- `Paciente.mp4`
- `README.md`

Las aplicaciones pueden revisarse directamente abriendo su archivo `index.html` en un navegador compatible o mediante Live Server.

---

## 6. Experimento y métricas PE5

Los artefactos correspondientes al ejercicio controlado de explicabilidad y a las métricas PE5 se encuentran en:

`06_Experimento/`

### Resultados de la simulación controlada

`06_Experimento/resultados/`

Archivos:

- `ronda1.csv`
- `ronda2.csv`
- `README.md`

Los datos de estas dos rondas corresponden a una **simulación controlada con datos sintéticos**.

No representan participantes reales ni constituyen validación clínica.

### Script reproducible

`06_Experimento/scripts_analisis/analizar_explicabilidad.py`

El script procesa:

- `resultados/ronda1.csv`
- `resultados/ronda2.csv`

### Métricas PE5

Los archivos utilizados para documentar las métricas se encuentran en:

`06_Experimento/Metricas_PE5/`

Incluyen:

- `auditoria_metricas_PE5.csv`
- `auditoria_consistencia_pares.csv`
- `impacto_modificabilidad.csv`
- `reinspeccion_fagan.csv`
- `calcular_metricas.py`

### Resultados consolidados

- **M1 — Completitud:** 100 %
- **M2 — Consistencia:** 1,00; 0/10 conflictos abiertos
- **M3 — Verificabilidad:** 58/58 = 100 %
- **M4 — Trazabilidad:** 33/33 = 100 % hacia adelante y hacia atrás
- **M5 — Modificabilidad:** 13/5 = 2,60
- **M6 — Corrección:** 0/58 = 0,000 defectos residuales por requisito

---

## 7. Publicación académica

Los materiales de preparación para publicación se encuentran en:

`07_Publicacion/`

Incluyen:

- `manuscrito_borrador.pdf`
- `analisis_revistas.md`
- `dataset_zenodo/`

La carpeta:

`07_Publicacion/dataset_zenodo/`

contiene un paquete anonimizado preparado para un eventual depósito académico.

Este directorio representa una **preparación para depósito** y no implica por sí mismo que exista un DOI o una publicación efectiva en Zenodo.

La matriz incluida dentro del paquete de publicación es una copia sincronizada de:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

La fuente oficial de trazabilidad continúa siendo la ubicada en `04_Trazabilidad/`.

---

## 8. Material de defensa

La presentación final se encuentra en:

`PE5_Informe_Final/Defensa/`

Archivos:

- `PE5_Informe_Final/Defensa/Defensa_PE5_SICST_FINAL.pptx`
- `PE5_Informe_Final/Defensa/Defensa_PE5_SICST_FINAL.pdf`

El archivo `.pptx` corresponde a la versión editable de la presentación y el `.pdf` a la versión preparada para revisión y defensa.

---

## 9. Evidencias

Las evidencias del trabajo de campo se organizan en:

`02_Evidencias/`

Las evidencias originales que contienen datos identificables se almacenan dentro del contenedor cifrado:

`02_Evidencias/00_Restringido/evidencias_restringidas.7z`

El contenedor utiliza cifrado **AES-256**.

Su integridad puede comprobarse mediante:

`02_Evidencias/00_Restringido/checksum_evidencias_restringidas.sha256`

La contraseña del contenedor **no se publica en el repositorio** y debe entregarse únicamente al docente mediante el medio institucional correspondiente.

Las evidencias que permanezcan públicamente accesibles deben encontrarse anonimizadas, enmascaradas o libres de información personal identificable.

---

# Reproducción del Informe Final PE5

El Informe Final PE5 fue generado desde LaTeX y puede reproducirse utilizando los archivos incluidos en el repositorio.

## Compilador

**XeLaTeX**

## Archivo principal

`PE5_Informe_Final/main.tex`

## Clonar el repositorio

```bash
git clone https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A.git
```

Ingresar al repositorio:

```bash
cd Sistema_Terapia_Fisica_ISR401_2A
```

Ingresar a la carpeta del Informe Final:

```bash
cd PE5_Informe_Final
```

## Comando recomendado

```bash
latexmk -xelatex -interaction=nonstopmode main.tex
```

Al terminar correctamente se generará:

`main.pdf`

El contenido generado corresponde al Informe Final publicado también como:

`PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

---

# Dependencias del Informe Final

Para reproducir el documento se requiere una distribución TeX compatible, por ejemplo:

- TeX Live;
- MiKTeX.

Herramientas necesarias:

- XeLaTeX;
- latexmk.

El documento utiliza principalmente los siguientes paquetes:

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

También son necesarios:

`PE5_Informe_Final/references.bib`

y:

`PE5_Informe_Final/figuras/`

---

# Limpieza de archivos auxiliares

Desde `PE5_Informe_Final/`:

```bash
latexmk -c
```

Para realizar una limpieza completa:

```bash
latexmk -C
```

---

# Estructura principal del repositorio

```text
Sistema_Terapia_Fisica_ISR401_2A/
│
├── 01_ERS/
│   ├── ERS_SRS_SICST_PE5_FINAL1.pdf
│   ├── ERS_SRS_SICST_PE5_FINAL1.docx
│   ├── main.tex
│   └── assets/
│
├── 02_Evidencias/
│   └── 00_Restringido/
│       ├── evidencias_restringidas.7z
│       └── checksum_evidencias_restringidas.sha256
│
├── 03_Modelado/
│   ├── Diagramas/
│   └── Mockups/
│
├── 04_Trazabilidad/
│   ├── Matriz_Trazabilidad_Final_PE5_Rubrica.csv
│   ├── priorizacion_moscow_kano.csv
│   └── README.md
│
├── 05_MVP/
│   ├── SICST_Fisioterapeuta_APP/
│   ├── SICST_Paciente_APP/
│   └── README.md
│
├── 06_Experimento/
│   ├── Metricas_PE5/
│   ├── instrumentos/
│   ├── prompts_llm/
│   ├── resultados/
│   ├── scripts_analisis/
│   ├── protocolo.pdf
│   └── README.md
│
├── 07_Publicacion/
│   ├── dataset_zenodo/
│   ├── analisis_revistas.md
│   ├── manuscrito_borrador.pdf
│   └── README.md
│
├── PE5_Informe_Final/
│   ├── Aportes/
│   ├── Defensa/
│   ├── figuras/
│   ├── main.tex
│   ├── references.bib
│   ├── PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf
│   └── README.md
│
├── CHANGELOG.md
├── CITATION.cff
├── LICENSE
├── README.md
├── .gitignore
└── .gitattributes
```

---

# Línea base PE5

La línea base final del proyecto integra:

- ERS/SRS consolidado;
- requisitos funcionales y no funcionales;
- requisitos específicos de IA;
- modelado UML y DFD;
- mockups;
- historias de usuario;
- criterios BDD;
- casos de prueba;
- matriz de trazabilidad;
- inspección Fagan;
- métricas M1–M6;
- MVP;
- ejercicio controlado de explicabilidad;
- preparación de publicación;
- Informe Final PE5;
- presentación de defensa.

Para evitar contradicciones entre versiones, se consideran fuentes canónicas:

**ERS/SRS final**

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.pdf`

**Informe Final PE5**

`PE5_Informe_Final/PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

**Matriz de trazabilidad PE5**

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

---

# Consideraciones sobre Inteligencia Artificial

El proyecto contempla componentes de Inteligencia Artificial asociados al análisis de movimiento y a la generación o priorización de alertas y recomendaciones.

Las funcionalidades de IA se plantean bajo criterios de:

- explicabilidad;
- supervisión humana;
- consentimiento;
- privacidad;
- equidad;
- rendimiento;
- seguridad;
- trazabilidad.

Las salidas generadas por componentes inteligentes no deben interpretarse como diagnóstico médico automático ni sustituir la decisión profesional del fisioterapeuta.

---

# Privacidad y protección de datos

El repositorio aplica separación entre material público y material restringido.

No deben publicarse de forma abierta:

- nombres completos de participantes;
- números de cédula;
- números telefónicos;
- firmas;
- rostros identificables;
- voces identificables;
- diagnósticos sensibles vinculados a una persona;
- consentimientos sin anonimización.

Los originales que requieran conservación se mantienen mediante el mecanismo restringido definido para el proyecto.

---

# Licencia

La licencia general del repositorio se encuentra en:

`LICENSE`

Los materiales específicos de publicación o datasets pueden incluir condiciones de licencia adicionales dentro de sus respectivas carpetas.

---

# Repositorio oficial

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
