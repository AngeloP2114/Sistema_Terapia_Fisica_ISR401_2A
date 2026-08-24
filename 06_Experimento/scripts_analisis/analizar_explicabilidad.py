from __future__ import annotations
import csv
from pathlib import Path
from statistics import mean

BASE = Path(__file__).resolve().parent
QUESTIONS = [f"Q{i:02d}" for i in range(1, 12)]

def load(name: str) -> list[dict[str, str]]:
    with (BASE / name).open(encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))

def summarize(rows: list[dict[str, str]]) -> dict[str, float]:
    all_values = [int(r[q]) for r in rows for q in QUESTIONS]
    return {
        "media_global": mean(all_values),
        "Q02_claridad": mean(int(r["Q02"]) for r in rows),
        "Q07_comprension": mean(int(r["Q07"]) for r in rows),
        "Q10_control": mean(int(r["Q10"]) for r in rows),
        "Q11_satisfaccion": mean(int(r["Q11"]) for r in rows),
    }

if __name__ == "__main__":
    for fn in ("ronda1.csv", "ronda2.csv"):
        s = summarize(load(fn))
        print(fn)
        for key, value in s.items():
            print(f"  {key}: {value:.2f}")
