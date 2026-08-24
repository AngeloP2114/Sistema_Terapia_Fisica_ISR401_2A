const Icons = {
  home:'<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M10 20v-6h4v6"/></svg>',
  patient:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg>',
  doctor:'<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/><path d="M12 14v5"/><path d="M9.5 16.5h5"/></svg>',
  activity:'<svg viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',
  chart:'<svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16V9"/><path d="M12 16V6"/><path d="M16 16v-4"/></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M6 9a6 6 0 0 1 12 0c0 7 3 6 3 8H3c0-2 3-1 3-8Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  alert:'<svg viewBox="0 0 24 24"><path d="M12 3 2 21h20Z"/><path d="M12 9v5"/><path d="M12 17h.01"/></svg>',
  file:'<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6Z"/><path d="M14 3v4h4"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  edit:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 15h10l1-15"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
  save:'<svg viewBox="0 0 24 24"><path d="M5 3h12l2 2v16H5Z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  refresh:'<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v6h-6"/></svg>',
  download:'<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9.5 12 1.8 1.8L15 10"/></svg>',
  camera:'<svg viewBox="0 0 24 24"><path d="M4 8h4l2-3h4l2 3h4v11H4Z"/><circle cx="12" cy="13.5" r="3"/></svg>',
  play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7Z"/></svg>',
  pause:'<svg viewBox="0 0 24 24"><path d="M8 5v14"/><path d="M16 5v14"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>',
  users:'<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.8"/><path d="M16 3.2a4 4 0 0 1 0 7.6"/></svg>',
  list:'<svg viewBox="0 0 24 24"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>',
  lock:'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
};
function renderIcons(){document.querySelectorAll('[data-icon]').forEach(e=>{const k=e.dataset.icon;if(Icons[k])e.innerHTML=Icons[k]})}
function toast(title,msg,type='ok'){
  const stack=document.querySelector('.toast-stack');
  const el=document.createElement('div');
  el.className='toast '+(type==='error'?'error':type==='warn'?'warn':'');
  el.innerHTML=`<span>${type==='error'?Icons.alert:type==='warn'?Icons.bell:Icons.check}</span><div><strong>${title}</strong><p>${msg}</p></div>`;
  stack.appendChild(el); setTimeout(()=>el.remove(),3600);
}
function uid(prefix){return `${prefix}-${Date.now()}-${Math.floor(Math.random()*999)}`}
function money(n){return '$'+Number(n||0).toFixed(2)}
function today(){return new Date().toLocaleString('es-EC')}
function drawBarChart(canvas, labels, values, color='#0b78c8'){
  const ctx=canvas.getContext('2d'), w=canvas.width=canvas.clientWidth, h=canvas.height=canvas.clientHeight;
  ctx.clearRect(0,0,w,h); const max=Math.max(...values,1), pad=32, gap=12, bw=(w-pad*2-gap*(values.length-1))/values.length;
  ctx.strokeStyle='#d7e8f7'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad,10); ctx.lineTo(pad,h-pad); ctx.lineTo(w-10,h-pad); ctx.stroke();
  values.forEach((v,i)=>{const x=pad+i*(bw+gap), bh=(h-pad-20)*(v/max); const y=h-pad-bh;
    const g=ctx.createLinearGradient(0,y,0,h-pad); g.addColorStop(0,color); g.addColorStop(1,'#14b8a6');
    ctx.fillStyle=g; ctx.beginPath(); ctx.roundRect(x,y,bw,bh,8); ctx.fill();
    ctx.fillStyle='#667085'; ctx.font='12px Inter'; ctx.textAlign='center'; ctx.fillText(labels[i],x+bw/2,h-10);
  });
}
function drawLineChart(canvas, labels, values, color='#0b78c8'){
  const ctx=canvas.getContext('2d'), w=canvas.width=canvas.clientWidth, h=canvas.height=canvas.clientHeight;
  ctx.clearRect(0,0,w,h); const max=Math.max(...values,10), pad=32;
  ctx.strokeStyle='#d7e8f7'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad,10); ctx.lineTo(pad,h-pad); ctx.lineTo(w-10,h-pad); ctx.stroke();
  const pts=values.map((v,i)=>[pad+i*((w-pad-20)/(Math.max(values.length-1,1))), h-pad-((h-pad-20)*(v/max))]);
  ctx.strokeStyle=color; ctx.lineWidth=3; ctx.beginPath(); pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1])); ctx.stroke();
  ctx.fillStyle=color; pts.forEach(p=>{ctx.beginPath();ctx.arc(p[0],p[1],5,0,Math.PI*2);ctx.fill()});
  ctx.fillStyle='#667085'; ctx.font='12px Inter'; ctx.textAlign='center'; labels.forEach((l,i)=>ctx.fillText(l,pts[i][0],h-10));
}
if(!CanvasRenderingContext2D.prototype.roundRect){CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h,r){this.moveTo(x+r,y);this.arcTo(x+w,y,x+w,y+h,r);this.arcTo(x+w,y+h,x,y+h,r);this.arcTo(x,y+h,x,y,r);this.arcTo(x,y,x+w,y,r);return this}}

