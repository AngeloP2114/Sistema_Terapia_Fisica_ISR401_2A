# SICST — Sistema Inteligente de Control y Seguimiento de Terapia Física

Repositorio de la **Entrega Final 2B** del Proyecto Integrador de la asignatura **Ingeniería de Requerimientos — ISR-401**.

**Universidad:** Universidad Técnica Estatal de Quevedo  
**Carrera:** Ingeniería de Software  
**Asignatura:** Ingeniería de Requerimientos ISR-401  
**Periodo académico:** 2026–2027  
**Versión documental:** 2.0 — Entrega Final 2B  

## Integrantes

- Morán Pilaguano Frixon Fernando
- Contreras Chávez Kevin Germán
- Viteri García Jonathan Enrique
- Zambrano Moya Angelo Paul

---

# Descripción del proyecto

El **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)** es un prototipo académico orientado a apoyar el seguimiento de pacientes que realizan parte de sus rutinas terapéuticas fuera del centro de rehabilitación.

El proyecto integra actividades de:

- ingeniería de requisitos;
- elicitación y validación;
- evidencia de trabajo de campo;
- modelado UML;
- trazabilidad;
- producto mínimo viable;
- experimentación;
- preparación de publicación académica;
- privacidad y gestión ética;
- defensa final.

SICST se plantea como una herramienta de apoyo y no sustituye la valoración, diagnóstico ni decisión del profesional de salud.

---

# Línea base vigente

La línea base vigente del repositorio corresponde a:

**Entrega Final 2B — versión 2.0**

La carpeta `PE5_Informe_Final/` se conserva únicamente como **antecedente histórico** correspondiente a la Práctica Experimental 5.

Los documentos, simulaciones, métricas y materiales almacenados en PE5 no sustituyen los artefactos finales requeridos para la Entrega Final 2B.

---

# Estructura principal

Sistema_Terapia_Fisica_ISR401_2A/
│
├── 01_ERS/
├── 02_Evidencias/
├── 03_Modelado/
├── 04_Trazabilidad/
├── 05_MVP/
├── 06_Experimento/
├── 07_Publicacion/
├── 08_Etica/
├── Defensa/
├── PE5_Informe_Final/
│
├── CHANGELOG.md
├── CITATION.cff
├── LICENSE
├── README.md
├── .gitignore
└── .gitattributes

La carpeta `Defensa/` será organizada como `09_Defensa/` en la línea base final cuando se complete la normalización de la estructura.

---

# 1. ERS / SRS — Entrega Final 2B

La especificación vigente del proyecto se encuentra en:

01_ERS/
├── ERS_SRS_2B_v2.0.pdf
├── ERS_SRS_2B_v2.0.tex
├── referencias.bib
├── assets/
└── README.md

## Archivo PDF evaluable

`01_ERS/ERS_SRS_2B_v2.0.pdf`

## Fuente LaTeX

`01_ERS/ERS_SRS_2B_v2.0.tex`

## Bibliografía

`01_ERS/referencias.bib`

## Recursos gráficos

`01_ERS/assets/`

## Compilación del ERS/SRS

El documento debe compilarse utilizando **XeLaTeX**.

Desde la carpeta `01_ERS/` ejecutar:

    xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
    xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex

La segunda compilación permite estabilizar referencias y elementos internos del documento.

---

# 2. Evidencias del trabajo de campo

Las evidencias se encuentran organizadas en:

`02_Evidencias/`

La estructura contempla:

02_Evidencias/
├── 00_Restringido/
├── Codificacion_Tematica/
├── Consentimientos/
├── Cuestionario/
├── Documentos_Organizacion/
├── Fotos_Aplicacion/
├── Fotos_Entorno/
├── Member_Checking/
├── Respuestas/
├── Transcripciones/
├── Validacion_Walkthrough/
├── fichas_tecnicas.csv
└── README.md

Las evidencias incluyen:

