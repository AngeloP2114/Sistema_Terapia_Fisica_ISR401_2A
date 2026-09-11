import pandas as pd
import matplotlib.pyplot as plt

# Cargar archivo de saturación
df = pd.read_csv("saturacion.csv")

# Crear curva de saturación
plt.figure(figsize=(10, 5))

plt.plot(
    df["orden"],
    df["temas_acumulados"],
    marker="o"
)

plt.xticks(
    df["orden"],
    df["participante"],
    rotation=90
)

plt.xlabel("Entrevista")
plt.ylabel("Temas acumulados")
plt.title("Curva de saturación temática — SICST")

plt.tight_layout()

plt.savefig(
    "curva_saturacion.png",
    dpi=300,
    bbox_inches="tight"
)

plt.close()

print("Curva generada correctamente.")
