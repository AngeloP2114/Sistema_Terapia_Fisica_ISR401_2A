# Consentimientos informados — SICST

Esta carpeta contiene las **copias públicas y enmascaradas de los consentimientos informados** correspondientes a las actividades de levantamiento y validación realizadas para el proyecto:

**Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**

Los archivos se identifican mediante códigos de participante para evitar utilizar nombres propios dentro de la estructura pública del repositorio.

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

---

## PAC — Paciente o ex paciente

Ejemplo:

`EV2-PAC-01`

El prefijo `PAC` identifica participantes correspondientes al perfil de paciente o ex paciente relacionado con terapia física o rehabilitación.

Participantes presentes:

- `EV2-PAC-01`
- `EV2-PAC-03`
- `EV2-PAC-04`
- `EV2-PAC-05`
- `EV2-PAC-06`
- `EV2-PAC-07`
- `EV2-PAC-08`
- `EV2-PAC-09`

---

## EFT — Estudiante de fisioterapia

Ejemplo:

`EFT-01`

El prefijo `EFT` identifica participantes correspondientes a estudiantes de fisioterapia que aportaron información relacionada con seguimiento, ejecución y necesidades del proceso terapéutico.

Participantes presentes:

- `EFT-01`
- `EFT-02`
- `EFT-03`

---

## FAM — Familiar o cuidador

Ejemplo:

`FAM-01`

El prefijo `FAM` identifica participantes familiares o cuidadores relacionados con el acompañamiento del paciente durante el proceso de terapia física.

Participantes presentes:

- `FAM-01`
- `FAM-02`
- `FAM-03`
- `FAM-04`

---

## FIS — Profesional de fisioterapia

Ejemplo:

`FIS-01`

El prefijo `FIS` identifica al profesional de fisioterapia participante en la investigación.

Participante presente:

- `FIS-01`

---

## NTEC — Usuario no técnico

Ejemplo:

`WALK-NTEC-01`

El prefijo `NTEC` se utiliza para participantes clasificados como usuarios no técnicos dentro de las sesiones de validación walkthrough.

Un usuario no técnico participa en la validación desde la perspectiva de uso, comprensión, necesidades y funcionamiento esperado del sistema.

Participante presente:

- `WALK-NTEC-01`

---

## TEC — Usuario técnico

Ejemplo:

`WALK-TEC-01`

El prefijo `TEC` se utiliza para participantes clasificados como usuarios técnicos dentro de las sesiones de validación walkthrough.

Un usuario técnico corresponde a una persona cuyo perfil permite realizar una revisión del sistema desde una perspectiva técnica o especializada.

Participante presente:

- `WALK-TEC-01`

---

## Diferencia entre perfiles

| Código | Perfil | Finalidad |
|---|---|---|
| PAC | Paciente o ex paciente | Aporta necesidades y experiencia relacionada con el seguimiento de terapia física. |
| EFT | Estudiante de fisioterapia | Aporta perspectiva académica y del proceso terapéutico. |
| FAM | Familiar o cuidador | Aporta necesidades relacionadas con acompañamiento y apoyo. |
| FIS | Profesional de fisioterapia | Aporta validación clínica y profesional. |
| TEC | Usuario técnico | Participa en validaciones desde una perspectiva técnica. |
| NTEC | Usuario no técnico | Participa en validaciones orientadas al uso y comprensión del sistema. |

---

## Estado actual de los consentimientos públicos

Actualmente se encuentran documentados **18 participantes distintos**:

- **8 participantes PAC**
- **3 participantes EFT**
- **4 participantes FAM**
- **1 participante FIS**
- **1 participante NTEC**
- **1 participante TEC**

Los códigos públicos disponibles son:

### PAC

- `EV2-PAC-01`
- `EV2-PAC-03`
- `EV2-PAC-04`
- `EV2-PAC-05`
- `EV2-PAC-06`
- `EV2-PAC-07`
- `EV2-PAC-08`
- `EV2-PAC-09`

### EFT

- `EFT-01`
- `EFT-02`
- `EFT-03`

### FAM

- `FAM-01`
- `FAM-02`
- `FAM-03`
- `FAM-04`

### FIS

- `FIS-01`

### NTEC

- `WALK-NTEC-01`

### TEC

- `WALK-TEC-01`

---

## Relación con las evidencias de validación

Esta carpeta almacena únicamente los consentimientos públicos enmascarados.

Las actas correspondientes a las sesiones walkthrough se almacenan separadamente en:

`../Validacion_Walkthrough/`

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