- consentimientos informados;
- cuestionario de necesidades;
- respuestas del cuestionario;
- fotografías de contexto;
- fotografías de aplicación;
- documentos utilizados en el contexto de terapia física;
- sesiones walkthrough;
- Member Checking;
- transcripciones;
- análisis cualitativo;
- archivos multimedia.

---

## Evidencia multimedia

El inventario técnico de la evidencia multimedia se encuentra en:

`02_Evidencias/fichas_tecnicas.csv`

El inventario actual contiene:

- **31 videos**
- **16 audios**
- **47 archivos multimedia**
- **282,82 minutos de material multimedia**

Cada registro contiene información como:

- nombre del archivo;
- tipo;
- ruta relativa;
- duración;
- formato;
- códec;
- tamaño;
- hash SHA-256.

La ficha permite verificar la integridad de los archivos sin necesidad de publicar directamente el contenido sensible.

---

# 3. Evidencia restringida

Los materiales originales que pueden contener información identificable se mantienen separados de la evidencia pública.

Ubicación:

`02_Evidencias/00_Restringido/`

Entre estos materiales pueden encontrarse:

- grabaciones originales;
- audios;
- consentimientos completos;
- fotografías identificables;
- actas originales;
- grabaciones de walkthrough;
- evidencia relacionada con Member Checking.

La contraseña o mecanismo de acceso a la evidencia restringida no se publica en el repositorio.

---

# 4. Privacidad

No deben publicarse abiertamente datos que permitan identificar directamente a los participantes.

Esto incluye:

- números de cédula;
- teléfonos;
- correos electrónicos;
- direcciones;
- firmas;
- voces identificables;
- rostros identificables;
- diagnósticos asociados directamente a una persona;
- cualquier otro dato personal sensible.

Las versiones públicas utilizan códigos de participante y mecanismos de anonimización cuando corresponde.

---

# 5. Trazabilidad

Los artefactos de trazabilidad se encuentran en:

`04_Trazabilidad/`

Actualmente esta carpeta conserva la matriz consolidada utilizada durante PE5 y los artefactos de priorización relacionados.

La matriz histórica visible corresponde a:

`04_Trazabilidad/Matriz_Trazabilidad_Final_PE5_Rubrica.csv`

Esta versión contiene **58 trazas documentales** y se conserva como antecedente verificable.

La matriz definitiva de la Entrega Final 2B debe actualizarse y verificarse antes de ser declarada como línea base final.

No se presentan como cerradas trazas que todavía no hayan sido comprobadas contra sus artefactos correspondientes.

La trazabilidad final busca relacionar progresivamente elementos como:

**Fuente / Norma → Objetivo → Stakeholder → Evidencia → Requisito → Caso de Uso → Historia de Usuario → BDD → UML → Proceso → Componente → Mockup → Caso de Prueba**

La priorización complementaria se encuentra en:

`04_Trazabilidad/priorizacion_moscow_kano.csv`

Los datos históricos provenientes de etapas anteriores se mantienen identificados como tales para evitar reinterpretarlos como nuevas mediciones de la Entrega Final 2B.

---

# 6. Modelado

Los modelos del sistema se encuentran en:

`03_Modelado/`

Los artefactos disponibles incluyen modelos relacionados con:

- contexto;
- i* SD/SR;
- casos de uso;
- secuencia;
- actividad;
- estados;
- clases;
- componentes;
- despliegue;
- procesos;
- DFD;
- mockups.

Estos artefactos representan distintos puntos de vista del comportamiento, estructura y arquitectura del SICST.

---

# 7. Producto Mínimo Viable

El prototipo del sistema se encuentra en:

`05_MVP/`

El MVP contiene los componentes desarrollados para representar las funcionalidades principales del SICST.

Las aplicaciones desarrolladas se encuentran dentro de la estructura de `05_MVP/`.

Las funciones mostradas durante la evaluación deben corresponder únicamente a características que realmente se encuentren implementadas.

