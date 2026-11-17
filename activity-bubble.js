// Bolha de acao universal: prototipo original e leve para Reels 720p.
import * as T from 'https://esm.sh/three@0.161.0';
export function createActivityBubble(scene){
 const root=new T.Group();scene.add(root);root.visible=false;
 const smoke=new T.Group();root.add(smoke);smoke.scale.set(2.05,2.05,2.05);
 const puffGeo=new T.IcosahedronGeometry(1,1);
 const palette=[0xa4b6a5,0xc1c9b3,0x879f94,0xd2c4a7,0x9eb4a9];
 const puffs=[];
 for(let i=0;i<26;i++){
  const mat=new T.MeshStandardMaterial({color:palette[i%palette.length],transparent:true,opacity:.32,depthWrite:false,roughness:1,flatShading:true,side:T.DoubleSide});
  const mesh=new T.Mesh(puffGeo,mat);smoke.add(mesh);puffs.push(mesh);
 }
 const particleGeo=new T.OctahedronGeometry(.065,0);
 const flecks=[];
 for(let i=0;i<25;i++){const mesh=new T.Mesh(particleGeo,new T.MeshBasicMaterial({color:i%3===0?0xf0d09a:i%3===1?0xb2a88a:0xc6dfb0,transparent:true,opacity:.8,depthWrite:false}));root.add(mesh);flecks.push(mesh)}
 const tool=new T.Group();root.add(tool);
 const handle=new T.Mesh(new T.CylinderGeometry(.045,.055,.85,7),new T.MeshStandardMaterial({color:0x795538,roughness:.9}));handle.rotation.z=Math.PI/2;tool.add(handle);
 const head=new T.Mesh(new T.BoxGeometry(.42,.22,.17),new T.MeshStandardMaterial({color:0x84929b,metalness:.45,roughness:.48}));head.position.x=.35;head.rotation.z=-.35;tool.add(head);
 const rock=new T.Mesh(new T.DodecahedronGeometry(.46,1),new T.MeshStandardMaterial({color:0x777b72,roughness:1,flatShading:true}));root.add(rock);rock.position.set(.85,.34,.15);
 const chunks=[];for(let i=0;i<7;i++){const c=new T.Mesh(new T.TetrahedronGeometry(.085+i%3*.025),new T.MeshStandardMaterial({color:0x9da296,roughness:1}));root.add(c);chunks.push(c)}
 
 // Ferramentas adicionais e pregos: geometria reutilizavel, sem arquivos externos.
 const extraTools=[];
 const metal=new T.MeshStandardMaterial({color:0xaebcc1,metalness:.45,roughness:.45});
 const woodMat=new T.MeshStandardMaterial({color:0x8b603c,roughness:.85});
 function makeTool(kind){
  const g=new T.Group();
  const shaft=new T.Mesh(new T.CylinderGeometry(.045,.055,.83,7),woodMat);shaft.rotation.z=Math.PI/2;g.add(shaft);
  if(kind==='hammer'){const h=new T.Mesh(new T.BoxGeometry(.18,.37,.2),metal);h.position.x=.35;g.add(h)}
  if(kind==='axe'){const h=new T.Mesh(new T.ConeGeometry(.25,.48,4),metal);h.position.x=.35;h.rotation.z=Math.PI/2;g.add(h)}
  if(kind==='pick'){const h=new T.Mesh(new T.ConeGeometry(.14,.68,5),metal);h.position.x=.36;h.rotation.z=Math.PI/2;g.add(h)}
  if(kind==='saw'){const h=new T.Mesh(new T.BoxGeometry(.65,.12,.27),metal);h.position.x=.18;h.position.y=-.13;g.add(h)}
  root.add(g);return g;
 }
 for(const kind of ['pick','hammer','axe','saw'])extraTools.push({kind,mesh:makeTool(kind)});
 const nails=[];
 for(let i=0;i<13;i++){
  const nail=new T.Group();
  const stem=new T.Mesh(new T.CylinderGeometry(.018,.022,.24,5),metal);nail.add(stem);
  const cap=new T.Mesh(new T.CylinderGeometry(.052,.052,.025,6),metal);cap.position.y=.13;nail.add(cap);
  root.add(nail);nails.push(nail);
 }
 function wordSprite(word){
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
  const ctx=canvas.getContext('2d');ctx.clearRect(0,0,256,128);
  ctx.save();ctx.translate(128,64);ctx.rotate(-.12);
  ctx.beginPath();for(let i=0;i<20;i++){const a=i*Math.PI/10,r=i%2?51:62;const x=Math.cos(a)*r*1.65,y=Math.sin(a)*r*.77;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.closePath();
  ctx.fillStyle='#ffdc76';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle='#46392f';ctx.stroke();
  ctx.font='bold 44px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineWidth=6;ctx.strokeStyle='#493529';ctx.strokeText(word,0,1);ctx.fillStyle='#ffffff';ctx.fillText(word,0,1);ctx.restore();
  const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;
  const sprite=new T.Sprite(new T.SpriteMaterial({map:tex,transparent:true,depthWrite:false,opacity:0}));
  sprite.scale.set(1.75,.88,1);root.add(sprite);return sprite;
 }
 const words=[wordSprite('CLANG!'),wordSprite('TOC!'),wordSprite('POW!')];

 let elapsed=0,active=false,done=false,activity='mining';
 function start(x,z,kind='mining'){activity=kind;root.position.set(x,0,z);root.visible=true;elapsed=0;active=true;done=false;rock.visible=kind==='mining';tool.visible=kind!=='furniture';head.geometry.dispose();head.geometry=kind==='wood'?new T.BoxGeometry(.46,.35,.14):new T.BoxGeometry(.42,.22,.17);head.material.color.setHex(kind==='wood'?0xaab4b9:0x84929b)}
 function stop(){active=false;root.visible=false}
 function reset(){stop();done=false;elapsed=0}
 function update(dt,x,z){
  if(!active)return false;
  elapsed+=Math.min(dt,.06);root.position.set(x,0,z);
  const fadeIn=T.MathUtils.smoothstep(elapsed,0,.65);
  const fadeOut=1-T.MathUtils.smoothstep(elapsed,5.6,6.5);
  const alpha=fadeIn*fadeOut;
  smoke.rotation.y=elapsed*.75;
  for(let i=0;i<puffs.length;i++){const p=puffs[i],a=i*2.399963+elapsed*(i%2?-.95:.8),ring=.54+(i%4)*.2;
   p.position.set(Math.cos(a)*ring,1.12+Math.sin(elapsed*2+i)*.28+(i%3)*.12,Math.sin(a)*ring);
   const size=(.45+(i%5)*.085)*(1+.08*Math.sin(elapsed*3+i))*alpha;p.scale.set(size*1.2,size*.8,size);
   p.material.opacity=(.20+(i%4)*.025)*alpha;
  }
  for(let i=0;i<flecks.length;i++){const p=flecks[i],a=i*2.4+elapsed*(1.8+i%3*.2);p.position.set(Math.cos(a)*(1.1+i%4*.1),.35+(elapsed*.8+i*.23)%2.1,Math.sin(a)*(1.1+i%4*.1));p.scale.setScalar(alpha*(.65+i%3*.2));p.material.opacity=alpha*.8}
  tool.visible=false;tool.position.set(Math.sin(elapsed*6)*.85,1.2+Math.sin(elapsed*11)*.32,Math.cos(elapsed*6)*.4);tool.rotation.set(0,elapsed*3,Math.sin(elapsed*8)*.65);tool.scale.setScalar(alpha*(Math.sin(elapsed*5)>-.25?1:.18));
  for(let i=0;i<chunks.length;i++){const c=chunks[i],a=i*2.4+elapsed*3;c.visible=activity==='mining';c.position.set(.85+Math.cos(a)*(.3+elapsed%1*.3),.45+Math.abs(Math.sin(elapsed*4+i))*.9,.15+Math.sin(a)*.45);c.scale.setScalar(alpha*(.65+.35*Math.sin(elapsed*5+i)**2))}

  for(let i=0;i<extraTools.length;i++){
   const {kind,mesh}=extraTools[i];
   mesh.visible=activity==='mining'?kind==='pick'||kind==='hammer':activity==='wood'?kind==='axe'||kind==='saw':kind==='hammer'||kind==='saw';
   const a=elapsed*(3.1+i*.3)+i*1.57;
   mesh.position.set(Math.cos(a)*(1.05+i*.14),1.6+Math.sin(elapsed*5+i)*.62,Math.sin(a)*(.65+i*.1));
   mesh.rotation.set(Math.sin(elapsed*4+i)*.55,a,Math.sin(elapsed*7+i)*.65);
   mesh.scale.setScalar(alpha*(.7+.3*Math.abs(Math.sin(elapsed*3+i))));
  }
  for(let i=0;i<nails.length;i++){
   const nail=nails[i];nail.visible=activity==='furniture';
   const a=elapsed*2.7+i*2.4;
   nail.position.set(Math.cos(a)*(1.15+i%4*.12),.6+(elapsed*.85+i*.19)%2.25,Math.sin(a)*(1.05+i%3*.12));
   nail.rotation.set(a,a*.8,a*.4);nail.scale.setScalar(alpha);
  }
  for(let i=0;i<words.length;i++){
   const sprite=words[i];const cycle=(elapsed+i*1.65)%4.95;
   const activeWord=cycle<1.05;
   sprite.visible=activeWord;
   sprite.material.opacity=alpha*(activeWord?Math.sin(Math.PI*cycle/1.05):0);
   sprite.position.set((i-1)*1.4,2.5+cycle*.55,1.4);
   sprite.scale.set(1.8*(1+cycle*.15),.9*(1+cycle*.15),1);
  }
  if(elapsed>=6.5){stop();done=true;return true}return false
 }
 return {root,start,stop,reset,update,get active(){return active},get completed(){return done}};
}

// Resultados persistentes: aparecem ao lado do pioneiro apos a bolha dissipar.
function createActivityResult(scene,kind,x,z){
 const group=new T.Group();group.position.set(x+2.55,.14,z+.25);scene.add(group);
 const ore=new T.MeshStandardMaterial({color:0x777e88,roughness:.88,metalness:.16,flatShading:true});
 const crystal=new T.MeshStandardMaterial({color:0x7c9da0,roughness:.5,metalness:.35,flatShading:true});
 const bark=new T.MeshStandardMaterial({color:0x76513a,roughness:1});
 const endWood=new T.MeshStandardMaterial({color:0xc49a6d,roughness:.95});
 const furniture=new T.MeshStandardMaterial({color:0x976b46,roughness:.8});
 if(kind==='mining'){
  for(let i=0;i<12;i++){const r=.18+(i%4)*.055;const stone=new T.Mesh(new T.DodecahedronGeometry(r,0),i%5===0?crystal:ore);const ang=i*2.399;stone.position.set(Math.cos(ang)*(.25+i*.045),r*.55+(i>7?.2:0),Math.sin(ang)*(.25+i*.035));stone.rotation.set(i*.4,i*.8,i*.3);stone.castShadow=true;group.add(stone)}
 }else if(kind==='wood'){
  for(let i=0;i<9;i++){const log=new T.Mesh(new T.CylinderGeometry(.16,.16,1.15,8),[bark,endWood,endWood]);log.rotation.z=Math.PI/2;log.position.set(0,.17+Math.floor(i/3)*.29,(i%3-1)*.37);log.castShadow=true;group.add(log)}
 }else{
  const top=new T.Mesh(new T.BoxGeometry(1.45,.12,.85),furniture);top.position.y=1.05;top.castShadow=true;group.add(top);
  for(const xx of [-.59,.59])for(const zz of [-.29,.29]){const leg=new T.Mesh(new T.BoxGeometry(.13,1,.13),furniture);leg.position.set(xx,.5,zz);leg.castShadow=true;group.add(leg)}
  const apron=new T.Mesh(new T.BoxGeometry(1.25,.18,.12),furniture);apron.position.set(0,.9,.31);group.add(apron)
 }
 group.traverse(o=>{if(o.isMesh)o.receiveShadow=true});
 return group
}
export {createActivityResult};
