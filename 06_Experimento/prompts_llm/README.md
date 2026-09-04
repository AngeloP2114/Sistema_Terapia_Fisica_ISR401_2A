# Transparencia en el uso de modelos de lenguaje (LLM)

Esta carpeta contiene la documentación relacionada con el uso de modelos de
lenguaje durante el desarrollo y revisión del proyecto **Sistema Inteligente
de Control y Seguimiento de Terapia Física (SICST)**.

## Objetivo

Mantener trazabilidad y transparencia sobre las actividades del proyecto en
las que se utilizaron herramientas basadas en modelos de lenguaje.

El uso de LLM se limita a actividades de apoyo como revisión documental,
estructuración, redacción, auditoría del repositorio y preparación de material
técnico.

Los modelos de lenguaje no se utilizan para fabricar participantes,
entrevistas, consentimientos, evidencias de campo, aprobaciones institucionales
ni resultados experimentales.

## Contenido de la carpeta

- [`registro_prompts.md`](./registro_prompts.md): registro de los usos
  documentados de modelos de lenguaje, incluyendo fecha, herramienta,
  consigna utilizada, finalidad, uso de la salida y revisión humana.

## Parámetros técnicos

Cuando una herramienta no proporciona al usuario parámetros como temperatura,
top-p o semilla, estos se identifican como **"No disponible"** en lugar de
asignar valores supuestos.

## Experimento

Las ejecuciones de LLM que formen parte del experimento de comparación de
elicitación de requisitos se documentarán únicamente cuando sean realizadas
realmente.

Cuando corresponda, se conservarán el prompt exacto, la entrada anonimizada,
la salida obtenida, el modelo utilizado, la fecha de ejecución y la revisión
humana.

## Integridad

Toda información registrada en esta carpeta debe corresponder a actividades
realmente realizadas. No se incorporarán prompts, parámetros, resultados o
evidencias ficticias.