La presencia de un requisito, mockup o caso de uso no implica automáticamente que dicha función se encuentre implementada en el MVP.

---

# 8. Experimento — Entrega Final 2B

El material experimental se encuentra en:

`06_Experimento/`

La carpeta conserva tanto artefactos históricos de PE5 como material de preparación para el experimento correspondiente a la Entrega Final 2B.

Para la Entrega Final 2B, el enfoque experimental asignado al SICST consiste en:

**Comparar requisitos funcionales obtenidos mediante elicitación humana con requisitos funcionales generados mediante un modelo de lenguaje, utilizando como entrada las mismas transcripciones anonimizadas.**

La evaluación contempla criterios como:

- completitud;
- ausencia de ambigüedad;
- verificabilidad;
- corrección de la fuente;
- consistencia interna;
- trazabilidad;
- acuerdo entre evaluadores.

Los ejercicios sintéticos realizados durante PE5 se conservan únicamente como antecedentes metodológicos.

No se presentan como resultados empíricos obtenidos de participantes reales.

Los artefactos experimentales deben mantenerse organizados en elementos como:

- protocolo;
- instrumentos;
- prompts utilizados;
- datos de entrada;
- datos procesados;
- resultados;
- scripts de análisis;
- documentación de reproducibilidad.

---

# 9. Antecedente histórico PE5

La carpeta:

`PE5_Informe_Final/`

contiene el cierre correspondiente a la Práctica Experimental 5.

Incluye:

- informe PE5;
- fuente LaTeX;
- bibliografía;
- figuras;
- métricas;
- simulaciones controladas;
- presentación utilizada durante esa etapa.

Este material se conserva para mantener trazabilidad histórica del desarrollo del proyecto.

No constituye por sí solo la Entrega Final 2B.

Los resultados de simulaciones sintéticas de PE5 no deben interpretarse como evidencia empírica humana correspondiente al experimento final.

---

# 10. Publicación académica

La preparación para publicación académica se encuentra en:

`07_Publicacion/`

Actualmente esta carpeta contiene:

- `manuscrito_borrador.pdf`
- `analisis_revistas.md`
- `dataset_zenodo/`
- `README.md`

El manuscrito se mantiene identificado como borrador mientras no exista una versión definitiva.

La publicación académica final deberá conservar coherencia con la evidencia, metodología y resultados realmente disponibles en el proyecto.

---

## Dataset preparado para depósito

La carpeta:

`07_Publicacion/dataset_zenodo/`

contiene material preparado para un eventual depósito académico.

Puede incluir:

- metadatos;
- licencia;
- archivos anonimizados;
- diccionario de datos;
- matriz;
- archivos de citación;
- README del dataset.

La existencia de esta carpeta **no significa que exista actualmente un DOI publicado en Zenodo**.

El DOI deberá incorporarse únicamente cuando se haya realizado un depósito real y definitivo.

De igual manera, identificadores como OSF o SWHID únicamente deben registrarse cuando existan realmente.

---

# 11. Ética

La documentación ética se encuentra en:

`08_Etica/`

La carpeta contiene documentos preparados para el proceso institucional relacionado con el proyecto.

Actualmente se incluyen documentos relacionados con:

- protocolo de investigación;
- instrumentos de recolección;
- consentimiento informado;
- plan de gestión de datos;
- documentación de aval;
- declaraciones de conflicto de intereses;
- análisis de riesgos;
- cronograma;
- registros relacionados con ética.

Los documentos disponibles corresponden al material preparado para el proceso institucional.

Las aprobaciones, avales o resoluciones que todavía no hayan sido emitidas oficialmente **no se presentan como aprobadas**.

Las versiones definitivas serán incorporadas conservando su fecha real de emisión.

Esta distinción permite mantener transparencia entre documentos preparados, documentos enviados y documentos oficialmente aprobados.

---

# 12. Defensa

