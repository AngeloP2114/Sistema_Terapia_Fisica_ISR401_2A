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

const KEY='sicst_paciente_app_v2';
const titles={inicio:'Inicio',rutina:'Mi rutina',ejercicio:'Ejercicio guiado',registro:'Registro de dolor y fatiga',progreso:'Mi progreso',recordatorios:'Recordatorios',privacidad:'Privacidad',ayuda:'Ayuda'};
const demo={
  routines:[
    {id:'R1',name:'Elevación de pierna',sets:3,reps:10,freq:'Hoy 17:00',status:'Pendiente',guide:'Sentarse, elevar la pierna lentamente, mantener 3 segundos y bajar sin brusquedad.'},
    {id:'R2',name:'Estiramiento lumbar',sets:2,reps:8,freq:'Hoy 18:00',status:'Pendiente',guide:'Acostarse, llevar rodillas al pecho y respirar lentamente.'},
    {id:'R3',name:'Movilidad de hombro',sets:2,reps:12,freq:'Mañana 09:00',status:'Completada',guide:'Realizar movimientos circulares suaves.'}
  ],
  feelings:[
    {id:'F1',pain:3,fatigue:2,difficulty:'Baja',notes:'Me sentí bien.',date:'2026-07-19 09:00'},
    {id:'F2',pain:4,fatigue:3,difficulty:'Media',notes:'Cansancio leve.',date:'2026-07-19 17:00'}
  ],
  reminders:[{id:'REM1',time:'17:00',msg:'Realizar rutina de elevación de pierna',active:true}],
  messages:[],
  consent:{camera:false,family:false},
  notifications:[
    {id:'N1',type:'Recordatorio',msg:'Tiene una rutina pendiente hoy a las 17:00.',level:'info'},
    {id:'N2',type:'Consejo',msg:'Detenga el ejercicio si el dolor es intenso.',level:'warn'}
  ]
};
let db=load(), timer=null, seconds=0, reps=0, running=false;
function load(){const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):structuredClone(demo)}
function save(){localStorage.setItem(KEY,JSON.stringify(db))}
function setView(v){document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));document.getElementById(v+'View').classList.add('active');document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===v));document.getElementById('pageTitle').textContent=titles[v]; if(v==='progreso') updateProgress(); window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>setView(b.dataset.go));
document.getElementById('btnReset').onclick=()=>{if(confirm('Restaurar datos de demostración?')){db=structuredClone(demo);save();render();toast('Demo restaurada','Los datos volvieron al estado inicial.')}};

