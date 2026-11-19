// Catálogo de profissões para o laboratório de interpretação.
// Requisitos propostos são marcados provisional; não concedem progressão real.
export const PROFESSION_TREE = {
  "coletor de ervas": {
    "tier": 0,
    "category": "recursos",
    "aliases": [
      "coletora de ervas",
      "herbalista iniciante"
    ]
  },
  "lenhador": {
    "tier": 0,
    "category": "recursos",
    "aliases": []
  },
  "mineiro": {
    "tier": 0,
    "category": "recursos",
    "aliases": [
      "minerador",
      "mineradora",
      "mineira"
    ]
  },
  "caçador": {
    "tier": 0,
    "category": "recursos",
    "aliases": []
  },
  "carpinteiro": {
    "tier": 0,
    "category": "construcao",
    "aliases": []
  },
  "pedreiro": {
    "tier": 0,
    "category": "construcao",
    "aliases": [
      "construtor",
      "construtora",
      "pedreira"
    ]
  },
  "ferreiro": {
    "tier": 0,
    "category": "construcao",
    "aliases": []
  },
  "oleiro": {
    "tier": 0,
    "category": "construcao",
    "aliases": []
  },
  "marceneiro": {
    "tier": 0,
    "category": "construcao",
    "aliases": []
  },
  "agricultor": {
    "tier": 0,
    "category": "alimentos",
    "aliases": []
  },
  "criador de animais": {
    "tier": 0,
    "category": "alimentos",
    "aliases": []
  },
  "apicultor": {
    "tier": 0,
    "category": "alimentos",
    "aliases": []
  },
  "pescador": {
    "tier": 0,
    "category": "alimentos",
    "aliases": []
  },
  "cozinheiro": {
    "tier": 0,
    "category": "alimentos",
    "aliases": []
  },
  "tecelão": {
    "tier": 0,
    "category": "artes",
    "aliases": []
  },
  "ourives": {
    "tier": 0,
    "category": "artes",
    "aliases": []
  },
  "desenhista": {
    "tier": 0,
    "category": "artes",
    "aliases": [
      "desenhista técnica",
      "desenhista técnico"
    ]
  },
  "escritor": {
    "tier": 0,
    "category": "artes",
    "aliases": []
  },
  "mercador ambulante": {
    "tier": 0,
    "category": "comercio",
    "aliases": [
      "comerciante",
      "mercador",
      "vendedor",
      "vendedora"
    ]
  },
  "cuidador iniciante": {
    "tier": 0,
    "category": "saude",
    "aliases": [
      "cuidadora iniciante"
    ]
  },
  "guarda": {
    "tier": 0,
    "category": "defesa",
    "aliases": [
      "guarda da vila"
    ]
  },
  "escultor": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "pedreiro",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": false
  },
  "mecânico": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "ferreiro",
          "carpinteiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "metalurgista": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "mineiro",
          "ferreiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "construtor naval": {
    "tier": 1,
    "category": "avancada",
    "aliases": [
      "construtora naval",
      "construtor de navios",
      "construtora de navios"
    ],
    "paths": [
      {
        "from": [
          "carpinteiro",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "armeiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "ferreiro",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "armadureiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "ferreiro",
          "tecelão"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "fabricante de escudos": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "carpinteiro",
          "ferreiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "coureiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "caçador",
          "tecelão"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "designer de móveis": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "carpinteiro",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "conservador de alimentos": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "agricultor",
          "cozinheiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "domador": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "criador de animais",
          "caçador"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "jornalista": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "escritor",
          "pesquisador"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "engenheiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "mecânico",
          "projetista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true,
    "specializations": [
      "mecânica",
      "civil",
      "naval",
      "industrial",
      "transportes"
    ],
    "specializationRequirements": {
      "mecânica": [
        "metalurgista"
      ]
    }
  },
  "curandeiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "cuidador iniciante",
          "coletor de ervas"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "curandeiro animal": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "cuidador iniciante",
          "criador de animais"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "alquimista": {
    "tier": 1,
    "category": "avancada",
    "aliases": [
      "alquimisto"
    ],
    "paths": [
      {
        "from": [
          "coletor de ervas",
          "curandeiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "arquiteto": {
    "tier": 1,
    "category": "avancada",
    "aliases": [
      "arquiteta"
    ],
    "paths": [
      {
        "from": [
          "pedreiro",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "tinteiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "coletor de ervas",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "projetista": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "desenhista",
          "ferreiro"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "papeleiro": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "lenhador",
          "tecelão"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  },
  "pesquisador": {
    "tier": 1,
    "category": "avancada",
    "aliases": [],
    "paths": [
      {
        "from": [
          "escritor",
          "desenhista"
        ],
        "skills": [],
        "minimumRank": "profissional",
        "minimumLevel": 10
      }
    ],
    "provisional": true
  }
};
export const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/\s+/g,' ');
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
  if(seen.has(name))return {profession:name,reference:true};
  seen.add(name);
  const node=PROFESSION_TREE[name];if(!node)return null;
  if(!node.paths)return {profession:name,tier:node.tier,skills:[],prerequisites:[]};
  return {profession:name,tier:node.tier,provisional:!!node.provisional,alternatives:node.paths.map(path=>({
   prerequisites:path.from.map(from=>build(from)).filter(Boolean),
   skills:path.skills,
   minimumRank:path.minimumRank,
   minimumLevel:path.minimumLevel
  }))};
 }
 return build(target);
}
