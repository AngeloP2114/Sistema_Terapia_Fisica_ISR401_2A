# Experimento SICST - Evaluación de calidad de requisitos

## Descripción

Este directorio contiene los artefactos correspondientes al experimento realizado sobre el **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

El experimento tiene como finalidad evaluar la calidad documental de los requisitos funcionales definidos en el documento **ERS/SRS del SICST**, aplicando criterios de ingeniería de requisitos.

La evaluación busca determinar el nivel de cumplimiento de los requisitos respecto a características de calidad como claridad, completitud, verificabilidad, trazabilidad y consistencia.

---

# Objetivo del experimento

Evaluar la calidad de los requisitos funcionales del SICST mediante una rúbrica de evaluación basada en cinco criterios:

- Claridad.
- Completitud.
- Verificabilidad.
- Trazabilidad.
- Consistencia.

Los resultados obtenidos permiten identificar fortalezas y posibles oportunidades de mejora dentro de la especificación de requisitos del sistema.

---

# Unidad de análisis

La unidad de análisis está conformada por los requisitos funcionales definidos en la especificación de requisitos del SICST.

La muestra utilizada corresponde a los **33 requisitos funcionales identificados desde RF-01 hasta RF-33**, extraídos del documento ERS/SRS del sistema.

---

# Metodología del experimento

El experimento fue desarrollado mediante las siguientes etapas:

## 1. Extracción de requisitos

Los requisitos funcionales fueron recopilados desde el documento ERS/SRS del SICST.

Archivo utilizado:

```
datos_crudos/Requisitos_sicst.csv
```

Este archivo contiene la identificación y descripción de los requisitos funcionales evaluados.

---

## 2. Evaluación experta

Cada requisito fue evaluado mediante una rúbrica definida previamente.

Los criterios considerados fueron:

- **Claridad:** determina si el requisito presenta una redacción comprensible y sin ambigüedades.
- **Completitud:** evalúa si la información proporcionada permite comprender adecuadamente la funcionalidad.
- **Verificabilidad:** determina si el requisito puede ser comprobado mediante pruebas o criterios de aceptación.
- **Trazabilidad:** evalúa la relación del requisito con otros artefactos del proyecto.
- **Consistencia:** verifica que el requisito no presente contradicciones con otros elementos del sistema.

Archivo utilizado:

```
datos_crudos/evaluacion_experta.csv
```

---

## 3. Procesamiento de datos

Los datos obtenidos de la evaluación fueron procesados mediante scripts desarrollados en Python.

Ubicación:

```
scripts_analisis/
```

El análisis permite calcular métricas cuantitativas de cumplimiento para cada criterio evaluado.

---

## 4. Generación de resultados

Los resultados obtenidos mediante el procesamiento automático se almacenan en:

```
resultados/
```

Incluyen:

- Métricas de cumplimiento.
- Análisis interpretativo de resultados.
- Gráficas estadísticas generadas a partir de los datos evaluados.

---

# Resultados obtenidos

La evaluación permitió medir la calidad de los requisitos funcionales del SICST mediante indicadores cuantitativos.

Los resultados muestran el comportamiento de cada criterio evaluado, permitiendo identificar aspectos con mayor cumplimiento y aquellos que requieren mejoras dentro de la especificación.

Los archivos generados son:

```
resultados/metricas_resultados.csv
```

y

```
resultados/graficas/cumplimiento_requisitos.png
```

---

# Estructura del experimento

```
06_Experimento/

├── datos_crudos/
│   ├── README.md
│   ├── Requisitos_sicst.csv
│   └── evaluacion_experta.csv
│
├── instrumentos/
│   ├── README_instrumentos.md
│   └── rubrica_evaluacion_requisitos.md
│
├── scripts_analisis/
│   ├── analisis_experimento.py
│   └── requirements.txt
│
├── resultados/
│   ├── README.md
│   ├── metricas_resultados.csv
│   ├── analisis_resultados.md
│   └── graficas/
│       └── cumplimiento_requisitos.png
│
├── justificacion_muestra.md
├── protocolo_experimento.md
├── osf_registration.md
├── osf_deviations.md
└── referencias.bib
```

---

# Reproducibilidad

Para reproducir el análisis del experimento se requiere Python 3.x.

## Instalación de dependencias

Ejecutar:

```bash
pip install -r scripts_analisis/requirements.txt
```

## Ejecución del análisis

Ejecutar:

```bash
python scripts_analisis/analisis_experimento.py
```

## Resultados generados

Después de ejecutar el script, los archivos generados estarán disponibles en:

```
resultados/
```

---

# Documentación adicional

Los siguientes archivos contienen información complementaria del experimento:

- `justificacion_muestra.md`  
  Describe la selección de la unidad de análisis.

- `protocolo_experimento.md`  
  Define el procedimiento experimental aplicado.

- `osf_registration.md`  
  Contiene el registro del diseño experimental.

- `osf_deviations.md`  
  Documenta las adaptaciones realizadas durante el desarrollo del experimento.

- `referencias.bib`  
  Contiene referencias bibliográficas utilizadas como soporte metodológico.

---

# Conclusión

El experimento permitió evaluar cuantitativamente la calidad de la especificación de requisitos del SICST mediante criterios definidos de ingeniería de requisitos.

La metodología aplicada permite obtener resultados reproducibles, verificables y útiles para identificar oportunidades de mejora dentro del proceso de especificación del sistema.
