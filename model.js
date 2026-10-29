// All quantities are schematic, normalised values, never clinical measurements.
export function stateAt(phase) {
 const p=((phase%1)+1)%1, wave=Math.sin(2*Math.PI*p);
 const flow=Math.abs(wave)<1e-10?0:wave;
 return {phase:p,volume:1+0.3*(1-Math.cos(2*Math.PI*p)),flow,pressure:-flow,
 expansion:(1-Math.cos(2*Math.PI*p))/2,inhaling:p<0.5,endpoint:flow===0};
}
export function csv(rows,t){
 const fields=['time','phase','volume','pressure','flow'];
 return '\uFEFF'+fields.map(k=>t(k)).join(',')+'\n'+rows.map(r=>fields.map(k=>r[k]).join(',')).join('\n');
}