function render(){renderIcons();renderStats();renderRoutines();renderNotifications();renderFeelings();renderReminders();renderPrivacy();renderMessages();updateExerciseSelect();updateProgress();}
function renderStats(){
  const done=db.routines.filter(r=>r.status==='Completada').length;
  const pending=db.routines.filter(r=>r.status==='Pendiente').length;
  const lastPain=db.feelings.at(-1)?.pain ?? 0;
  document.getElementById('statsGrid').innerHTML=[
    ['Rutinas pendientes',pending,'bell'],
    ['Rutinas completadas',done,'check'],
    ['Último dolor',lastPain+'/10','activity'],
    ['Recordatorios',db.reminders.length,'bell']
  ].map(s=>`<article class="stat-card"><div><p>${s[0]}</p><strong>${s[1]}</strong></div><div class="stat-icon"><span data-icon="${s[2]}"></span></div></article>`).join('');
  renderIcons();
}
function renderRoutines(){
  const q=document.getElementById('routineSearch')?.value.toLowerCase()||'', f=document.getElementById('routineFilter')?.value||'Todos';
  const rows=db.routines.filter(r=>(f==='Todos'||r.status===f)&&r.name.toLowerCase().includes(q));
  const html=rows.length?rows.map(r=>`<article class="info-card"><div class="art"><span data-icon="activity"></span></div><h3>${r.name}</h3><small>${r.sets} series · ${r.reps} repeticiones · ${r.freq}</small><small>${r.guide}</small><p><span class="state ${r.status==='Completada'?'ok':'warn'}">${r.status}</span></p><button class="btn secondary full" onclick="completeRoutine('${r.id}')"><span data-icon="check"></span>Marcar completada</button></article>`).join(''):'<div class="empty">No hay rutinas con ese filtro.</div>';
  document.getElementById('routineGrid').innerHTML=html; document.getElementById('todayList').innerHTML=db.routines.slice(0,3).map(r=>`<div class="note-item"><span data-icon="activity"></span><div><strong>${r.name}</strong><span>${r.sets}x${r.reps} · ${r.freq} · ${r.status}</span></div></div>`).join('');
  renderIcons();
}
function completeRoutine(id){const r=db.routines.find(x=>x.id===id); if(r){r.status='Completada'; save();render();toast('Rutina completada','Se registró cumplimiento de la rutina.');}}
function renderNotifications(){
  document.getElementById('notificationList').innerHTML=db.notifications.map(n=>`<div class="alert-item"><span class="dot" style="background:${n.level==='warn'?'#f59e0b':'#0b78c8'}"></span><div><strong>${n.type}</strong><span>${n.msg}</span></div></div>`).join('');
}
function updateExerciseSelect(){const sel=document.getElementById('exerciseSelect'); sel.innerHTML=db.routines.map(r=>`<option value="${r.id}">${r.name}</option>`).join('');}
document.getElementById('routineSearch').addEventListener('input',renderRoutines);
document.getElementById('routineFilter').addEventListener('input',renderRoutines);
document.getElementById('exerciseSelect').addEventListener('change',e=>{const r=db.routines.find(x=>x.id===e.target.value);currentExerciseBadge.textContent=r?.name||'Ejercicio';aiFeedback.innerHTML='<strong>Retroalimentación:</strong> ejercicio seleccionado. Autorice cámara para simular análisis.'});
document.getElementById('btnConsent').onclick=()=>{db.consent.camera=true;save();renderPrivacy();toast('Cámara autorizada','Ahora puede iniciar la simulación de análisis visual.')};
document.getElementById('btnStart').onclick=()=>{if(!db.consent.camera){toast('Falta autorización','Primero autorice cámara para esta simulación.','warn');return;} if(running)return;running=true;sessionState.textContent='Activa';aiFeedback.innerHTML='<strong>Retroalimentación:</strong> postura detectada. Mantenga el movimiento lento y controlado.';timer=setInterval(()=>{seconds++;timerEl()},1000);toast('Sesión iniciada','La simulación de ejercicio comenzó.')};
document.getElementById('btnRep').onclick=()=>{if(!running){toast('Sesión no iniciada','Inicie el ejercicio antes de sumar repeticiones.','warn');return;}reps++;repCount.textContent=reps;aiFeedback.innerHTML=reps%3===0?'<strong>Retroalimentación:</strong> repetición válida. Buen control del movimiento.':'<strong>Retroalimentación:</strong> continúe. Evite movimientos bruscos.'};
document.getElementById('btnStop').onclick=()=>{if(timer)clearInterval(timer);timer=null;running=false;sessionState.textContent='Finalizada';db.notifications.unshift({id:uid('N'),type:'Sesión finalizada',msg:`Se registraron ${reps} repeticiones en ${formatTime(seconds)}.`,level:'info'});save();renderNotifications();toast('Sesión finalizada','Registre dolor y fatiga para completar el seguimiento.');};
function timerEl(){document.getElementById('timer').textContent=formatTime(seconds)} function formatTime(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

document.getElementById('painRange').oninput=e=>painValue.textContent=e.target.value;
document.getElementById('fatigueRange').oninput=e=>fatigueValue.textContent=e.target.value;
document.getElementById('feelingForm').onsubmit=e=>{e.preventDefault();db.feelings.push({id:uid('F'),pain:+painRange.value,fatigue:+fatigueRange.value,difficulty:difficulty.value,notes:feelingNotes.value,date:new Date().toLocaleString('es-EC')});save();e.target.reset();painRange.value=3;fatigueRange.value=2;painValue.textContent=3;fatigueValue.textContent=2;render();toast('Registro guardado','Dolor y fatiga fueron registrados.')};
function renderFeelings(){document.getElementById('feelingList').innerHTML=db.feelings.length?db.feelings.slice().reverse().map(f=>`<div class="note-item"><span data-icon="activity"></span><div><strong>Dolor ${f.pain}/10 · Fatiga ${f.fatigue}/10</strong><span>${f.difficulty} · ${f.date}</span><p>${f.notes||'Sin observación.'}</p></div></div>`).join(''):'<div class="empty">No hay registros todavía.</div>';renderIcons();}
function updateProgress(){
  const done=db.routines.filter(r=>r.status==='Completada').length, total=db.routines.length, perc=total?Math.round(done/total*100):0, last=db.feelings.at(-1);
  document.getElementById('progressStats').innerHTML=[
    ['Cumplimiento',perc+'%','check'],['Dolor actual',(last?.pain??0)+'/10','activity'],['Fatiga actual',(last?.fatigue??0)+'/10','activity'],['Registros',db.feelings.length,'file']
  ].map(s=>`<article class="stat-card"><div><p>${s[0]}</p><strong>${s[1]}</strong></div><div class="stat-icon"><span data-icon="${s[2]}"></span></div></article>`).join('');
  drawLineChart(document.getElementById('painChart'),db.feelings.map((_,i)=>String(i+1)),db.feelings.map(f=>f.pain),'#dc2626');
  drawBarChart(document.getElementById('completeChart'),['Cumplidas','Pendientes'],[done,total-done],'#0b78c8');
  simpleSummary.innerHTML=`<b>Resumen:</b> tiene ${done} de ${total} rutinas completadas. ${last?.pain>=7?'Su último dolor fue alto; informe al fisioterapeuta.':'El último registro no muestra dolor elevado.'}`;
  renderIcons();
}
document.getElementById('reminderForm').onsubmit=e=>{e.preventDefault();db.reminders.push({id:uid('REM'),time:remTime.value,msg:remMsg.value,active:true});db.notifications.unshift({id:uid('N'),type:'Recordatorio creado',msg:`${remTime.value} · ${remMsg.value}`,level:'info'});save();e.target.reset();render();toast('Recordatorio guardado','Se agregó a su lista.')};
function renderReminders(){document.getElementById('reminderList').innerHTML=db.reminders.length?db.reminders.map(r=>`<div class="note-item"><span data-icon="bell"></span><div><strong>${r.time}</strong><span>${r.msg} · ${r.active?'Activo':'Inactivo'}</span><p><button class="btn ghost" onclick="toggleReminder('${r.id}')">Activar/Desactivar</button></p></div></div>`).join(''):'<div class="empty">No hay recordatorios.</div>';renderIcons();}
function toggleReminder(id){const r=db.reminders.find(x=>x.id===id);r.active=!r.active;save();render();toast('Recordatorio actualizado','Estado modificado.')}
function renderPrivacy(){cameraStatus.textContent=db.consent.camera?'Autorizado':'No autorizado';familyStatus.textContent=db.consent.family?'Autorizado':'No autorizado';}
toggleCamera.onclick=()=>{db.consent.camera=!db.consent.camera;save();renderPrivacy();toast('Privacidad actualizada','Cambió la autorización de cámara.')};
toggleFamily.onclick=()=>{db.consent.family=!db.consent.family;save();renderPrivacy();toast('Privacidad actualizada','Cambió autorización de familiar.')};
document.getElementById('helpForm').onsubmit=e=>{e.preventDefault();db.messages.push({id:uid('M'),type:helpType.value,msg:helpMsg.value,date:new Date().toLocaleString('es-EC')});save();e.target.reset();renderMessages();toast('Mensaje guardado','Quedó registrado para revisión.')};
function renderMessages(){document.getElementById('helpList').innerHTML=db.messages.length?db.messages.slice().reverse().map(m=>`<div class="note-item"><span data-icon="doctor"></span><div><strong>${m.type}</strong><span>${m.date}</span><p>${m.msg}</p></div></div>`).join(''):'<div class="empty">No hay mensajes guardados.</div>';renderIcons();}
render();
