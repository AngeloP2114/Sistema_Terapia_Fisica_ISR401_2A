# Instrumentos del experimento SICST

## Objetivo

Definir los instrumentos utilizados para evaluar la calidad de los requisitos funcionales del Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST).

## Instrumentos utilizados

### 1. Dataset de requisitos

Archivo:

datos/requisitos_sicst.csv


Contiene los requisitos funcionales extraídos del documento ERS/SRS del SICST.

La unidad de análisis está conformada por los requisitos funcionales RF-01 hasta RF-33.

---

### 2. Matriz de evaluación experta

Archivo:

datos/evaluacion_experta.csv


Contiene la evaluación individual de cada requisito según criterios de calidad.

---

### 3. Rúbrica de evaluación

Archivo:

rubrica_evaluacion_requisitos.md


Define los criterios utilizados:

- Claridad.
- Completitud.
- Verificabilidad.
- Trazabilidad.
- Consistencia.

Cada criterio utiliza una escala binaria:

- 1 = Cumple.
- 0 = No cumple.

---

## Procedimiento de aplicación

1. Se identificaron los requisitos funcionales del ERS/SRS SICST.
2. Cada requisito fue evaluado mediante la rúbrica definida.
3. Los resultados fueron almacenados en formato CSV.
4. Los datos fueron procesados mediante scripts Python.
