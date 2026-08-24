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

`01_ERS/ERS_SRS_SICST_PE5_FINAL.pdf`

La carpeta `01_ERS/` contiene además la versión editable del documento.

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

`04_Trazabilidad/`

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
```

Para eliminar los archivos auxiliares generados durante la compilación:

```bash
latexmk -c
```

### Dependencias

Se requiere una distribución TeX compatible con **XeLaTeX** y la herramienta **latexmk**.

Entre los principales paquetes utilizados se encuentran:

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

### Bibliografía

El archivo bibliográfico utilizado por el informe es:

`PE5_Informe_Final/references.bib`

### Figuras requeridas

Las figuras utilizadas por `main.tex` se encuentran en:

`PE5_Informe_Final/figuras/`

Archivos principales:

- `figuras/casos_uso_10_pe5.png`
- `figuras/dfd_nivel1_pe5.png`

---

## Resultados de auditoría PE5

La línea base final del proyecto contiene:

- **33 requisitos funcionales (RF)**
- **15 requisitos no funcionales generales (RNF)**
- **10 requisitos no funcionales específicos de IA (RNF-IA)**
- **15 restricciones de diseño**
- **10 casos de uso**
- **33 historias de usuario**
- **33 escenarios BDD**
- **33 casos de prueba asociados a los RF**
- **58 trazas documentales totales**

Resultados de las métricas de calidad:

- **M1 — Completitud:** 100 %
- **M2 — Consistencia:** 1,00 — 0/10 conflictos abiertos
- **M3 — Verificabilidad:** 58/58 = 100 %
- **M4 — Trazabilidad:** 33/33 = 100 % hacia adelante y 100 % hacia atrás
- **M5 — Modificabilidad:** 13/5 = 2,60
- **M6 — Corrección:** 0/58 = 0,000 defectos residuales por requisito

---

## Requisitos de Inteligencia Artificial

El proyecto especifica dos componentes de IA:

### IA-01 — Análisis de movimiento

Componente destinado al análisis de la ejecución de ejercicios terapéuticos mediante información visual autorizada.

La especificación contempla requisitos de:

- rendimiento;
- latencia;
- precisión;
- equidad;
- explicabilidad;
- privacidad;
- consentimiento;
- supervisión humana;
- fallback;
- monitoreo.

### IA-02 — Priorización de alertas y recomendaciones

Componente destinado al apoyo en la priorización de alertas y recomendaciones de seguimiento.

La salida del componente es de apoyo y no sustituye la decisión profesional del fisioterapeuta.

La especificación contempla:

- precision y recall;
- latencia;
- equidad;
- explicabilidad;
- advertencia no diagnóstica;
- control humano;
- monitoreo.

---

## Estructura principal del repositorio

- `01_ERS/` — ERS/SRS final consolidado.
- `02_Evidencias/` — evidencias públicas, anonimizadas y restringidas.
- `03_Modelado/` — diagramas UML, DFD y mockups.
- `04_Trazabilidad/` — matriz de trazabilidad y priorización.
- `05_MVP/` — Producto Mínimo Viable del sistema.
- `06_Experimento/` — protocolo, instrumentos, ejecución controlada, datos y scripts de análisis.
- `07_Publicacion/` — artefactos asociados a publicación académica.
- `PE5_Informe_Final/` — Informe Final PE5 y código fuente LaTeX reproducible.

---

## Ejecución controlada de explicabilidad

El ejercicio de explicabilidad incluido en PE5 corresponde a una **simulación controlada con datos sintéticos**.

Los archivos de esta ejecución se mantienen separados de las evidencias obtenidas mediante trabajo de campo.

La simulación se utiliza exclusivamente para ejercitar y reproducir el protocolo de evaluación de explicabilidad y no constituye validación clínica ni evidencia empírica con participantes reales.

---

## Privacidad y ética

El proyecto aplica principios de:

- consentimiento informado;
- minimización de datos;
- anonimización;
- control de acceso;
- confidencialidad;
- cifrado de evidencias identificables;
- trazabilidad;
- supervisión profesional.

Los archivos originales que contienen firmas, voces, rostros u otra información identificable no deben mantenerse públicamente accesibles sin protección.

---

## Licencia

El código fuente del MVP se publica bajo licencia MIT.

Los documentos y artefactos académicos públicos se distribuyen respetando las condiciones correspondientes de propiedad intelectual, privacidad y consentimiento informado.

---

## Repositorio oficial

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
