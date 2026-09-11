# Codificación temática — SICST

Esta carpeta contiene el análisis cualitativo realizado sobre las entrevistas del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

La codificación temática permite identificar patrones, necesidades recurrentes, problemas del proceso actual de terapia física y elementos relevantes para la definición, validación y trazabilidad de requisitos del sistema.

---

# Objetivo

El objetivo del análisis cualitativo es identificar temas recurrentes relacionados con:

- seguimiento del proceso terapéutico;
- comunicación entre pacientes y profesionales;
- cumplimiento de ejercicios asignados;
- registro y consulta de información relacionada con la terapia;
- dificultades actuales del proceso de rehabilitación;
- necesidades esperadas en una solución tecnológica de apoyo.

Los resultados obtenidos sirven como evidencia para establecer la relación entre las necesidades identificadas durante el trabajo de campo y los requisitos definidos para el sistema SICST.

---

# Corpus de entrevistas

Para el análisis cualitativo principal se considera el corpus final conformado por **19 entrevistas anonimizadas**.

La distribución del corpus es la siguiente:

## Pacientes o expacientes de terapia física

- EV2-PAC-01
- EV2-PAC-03
- EV2-PAC-04
- EV2-PAC-05
- EV2-PAC-06
- EV2-PAC-07
- EV2-PAC-08
- EV2-PAC-09

## Estudiantes de fisioterapia

- EFT-01
- EFT-02
- EFT-03

## Familiares o cuidadores

- FAM-01
- FAM-02
- FAM-03
- FAM-04

## Profesional de fisioterapia

- FIS-01

Adicionalmente, se utilizaron dos sesiones walkthrough como evidencia complementaria de validación:

- WALK-NTEC-01
- WALK-TEC-01

Estas sesiones no se contabilizan como entrevistas independientes dentro del análisis de saturación cualitativa, sino como evidencia adicional para validar la percepción del sistema desde perfiles técnicos y no técnicos.

---

# Método de codificación

La codificación temática fue realizada mediante categorías y subtemas derivados directamente de las transcripciones disponibles del corpus cualitativo.

Cada código se registra mediante presencia o ausencia del subtema:

- **1:** existe evidencia suficiente del subtema dentro de la entrevista.
- **0:** no se identificó evidencia suficiente relacionada con el subtema.

Un valor igual a 0 no representa desacuerdo del participante, sino ausencia de evidencia suficiente para asignar dicho subtema.

---

# Artefactos de análisis

Esta carpeta contiene los siguientes artefactos utilizados durante el análisis cualitativo.

## Libro de códigos

Archivo:

libro_codigos.csv

Contiene la definición de categorías, códigos y subtemas utilizados durante la codificación.

---

## Matriz de codificación

Archivo:

matriz_codificacion.csv

Contiene la relación entre las entrevistas analizadas y los subtemas identificados durante el proceso de codificación.

---

## Análisis de saturación

Archivos:

- saturacion.csv
- curva_saturacion.png
- generar_curva_saturacion.py

Estos artefactos permiten documentar la evolución de aparición de nuevos temas durante el análisis del corpus y generar la representación gráfica correspondiente.

---

## Triangulación

Archivo:

triangulacion.md

Documenta la comparación entre las diferentes fuentes de evidencia:

- entrevistas;
- walkthrough;
- necesidades identificadas;
- requisitos derivados.

---

# Reproducibilidad

Los datos procesados y scripts utilizados para generar resultados derivados se documentan adicionalmente en:

07_Datos/

Cualquier modificación realizada sobre las transcripciones debe reflejarse posteriormente en:

- matriz de codificación;
- análisis de saturación;
- triangulación;
- resultados del manuscrito científico.

---

# Integridad del análisis

El análisis cualitativo utiliza únicamente las evidencias disponibles dentro del corpus definido para el proyecto SICST.

No se agregan:

- participantes inexistentes;
- entrevistas no realizadas;
- respuestas no disponibles;
- resultados que no puedan ser generados mediante los artefactos correspondientes.

Los cambios realizados sobre la composición del corpus deben mantenerse sincronizados entre:

- transcripciones;
- codificación temática;
- análisis de saturación;
- documentos de publicación.

---

# Relación con otras evidencias

La codificación temática se complementa con:

- transcripciones de entrevistas;
- consentimientos informados;
- fichas técnicas de entrevistas;
- evidencias audiovisuales;
- doble codificación independiente;
- trazabilidad de requisitos.

La doble codificación independiente y el cálculo del acuerdo entre codificadores se encuentran en:

10_Autoria/doble_codificacion/

Estos artefactos permiten mantener la trazabilidad, transparencia y reproducibilidad del análisis realizado para el desarrollo del SICST.
