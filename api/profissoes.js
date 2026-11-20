import { PROFESSION_TREE } from './profession-tree.js';
export default function handler(req,res){
 res.setHeader('Cache-Control','public, max-age=60, s-maxage=300');
 if(req.method!=='GET'){res.setHeader('Allow','GET');return res.status(405).json({error:'method_not_allowed'})}
 const professions=Object.entries(PROFESSION_TREE).map(([name,data])=>({
  name,tier:data.tier,category:data.category,aliases:data.aliases||[],
  prerequisites:(data.paths||[]).map(path=>({professions:path.from,minimumRank:path.minimumRank||'profissional',minimumLevel:path.minimumLevel||10})),
  provisional:!!data.provisional,specializations:data.specializations||[]
 }));
 return res.status(200).json({professions,ranks:['Aprendiz','Profissional','Especialista','Mestre','Grão-Mestre'],levelsPerRank:10,totalLevels:50,pointsPerLevel:1,unlockRank:'Profissional 10',simulation:true});
}