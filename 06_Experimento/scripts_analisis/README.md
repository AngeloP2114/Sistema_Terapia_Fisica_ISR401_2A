# Scripts de análisis — SICST PE5

Esta carpeta contiene el script reproducible para analizar la simulación controlada de explicabilidad del PE5.

## Script principal

`analizar_explicabilidad.py`

El script lee:

- `../resultados/ronda1.csv`
- `../resultados/ronda2.csv`

y calcula la media global y los indicadores seleccionados de claridad, comprensión, control y satisfacción.

## Ejecución

Desde la carpeta `06_Experimento/`:

```bash
python scripts_analisis/analizar_explicabilidad.py
```

El script utiliza únicamente módulos de la biblioteca estándar de Python, por lo que no requiere instalar dependencias externas.

## Nota

Los archivos `ronda1.csv` y `ronda2.csv` corresponden a una simulación controlada con datos sintéticos. No representan participantes reales ni una validación clínica.
