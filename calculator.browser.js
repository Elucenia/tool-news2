/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"news2","title":"NEWS2 (National Early Warning Score 2)","fields":[["fr","Frequência respiratória","num",{"min":3,"max":70,"unit":"irpm","ph":"16"}],["spo2","SpO₂","num",{"min":50,"max":100,"unit":"%","ph":"97"}],["escala","Escala de SpO₂","radio",{"opts":{"1":"Escala 1 (padrão)","2":"Escala 2 (insuficiência respiratória hipercápnica confirmada; alvo 88–92% prescrito)"}}],["o2","Em uso de oxigênio?","radio",{"opts":{"0":"Ar ambiente","1":"Oxigênio suplementar"}}],["pas","Pressão sistólica","num",{"min":40,"max":300,"unit":"mmHg","ph":"120"}],["fc","Frequência cardíaca","num",{"min":20,"max":250,"unit":"bpm","ph":"80"}],["consc","Nível de consciência","radio",{"opts":{"a":"Alerta","cvpu":"Confusão nova, responde à voz, à dor ou não responde"}}],["temp","Temperatura","num",{"min":30,"max":44,"step":0.1,"unit":"°C","ph":"36,8"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var n=function(a,e,o){for(var i=0;i<e.length;i++)if(a<=e[i][0])return e[i][1];return o};
a.def("news2",function(a){var e,o=n(a.fr,[[8,3],[11,1],[20,0],[24,2]],3),i="1"===a.o2,r=[o,e="2"===a.escala?a.spo2<=83?3:a.spo2<=85?2:a.spo2<=87?1:i&&a.spo2>=97?3:i&&a.spo2>=95?2:i&&a.spo2>=93?1:0:n(a.spo2,[[91,3],[93,2],[95,1]],0),i?2:0,n(a.pas,[[90,3],[100,2],[110,1],[219,0]],3),n(a.fc,[[40,3],[50,1],[90,0],[110,1],[130,2]],3),"cvpu"===a.consc?3:0,n(a.temp,[[35,3],[36,1],[38,0],[39,1]],2)],c=r.reduce(function(a,e){return a+e},0),s=r.some(function(a){return 3===a}),l=c>=7?["high","Risco clínico alto: resposta de emergência pela equipe de cuidados críticos","contínua"]:c>=5?["mid","Risco clínico médio: avaliação médica urgente","no mínimo a cada 1 hora"]:s?["mid","Risco baixo-médio: um parâmetro isolado com 3 pontos pede avaliação médica urgente","no mínimo a cada 1 hora"]:c>=1?["low","Risco clínico baixo: avaliação pela enfermagem","no mínimo a cada 4 a 6 horas"]:["low","Risco clínico baixo","no mínimo a cada 12 horas"];return{main:[String(c),"pontos"],label:"NEWS2",level:l[0],verdict:l[1],rows:[["Monitorização dos sinais vitais",l[2]],["FR · SpO₂ · O₂ · PAS · FC · consciência · temperatura",r.join(" · ")]],note:"2"===a.escala?"Escala 2 da SpO₂: use só em insuficiência respiratória hipercápnica confirmada, com alvo de 88 a 92% prescrito.":"",raw:{score:c,red:s?1:0,sat:e}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
