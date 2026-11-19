// Árvore inicial de profissões do laboratório. Regras de teste, não progressão persistida.
export const PROFESSION_TREE = {
 'coletor de ervas':{tier:0,category:'natureza',aliases:['herbalista iniciante','coletora de ervas']},
 'agricultor':{tier:0,category:'natureza',aliases:['agricultora','fazendeiro','fazendeira']},
 'lenhador':{tier:0,category:'recursos',aliases:['lenhadora']},
 'minerador':{tier:0,category:'recursos',aliases:['mineradora','mineiro','mineira']},
 'construtor':{tier:0,category:'construcao',aliases:['construtora','pedreiro','pedreira']},
 'carpinteiro':{tier:0,category:'producao',aliases:['carpinteira']},
 'ferreiro':{tier:0,category:'producao',aliases:['ferreira']},
 'comerciante':{tier:0,category:'comercio',aliases:['vendedor','vendedora']},
 'cozinheiro':{tier:0,category:'servicos',aliases:['cozinheira']},
 'herbalista':{tier:1,category:'natureza',aliases:['botanico','botanica'],paths:[{from:['coletor de ervas'],skills:['identificação de plantas','secagem e conservação de ervas']}]},
 'mestre de obras':{tier:1,category:'construcao',aliases:['mestra de obras'],paths:[{from:['construtor'],skills:['levantamento de estruturas','planejamento de obras']}]},
 'desenhista tecnico':{tier:1,category:'construcao',aliases:['desenhista técnica','desenhista técnico'],paths:[{from:['construtor'],skills:['leitura de plantas','desenho de projetos']}]},
 'alquimista':{tier:2,category:'magia',aliases:['alquimisto'],paths:[{from:['herbalista'],skills:['preparo de extratos','reagentes e misturas','fundamentos de alquimia']}]},
 'arquiteto':{tier:2,category:'construcao',aliases:['arquiteta'],paths:[{from:['mestre de obras'],skills:['projeto arquitetônico','estruturas e materiais']},{from:['desenhista tecnico'],skills:['planejamento de construções','estruturas e materiais']}]},
 'construtor naval':{tier:1,category:'construcao',aliases:['construtora naval','construtor de navios','construtora de navios'],paths:[{from:['carpinteiro'],skills:['montagem de cascos','propriedades de madeiras']},{from:['construtor'],skills:['estruturas flutuantes','construção de embarcações']}]}
};
export const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');
export function resolveProfession(input){
 const key=norm(input);
 for(const [name,data] of Object.entries(PROFESSION_TREE)){
  if(norm(name)===key||(data.aliases||[]).some(a=>norm(a)===key))return name;
 }
 return key;
}
export function getPath(target){
 const seen=new Set();
 function build(name){
  if(seen.has(name))return null;
  seen.add(name);
  const node=PROFESSION_TREE[name];
  if(!node)return null;
  if(!node.paths)return {profession:name,tier:node.tier,skills:[],prerequisites:[]};
  return {profession:name,tier:node.tier,alternatives:node.paths.map(path=>({
    prerequisites:path.from.map(from=>build(from)).filter(Boolean),skills:path.skills
  }))};
 }
 return build(target);
}