const KEY='sicst_fisio_app_v2';
const titles={dashboard:'Dashboard',pacientes:'Pacientes',evaluacion:'Evaluación inicial',ejercicios:'Catálogo de ejercicios',rutinas:'Asignación de rutinas',seguimiento:'Seguimiento terapéutico',alertas:'Alertas',reportes:'Reportes',privacidad:'Privacidad y consentimientos'};
const demo={
  patients:[
    {id:'PAC-001',name:'María C.',age:62,reason:'Dolor lumbar',phone:'09xxxxxx01',status:'Activo',notes:'Requiere seguimiento en casa.',camera:true,share:true},
    {id:'PAC-002',name:'Luis V.',age:55,reason:'Lesión de rodilla',phone:'09xxxxxx02',status:'En revisión',notes:'Dolor moderado al flexionar.',camera:false,share:false},
    {id:'PAC-003',name:'Ana P.',age:48,reason:'Hombro congelado',phone:'09xxxxxx03',status:'Activo',notes:'Movilidad reducida.',camera:true,share:false}
  ],
  exercises:[
    {id:'EJ-001',name:'Elevación de pierna',zone:'Rodilla',type:'Fortalecimiento',guide:'Sentado, elevar la pierna lentamente y mantener 3 segundos.'},
    {id:'EJ-002',name:'Estiramiento lumbar',zone:'Lumbar',type:'Movilidad',guide:'Acostado, llevar rodillas al pecho sin dolor intenso.'},
    {id:'EJ-003',name:'Movilidad de hombro',zone:'Hombro',type:'Movilidad',guide:'Realizar movimiento circular suave, sin exceder dolor.'}
  ],
  evaluations:[],
  routines:[
    {id:'RUT-001',patientId:'PAC-001',exerciseId:'EJ-002',sets:3,reps:10,freq:'Diaria',priority:'Alta',notes:'Detener si dolor supera 7/10.'}
  ],
  sessions:[
    {id:'SES-001',patientId:'PAC-001',routineId:'RUT-001',pain:4,fatigue:3,status:'Completada',evidence:'Reporte verbal',notes:'Buena tolerancia.',date:'2026-07-19 09:00'},
    {id:'SES-002',patientId:'PAC-001',routineId:'RUT-001',pain:6,fatigue:5,status:'Completada con dificultad',evidence:'Foto autorizada',notes:'Cansancio al final.',date:'2026-07-19 17:00'},
    {id:'SES-003',patientId:'PAC-002',routineId:'RUT-001',pain:8,fatigue:7,status:'Requiere revisión',evidence:'Reporte verbal',notes:'Dolor elevado.',date:'2026-07-19 18:00'}
  ],
  alerts:[]
};
let db=load();
function load(){const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):structuredClone(demo)}
function save(){localStorage.setItem(KEY,JSON.stringify(db))}
function pName(id){return (db.patients.find(p=>p.id===id)||{}).name||'Paciente'}
function eName(id){return (db.exercises.find(e=>e.id===id)||{}).name||'Ejercicio'}
function rName(id){const r=db.routines.find(x=>x.id===id);return r?`${eName(r.exerciseId)} · ${pName(r.patientId)}`:'Rutina'}
function setView(v){document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));document.getElementById(v+'View').classList.add('active');document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===v));document.getElementById('pageTitle').textContent=titles[v]; if(v==='reportes') updateReports(); window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.getElementById('btnReset').onclick=()=>{if(confirm('Restaurar datos de demostración?')){db=structuredClone(demo);save();render();toast('Demo restaurada','Los datos volvieron al estado inicial.')}};
document.getElementById('btnExport').onclick=()=>downloadJSON('sicst_fisioterapeuta_datos.json',db);

