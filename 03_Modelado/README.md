# Modelado del sistema — SICST PE5

Esta carpeta contiene los artefactos de modelado del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)** correspondientes a la línea base PE5.

## Estructura

### Diagramas

Ubicación:

`03_Modelado/Diagramas/`

Esta carpeta contiene los diagramas finales del sistema con nombres descriptivos para facilitar su identificación y auditoría.

Se incluyen:

- Diagrama de contexto.
- Diagrama de Dependencia Estratégica (SD).
- Diagrama de Justificación Estratégica (SR).
- Diagrama de casos de uso PE5 con CU-01 a CU-10.
- Diagramas de secuencia.
- Diagramas de actividad.
- Diagrama de estados del tratamiento terapéutico.
- Diagrama de clases conceptual.
- Diagrama de componentes y arquitectura lógica.
- Diagrama de despliegue.
- DFD Nivel 1.

Los archivos se encuentran numerados del `01` al `15` para mantener un orden claro.

### Mockups

Ubicación:

`03_Modelado/Mockups/`

Esta carpeta contiene los mockups principales incluidos en el ERS/SRS final.

Los mockups utilizan identificadores:

`MU-01` a `MU-10`

e incluyen:

- Inicio de sesión.
- Recuperación de contraseña.
- Dashboard del fisioterapeuta.
- Registro de paciente.
- Evaluación inicial y signos vitales.
- Catálogo de ejercicios.
- Asignación de rutina terapéutica.
- Panel del paciente.
- Ejecución con cámara e IA.
- Retroalimentación, reporte y administración.

El archivo:

`03_Modelado/Mockups/MAPEO_RENOMBRADO.csv`

documenta la correspondencia entre las capturas históricas y los nombres canónicos utilizados en PE5.

El archivo:

`03_Modelado/Mockups/checksums.sha256`

permite verificar la integridad de los mockups publicados.

## Relación con requisitos

Los modelos y mockups se encuentran relacionados con los requisitos del ERS/SRS y con la matriz de trazabilidad PE5.

La cadena principal de auditoría utilizada en el proyecto es:

**Fuente → RF/RNF → CU → Clase UML → Estado → BDD → CP**

## Línea base

Los archivos contenidos en `Diagramas/` y los mockups `MU-01` a `MU-10` deben considerarse los artefactos de modelado correspondientes a la línea base PE5.
