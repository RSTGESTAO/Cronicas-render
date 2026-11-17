// Configuracao unica de articulacoes para laboratorio e tour 3D.
export const JOINTS={
 L_Thigh:{axis:'x',min:-65,max:65},R_Thigh:{axis:'x',min:-65,max:65},
 L_Calf:{axis:'x',min:-10,max:80},R_Calf:{axis:'x',min:-10,max:80},
 L_Upperarm:{axis:'z',min:-100,max:100,free:true},R_Upperarm:{axis:'z',min:-100,max:100,free:true},
 L_Forearm:{axis:'x',min:-100,max:100},R_Forearm:{axis:'x',min:-100,max:100},
 L_Foot:{axis:'x',min:-45,max:45},R_Foot:{axis:'x',min:-45,max:45},
 Pelvis:{axis:'x',min:-35,max:35},Spine01:{axis:'x',min:-45,max:45},Spine02:{axis:'x',min:-30,max:30}
};
export function limitDegrees(name,degrees){const cfg=JOINTS[name];return cfg?Math.max(cfg.min,Math.min(cfg.max,degrees)):degrees}
export function axisFor(name){return JOINTS[name]?.axis||'x'}
