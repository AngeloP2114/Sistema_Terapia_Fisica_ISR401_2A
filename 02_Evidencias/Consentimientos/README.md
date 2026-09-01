# Consentimientos informados — SICST

Esta carpeta contiene las **copias públicas y enmascaradas de los consentimientos informados** correspondientes a las actividades de levantamiento y validación realizadas para el proyecto:

**Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**

Los archivos se identifican mediante códigos de participante para evitar utilizar nombres propios en la estructura pública del repositorio.

---

## Protección de datos

Los documentos almacenados en esta carpeta corresponden únicamente a la **versión pública de los consentimientos**.

Antes de su publicación deben encontrarse protegidos o enmascarados los datos identificables, especialmente:

- número de cédula;
- firma manuscrita;
- nombres completos cuando permitan identificar directamente al participante;
- teléfonos;
- direcciones;
- correos electrónicos;
- cualquier otro dato personal identificable.

Los consentimientos originales sin censura no se publican en esta carpeta.

Los originales se conservan dentro de la zona restringida:

`../00_Restringido/evidencias_restringidas.7z`

La contraseña del contenedor cifrado no debe almacenarse en el repositorio público.

---

## Convención de códigos

Los participantes se identifican mediante códigos seudonimizados.

### PAC — Paciente o ex paciente

Ejemplo:

`EV2-PAC-01`

El prefijo `PAC` identifica participantes correspondientes al perfil de **paciente o ex paciente relacionado con terapia física o rehabilitación**.

Ejemplos presentes en esta carpeta:

- `EV2-PAC-01`
- `EV2-PAC-03`
- `EV2-PAC-04`
- ...
- `EV2-PAC-16`

### TEC — Usuario técnico

Ejemplo:

`WALK-TEC-02`

El prefijo `TEC` se utiliza para participantes clasificados como **usuarios técnicos** dentro de las sesiones de validación walkthrough.

Un usuario técnico corresponde a una persona cuyo perfil permite realizar una revisión del sistema desde una perspectiva técnica o especializada y que participa en una sesión identificada como walkthrough técnico.

Los consentimientos correspondientes se almacenan en esta carpeta, mientras que las actas de la sesión se almacenan en:

`../Validacion_Walkthrough/`

### NTEC — Usuario no técnico

Ejemplo:

`WALK-NTEC-01`

El prefijo `NTEC` se utiliza para participantes clasificados como **usuarios no técnicos** dentro de las sesiones de validación walkthrough.

Un usuario no técnico participa en la validación desde la perspectiva de uso, comprensión, necesidades y funcionamiento esperado del sistema, sin que la sesión se clasifique como una revisión técnica.

Al igual que con los participantes técnicos, el consentimiento se conserva en esta carpeta y el acta correspondiente se encuentra en:

`../Validacion_Walkthrough/`

---

## Diferencia entre TEC y NTEC

La clasificación se utiliza principalmente para organizar las sesiones de validación.

| Código | Perfil | Finalidad dentro del walkthrough |
|---|---|---|
| `PAC` | Paciente o ex paciente | Aporta necesidades y experiencia relacionada con el seguimiento de terapia física. |
| `TEC` | Usuario técnico | Participa en una validación clasificada como técnica. |
| `NTEC` | Usuario no técnico | Participa en una validación clasificada como no técnica y orientada al uso/comprensión del sistema. |

Esta clasificación permite distinguir los perfiles utilizados en las evidencias sin publicar el nombre real de las personas participantes.

---

## Estado actual de los consentimientos públicos

Al momento de esta versión del repositorio se encuentran documentados **18 participantes distintos**:

- **15 participantes PAC**
- **1 participante NTEC**
- **2 participantes TEC**

Los códigos públicos actualmente disponibles son:

### PAC

- `EV2-PAC-01`
- `EV2-PAC-03`
- `EV2-PAC-04`
- `EV2-PAC-05`
- `EV2-PAC-06`
- `EV2-PAC-07`
- `EV2-PAC-08`
- `EV2-PAC-09`
- `EV2-PAC-10`
- `EV2-PAC-11`
- `EV2-PAC-12`
- `EV2-PAC-13`
- `EV2-PAC-14`
- `EV2-PAC-15`
- `EV2-PAC-16`

### NTEC

- `WALK-NTEC-01`

### TEC

- `WALK-TEC-02`
- `WALK-TEC-03`

---

## Relación con las evidencias de validación

Esta carpeta almacena únicamente los **consentimientos públicos enmascarados**.

Las actas correspondientes a las sesiones walkthrough deben almacenarse separadamente en:

`../Validacion_Walkthrough/`

Por ejemplo:

- consentimiento: `Consentimientos/WALK-TEC-02_Consentimiento_Firmado.jpg`
- acta: `Validacion_Walkthrough/WALK-TEC-02_Acta_Walkthrough_Parte1.jpeg`

Esta separación evita mezclar documentos de autorización con evidencias de ejecución de la técnica.

---

## Verificación

Para verificar las evidencias:

1. Confirmar que cada consentimiento público utiliza un código de participante.
2. Comprobar visualmente que los datos identificables estén enmascarados.
3. Verificar que el consentimiento original correspondiente se encuentre en la zona restringida.
4. Contrastar los códigos `WALK-TEC` y `WALK-NTEC` con sus respectivas actas en `Validacion_Walkthrough/`.
5. No publicar versiones originales que contengan firmas, cédulas u otros identificadores directos.

---

## Proyecto

**Proyecto:** Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)  
**Entrega:** Proyecto Fin de Curso — Entrega 4 (2B / Defensa Final)  
**Asignatura:** Ingeniería de Requerimientos
