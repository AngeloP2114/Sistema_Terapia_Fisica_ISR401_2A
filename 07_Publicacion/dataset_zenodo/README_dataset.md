# Dataset anonimizado SICST

## Descripción

Paquete de datos preparado para la publicación académica del **Sistema Inteligente de Control y Seguimiento de Terapia Física (SICST)**. El paquete contiene datos del cuestionario sin nombres ni marcas temporales, requisitos priorizados, matriz de trazabilidad, catálogo anonimizado de transcripciones y scripts reproducibles.

## Contenido

- `respuestas_cuestionario_anonimizadas.csv`: 31 respuestas de tres perfiles.
- `resumen_perfiles.csv`: distribución de 20 pacientes o expacientes, 8 familiares o cuidadores y 3 fisioterapeutas.
- `diccionario_datos.csv`: descripción de variables.
- `requisitos_priorizados.csv`: 32 requisitos funcionales con MoSCoW, Kano y WSJF.
- `matriz_trazabilidad.csv`: trazabilidad extendida de RF, RNF y restricciones.
- `catalogo_transcripciones_anonimizado.csv`: metadatos de transcripciones; los textos completos permanecen en zona restringida.
- `figura_distribucion_perfiles.png`: figura reproducible.
- `scripts_analisis/`: código para regenerar resúmenes.
- `LICENSE.txt`: licencia CC BY 4.0 para el material anonimizado.
- `CITATION.cff`: forma recomendada de citación.

## Privacidad

No se incluyen nombres, cédulas, teléfonos, firmas, rostros, voces ni consentimientos. Los originales identificables permanecen en el contenedor restringido del proyecto. Los códigos de participantes se conservan únicamente para trazabilidad académica.

## Reproducción

```bash
pip install -r scripts_analisis/requirements.txt
python scripts_analisis/analisis_cuestionario.py
```

## Repositorio

https://github.com/AngeloP2114/Sistema_Terapia_Fisica_ISR401_2A
