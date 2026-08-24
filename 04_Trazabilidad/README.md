# Trazabilidad y priorización — SICST PE5

Esta carpeta contiene los artefactos finales de trazabilidad y la priorización histórica controlada del proyecto **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**.

## Archivos principales

- `Matriz_Trazabilidad_Final_PE5_Rubrica.csv` — **fuente canónica** de trazabilidad de la línea base PE5.
- `priorizacion_moscow_kano.csv` — consolidación de priorización. La columna `MoSCoW_PE5` está sincronizada con la matriz final; las columnas `Kano_2A`, `Valor_Negocio_2A`, `Urgencia_2A`, `Riesgo_2A`, `Esfuerzo_2A` y `WSJF_2A` conservan la evaluación histórica realizada en 2A.

## Matriz de trazabilidad final

La matriz contiene **58 trazas documentales**:

- 33 requisitos funcionales;
- 15 requisitos no funcionales generales;
- 10 requisitos no funcionales específicos de IA.

La cadena principal de auditoría es:

**Fuente → RF/RNF → CU → Clase UML → Estado → BDD → CP**

Como campos complementarios se mantienen Proceso DFD, Historia de Usuario, Prioridad y Estado de la Traza.

## Huérfanos y cadenas rotas

La línea base PE5 registra las 58 trazas con estado `Completa`. Para los 33 RF, la sincronización backlog ↔ ERS es 33/33 y cada RF dispone de fuente, CU, clase, proceso DFD, estado, BDD y caso de prueba conceptual.

## Priorización

`priorizacion_moscow_kano.csv` evita mezclar decisiones históricas con la línea base actual:

- `MoSCoW_PE5` refleja la prioridad vigente en la matriz final.
- Los campos terminados en `_2A` son históricos y no se reinterpretan como una nueva medición PE5.
- RF-33 fue incorporado posteriormente mediante `RFC-01 / CCB PE4`; por integridad académica, sus valores históricos de Kano/WSJF se dejan vacíos en lugar de inventarlos.

## Fuente oficial

Para cualquier discrepancia de trazabilidad o prioridad vigente en PE5, prevalece:

`Matriz_Trazabilidad_Final_PE5_Rubrica.csv`
