import csv, pathlib
BASE=pathlib.Path(__file__).resolve().parents[1]
MATRIX=BASE/'04_Trazabilidad_PE5'/'matriz_trazabilidad_PE5.csv'
BACKLOG=BASE/'04_Trazabilidad_PE5'/'product_backlog_HU_BDD_CP.csv'
RNF=BASE/'04_Trazabilidad_PE5'/'catalogo_RNF_15_PE5.csv'
AI=BASE/'08_IA_PE5'/'requisitos_IA_PE5.csv'

def read(p):
    with open(p,encoding='utf-8-sig',newline='') as f: return list(csv.DictReader(f))
mat=read(MATRIX); hu=read(BACKLOG); rnfs=read(RNF); ai=read(AI)
# Attributes are auditable from explicit source files. RF attributes: backlog + RF metadata incorporated in the matrix; RNF attributes: catalogs.
rf_complete=sum(1 for r in hu if all(r[k].strip() for k in ['RF_ID','Prioridad','Fuente']) and all(r[k].strip() for k in ['Dado','Cuando','Entonces']))
rnf_complete=sum(1 for r in rnfs if all(r[k].strip() for k in ['ID','Prioridad','Fuente','Metrica_Umbral','Metodo_Verificacion','BDD']))
ai_complete=sum(1 for r in ai if all(r[k].strip() for k in ['ID','Prioridad','Fuente','Metrica_Umbral','Metodo_Verificacion','BDD']))
total=len(hu)+len(rnfs)+len(ai)
print(f'M1a (proxy auditable de atributos obligatorios): {(rf_complete+rnf_complete+ai_complete)/total*100:.2f}% ({rf_complete+rnf_complete+ai_complete}/{total})')
# M1b after CU-09 and CU-10 are integrated into ERS.
cu=set()
for r in mat:
    for part in r['Caso_Uso'].replace(' a ',' / ').split('/'):
        part=part.strip()
        if part.startswith('CU-') and len(part)<=5: cu.add(part)
print(f'CU explícitos en matriz: {sorted(cu)}')
# M3
bdd_ok=sum(1 for r in mat if r['BDD'].strip())
print(f'M3 verificabilidad por presencia de BDD: {bdd_ok/len(mat)*100:.2f}% ({bdd_ok}/{len(mat)})')
# M4 forward fields
fields=['Fuente','Caso_Uso','Clase_UML','Proceso_DFD','Estado','BDD','Caso_Prueba']
fwd=sum(1 for r in mat if all(r[k].strip() for k in fields))
back=sum(1 for r in mat if r['Fuente'].strip())
print(f'M4a cadena hacia adelante: {fwd/len(mat)*100:.2f}% ({fwd}/{len(mat)})')
print(f'M4b fuente hacia atrás: {back/len(mat)*100:.2f}% ({back}/{len(mat)})')
print('M2, M5 y M6 requieren revisión/ejecución humana de sus plantillas; el script no inventa esos resultados.')
