import csv
import matplotlib.pyplot as plt

orden = []
participantes = []
temas_acumulados = []

with open("saturacion.csv", "r", encoding="utf-8-sig") as archivo:
    lector = csv.DictReader(archivo)

    for fila in lector:
        orden.append(int(fila["orden"]))
        participantes.append(fila["participante"])
        temas_acumulados.append(int(fila["temas_acumulados"]))

plt.figure(figsize=(11, 6))

plt.plot(
    orden,
    temas_acumulados,
    marker="o",
    linewidth=2
)

plt.xticks(
    orden,
    participantes,
    rotation=45,
    ha="right"
)

plt.xlabel("Entrevistas analizadas")
plt.ylabel("Número acumulado de subtemas")
plt.title("Curva de saturación temática — SICST")

plt.grid(True, alpha=0.3)

plt.annotate(
    "Estabilización temática",
    xy=(9, 12),
    xytext=(6.5, 10.8),
    arrowprops=dict(arrowstyle="->")
)

plt.tight_layout()

plt.savefig(
    "curva_saturacion.png",
    dpi=300,
    bbox_inches="tight"
)

print("Curva generada: curva_saturacion.png")
