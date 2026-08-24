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

## Entregables principales PE5

### 1. ERS/SRS final

El ERS/SRS consolidado del proyecto se encuentra en:

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.pdf`

La carpeta `01_ERS/` contiene además la versión editable del documento y el material fuente en LaTeX.

Versión editable:

`01_ERS/ERS_SRS_SICST_PE5_FINAL1.docx`

Archivo fuente principal:

`01_ERS/main.tex`

Recursos requeridos para compilación:

`01_ERS/assets/`

---

### 2. Informe Final PE5

PDF final:

`PE5_Informe_Final/PE5_U5_PFC_Final_MORAN_CONTRERAS_VITERI_ZAMBRANO.pdf`

Archivo fuente principal:

`PE5_Informe_Final/main.tex`

Bibliografía:

`PE5_Informe_Final/references.bib`

Figuras requeridas para la compilación:

`PE5_Informe_Final/figuras/`

---

### 3. Matriz de trazabilidad final

La matriz final PE5 se encuentra en:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

La cadena principal utilizada para la auditoría es:

**Fuente → RF/RNF → CU → Clase UML → Estado → BDD → CP**

La matriz final contiene 58 trazas correspondientes a requisitos funcionales, requisitos no funcionales generales y requisitos específicos de IA.

---

### 4. Evidencias

Las evidencias del trabajo de campo se organizan en:

`02_Evidencias/`

Las evidencias originales que contienen datos identificables se almacenan dentro del contenedor cifrado:

`02_Evidencias/00_Restringido/evidencias_restringidas.7z`

El contenedor utiliza cifrado **AES-256**.

Su integridad puede comprobarse mediante:

`02_Evidencias/00_Restringido/checksum_evidencias_restringidas.sha256`

La contraseña del contenedor no se publica en el repositorio y se entrega únicamente al docente mediante el medio institucional correspondiente.

Las evidencias que permanecen públicamente accesibles deben estar anonimizadas, enmascaradas o libres de información personal identificable.

---

## Reproducción del Informe Final PE5

El Informe Final PE5 fue generado desde LaTeX y puede reproducirse a partir de los archivos incluidos en este repositorio.

### Compilador

**XeLaTeX**

### Archivo principal

`PE5_Informe_Final/main.tex`

### Comando de compilación

Desde la raíz del repositorio ejecutar:

```bash
cd PE5_Informe_Final
latexmk -xelatex -interaction=nonstopmode main.tex