function render(){
  renderIcons(); updateSelects(); renderStats(); renderPatients(); renderExercises(); renderEvaluations(); renderRoutines(); renderSessions(); autoAlerts(false); renderAlerts(); renderConsents(); updateReports();
}
function updateSelects(){
  const patientOpts='<option value="">Seleccione paciente...</option>'+db.patients.map(p=>`<option value="${p.id}">${p.id} - ${p.name}</option>`).join('');
  ['evalPatient','routinePatient','sessionPatient'].forEach(id=>document.getElementById(id).innerHTML=patientOpts);
  document.getElementById('reportPatient').innerHTML='<option value="Todos">Todos los pacientes</option>'+db.patients.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  document.getElementById('routineExercise').innerHTML='<option value="">Seleccione ejercicio...</option>'+db.exercises.map(e=>`<option value="${e.id}">${e.name}</option>`).join('');
  document.getElementById('sessionRoutine').innerHTML='<option value="">Seleccione rutina...</option>'+db.routines.map(r=>`<option value="${r.id}">${rName(r.id)}</option>`).join('');
}
function renderStats(){
  const stats=[
    ['Pacientes',db.patients.length,'patient'],
    ['Rutinas',db.routines.length,'list'],
    ['Sesiones',db.sessions.length,'activity'],
    ['Alertas',db.alerts.filter(a=>!a.reviewed).length,'alert']
  ];
  document.getElementById('statsGrid').innerHTML=stats.map(s=>`<article class="stat-card"><div><p>${s[0]}</p><strong>${s[1]}</strong></div><div class="stat-icon"><span data-icon="${s[2]}"></span></div></article>`).join('');
  renderIcons();
  drawBarChart(document.getElementById('sessionsChart'),['L','M','M','J','V','S','D'],[2,3,1,4,2,3,1],'#0b78c8');
  drawLineChart(document.getElementById('painChart'),db.sessions.slice(-6).map((_,i)=>String(i+1)),db.sessions.slice(-6).map(s=>s.pain),'#dc2626');
}
function renderPatients(){
  const q=document.getElementById('patientSearch').value.toLowerCase(), st=document.getElementById('patientStatusFilter').value;
  const rows=db.patients.filter(p=>(st==='Todos'||p.status===st) && (p.name.toLowerCase().includes(q)||p.id.toLowerCase().includes(q)||p.reason.toLowerCase().includes(q)));
  document.getElementById('patientGrid').innerHTML=rows.length?rows.map(p=>`<article class="info-card"><div class="card-menu"><button class="icon-btn" onclick="openPatient('${p.id}')"><span data-icon="edit"></span></button><button class="icon-btn danger" onclick="removeItem('patients','${p.id}')"><span data-icon="trash"></span></button></div><div class="art"><span data-icon="patient"></span></div><h3>${p.name}</h3><small><b>${p.id}</b> · ${p.age} años</small><small>${p.reason}</small><span class="state ${p.status==='Activo'?'ok':p.status==='En revisión'?'warn':'info'}">${p.status}</span></article>`).join(''):'<div class="empty">No hay pacientes registrados.</div>';
  renderIcons();
}
function renderExercises(){
  const q=document.getElementById('exerciseSearch').value.toLowerCase(), z=document.getElementById('exerciseZoneFilter').value;
  const rows=db.exercises.filter(e=>(z==='Todos'||e.zone===z) && (e.name.toLowerCase().includes(q)||e.zone.toLowerCase().includes(q)||e.type.toLowerCase().includes(q)));
  document.getElementById('exerciseGrid').innerHTML=rows.length?rows.map(e=>`<article class="info-card"><div class="card-menu"><button class="icon-btn" onclick="openExercise('${e.id}')"><span data-icon="edit"></span></button><button class="icon-btn danger" onclick="removeItem('exercises','${e.id}')"><span data-icon="trash"></span></button></div><div class="art"><span data-icon="activity"></span></div><h3>${e.name}</h3><small>${e.zone} · ${e.type}</small><small>${e.guide}</small></article>`).join(''):'<div class="empty">No hay ejercicios.</div>';
  renderIcons();
}
function renderEvaluations(){
  document.getElementById('evaluationList').innerHTML=db.evaluations.length?db.evaluations.slice().reverse().map(e=>`<div class="note-item"><span data-icon="file"></span><div><strong>${pName(e.patientId)} · ${e.severity}</strong><span>Dolor ${e.pain}/10 · Fatiga ${e.fatigue}/10 · ${e.mobility}</span><p>${e.notes||'Sin observaciones.'}</p></div></div>`).join(''):'<div class="empty">No hay evaluaciones registradas.</div>';
  renderIcons();
}
function renderRoutines(){
  document.getElementById('routineList').innerHTML=db.routines.length?db.routines.slice().reverse().map(r=>`<div class="note-item"><span data-icon="list"></span><div><strong>${pName(r.patientId)} · ${eName(r.exerciseId)}</strong><span>${r.sets} series · ${r.reps} repeticiones · ${r.freq} · Prioridad ${r.priority}</span><p>${r.notes||'Sin indicaciones adicionales.'}</p></div></div>`).join(''):'<div class="empty">No hay rutinas asignadas.</div>';
  renderIcons();
}
function renderSessions(){
  document.getElementById('sessionList').innerHTML=db.sessions.length?db.sessions.slice().reverse().map(s=>`<div class="note-item"><span data-icon="activity"></span><div><strong>${pName(s.patientId)} · ${s.status}</strong><span>${rName(s.routineId)} · Dolor ${s.pain}/10 · Fatiga ${s.fatigue}/10 · ${s.date}</span><p>${s.notes||'Sin observaciones.'}</p></div></div>`).join(''):'<div class="empty">No hay seguimiento registrado.</div>';
  renderIcons();
}
function autoAlerts(saveIt=true){
  const newAlerts=[];
  db.sessions.forEach(s=>{
    if(s.pain>=7) newAlerts.push({id:'AL-'+s.id+'P',patientId:s.patientId,type:'Dolor elevado',msg:`Dolor reportado ${s.pain}/10 en ${pName(s.patientId)}`,level:'bad',reviewed:false});
    if(s.fatigue>=7) newAlerts.push({id:'AL-'+s.id+'F',patientId:s.patientId,type:'Fatiga elevada',msg:`Fatiga reportada ${s.fatigue}/10 en ${pName(s.patientId)}`,level:'warn',reviewed:false});
    if(s.status==='No completada'||s.status==='Requiere revisión') newAlerts.push({id:'AL-'+s.id+'S',patientId:s.patientId,type:'Revisión requerida',msg:`${pName(s.patientId)} tiene una sesión: ${s.status}`,level:'warn',reviewed:false});
  });
  const existing=new Set(db.alerts.map(a=>a.id)); newAlerts.forEach(a=>{if(!existing.has(a.id))db.alerts.push(a)});
  if(saveIt) save();
}
function renderAlerts(){
  const html=db.alerts.length?db.alerts.slice().reverse().map(a=>`<div class="alert-item"><span class="dot" style="background:${a.level==='bad'?'#dc2626':'#f59e0b'}"></span><div><strong>${a.type}</strong><span>${a.msg}</span><br><button class="btn ghost" onclick="reviewAlert('${a.id}')">${a.reviewed?'Revisada':'Marcar revisada'}</button></div></div>`).join(''):'<div class="empty">No hay alertas.</div>';
  document.getElementById('alertsList').innerHTML=html; document.getElementById('dashboardAlerts').innerHTML=html;
  document.getElementById('recentPatients').innerHTML=db.patients.slice(-4).reverse().map(p=>`<div class="note-item"><span data-icon="patient"></span><div><strong>${p.name}</strong><span>${p.reason} · ${p.status}</span></div></div>`).join('');
  renderIcons();
}
function renderConsents(){
  document.getElementById('consentList').innerHTML=db.patients.map(p=>`<div class="note-item"><span data-icon="shield"></span><div><strong>${p.name}</strong><span>Cámara: ${p.camera?'Autorizada':'No autorizada'} · Familiar autorizado: ${p.share?'Sí':'No'}</span><p><button class="btn secondary" onclick="toggleConsent('${p.id}','camera')">Cambiar cámara</button> <button class="btn ghost" onclick="toggleConsent('${p.id}','share')">Cambiar familiar</button></p></div></div>`).join('');
  renderIcons();
}
function updateReports(){
  const sel=document.getElementById('reportPatient')?.value || 'Todos';
  const sessions=sel==='Todos'?db.sessions:db.sessions.filter(s=>s.patientId===sel);
  drawLineChart(document.getElementById('reportLineChart'),sessions.slice(-8).map((_,i)=>String(i+1)),sessions.slice(-8).map(s=>s.pain),'#dc2626');
  const ok=sessions.filter(s=>s.status==='Completada').length, diff=sessions.filter(s=>s.status==='Completada con dificultad').length, bad=sessions.length-ok-diff;
  drawBarChart(document.getElementById('reportBarChart'),['OK','Dificultad','Revisión'],[ok,diff,bad],'#0b78c8');
  const prom=sessions.length?(sessions.reduce((a,s)=>a+s.pain,0)/sessions.length).toFixed(1):0;
  document.getElementById('reportSummary').innerHTML=sessions.length?`<b>Resumen:</b> se analizaron ${sessions.length} sesiones. Dolor promedio: ${prom}/10. ${prom>=7?'Se recomienda revisar la rutina por dolor elevado.':'El seguimiento se mantiene dentro de valores moderados.'}`:'Seleccione o registre sesiones para generar un resumen.';
}
function reviewAlert(id){const a=db.alerts.find(x=>x.id===id);if(a)a.reviewed=true;save();render();toast('Alerta revisada','Se actualizó el estado de la alerta.')}
document.getElementById('btnGenerateAlerts').onclick=()=>{autoAlerts();render();toast('Alertas actualizadas','Se revisaron dolor, fatiga y cumplimiento.')};
document.getElementById('btnReviewAll').onclick=()=>{db.alerts.forEach(a=>a.reviewed=true);save();render();toast('Alertas revisadas','Todas las alertas fueron marcadas como revisadas.')};
document.getElementById('btnUpdateReports').onclick=updateReports;
['patientSearch','patientStatusFilter','exerciseSearch','exerciseZoneFilter'].forEach(id=>document.getElementById(id).addEventListener('input',render));