Los materiales disponibles actualmente se encuentran en:

`Defensa/`

La carpeta contiene:

- presentación en PDF;
- presentación editable;
- `guion.pdf`;
- `folleto_una_hoja.pdf`;
- README de la defensa.

El video de defensa se incorporará únicamente cuando exista una grabación real.

Para la línea base final se recomienda normalizar esta carpeta como:

`09_Defensa/`

---

# 13. Inteligencia Artificial

SICST contempla componentes inteligentes orientados al apoyo del seguimiento terapéutico.

Entre ellos se documentan:

1. análisis de movimiento mediante visión por computadora;
2. priorización de alertas y recomendaciones.

Los requisitos asociados consideran aspectos como:

- rendimiento;
- privacidad;
- equidad;
- explicabilidad;
- supervisión humana;
- monitoreo;
- manejo de fallos.

Las salidas del sistema no se presentan como diagnóstico médico ni sustituyen la evaluación del fisioterapeuta.

---

# 14. Reproducibilidad

Los artefactos reproducibles deben incluir instrucciones dentro de sus respectivos README.

## Reproducción del ERS

Ingresar a:

`01_ERS/`

y ejecutar:

    xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex
    xelatex -interaction=nonstopmode -halt-on-error ERS_SRS_2B_v2.0.tex

El resultado esperado es:

`ERS_SRS_2B_v2.0.pdf`

## Verificación SHA-256

En PowerShell puede utilizarse:

    Get-FileHash -Algorithm SHA256 "ruta\archivo"

El resultado puede compararse con los valores almacenados en:

`02_Evidencias/fichas_tecnicas.csv`

Esto permite comprobar que un archivo no haya sido modificado respecto al archivo inventariado.

---

# 15. Integridad del repositorio

Los hashes generales del repositorio deben generarse únicamente después de congelar la línea base definitiva.

No deben mantenerse checksums antiguos después de modificar archivos.

El archivo esperado para la línea base final es:

`checksums.sha256`

Este archivo debe generarse al final del proceso de preparación y antes de crear la versión definitiva del repositorio.

---

# 16. Citación

La información de citación del proyecto se encuentra en:

`CITATION.cff`

Este archivo debe mantenerse sincronizado con la versión vigente del proyecto.

La versión correspondiente a la línea base final será:

**2.0**

Los identificadores persistentes como:

- DOI de Zenodo;
- SWHID;
- identificadores OSF;

solo deben incorporarse cuando hayan sido generados realmente.

No deben utilizarse valores ficticios, provisionales o de ejemplo como si fueran definitivos.

---

# 17. Licencia

La licencia general del repositorio se encuentra en:

`LICENSE`

La licencia aplicada al código fuente no implica autorización automática para redistribuir evidencia sensible o identificable.

Los datasets, documentos o materiales específicos pueden incluir condiciones adicionales dentro de sus respectivas carpetas.

El material restringido no debe redistribuirse públicamente.

---

# 18. Control de versiones

Las modificaciones relevantes del proyecto se documentan en:

`CHANGELOG.md`

La línea base definitiva de la Entrega Final 2B se identificará mediante una versión estable una vez completada la revisión del repositorio.

La etiqueta recomendada para la línea base final es:

`v2.0`

La etiqueta debe crearse únicamente después de finalizar:

- revisión de los artefactos;
- revisión de privacidad;
- actualización de README;
- actualización de CITATION.cff;
- actualización de CHANGELOG.md;
- generación de checksums;
- verificación final de la estructura.

---

# 19. Estado de la Entrega Final

**Proyecto:** Sistema Inteligente de Control y Seguimiento de Terapia Física — SICST  
**Entrega:** Final 2B  
**Versión:** 2.0  
**Estado:** integración y cierre documental del paquete académico.

Los artefactos pendientes de aprobación institucional o de ejecución real se identifican expresamente como pendientes y no se presentan como completados.

---

# Repositorio oficial

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