document.getElementById('evaluationForm').onsubmit=e=>{e.preventDefault();db.evaluations.push({id:uid('EV'),patientId:evalPatient.value,reason:evalReason.value,pain:+evalPain.value,fatigue:+evalFatigue.value,mobility:evalMobility.value,severity:evalSeverity.value,notes:evalNotes.value,date:today()});save();e.target.reset();render();toast('Evaluación guardada','La evaluación inicial fue registrada.')};
document.getElementById('routineForm').onsubmit=e=>{e.preventDefault();db.routines.push({id:uid('RUT'),patientId:routinePatient.value,exerciseId:routineExercise.value,sets:+routineSets.value,reps:+routineReps.value,freq:routineFreq.value,priority:routinePriority.value,notes:routineNotes.value});save();e.target.reset();render();toast('Rutina asignada','La rutina fue creada para el paciente.')};
document.getElementById('sessionForm').onsubmit=e=>{e.preventDefault();db.sessions.push({id:uid('SES'),patientId:sessionPatient.value,routineId:sessionRoutine.value,pain:+sessionPain.value,fatigue:+sessionFatigue.value,status:sessionStatus.value,evidence:sessionEvidence.value,notes:sessionNotes.value,date:today()});autoAlerts();save();e.target.reset();render();toast('Seguimiento guardado','Se registró la sesión terapéutica.')};

function openPatient(id=''){
  const p=id?db.patients.find(x=>x.id===id):{id:'PAC-'+String(db.patients.length+1).padStart(3,'0'),name:'',age:'',reason:'',phone:'',status:'Activo',notes:'',camera:false,share:false};
  openModal('Paciente',`<div class="form-grid"><label>Código<input name="id" value="${p.id}" ${id?'readonly':''}></label><label>Nombre o código<input name="name" value="${p.name}" required></label><label>Edad<input name="age" type="number" value="${p.age}" required></label><label>Teléfono<input name="phone" value="${p.phone}"></label><label>Motivo<input name="reason" value="${p.reason}" required></label><label>Estado<select name="status"><option ${p.status==='Activo'?'selected':''}>Activo</option><option ${p.status==='En revisión'?'selected':''}>En revisión</option><option ${p.status==='Alta'?'selected':''}>Alta</option></select></label><label class="full">Observaciones<textarea name="notes">${p.notes}</textarea></label><label><input type="checkbox" name="camera" ${p.camera?'checked':''}> Cámara autorizada</label><label><input type="checkbox" name="share" ${p.share?'checked':''}> Familiar autorizado</label></div>`, data=>{const item={id:data.id,name:data.name,age:+data.age,phone:data.phone,reason:data.reason,status:data.status,notes:data.notes,camera:!!data.camera,share:!!data.share}; if(id) Object.assign(db.patients.find(x=>x.id===id),item); else db.patients.push(item); save();render();toast('Paciente guardado','Datos del paciente actualizados.')});
}
function openExercise(id=''){
  const ex=id?db.exercises.find(x=>x.id===id):{id:'EJ-'+String(db.exercises.length+1).padStart(3,'0'),name:'',zone:'General',type:'Movilidad',guide:''};
  openModal('Ejercicio',`<div class="form-grid"><label>Código<input name="id" value="${ex.id}" ${id?'readonly':''}></label><label>Nombre<input name="name" value="${ex.name}" required></label><label>Zona<select name="zone">${['Lumbar','Rodilla','Hombro','Cadera','General'].map(z=>`<option ${ex.zone===z?'selected':''}>${z}</option>`).join('')}</select></label><label>Tipo<select name="type">${['Movilidad','Fortalecimiento','Estiramiento','Equilibrio'].map(t=>`<option ${ex.type===t?'selected':''}>${t}</option>`).join('')}</select></label><label class="full">Guía<textarea name="guide">${ex.guide}</textarea></label></div>`, data=>{const item={id:data.id,name:data.name,zone:data.zone,type:data.type,guide:data.guide}; if(id) Object.assign(db.exercises.find(x=>x.id===id),item); else db.exercises.push(item); save();render();toast('Ejercicio guardado','Catálogo actualizado.')});
}
document.querySelectorAll('[data-open-modal="patient"]').forEach(b=>b.onclick=()=>openPatient());
document.querySelectorAll('[data-open-modal="exercise"]').forEach(b=>b.onclick=()=>openExercise());
function removeItem(collection,id){if(!confirm('Eliminar registro?'))return;db[collection]=db[collection].filter(x=>x.id!==id);save();render();toast('Registro eliminado','Se quitó del listado.','warn')}
function toggleConsent(id,field){const p=db.patients.find(x=>x.id===id);if(!p)return;p[field]=!p[field];save();render();toast('Consentimiento actualizado','Cambio guardado.')}
function openModal(title,html,onSubmit){modalTitle.textContent=title;modalForm.innerHTML=html+`<div class="modal-actions full"><button class="btn ghost" type="button" id="cancelModal">Cancelar</button><button class="btn primary" type="submit"><span data-icon="save"></span>Guardar</button></div>`;modalBackdrop.classList.add('show');renderIcons();document.getElementById('cancelModal').onclick=closeModal;modalForm.onsubmit=e=>{e.preventDefault();const fd=new FormData(modalForm), data=Object.fromEntries(fd.entries());modalForm.querySelectorAll('input[type="checkbox"]').forEach(c=>data[c.name]=c.checked);onSubmit(data);closeModal()}}
function closeModal(){modalBackdrop.classList.remove('show')}
closeModal.onclick=closeModal;document.getElementById('closeModal').onclick=closeModal;modalBackdrop.addEventListener('click',e=>{if(e.target===modalBackdrop)closeModal()});
function downloadJSON(name,obj){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
render();
