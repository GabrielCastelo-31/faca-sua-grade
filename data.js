const curriculum = ([
  [
    {
      "code": "CIC0004",
      "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0163",
      "name": "INTRODUÇÃO À ENGENHARIA",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0168",
      "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0161",
      "name": "ENGENHARIA E AMBIENTE",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "MAT0025",
      "name": "CÁLCULO 1",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0157",
      "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA",
      "requirements": [
        "MAT0025"
      ]
    },
    {
      "code": "IFD0171",
      "name": "FISICA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "IFD0173",
      "name": "FISICA 1 EXPERIMENTAL",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "MAT0026",
      "name": "CÁLCULO 2",
      "requirements": [
        "MAT0025",
        "MAT0024",
        "OU"
      ]
    },
    {
      "code": "MAT0031",
      "name": "INTRODUCAO A ALGEBRA LINEAR",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0071",
      "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1",
      "requirements": [
        "MAT0031"
      ]
    },
    {
      "code": "FGA0073",
      "name": "TEORIA DE ELETRÔNICA DIGITAL 1",
      "requirements": [
        "MAT0031"
      ]
    },
    {
      "code": "FGA0085",
      "name": "MATEMÁTICA DISCRETA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0133",
      "name": "ENGENHARIA ECONÔMICA",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0158",
      "name": "ORIENTAÇÃO A OBJETOS",
      "requirements": [
        "CIC0004",
        "CIC0007",
        "OU"
      ]
    },
    {
      "code": "FGA0160",
      "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA",
      "requirements": [
        "MAT0026"
      ]
    },
    {
      "code": "FGA0164",
      "name": "HUMANIDADES E CIDADANIA",
      "requirements": [
        "-"
      ]
    }
  ],
  [
    {
      "code": "FGA0108",
      "name": "MATEMÁTICA DISCRETA 2",
      "requirements": [
        "FGA0085",
        "FGA0159",
        "OU"
      ]
    },
    {
      "code": "FGA0142",
      "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES",
      "requirements": [
        "ENE0277",
        "FGA0071",
        "FGA0073",
        "E",
        "OU"
      ]
    },
    {
      "code": "FGA0146",
      "name": "ESTRUTURAS DE DADOS 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0150",
      "name": "PROJETO INTEGRADOR DE ENGENHARIA 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0184",
      "name": "GESTÃO DA PRODUÇÃO E QUALIDADE",
      "requirements": [
        "FGA0133"
      ]
    },
    {
      "code": "FGA0138",
      "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE",
      "requirements": [
        "FGA0158"
      ]
    }
  ],
  [
    {
      "code": "FGA0003",
      "name": "COMPILADORES 1",
      "requirements": [
        "FGA0146"
      ]
    },
    {
      "code": "FGA0030",
      "name": "ESTRUTURAS DE DADOS 2",
      "requirements": [
        "FGA0146"
      ]
    },
    {
      "code": "FGA0137",
      "name": "SISTEMAS DE BANCO DE DADOS 1",
      "requirements": [
        "FGA0159",
        "FGA0108",
        "OU"
      ]
    },
    {
      "code": "FGA0170",
      "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS",
      "requirements": [
        "FGA0182",
        "FGA0096",
        "OU",
        "FGA0142",
        "OU"
      ]
    },
    {
      "code": "FGA0173",
      "name": "INTERAÇÃO HUMANO COMPUTADOR",
      "requirements": [
        "FGA0138",
        "FGA0138",
        "OU"
      ]
    },
    {
      "code": "FGA0172",
      "name": "REQUISITOS DE SOFTWARE",
      "requirements": [
        "FGA0138"
      ]
    }
  ],
  [
    {
      "code": "FGA0060",
      "name": "SISTEMAS DE BANCO DE DADOS 2",
      "requirements": [
        "FGA0137"
      ]
    },
    {
      "code": "FGA0124",
      "name": "PROJETO DE ALGORITMOS",
      "requirements": [
        "FGA0146"
      ]
    },
    {
      "code": "FGA0208",
      "name": "ARQUITETURA E DESENHO DE SOFTWARE",
      "requirements": [
        "FGA0172",
        "FGA0172",
        "OU"
      ]
    },
    {
      "code": "FGA0211",
      "name": "FUNDAMENTOS DE REDES DE COMPUTADORES",
      "requirements": [
        "FGA0170"
      ]
    },
    {
      "code": "FGA0238",
      "name": "TESTES DE SOFTWARE",
      "requirements": [
        "FGA0172"
      ]
    },
    {
      "code": "FGA0278",
      "name": "QUALIDADE DE SOFTWARE 1",
      "requirements": [
        "FGA0173",
        "FGA0133",
        "E",
      ]
    }
  ],
  [
    {
      "code": "FGA0109",
      "name": "FUNDAMENTOS DE SISTEMAS EMBARCADOS",
      "requirements": [
        "FGA0170"
      ]
    },
    {
      "code": "FGA0210",
      "name": "PARADIGMAS DE PROGRAMAÇÃO",
      "requirements": [
        "FGA0158",
        "FGA0003",
        "E"
      ]
    },
    {
      "code": "FGA0242",
      "name": "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES",
      "requirements": [
        "FGA0208",
        "FGA0238",
        "FGA0238",
        "OU",
        "E"
      ]
    },
    {
      "code": "FGA0244",
      "name": "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS",
      "requirements": [
        "FGA0211",
        "FGA0030",
        "E"
      ]
    }
  ],
  [
    {
      "code": "FGA0288",
      "name": "ESTÁGIO SUPERVISIONADO",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0206",
      "name": "ENGENHARIA DE PRODUTO DE SOFTWARE",
      "requirements": [
        "FGA0242"
      ]
    },
    {
      "code": "FGA0240",
      "name": "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE",
      "requirements": [
        "FGA0238"
      ]
    }
  ],
  [
    {
      "code": "FGA0287",
      "name": "TRABALHO DE CONCLUSÃO DE CURSO 1",
      "requirements": [
        "-"
      ]
    },
    {
      "code": "FGA0250",
      "name": "PROJETO INTEGRADOR DE ENGENHARIA 2",
      "requirements": [
        "FGA0150",
        "FGA0303",
        "OU"
      ]
    }
  ],
  [
    {
      "code": "FGA0290",
      "name": "TRABALHO DE CONCLUSÃO DE CURSO 2",
      "requirements": [
        "FGA0287",
        "FGA0009",
        "OU"
      ]
    },
    {
      "code": "FGA0318",
      "name": "ATIVIDADE DE EXTENSÃO ENGENHARIA DE SOFTWARE",
      "requirements": [
        "-"
      ]
    }
  ]
]);

const nicknames = {
  "FGA0168": "DIAC",
  "FGA0060": "SBD2",
  "FGA0124": "PA",
  "FGA0160": "Metodos",
  "FGA0210": "Paradigmas",
  "FGA0211": "Redes",
  "FGA0278": "Qualidades",
  "FGA0164": "HC",
  "FGA0206": "EPS",
  "FGA0109": "Embarcados",
  "FGA0250": "PI2",
  "FGA0150": "PI1",
  "FGA0242": "TPPE",
  "FGA0240": "GCES",
  "FGA0303": "PI1",
  "FGA0288": "Estágio",
  "FGA0287": "TCC1",
  "FGA0318": "Extensão",
  "CIC0004": "APC",
  "FGA0163": "Intr. Eng.",
  "FGA0161": "Eng. Amb.",
  "MAT0025": "C1",
  "FGA0157": "PEAE",
  "IFD0171": "F1",
  "IFD0173": "F1 Exp.",
  "MAT0026": "C2",
  "MAT0031": "IAL",
  "FGA0071": "PED1",
  "FGA0073": "TED1",
  "FGA0085": "MD1",
  "FGA0133": "Eng. Econômica",
  "FGA0158": "OO",
  "FGA0108": "MD2",
  "FGA0142": "FAC",
  "FGA0146": "EDA1",
  "FGA0303": "PI1",
  "FGA0184": "GPEQ",
  "FGA0138": "MDS",
  "FGA0003": "Compiladores",
  "FGA0030": "EDA2",
  "FGA0137": "SBD1",
  "FGA0170": "FSO",
  "FGA0173": "IHC",
  "FGA0172": "Requisitos",
  "FGA0208": "Arquitetura",
  "FGA0238": "Testes",
  "FGA0244": "PSPD",
  "FGA0288": "Estágio",
  "FGA0287": "TCC1",
  "FGA0250": "PI2",
  "FGA0290": "TCC2",
  "FGA0318": "Extensão",
};

/** @type {Record<string, {code: string; name: string; requirements: string[]}>} */
const lessonByCode = {};
curriculum.forEach(e => {
  e.forEach(lesson => {
    lessonByCode[lesson.code] = lesson;
  })
})

/** @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[]>} */
const classes = (
  {
    "FCTE0001": [{"code": "FCTE0001", "name": "FUNDAMENTOS LÓGICOS DE INTELIGÊNCIA ARTIFICIAL", "classNum": 1, "teacher": "BRUNO CESAR RIBAS", "schedules": [[4, 1], [4, 3]]}],
    "FCTE0002": [{"code": "FCTE0002", "name": "PARADIGMAS DE SOLUÇÃO DE PROBLEMAS", "classNum": 1, "teacher": "EDSON ALVES DA COSTA JUNIOR", "schedules": [[4, 1], [4, 3]]}],
    "FGA0003": [{"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 1, "teacher": "SERGIO ANTONIO ANDRADE DE FREITAS", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 2, "teacher": "FABIO MACEDO MENDES", "schedules": [[4, 2], [4, 4]]}, {"code": "FGA0003", "name": "COMPILADORES 1", "classNum": 3, "teacher": "FABIO MACEDO MENDES", "schedules": [[5, 2], [5, 4]]}],
    "FGA0006": [{"code": "FGA0006", "name": "FUNDAMENTOS DE EQUAÇÕES DIFERENCIAIS PARA ENGENHARIA", "classNum": 1, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": [[5, 0], [5, 3]]}],
    "FGA0008": [{"code": "FGA0008", "name": "SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "RONNE TOLEDO", "schedules": [[1, 0], [1, 2]]}],
    "FGA0015": [{"code": "FGA0015", "name": "PROCESSAMENTO DIGITAL DE IMAGENS", "classNum": 1, "teacher": "MARCUS VINICIUS CHAFFIM COSTA", "schedules": [[2, 2], [2, 4]]}],
    "FGA0017": [{"code": "FGA0017", "name": "PROJETOS DE CIRCUITOS INTEGRADOS 1", "classNum": 1, "teacher": "SANDRO AUGUSTO PAVLIK HADDAD", "schedules": [[3, 1], [3, 3]]}],
    "FGA0023": [{"code": "FGA0023", "name": "DINÂMICA DOS MECANISMOS", "classNum": 1, "teacher": "RITA DE CASSIA SILVA", "schedules": [[0, 1], [0, 3]]}],
    "FGA0025": [{"code": "FGA0025", "name": "SISTEMAS DE ENERGIA SOLAR E EÓLICA", "classNum": 1, "teacher": "JORGE ANDRES CORMANE ANGARITA", "schedules": [[3, 0], [3, 2]]}],
    "FGA0030": [{"code": "FGA0030", "name": "ESTRUTURAS DE DADOS 2", "classNum": 1, "teacher": "BRUNO CESAR RIBAS", "schedules": [[3, 1], [3, 3]]}],
    "FGA0037": [{"code": "FGA0037", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "RAFAEL CASTILHO FARIA MENDES", "schedules": [[0, 0]]}, {"code": "FGA0037", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AEROESPACIAL", "classNum": 2, "teacher": "WILLIAM REIS SILVA", "schedules": [[3, 2], [3, 4]]}],
    "FGA0038": [{"code": "FGA0038", "name": "AERODINÂMICA DE SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "OLEXIY SHYNKARENKO", "schedules": [[4, 1], [4, 3], [4, 4]]}],
    "FGA0039": [{"code": "FGA0039", "name": "MECÂNICA DE ESTRUTURAS AEROESPACIAIS", "classNum": 1, "teacher": "ARTEM ANDRIANOV", "schedules": [[2, 0], [0, 1], [0, 3]]}],
    "FGA0040": [{"code": "FGA0040", "name": "SISTEMAS DE CONTROLE AUTOMOTIVO", "classNum": 1, "teacher": "RAFAEL RODRIGUES DA SILVA", "schedules": [[1, 0], [1, 2]]}],
    "FGA0043": [{"code": "FGA0043", "name": "DINÂMICA DOS GASES PARA SISTEMAS AEROESPACIAIS", "classNum": 1, "teacher": "OLEXIY SHYNKARENKO", "schedules": [[3, 1], [3, 3]]}],
    "FGA0045": [{"code": "FGA0045", "name": "MECÂNICA DO VÔO", "classNum": 1, "teacher": "THIAGO FELIPPE KURUDEZ CORDEIRO (30h)\\nPOLLIANA CANDIDA OLIVEIRA MARTINS", "schedules": [[1, 2], [1, 4]]}],
    "FGA0047": [{"code": "FGA0047", "name": "PROCESSOS PETROQUÍMICOS", "classNum": 1, "teacher": "ANDREIA ALVES COSTA LINDINGER", "schedules": [[1, 1], [1, 3]]}],
    "FGA0048": [{"code": "FGA0048", "name": "MECÂNICA DO VOO ESPACIAL", "classNum": 1, "teacher": "WILLIAM REIS SILVA", "schedules": [[1, 2], [1, 4]]}],
    "FGA0050": [{"code": "FGA0050", "name": "DINÂMICA DE ESTRUTURAS AEROESPACIAIS", "classNum": 1, "teacher": "SERGIO HENRIQUE DA SILVA CARNEIRO", "schedules": [[1, 1], [1, 3]]}],
    "FGA0053": [{"code": "FGA0053", "name": "TÓPICOS ESPECIAIS EM PROGRAMAÇÃO", "classNum": 1, "teacher": "MAURICIO SERRANO (30h)\\nMILENE SERRANO", "schedules": [[3, 0]]}],
    "FGA0054": [{"code": "FGA0054", "name": "TÓPICOS ESPECIAIS EM GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO", "classNum": 1, "teacher": "WANDER CLEBER MARIA PEREIRA DA SILVA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0055": [{"code": "FGA0055", "name": "TECNOLOGIAS DE FABRICAÇÃO 1", "classNum": 1, "teacher": "RHANDER VIANA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0056": [{"code": "FGA0056", "name": "TECNOLOGIAS DE FABRICAÇÃO 2", "classNum": 1, "teacher": "EDISON GUSTAVO CUEVA GALARRAGA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0060": [{"code": "FGA0060", "name": "SISTEMAS DE BANCO DE DADOS 2", "classNum": 1, "teacher": "VANDOR ROBERTO VILARDI RISSOLI", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0060", "name": "SISTEMAS DE BANCO DE DADOS 2", "classNum": 2, "teacher": "VANDOR ROBERTO VILARDI RISSOLI", "schedules": [[3, 1], [3, 3]]}],
    "FGA0062": [{"code": "FGA0062", "name": "PROJETO DE SISTEMAS DE OBSERVAÇÃO DA TERRA", "classNum": 1, "teacher": "RONNE TOLEDO", "schedules": [[4, 0], [4, 2]]}],
    "FGA0063": [{"code": "FGA0063", "name": "PROPULSÃO AERONÁUTICA", "classNum": 1, "teacher": "RAFAEL CASTILHO FARIA MENDES", "schedules": [[1, 2], [1, 4]]}],
    "FGA0067": [{"code": "FGA0067", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 2, "teacher": "EULER DE VILHENA GARCIA", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0067", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 3, "teacher": "LUCIANO EMIDIO NEVES DA FONSECA", "schedules": [[3, 0], [3, 2]]}],
    "FGA0068": [{"code": "FGA0068", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 2", "classNum": 1, "teacher": "GILMAR SILVA BESERRA", "schedules": [[0, 0], [0, 2]]}],
    "FGA0069": [{"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 1, "teacher": "MARCUS VINICIUS CHAFFIM COSTA", "schedules": [[0, 4]]}, {"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 2, "teacher": "MARCUS VINICIUS CHAFFIM COSTA", "schedules": [[1, 4]]}, {"code": "FGA0069", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 1", "classNum": 3, "teacher": "MARCUS VINICIUS CHAFFIM COSTA", "schedules": [[1, 2]]}],
    "FGA0070": [{"code": "FGA0070", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 2", "classNum": 1, "teacher": "TIAGO MARTINS DE BRITO", "schedules": [[3, 4]]}],
    "FGA0071": [{"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 1, "teacher": "HENRIQUE MARRA TAIRA MENEGAZ", "schedules": [[3, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 2, "teacher": "HENRIQUE MARRA TAIRA MENEGAZ", "schedules": [[0, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 3, "teacher": "HENRIQUE MARRA TAIRA MENEGAZ", "schedules": [[1, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 4, "teacher": "HENRIQUE MARRA TAIRA MENEGAZ", "schedules": [[4, 3]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 6, "teacher": "MARCELINO MONTEIRO DE ANDRADE", "schedules": [[0, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 7, "teacher": "MARCELINO MONTEIRO DE ANDRADE", "schedules": [[1, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 8, "teacher": "MARCELINO MONTEIRO DE ANDRADE", "schedules": [[3, 2]]}, {"code": "FGA0071", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 1", "classNum": 9, "teacher": "MARCELINO MONTEIRO DE ANDRADE", "schedules": [[4, 2]]}],
    "FGA0072": [{"code": "FGA0072", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 2", "classNum": 1, "teacher": "GILMAR SILVA BESERRA", "schedules": [[1, 2]]}, {"code": "FGA0072", "name": "PRÁTICA DE ELETRÔNICA DIGITAL 2", "classNum": 2, "teacher": "GILMAR SILVA BESERRA", "schedules": [[1, 0]]}],
    "FGA0073": [{"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 1, "teacher": "RENATO VILELA LOPES", "schedules": [[0, 2], [0, 4]]}, {"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 2, "teacher": "RENATO VILELA LOPES", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0073", "name": "TEORIA DE ELETRÔNICA DIGITAL 1", "classNum": 3, "teacher": "LUIS FILOMENO DE JESUS FERNANDES", "schedules": [[4, 1], [4, 3]]}],
    "FGA0074": [{"code": "FGA0074", "name": "TEORIA DE ELETRÔNICA DIGITAL 2", "classNum": 1, "teacher": "DANIEL MAURICIO MUNOZ ARBOLEDA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0075": [{"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 1, "teacher": "EMMANUEL PACHECO ROCHA LIMA", "schedules": [[4, 0]]}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 2, "teacher": "EMMANUEL PACHECO ROCHA LIMA", "schedules": [[4, 2]]}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 3, "teacher": "RODRIGO ARBEY MUNOZ MENESES", "schedules": [[1, 2]]}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 4, "teacher": "EMMANUEL PACHECO ROCHA LIMA", "schedules": [[2, 2]]}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 8, "teacher": "SANDRA MARIA DA LUZ", "schedules": [[0, 0]]}, {"code": "FGA0075", "name": "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO", "classNum": 9, "teacher": "SANDRA MARIA DA LUZ", "schedules": [[1, 0]]}],
    "FGA0076": [{"code": "FGA0076", "name": "EQUIPAMENTOS TERMOFLUIDOS AUTOMOTIVOS", "classNum": 1, "teacher": "ALESSANDRO BORGES DE SOUSA OLIVEIRA (30h)\\nFABIO ALFAIA DA CUNHA", "schedules": [[0, 2], [0, 4]]}],
    "FGA0077": [{"code": "FGA0077", "name": "INTRODUÇÃO AO DESGASTE", "classNum": 1, "teacher": "EDISON GUSTAVO CUEVA GALARRAGA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0078": [{"code": "FGA0078", "name": "TEORIA DE MATERIAIS DE CONSTRUÇÃO", "classNum": 1, "teacher": "EMMANUEL PACHECO ROCHA LIMA", "schedules": [[3, 0], [2, 2]]}, {"code": "FGA0078", "name": "TEORIA DE MATERIAIS DE CONSTRUÇÃO", "classNum": 2, "teacher": "RODRIGO ARBEY MUNOZ MENESES", "schedules": [[3, 1], [3, 3]]}],
    "FGA0083": [{"code": "FGA0083", "name": "APRENDIZADO DE MÁQUINA", "classNum": 1, "teacher": "SERGIO ANTONIO ANDRADE DE FREITAS", "schedules": [[0, 0], [0, 2]]}],
    "FGA0085": [{"code": "FGA0085", "name": "MATEMÁTICA DISCRETA 1", "classNum": 1, "teacher": "CRISTIANE LOESCH DE SOUZA COSTA", "schedules": [[0, 0], [0, 2]]}, {"code": "FGA0085", "name": "MATEMÁTICA DISCRETA 1", "classNum": 2, "teacher": "CRISTIANE LOESCH DE SOUZA COSTA", "schedules": [[1, 0], [1, 2]]}],
    "FGA0086": [{"code": "FGA0086", "name": "TEORIA DE ELETRICIDADE APLICADA", "classNum": 1, "teacher": "JORGE ANDRES CORMANE ANGARITA", "schedules": [[0, 0], [0, 2]]}, {"code": "FGA0086", "name": "TEORIA DE ELETRICIDADE APLICADA", "classNum": 2, "teacher": "FLAVIO HENRIQUE JUSTINIANO RIBEIRO DA SILVA", "schedules": [[4, 0], [4, 2]]}],
    "FGA0087": [{"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 1, "teacher": "JORGE ANDRES CORMANE ANGARITA", "schedules": [[1, 0]]}, {"code": "FGA0087", "name": "LABORATÓRIO DE ELETRICIDADE APLICADA", "classNum": 3, "teacher": "RUDI HENRI VAN ELS", "schedules": [[3, 1]]}],
    "FGA0088": [{"code": "FGA0088", "name": "TEORIA DE SISTEMAS DE CONVERSÃO DE ENERGIA", "classNum": 1, "teacher": "FLAVIO HENRIQUE JUSTINIANO RIBEIRO DA SILVA", "schedules": [[0, 2], [0, 4]]}],
    "FGA0089": [{"code": "FGA0089", "name": "LABORATÓRIO DE SISTEMAS DE CONVERSÃO DE ENERGIA", "classNum": 1, "teacher": "RUDI HENRI VAN ELS", "schedules": [[4, 2]]}, {"code": "FGA0089", "name": "LABORATÓRIO DE SISTEMAS DE CONVERSÃO DE ENERGIA", "classNum": 2, "teacher": "RUDI HENRI VAN ELS", "schedules": [[3, 2]]}],
    "FGA0090": [{"code": "FGA0090", "name": "ONDULATÓRIA E FÍSICA TÉRMICA PARA ENGENHARIA", "classNum": 1, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0091": [{"code": "FGA0091", "name": "MÁQUINAS DE FLUIDO", "classNum": 1, "teacher": "LUCIANO GONCALVES NOLETO (45h)\\nFELIPE CHAGAS STORTI", "schedules": [[0, 0], [0, 2], [3, 2]]}],
    "FGA0092": [{"code": "FGA0092", "name": "PRINCÍPIOS DE COMUNICAÇÃO PARA ENGENHARIA", "classNum": 1, "teacher": "SEBASTIEN ROLAND MARIE JOSEPH RONDINEAU", "schedules": [[0, 1], [2, 1], [0, 3]]}],
    "FGA0093": [{"code": "FGA0093", "name": "PRINCÍPIOS DE CONTROLE", "classNum": 1, "teacher": "ROBERTO DE SOUZA BAPTISTA", "schedules": [[2, 1], [3, 3]]}, {"code": "FGA0093", "name": "PRINCÍPIOS DE CONTROLE", "classNum": 2, "teacher": "THIAGO FELIPPE KURUDEZ CORDEIRO", "schedules": [[3, 2], [2, 3], [3, 4]]}],
    "FGA0094": [{"code": "FGA0094", "name": "ANTENAS IMPRESSAS", "classNum": 1, "teacher": "DANIEL COSTA ARAUJO", "schedules": [[0, 1], [0, 3]]}],
    "FGA0097": [{"code": "FGA0097", "name": "ELETRÔNICA DE RÁDIO FREQUÊNCIA", "classNum": 1, "teacher": "WELLINGTON AVELINO DO AMARAL", "schedules": [[3, 1], [3, 3]]}],
    "FGA0098": [{"code": "FGA0098", "name": "PRÁTICA DE CIRCUITOS ELETRÔNICOS 3", "classNum": 1, "teacher": "TIAGO MARTINS DE BRITO", "schedules": [[4, 0]]}],
    "FGA0099": [{"code": "FGA0099", "name": "TEORIA DE CIRCUITOS ELETRÔNICOS 3", "classNum": 1, "teacher": "WELLINGTON AVELINO DO AMARAL", "schedules": [[4, 1], [4, 3]]}],
    "FGA0100": [{"code": "FGA0100", "name": "PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 1, "teacher": "MARCUS VINICIUS BATISTUTA", "schedules": [[0, 3]]}, {"code": "FGA0100", "name": "PRÁTICA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 2, "teacher": "GERARDO ANTONIO IDROBO PIZO", "schedules": [[2, 1]]}],
    "FGA0101": [{"code": "FGA0101", "name": "TEORIA DE FÍSICA DOS DISPOSITIVOS ELETRÔNICOS", "classNum": 1, "teacher": "MARCUS VINICIUS BATISTUTA", "schedules": [[4, 1], [4, 3]]}],
    "FGA0102": [{"code": "FGA0102", "name": "SINAIS E SISTEMAS PARA ENGENHARIA", "classNum": 1, "teacher": "LUIS FILOMENO DE JESUS FERNANDES", "schedules": [[3, 1], [3, 3], [3, 4]]}, {"code": "FGA0102", "name": "SINAIS E SISTEMAS PARA ENGENHARIA", "classNum": 2, "teacher": "LUCIANO EMIDIO NEVES DA FONSECA", "schedules": [[0, 0], [0, 2], [0, 4]]}],
    "FGA0104": [{"code": "FGA0104", "name": "QUÍMICA ORGÂNICA APLICADA À ENGENHARIA", "classNum": 1, "teacher": "ROSEANY DE VASCONCELOS VIEIRA LOPES", "schedules": [[1, 0], [1, 2]]}],
    "FGA0105": [{"code": "FGA0105", "name": "TÓPICOS ESPECIAIS 2 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "LUI TXAI CALVOSO HABL", "schedules": [[1, 0], [1, 2]]}, {"code": "FGA0105", "name": "TÓPICOS ESPECIAIS 2 EM ENGENHARIA AEROESPACIAL", "classNum": 2, "teacher": "ARTUR ELIAS DE MORAIS BERTOLDI", "schedules": [[4, 1], [4, 3]]}],
    "FGA0106": [{"code": "FGA0106", "name": "TÓPICOS ESPECIAIS 3 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "SEBASTIEN ROLAND MARIE JOSEPH RONDINEAU", "schedules": [[1, 1], [1, 3]]}],
    "FGA0107": [{"code": "FGA0107", "name": "LABORATÓRIO DE ONDULATÓRIA E FÍSICA TÉRMICA PARA A ENGENHARIA", "classNum": 1, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[1, 1]]}],
    "FGA0108": [{"code": "FGA0108", "name": "MATEMÁTICA DISCRETA 2", "classNum": 2, "teacher": "LINDOMAR BOMFIM DE CARVALHO DE JESUS", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0108", "name": "MATEMÁTICA DISCRETA 2", "classNum": 3, "teacher": "CRISTIANE LOESCH DE SOUZA COSTA", "schedules": [[2, 0], [2, 2]]}],
    "FGA0109": [{"code": "FGA0109", "name": "FUNDAMENTOS DE SISTEMAS EMBARCADOS", "classNum": 1, "teacher": "RENATO CORAL SAMPAIO", "schedules": [[3, 1], [3, 3]]}],
    "FGA0119": [{"code": "FGA0119", "name": "TEORIA DE ELETROMAGNETISMO", "classNum": 1, "teacher": "ANDRE LUIZ ALMEIDA PENNA", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0119", "name": "TEORIA DE ELETROMAGNETISMO", "classNum": 2, "teacher": "ANDRE LUIZ ALMEIDA PENNA", "schedules": [[0, 2], [0, 4]]}],
    "FGA0120": [{"code": "FGA0120", "name": "PRÁTICA DE ELETROMAGNETISMO", "classNum": 1, "teacher": "GERARDO ANTONIO IDROBO PIZO", "schedules": [[3, 4]]}, {"code": "FGA0120", "name": "PRÁTICA DE ELETROMAGNETISMO", "classNum": 2, "teacher": "GERARDO ANTONIO IDROBO PIZO", "schedules": [[4, 1]]}, {"code": "FGA0120", "name": "PRÁTICA DE ELETROMAGNETISMO", "classNum": 3, "teacher": "GERARDO ANTONIO IDROBO PIZO", "schedules": [[2, 4]]}],
    "FGA0121": [{"code": "FGA0121", "name": "TÓPICOS ESPECIAIS 4 EM ENGENHARIA AEROESPACIAL", "classNum": 1, "teacher": "RAFAEL CASTILHO FARIA MENDES (30h)\\nTHIAGO FELIPPE KURUDEZ CORDEIRO", "schedules": [[0, 2], [0, 4]]}],
    "FGA0122": [{"code": "FGA0122", "name": "EFICIÊNCIA ENERGÉTICA EM INSTALAÇÕES ELÉTRICAS INDUSTRIAIS", "classNum": 1, "teacher": "LOANA NUNES VELASCO", "schedules": [[4, 2], [4, 4]]}],
    "FGA0124": [{"code": "FGA0124", "name": "PROJETO DE ALGORITMOS", "classNum": 1, "teacher": "MAURICIO SERRANO", "schedules": [[1, 0], [1, 4]]}],
    "FGA0131": [{"code": "FGA0131", "name": "ENGENHARIA DE SOFTWARE AUTOMOTIVO", "classNum": 1, "teacher": "EVANDRO LEONARDO SILVA TEIXEIRA", "schedules": [[4, 0], [4, 2]]}],
    "FGA0132": [{"code": "FGA0132", "name": "INSTRUMENTAÇÃO ELETRÔNICA PARA ENGENHARIA", "classNum": 1, "teacher": "CLAUDIA PATRICIA OCHOA DIAZ", "schedules": [[1, 1], [1, 3]]}],
    "FGA0133": [{"code": "FGA0133", "name": "ENGENHARIA ECONÔMICA", "classNum": 1, "teacher": "PAULA MEYER SOARES", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0133", "name": "ENGENHARIA ECONÔMICA", "classNum": 2, "teacher": "GLAUCENY CIRNE DE MEDEIROS", "schedules": [[4, 2], [4, 4]]}],
    "FGA0137": [{"code": "FGA0137", "name": "SISTEMAS DE BANCO DE DADOS 1", "classNum": 1, "teacher": "MAURICIO SERRANO", "schedules": [[0, 0], [0, 4]]}, {"code": "FGA0137", "name": "SISTEMAS DE BANCO DE DADOS 1", "classNum": 2, "teacher": "GLAUCO VITOR PEDROSA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0137", "name": "SISTEMAS DE BANCO DE DADOS 1", "classNum": 3, "teacher": "GLAUCO VITOR PEDROSA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0138": [{"code": "FGA0138", "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "classNum": 1, "teacher": "HILMER RODRIGUES NERI", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0138", "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "classNum": 2, "teacher": "CARLA SILVA ROCHA AGUIAR", "schedules": [[1, 2], [1, 4]]}, {"code": "FGA0138", "name": "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "classNum": 3, "teacher": "RICARDO AJAX DIAS KOSLOSKI", "schedules": [[3, 0], [3, 2]]}],
    "FGA0141": [{"code": "FGA0141", "name": "GESTÃO AMBIENTAL NO SETOR ENERGÉTICO", "classNum": 1, "teacher": "MARIA VITORIA DUARTE FERRARI", "schedules": [[1, 2], [1, 4]]}],
    "FGA0142": [{"code": "FGA0142", "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "classNum": 1, "teacher": "TIAGO ALVES DA FONSECA", "schedules": [[0, 0], [0, 4]]}, {"code": "FGA0142", "name": "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "classNum": 2, "teacher": "TIAGO ALVES DA FONSECA", "schedules": [[1, 0], [1, 2]]}],
    "FGA0146": [{"code": "FGA0146", "name": "ESTRUTURAS DE DADOS 1", "classNum": 1, "teacher": "NILTON CORREIA DA SILVA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0146", "name": "ESTRUTURAS DE DADOS 1", "classNum": 2, "teacher": "JOHN LENON CARDOSO GARDENGHI", "schedules": [[1, 1], [1, 3]]}],
    "FGA0148": [{"code": "FGA0148", "name": "ENGENHARIA DE SEGURANÇA DO TRABALHO", "classNum": 1, "teacher": "MARIA ALZIRA DE ARAUJO NUNES", "schedules": [[1, 0]]}, {"code": "FGA0148", "name": "ENGENHARIA DE SEGURANÇA DO TRABALHO", "classNum": 2, "teacher": "MARIA ALZIRA DE ARAUJO NUNES", "schedules": [[0, 0]]}],
    "FGA0150": [{"code": "FGA0150", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 1, "teacher": "DIOGO CAETANO GARCIA", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0150", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 2, "teacher": "JULIANA PETROCCHI RODRIGUES", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0150", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 3, "teacher": "RICARDO AJAX DIAS KOSLOSKI", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0150", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 4, "teacher": "LUI TXAI CALVOSO HABL", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0150", "name": "PROJETO INTEGRADOR DE ENGENHARIA 1", "classNum": 5, "teacher": "RAFAEL RODRIGUES DA SILVA", "schedules": [[4, 0], [4, 2]]}],
    "FGA0152": [{"code": "FGA0152", "name": "ERGONOMIA DO PRODUTO", "classNum": 1, "teacher": "MATEUS RODRIGUES MIRANDA", "schedules": [[0, 2], [0, 4]]}],
    "FGA0154": [{"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 1, "teacher": "GLAUCENY CIRNE DE MEDEIROS", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 2, "teacher": "SUZANA MOREIRA AVILA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0154", "name": "MECANICA DOS SÓLIDOS 1 PARA ENGENHARIA", "classNum": 3, "teacher": "SERGIO HENRIQUE DA SILVA CARNEIRO", "schedules": [[0, 1], [0, 3]]}],
    "FGA0155": [{"code": "FGA0155", "name": "INTRODUÇÃO AO DESIGN E CONCEPÇÃO DE VEÍCULOS", "classNum": 1, "teacher": "ENEIDA GONZALEZ VALDES", "schedules": [[3, 2], [3, 4]]}],
    "FGA0156": [{"code": "FGA0156", "name": "COMBUSTÍVEIS E BIOCOMBUSTÍVEIS", "classNum": 1, "teacher": "JULIANA PETROCCHI RODRIGUES", "schedules": [[3, 2], [3, 4]]}],
    "FGA0157": [{"code": "FGA0157", "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "classNum": 1, "teacher": "MARILIA MIRANDA FORTE GOMES", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0157", "name": "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "classNum": 2, "teacher": "RODRIGO ANDRES MIRANDA CERDA", "schedules": [[1, 0], [1, 2]]}],
    "FGA0158": [{"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 1, "teacher": "ANDRE LUIZ PERON MARTINS LANNA", "schedules": [[3, 0], [3, 2]]}, {"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 2, "teacher": "HENRIQUE GOMES DE MOURA", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 3, "teacher": "HENRIQUE GOMES DE MOURA", "schedules": [[2, 1], [2, 3]]}, {"code": "FGA0158", "name": "ORIENTAÇÃO A OBJETOS", "classNum": 6, "teacher": "ANDRE LUIZ PERON MARTINS LANNA", "schedules": [[2, 0], [2, 2]]}],
    "FGA0160": [{"code": "FGA0160", "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA", "classNum": 2, "teacher": "RODRIGO ANDRES MIRANDA CERDA", "schedules": [[2, 0], [2, 2]]}, {"code": "FGA0160", "name": "MÉTODOS NUMÉRICOS PARA ENGENHARIA", "classNum": 3, "teacher": "LINDOMAR BOMFIM DE CARVALHO DE JESUS", "schedules": [[1, 0], [1, 2]]}],
    "FGA0161": [{"code": "FGA0161", "name": "ENGENHARIA E AMBIENTE", "classNum": 1, "teacher": "MARIA VITORIA DUARTE FERRARI", "schedules": [[0, 2], [0, 4]]}, {"code": "FGA0161", "name": "ENGENHARIA E AMBIENTE", "classNum": 2, "teacher": "JOSIANE DO SOCORRO AGUIAR DE SOUZA DE OLIVEIRA CAMPOS", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0161", "name": "ENGENHARIA E AMBIENTE", "classNum": 3, "teacher": "FERNANDO PAIVA SCARDUA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0163": [{"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 1, "teacher": "PATRICIA REGINA SOBRAL BRAGA", "schedules": [[3, 2]]}, {"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 2, "teacher": "RUDI HENRI VAN ELS", "schedules": [[0, 0]]}, {"code": "FGA0163", "name": "INTRODUÇÃO À ENGENHARIA", "classNum": 3, "teacher": "RICARDO RAMOS FRAGELLI", "schedules": [[3, 0]]}],
    "FGA0164": [{"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 1, "teacher": "SANDRA MARIA FALEIROS LIMA", "schedules": [[3, 2], [3, 4]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 2, "teacher": "SANDRA MARIA FALEIROS LIMA", "schedules": [[2, 2], [2, 4]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 3, "teacher": "VANESSA MARIA DE CASTRO", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0164", "name": "HUMANIDADES E CIDADANIA", "classNum": 4, "teacher": "VANESSA MARIA DE CASTRO", "schedules": [[4, 1], [4, 3]]}],
    "FGA0166": [{"code": "FGA0166", "name": "ELEMENTOS E MÉTODOS EM ELETRÔNICA", "classNum": 1, "teacher": "FABIANO ARAUJO SOARES", "schedules": [[3, 1], [3, 3]]}],
    "FGA0167": [{"code": "FGA0167", "name": "SISTEMAS AUTOMOTIVOS", "classNum": 1, "teacher": "SALEH BARBOSA KHALIL", "schedules": [[3, 1], [3, 3]]}],
    "FGA0168": [{"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 1, "teacher": "EUCLIDES DELGADO MARQUES SANT ANNA", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 2, "teacher": "SALEH BARBOSA KHALIL", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 4, "teacher": "MATEUS RODRIGUES MIRANDA", "schedules": [[4, 1], [4, 3], [4, 4]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 5, "teacher": "ENEIDA GONZALEZ VALDES", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "FGA0168", "name": "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "classNum": 6, "teacher": "HIMILSYS HERNANDEZ GONZALEZ", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "FGA0169": [{"code": "FGA0169", "name": "FONTES DE ENERGIA E TECNOLOGIAS DE CONVERSÃO", "classNum": 1, "teacher": "AUGUSTO CESAR DE MENDONCA BRASIL", "schedules": [[0, 2], [0, 4]]}],
    "FGA0170": [{"code": "FGA0170", "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "classNum": 1, "teacher": "DANIEL SUNDFELD LIMA", "schedules": [[2, 0], [2, 2]]}],
    "FGA0172": [{"code": "FGA0172", "name": "REQUISITOS DE SOFTWARE", "classNum": 1, "teacher": "GEORGE MARSICANO CORREA", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0172", "name": "REQUISITOS DE SOFTWARE", "classNum": 2, "teacher": "GEORGE MARSICANO CORREA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0172", "name": "REQUISITOS DE SOFTWARE", "classNum": 3, "teacher": "ANDRE BARROS DE SALES", "schedules": [[0, 1], [0, 3]]}],
    "FGA0173": [{"code": "FGA0173", "name": "INTERAÇÃO HUMANO COMPUTADOR", "classNum": 1, "teacher": "ANDRE BARROS DE SALES (45h)\\nEDUARDO GABRIEL QUEIROZ PALMEIRA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0173", "name": "INTERAÇÃO HUMANO COMPUTADOR", "classNum": 2, "teacher": "REJANE MARIA DA COSTA FIGUEIREDO", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0173", "name": "INTERAÇÃO HUMANO COMPUTADOR", "classNum": 4, "teacher": "SERGIO ANTONIO ANDRADE DE FREITAS", "schedules": [[1, 0], [1, 2]]}],
    "FGA0174": [{"code": "FGA0174", "name": "DESENVOLVIMENTO SUSTENTÁVEL", "classNum": 1, "teacher": "JOSIANE DO SOCORRO AGUIAR DE SOUZA DE OLIVEIRA CAMPOS", "schedules": [[1, 0], [1, 2]]}],
    "FGA0175": [{"code": "FGA0175", "name": "ENGENHARIA DE PETRÓLEO E GÁS", "classNum": 1, "teacher": "FELIPE CHAGAS STORTI", "schedules": [[4, 1], [4, 3]]}],
    "FGA0179": [{"code": "FGA0179", "name": "MECANICA DOS SÓLIDOS 2 PARA ENGENHARIA", "classNum": 1, "teacher": "MAURA ANGELICA MILFONT SHZU", "schedules": [[1, 1], [1, 3]]}],
    "FGA0184": [{"code": "FGA0184", "name": "GESTÃO DA PRODUÇÃO E QUALIDADE", "classNum": 1, "teacher": "EUCLIDES DELGADO MARQUES SANT ANNA", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0184", "name": "GESTÃO DA PRODUÇÃO E QUALIDADE", "classNum": 2, "teacher": "REJANE MARIA DA COSTA FIGUEIREDO", "schedules": [[3, 1], [3, 3]]}],
    "FGA0188": [{"code": "FGA0188", "name": "MÉTODOS EXPERIMENTAIS PARA ENGENHARIA", "classNum": 1, "teacher": "RODRIGO ARBEY MUNOZ MENESES", "schedules": [[0, 1], [0, 3]]}],
    "FGA0190": [{"code": "FGA0190", "name": "PROJETO DE ELEMENTOS AUTOMOTIVOS", "classNum": 1, "teacher": "RITA DE CASSIA SILVA (60h)\\nALESSANDRO BORGES DE SOUSA OLIVEIRA", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "FGA0191": [{"code": "FGA0191", "name": "MATERIAIS COMPOSTOS E PLÁSTICOS", "classNum": 1, "teacher": "SANDRA MARIA DA LUZ (30h)\\nEMMANUEL PACHECO ROCHA LIMA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0194": [{"code": "FGA0194", "name": "ARQUITETURA DE MOTORES DE COMBUSTÃO INTERNA", "classNum": 1, "teacher": "FABIO ALFAIA DA CUNHA", "schedules": [[3, 2], [3, 4]]}],
    "FGA0198": [{"code": "FGA0198", "name": "PROJETO COM CIRCUITOS RECONFIGURAVEIS", "classNum": 1, "teacher": "DANIEL MAURICIO MUNOZ ARBOLEDA", "schedules": [[0, 1], [0, 3]]}],
    "FGA0204": [{"code": "FGA0204", "name": "DINÂMICA DOS FLUÍDOS", "classNum": 1, "teacher": "AUGUSTO CESAR DE MENDONCA BRASIL (15h)\\nLUCIANO GONCALVES NOLETO", "schedules": [[1, 0], [1, 2], [1, 4]]}, {"code": "FGA0204", "name": "DINÂMICA DOS FLUÍDOS", "classNum": 2, "teacher": "AUGUSTO CESAR DE MENDONCA BRASIL (60h)\\nLUCIANO GONCALVES NOLETO", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "FGA0206": [{"code": "FGA0206", "name": "ENGENHARIA DE PRODUTO DE SOFTWARE", "classNum": 1, "teacher": "HILMER RODRIGUES NERI", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0206", "name": "ENGENHARIA DE PRODUTO DE SOFTWARE", "classNum": 2, "teacher": "RICARDO MATOS CHAIM", "schedules": [[2, 2], [2, 4]]}],
    "FGA0208": [{"code": "FGA0208", "name": "ARQUITETURA E DESENHO DE SOFTWARE", "classNum": 1, "teacher": "MILENE SERRANO", "schedules": [[1, 0], [1, 4]]}, {"code": "FGA0208", "name": "ARQUITETURA E DESENHO DE SOFTWARE", "classNum": 2, "teacher": "MILENE SERRANO", "schedules": [[0, 0], [0, 4]]}],
    "FGA0210": [{"code": "FGA0210", "name": "PARADIGMAS DE PROGRAMAÇÃO", "classNum": 1, "teacher": "EDSON ALVES DA COSTA JUNIOR", "schedules": [[5, 1], [5, 3]]}],
    "FGA0211": [{"code": "FGA0211", "name": "FUNDAMENTOS DE REDES DE COMPUTADORES", "classNum": 1, "teacher": "CLENIO EMIDIO DA FONSECA", "schedules": [[4, 0], [4, 4]]}],
    "FGA0214": [{"code": "FGA0214", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA", "classNum": 1, "teacher": "BRUNO LUIZ PEREIRA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0214", "name": "TÓPICOS ESPECIAIS EM ENGENHARIA AUTOMOTIVA", "classNum": 2, "teacher": "SANDRA MARIA DA LUZ", "schedules": [[0, 4]]}],
    "FGA0219": [{"code": "FGA0219", "name": "PROCESSAMENTO DE SINAIS", "classNum": 1, "teacher": "CRISTIANO JACQUES MIOSSO RODRIGUES MENDES", "schedules": [[0, 2], [0, 4]]}],
    "FGA0221": [{"code": "FGA0221", "name": "INTELIGÊNCIA ARTIFICIAL", "classNum": 1, "teacher": "FABIANO ARAUJO SOARES", "schedules": [[4, 1], [4, 3]]}],
    "FGA0226": [{"code": "FGA0226", "name": "ELETRÔNICA VEICULAR", "classNum": 1, "teacher": "EVANDRO LEONARDO SILVA TEIXEIRA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0228": [{"code": "FGA0228", "name": "PROJETO DE SISTEMAS AUTOMOTIVOS", "classNum": 1, "teacher": "CARLA TATIANA MOTA ANFLOR", "schedules": [[0, 0], [0, 2]]}],
    "FGA0229": [{"code": "FGA0229", "name": "ANÁLISE ESTRUTURAL MÉTODO DOS ELEMENTOS FINITOS", "classNum": 1, "teacher": "MAURA ANGELICA MILFONT SHZU", "schedules": [[0, 1], [0, 3]]}],
    "FGA0230": [{"code": "FGA0230", "name": "DINÂMICA DE VEÍCULOS", "classNum": 1, "teacher": "SUZANA MOREIRA AVILA", "schedules": [[0, 1], [0, 3]]}],
    "FGA0232": [{"code": "FGA0232", "name": "INTEGRAÇÃO E TESTES", "classNum": 1, "teacher": "HENRIQUE GOMES DE MOURA", "schedules": [[1, 0], [1, 2]]}],
    "FGA0233": [{"code": "FGA0233", "name": "SENSORES E TRANSDUTORES", "classNum": 1, "teacher": "ALESSANDRO BORGES DE SOUSA OLIVEIRA", "schedules": [[0, 1], [0, 3]]}],
    "FGA0236": [{"code": "FGA0236", "name": "BIORREFINARIAS", "classNum": 1, "teacher": "MARIA DEL PILAR HIDALGO FALLA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0238": [{"code": "FGA0238", "name": "TESTES DE SOFTWARE", "classNum": 1, "teacher": "ELAINE VENSON", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0238", "name": "TESTES DE SOFTWARE", "classNum": 2, "teacher": "ELAINE VENSON", "schedules": [[4, 1], [4, 3]]}],
    "FGA0240": [{"code": "FGA0240", "name": "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE", "classNum": 1, "teacher": "RENATO CORAL SAMPAIO", "schedules": [[4, 1], [4, 3]]}, {"code": "FGA0240", "name": "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE", "classNum": 2, "teacher": "CARLA SILVA ROCHA AGUIAR", "schedules": [[4, 0], [4, 2]]}],
    "FGA0242": [{"code": "FGA0242", "name": "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES", "classNum": 1, "teacher": "ANDRE LUIZ PERON MARTINS LANNA", "schedules": [[4, 0], [4, 2]]}],
    "FGA0244": [{"code": "FGA0244", "name": "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS", "classNum": 1, "teacher": "FERNANDO WILLIAM CRUZ", "schedules": [[3, 0], [3, 2]]}],
    "FGA0250": [{"code": "FGA0250", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 1, "teacher": "SANDRO AUGUSTO PAVLIK HADDAD", "schedules": [[4, 2], [3, 4]]}, {"code": "FGA0250", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 2, "teacher": "CARLA SILVA ROCHA AGUIAR (30h)\\nRICARDO MATOS CHAIM", "schedules": [[4, 2], [3, 4]]}, {"code": "FGA0250", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 3, "teacher": "ALEX REIS", "schedules": [[4, 2], [3, 4]]}, {"code": "FGA0250", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 4, "teacher": "POLLIANA CANDIDA OLIVEIRA MARTINS", "schedules": [[4, 2], [3, 4]]}, {"code": "FGA0250", "name": "PROJETO INTEGRADOR DE ENGENHARIA 2", "classNum": 5, "teacher": "RHANDER VIANA", "schedules": [[4, 2], [3, 4]]}],
    "FGA0252": [{"code": "FGA0252", "name": "SISTEMAS HIDROELÉTRICOS", "classNum": 1, "teacher": "RUDI HENRI VAN ELS (15h)\\nLUCIANO GONCALVES NOLETO", "schedules": [[4, 0], [0, 2], [0, 4]]}],
    "FGA0254": [{"code": "FGA0254", "name": "CIÊNCIAS AEROESPACIAIS", "classNum": 1, "teacher": "GABRIELA CUNHA POSSA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0261": [{"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 1, "teacher": "ROBERTO DE SOUZA BAPTISTA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 2, "teacher": "GUILLERMO ALVAREZ BESTARD", "schedules": [[5, 0], [5, 2]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 3, "teacher": "MARCUS VINICIUS BATISTUTA", "schedules": [[1, 1], [1, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 4, "teacher": "EULER DE VILHENA GARCIA", "schedules": [[3, 1], [3, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 5, "teacher": "HENRIQUE GOMES DE MOURA", "schedules": [[5, 2], [2, 4]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 6, "teacher": "CLAUDIA PATRICIA OCHOA DIAZ", "schedules": [[0, 1], [0, 3]]}, {"code": "FGA0261", "name": "TÓPICOS ESPECIAIS EM ELETRONICA", "classNum": 7, "teacher": "CRISTIANO JACQUES MIOSSO RODRIGUES MENDES", "schedules": [[3, 2], [3, 4]]}],
    "FGA0262": [{"code": "FGA0262", "name": "TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA", "classNum": 1, "teacher": "LOANA NUNES VELASCO", "schedules": [[1, 2], [1, 4]]}],
    "FGA0265": [{"code": "FGA0265", "name": "ECONOMIA DE ENERGIA", "classNum": 1, "teacher": "PAULA MEYER SOARES", "schedules": [[0, 1], [0, 3]]}],
    "FGA0266": [{"code": "FGA0266", "name": "ACÚSTICA E VIBRAÇÕES VEICULARES", "classNum": 1, "teacher": "MARIA ALZIRA DE ARAUJO NUNES", "schedules": [[1, 2], [1, 4]]}],
    "FGA0267": [{"code": "FGA0267", "name": "PROJETO DE ESTRUTURAS DE VEICULOS", "classNum": 1, "teacher": "HENRIQUE GOMES DE MOURA", "schedules": [[2, 0], [2, 2]]}],
    "FGA0270": [{"code": "FGA0270", "name": "SISTEMAS HIDRÁULICOS E PNEUMÁTICOS", "classNum": 1, "teacher": "BRUNO LUIZ PEREIRA", "schedules": [[3, 1], [3, 3]]}],
    "FGA0278": [{"code": "FGA0278", "name": "QUALIDADE DE SOFTWARE 1", "classNum": 1, "teacher": "CRISTIANE SOARES RAMOS", "schedules": [[1, 0], [1, 2]]}, {"code": "FGA0278", "name": "QUALIDADE DE SOFTWARE 1", "classNum": 2, "teacher": "CRISTIANE SOARES RAMOS", "schedules": [[3, 0], [3, 2]]}],
    "FGA0285": [{"code": "FGA0285", "name": "INTRODUÇÃO À MECÂNICA DA FRATURA", "classNum": 1, "teacher": "CARLA TATIANA MOTA ANFLOR", "schedules": [[1, 0], [1, 2]]}],
    "FGA0286": [{"code": "FGA0286", "name": "FUNDAMENTOS DO MÉTODO DOS ELEMENTOS FINITOS", "classNum": 1, "teacher": "MANUEL NASCIMENTO DIAS BARCELOS JUNIOR", "schedules": [[1, 2], [1, 4]]}],
    "FGA0291": [{"code": "FGA0291", "name": "MECÂNICA DE ESTRUTURAS AERONÁUTICAS", "classNum": 1, "teacher": "ARTEM ANDRIANOV", "schedules": [[1, 1], [1, 3]]}],
    "FGA0301": [{"code": "FGA0301", "name": "INSTALAÇÕES ELÉTRICAS EM SISTEMAS DE ENERGIA", "classNum": 1, "teacher": "ALEX REIS", "schedules": [[1, 2], [1, 4]]}],
    "FGA0308": [{"code": "FGA0308", "name": "ELETRÔNICA EMBARCADA", "classNum": 1, "teacher": "GUILLERMO ALVAREZ BESTARD", "schedules": [[4, 0], [4, 2], [4, 4]]}],
    "FGA0309": [{"code": "FGA0309", "name": "SISTEMAS OPERACIONAIS EMBARCADOS", "classNum": 1, "teacher": "DIOGO CAETANO GARCIA", "schedules": [[3, 0], [3, 2], [3, 4]]}],
    "FGA0320": [{"code": "FGA0320", "name": "FELICIDADE", "classNum": 1, "teacher": "WANDER CLEBER MARIA PEREIRA DA SILVA", "schedules": [[3, 1], [3, 3]]}],
    "CIC0002": [{"code": "CIC0002", "name": "FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO", "classNum": 1, "teacher": "VINICIUS RUELA PEREIRA BORGES", "schedules": [[4, 0], [4, 2]]}, {"code": "CIC0002", "name": "FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO", "classNum": 2, "teacher": "JORGE CARLOS LUCERO", "schedules": [[0, 1], [0, 3]]}, {"code": "CIC0002", "name": "FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO", "classNum": 3, "teacher": "THIAGO DE PAULO FALEIROS", "schedules": [[6, 0], [6, 2]]}],
    "CIC0003": [{"code": "CIC0003", "name": "INTRODUÇÃO AOS SISTEMAS COMPUTACIONAIS", "classNum": 1, "teacher": "MARCUS VINICIUS LAMAR", "schedules": [[3, 1], [3, 3]]}],
    "CIC0004": [{"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 1, "teacher": "LUIS PAULO FAINA GARCIA (60h)\\nCARLA DENISE CASTANHO", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 2, "teacher": "JORGE HENRIQUE CABRAL FERNANDES (30h)\\nGUILHERME NOVAES RAMOS", "schedules": [[0, 1], [1, 3], [1, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 3, "teacher": "CARLA DENISE CASTANHO", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 4, "teacher": "PEDRO GARCIA FREITAS", "schedules": [[4, 0], [3, 2]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 5, "teacher": "VINICIUS RUELA PEREIRA BORGES", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 6, "teacher": "EDISON ISHIKAWA", "schedules": [[5, 1], [5, 2], [5, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 7, "teacher": "PEDRO GARCIA FREITAS", "schedules": [[5, 0], [5, 2]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 8, "teacher": "CLENIO EMIDIO DA FONSECA", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 9, "teacher": "FABRICIO ATAIDES BRAZ", "schedules": [[4, 0], [0, 1], [0, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 10, "teacher": "DANIEL SUNDFELD LIMA", "schedules": [[3, 0], [1, 2], [1, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 11, "teacher": "NILTON CORREIA DA SILVA", "schedules": [[4, 0], [0, 1], [0, 3]]}],
    "CIC0005": [{"code": "CIC0005", "name": "FORMAÇÃO DOCENTE EM COMPUTAÇÃO", "classNum": 1, "teacher": "JONATHAN ROSA MOREIRA (60h)\\nMARIA DE FATIMA RAMOS BRANDAO", "schedules": [[6, 1], [6, 3]]}],
    "CIC0007": [{"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 1, "teacher": "CAMILO CHANG DOREA", "schedules": [[5, 1], [6, 2]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 2, "teacher": "CAMILO CHANG DOREA", "schedules": [[5, 1], [6, 2]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 3, "teacher": "CAMILO CHANG DOREA", "schedules": [[4, 2], [4, 4]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 4, "teacher": "ROBERTA BARBOSA OLIVEIRA (30h)\\nCAMILO CHANG DOREA", "schedules": [[3, 1], [4, 4]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 5, "teacher": "CAMILO CHANG DOREA", "schedules": [[5, 1], [6, 2]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 6, "teacher": "CAMILO CHANG DOREA", "schedules": [[4, 2], [4, 4]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 7, "teacher": "ROBERTA BARBOSA OLIVEIRA", "schedules": [[3, 1], [3, 3]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 8, "teacher": "ROBERTA BARBOSA OLIVEIRA (30h)\\nCAMILO CHANG DOREA", "schedules": [[4, 2], [3, 3]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 9, "teacher": "ROBERTA BARBOSA OLIVEIRA (30h)\\nCAMILO CHANG DOREA", "schedules": [[4, 2], [3, 3]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 10, "teacher": "CAMILO CHANG DOREA", "schedules": [[5, 1], [6, 2]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 11, "teacher": "ROBERTA BARBOSA OLIVEIRA (30h)\\nCAMILO CHANG DOREA", "schedules": [[3, 1], [4, 4]]}, {"code": "CIC0007", "name": "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", "classNum": 12, "teacher": "ROBERTA BARBOSA OLIVEIRA", "schedules": [[3, 1], [3, 3]]}],
    "CIC0087": [{"code": "CIC0087", "name": "TOPICOS AVANCADOS EM COMPUTADORES", "classNum": 1, "teacher": "Frank Ned Santa Cruz de Oliveira", "schedules": [[5, 1], [5, 3]]}, {"code": "CIC0087", "name": "TOPICOS AVANCADOS EM COMPUTADORES", "classNum": 2, "teacher": "LORENA DE SOUZA BEZERRA BORGES", "schedules": [[6, 0], [6, 2]]}, {"code": "CIC0087", "name": "TOPICOS AVANCADOS EM COMPUTADORES", "classNum": 3, "teacher": "MARCELO ANTONIO MAROTTA", "schedules": [[0, 4]]}],
    "CIC0090": [{"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 1, "teacher": "DANIEL DE PAULA PORTO", "schedules": [[3, 1], [3, 3]]}, {"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 2, "teacher": "EDUARDO ADILIO PELINSON ALCHIERI", "schedules": [[1, 2], [1, 4]]}, {"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 3, "teacher": "MARCOS FAGUNDES CAETANO", "schedules": [[1, 1], [1, 3]]}, {"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 4, "teacher": "ELIZA HELENA AREIAS GOMES", "schedules": [[5, 1], [5, 3]]}, {"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 5, "teacher": "CARLA MARIA CHAGAS E CAVALCANTE KOIKE", "schedules": [[5, 1], [5, 3]]}, {"code": "CIC0090", "name": "ESTRUTURAS DE DADOS", "classNum": 6, "teacher": "LUIS PAULO FAINA GARCIA", "schedules": [[1, 0], [1, 2]]}],
    "CIC0093": [{"code": "CIC0093", "name": "LINGUAGENS DE PROGRAMACAO", "classNum": 1, "teacher": "VANDER RAMOS ALVES", "schedules": [[0, 0], [0, 2]]}, {"code": "CIC0093", "name": "LINGUAGENS DE PROGRAMACAO", "classNum": 2, "teacher": "MARCELO LADEIRA", "schedules": [[5, 2], [5, 4]]}, {"code": "CIC0093", "name": "LINGUAGENS DE PROGRAMACAO", "classNum": 3, "teacher": "VANDER RAMOS ALVES", "schedules": [[1, 0], [1, 2]]}],
    "CIC0095": [{"code": "CIC0095", "name": "TEORIA DA COMPUTACAO", "classNum": 1, "teacher": "THIAGO DE PAULO FALEIROS", "schedules": [[5, 1], [5, 3]]}],
    "CIC0097": [{"code": "CIC0097", "name": "BANCOS DE DADOS", "classNum": 1, "teacher": "MARISTELA TERTO DE HOLANDA", "schedules": [[3, 1], [3, 3]]}, {"code": "CIC0097", "name": "BANCOS DE DADOS", "classNum": 2, "teacher": "MARISTELA TERTO DE HOLANDA", "schedules": [[5, 1], [5, 3]]}],
    "CIC0099": [{"code": "CIC0099", "name": "ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES", "classNum": 1, "teacher": "MARCUS VINICIUS LAMAR", "schedules": [[3, 0], [3, 2]]}, {"code": "CIC0099", "name": "ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES", "classNum": 2, "teacher": "RICARDO PEZZUOL JACOBI", "schedules": [[3, 1], [3, 3]]}, {"code": "CIC0099", "name": "ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES", "classNum": 3, "teacher": "FLAVIO DE BARROS VIDAL", "schedules": [[1, 1], [1, 3]]}, {"code": "CIC0099", "name": "ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES", "classNum": 4, "teacher": "CARLA MARIA CHAGAS E CAVALCANTE KOIKE", "schedules": [[5, 0], [5, 2]]}],
    "CIC0101": [{"code": "CIC0101", "name": "SISTEMAS DE INFORMACAO", "classNum": 1, "teacher": "GENAINA NUNES RODRIGUES", "schedules": [[1, 1], [1, 3]]}, {"code": "CIC0101", "name": "SISTEMAS DE INFORMACAO", "classNum": 2, "teacher": "ELIZA HELENA AREIAS GOMES", "schedules": [[6, 1], [6, 3]]}],
    "CIC0104": [{"code": "CIC0104", "name": "SOFTWARE BASICO", "classNum": 1, "teacher": "MARCELO LADEIRA", "schedules": [[1, 0], [1, 2]]}, {"code": "CIC0104", "name": "SOFTWARE BASICO", "classNum": 2, "teacher": "BRUNO LUIGGI MACCHIAVELLO ESPINOZA", "schedules": [[3, 0], [3, 2]]}],
    "CIC0105": [{"code": "CIC0105", "name": "ENGENHARIA DE SOFTWARE", "classNum": 1, "teacher": "FERNANDO ANTONIO DE ARAUJO CHACON DE ALBUQUERQUE", "schedules": [[6, 0], [6, 2]]}, {"code": "CIC0105", "name": "ENGENHARIA DE SOFTWARE", "classNum": 2, "teacher": "GENAINA NUNES RODRIGUES", "schedules": [[0, 1], [0, 3]]}],
    "CIC0108": [{"code": "CIC0108", "name": "SISTEMAS OPERACIONAIS", "classNum": 1, "teacher": "ALETEIA PATRICIA FAVACHO DE ARAUJO VON PAUMGARTTEN", "schedules": [[0, 0], [0, 2], [0, 4]]}],
    "CIC0124": [{"code": "CIC0124", "name": "REDES DE COMPUTADORES", "classNum": 1, "teacher": "PRISCILA AMERICA SOLIS MENDEZ BARRETO", "schedules": [[3, 0], [3, 2]]}, {"code": "CIC0124", "name": "REDES DE COMPUTADORES", "classNum": 2, "teacher": "MARCOS FAGUNDES CAETANO", "schedules": [[0, 1], [0, 3]]}, {"code": "CIC0124", "name": "REDES DE COMPUTADORES", "classNum": 3, "teacher": "JACIR LUIZ BORDIM", "schedules": [[5, 1], [5, 3]]}],
    "CIC0130": [{"code": "CIC0130", "name": "INTRODUÇÃO AOS SISTEMAS EMBARCADOS", "classNum": 1, "teacher": "RICARDO PEZZUOL JACOBI", "schedules": [[3, 0], [3, 2]]}],
    "CIC0135": [{"code": "CIC0135", "name": "INTRODUCAO A INTELIGENCIA ARTIFICIAL", "classNum": 1, "teacher": "DIBIO LEANDRO BORGES", "schedules": [[4, 1], [4, 3]]}, {"code": "CIC0135", "name": "INTRODUCAO A INTELIGENCIA ARTIFICIAL", "classNum": 2, "teacher": "LI WEIGANG", "schedules": [[3, 0], [3, 2]]}],
    "CIC0142": [{"code": "CIC0142", "name": "INFORMATICA E SOCIEDADE", "classNum": 1, "teacher": "LETICIA LOPES LEITE", "schedules": [[3, 4]]}, {"code": "CIC0142", "name": "INFORMATICA E SOCIEDADE", "classNum": 2, "teacher": "JORGE HENRIQUE CABRAL FERNANDES", "schedules": [[6, 0]]}],
    "CIC0152": [{"code": "CIC0152", "name": "INTRODUCAO A MICROINFORMATICA", "classNum": 1, "teacher": "ELIZA HELENA AREIAS GOMES", "schedules": [[2, 1], [2, 3]]}],
    "CIC0158": [{"code": "CIC0158", "name": "INFORMATICA APLICADA A EDUCACAO", "classNum": 1, "teacher": "GERMANA MENEZES DA NOBREGA", "schedules": [[5, 0], [5, 2]]}],
    "CIC0161": [{"code": "CIC0161", "name": "AUTÔMATOS E COMPUTABILIDADE", "classNum": 1, "teacher": "JORGE CARLOS LUCERO", "schedules": [[4, 0], [4, 2], [4, 3]]}],
    "CIC0169": [{"code": "CIC0169", "name": "PROGRAMAÇÃO COMPETITIVA", "classNum": 1, "teacher": "DANIEL DE PAULA PORTO", "schedules": [[4, 1], [4, 3]]}],
    "CIC0177": [{"code": "CIC0177", "name": "ARQUITETURA DE PROCESSADORES DIGITAIS", "classNum": 1, "teacher": "WILSON HENRIQUE VENEZIANO", "schedules": [[5, 1], [5, 3]]}],
    "CIC0182": [{"code": "CIC0182", "name": "LÓGICA COMPUTACIONAL 1", "classNum": 1, "teacher": "CLAUDIA NALON", "schedules": [[4, 0], [4, 2]]}, {"code": "CIC0182", "name": "LÓGICA COMPUTACIONAL 1", "classNum": 2, "teacher": "FLAVIO LEONARDO CAVALCANTI DE MOURA", "schedules": [[6, 0], [6, 2]]}],
    "CIC0188": [{"code": "CIC0188", "name": "INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO", "classNum": 1, "teacher": "GUILHERME NOVAES RAMOS", "schedules": [[1, 4]]}],
    "CIC0189": [{"code": "CIC0189", "name": "PROJETO E ANÁLISE DE ALGORITMOS", "classNum": 1, "teacher": "JAN MENDONCA CORREA", "schedules": [[3, 0], [3, 2]]}, {"code": "CIC0189", "name": "PROJETO E ANÁLISE DE ALGORITMOS", "classNum": 2, "teacher": "FLAVIO LEONARDO CAVALCANTI DE MOURA", "schedules": [[5, 0], [5, 2]]}],
    "CIC0190": [{"code": "CIC0190", "name": "INTRODUÇÃO A SISTEMAS MULTIAGENTE", "classNum": 1, "teacher": "EDISON ISHIKAWA", "schedules": [[5, 0]]}],
    "CIC0191": [{"code": "CIC0191", "name": "INTRODUÇÃO AO DESENVOLVIMENTO DE JOGOS", "classNum": 1, "teacher": "CARLA DENISE CASTANHO", "schedules": [[3, 2], [3, 4]]}],
    "CIC0197": [{"code": "CIC0197", "name": "TECNICAS DE PROGRAMAÇÃO 1", "classNum": 1, "teacher": "FERNANDO ANTONIO DE ARAUJO CHACON DE ALBUQUERQUE", "schedules": [[6, 1], [6, 3]]}, {"code": "CIC0197", "name": "TECNICAS DE PROGRAMAÇÃO 1", "classNum": 2, "teacher": "FERNANDO ANTONIO DE ARAUJO CHACON DE ALBUQUERQUE", "schedules": [[1, 1], [1, 3]]}, {"code": "CIC0197", "name": "TECNICAS DE PROGRAMAÇÃO 1", "classNum": 3, "teacher": "ROBERTA BARBOSA OLIVEIRA", "schedules": [[1, 1], [1, 3]]}],
    "CIC0198": [{"code": "CIC0198", "name": "TECNICAS DE PROGRAMAÇÃO 2", "classNum": 1, "teacher": "RODRIGO BONIFACIO DE ALMEIDA", "schedules": [[0, 1], [0, 3]]}, {"code": "CIC0198", "name": "TECNICAS DE PROGRAMAÇÃO 2", "classNum": 2, "teacher": "JAN MENDONCA CORREA", "schedules": [[4, 0], [4, 2]]}],
    "CIC0199": [{"code": "CIC0199", "name": "TEORIA E APLICAÇÃO DE GRAFOS", "classNum": 1, "teacher": "DIBIO LEANDRO BORGES", "schedules": [[3, 1], [3, 3]]}],
    "CIC0200": [{"code": "CIC0200", "name": "METODOLOGIA CIENTÍFICA", "classNum": 1, "teacher": "RICARDO LOPES DE QUEIROZ", "schedules": [[1, 4]]}],
    "CIC0201": [{"code": "CIC0201", "name": "SEGURANÇA COMPUTACIONAL", "classNum": 1, "teacher": "PRISCILA AMERICA SOLIS MENDEZ BARRETO", "schedules": [[1, 1], [1, 3]]}, {"code": "CIC0201", "name": "SEGURANÇA COMPUTACIONAL", "classNum": 2, "teacher": "LORENA DE SOUZA BEZERRA BORGES", "schedules": [[5, 0], [5, 2]]}],
    "CIC0202": [{"code": "CIC0202", "name": "PROGRAMAÇÃO CONCORRENTE", "classNum": 1, "teacher": "EDUARDO ADILIO PELINSON ALCHIERI", "schedules": [[1, 1], [1, 3]]}],
    "CIC0203": [{"code": "CIC0203", "name": "COMPUTAÇÃO EXPERIMENTAL", "classNum": 1, "teacher": "EDNA DIAS CANEDO", "schedules": [[0, 1], [0, 3]]}],
    "CIC0204": [{"code": "CIC0204", "name": "COMPILADORES", "classNum": 1, "teacher": "GERMANA MENEZES DA NOBREGA", "schedules": [[4, 0], [4, 2]]}],
    "CIC0205": [{"code": "CIC0205", "name": "FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "classNum": 1, "teacher": "ALETEIA PATRICIA FAVACHO DE ARAUJO VON PAUMGARTTEN", "schedules": [[1, 0], [1, 2]]}],
    "CIC0206": [{"code": "CIC0206", "name": "MÉTODOS DE PESQUISA NA LICENCIATURA EM COMPUTAÇÃO", "classNum": 1, "teacher": "JORGE HENRIQUE CABRAL FERNANDES", "schedules": [[5, 0]]}],
    "CIC0207": [{"code": "CIC0207", "name": "PROJETO INTERDISCIPLINAR DE LICENCIATURA EM COMPUTAÇÃO", "classNum": 1, "teacher": "LETICIA LOPES LEITE", "schedules": [[5, 4], [0, 5]]}],
    "CIC0208": [{"code": "CIC0208", "name": "PRODUÇÃO DE MATERIAL DIDÁTICO", "classNum": 1, "teacher": "JONATHAN ROSA MOREIRA (75h)\\nMARIA DE FATIMA RAMOS BRANDAO", "schedules": [[5, 0]]}],
    "CIC0209": [{"code": "CIC0209", "name": "SUPERVISÃO DE PRODUÇÃO DE MATERIAL DIDÁTICO", "classNum": 1, "teacher": "JONATHAN ROSA MOREIRA (30h)\\nMARIA DE FATIMA RAMOS BRANDAO", "schedules": [[5, 3]]}],
    "CIC0212": [{"code": "CIC0212", "name": "SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 1", "classNum": 1, "teacher": "MARIA DE FATIMA RAMOS BRANDAO", "schedules": [[5, 4]]}],
    "CIC0213": [{"code": "CIC0213", "name": "SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 2", "classNum": 1, "teacher": "JONATHAN ROSA MOREIRA", "schedules": [[5, 4]]}],
    "CIC0218": [{"code": "CIC0218", "name": "SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 1", "classNum": 1, "teacher": "MARIA DE FATIMA RAMOS BRANDAO", "schedules": [[6, 4]]}],
    "CIC0220": [{"code": "CIC0220", "name": "SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 2", "classNum": 1, "teacher": "JONATHAN ROSA MOREIRA", "schedules": [[6, 4]]}],
    "CIC0222": [{"code": "CIC0222", "name": "SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 3", "classNum": 1, "teacher": "LETICIA LOPES LEITE (30h)\\nEDISON ISHIKAWA", "schedules": [[6, 3]]}],
    "CIC0225": [{"code": "CIC0225", "name": "INTRODUÇÃO A SISTEMAS OPERACIONAIS", "classNum": 1, "teacher": "ALBA CRISTINA MAGALHAES ALVES DE MELO", "schedules": [[5, 0], [5, 2]]}],
    "CIC0229": [{"code": "CIC0229", "name": "CIRCUITOS LÓGICOS", "classNum": 1, "teacher": "BRUNO LUIGGI MACCHIAVELLO ESPINOZA", "schedules": [[4, 0], [4, 2]]}, {"code": "CIC0229", "name": "CIRCUITOS LÓGICOS", "classNum": 2, "teacher": "MARCELO GRANDI MANDELLI", "schedules": [[1, 0], [1, 2]]}],
    "CIC0231": [{"code": "CIC0231", "name": "LABORATÓRIO DE CIRCUITOS LÓGICOS", "classNum": 1, "teacher": "WILSON HENRIQUE VENEZIANO", "schedules": [[4, 3]]}, {"code": "CIC0231", "name": "LABORATÓRIO DE CIRCUITOS LÓGICOS", "classNum": 2, "teacher": "WILSON HENRIQUE VENEZIANO", "schedules": [[3, 4]]}, {"code": "CIC0231", "name": "LABORATÓRIO DE CIRCUITOS LÓGICOS", "classNum": 3, "teacher": "MARCELO GRANDI MANDELLI", "schedules": [[1, 4]]}, {"code": "CIC0231", "name": "LABORATÓRIO DE CIRCUITOS LÓGICOS", "classNum": 4, "teacher": "MARCELO GRANDI MANDELLI", "schedules": [[0, 4]]}],
    "CIC0235": [{"code": "CIC0235", "name": "TELEINFORMÁTICA E REDES 1", "classNum": 1, "teacher": "MARCELO ANTONIO MAROTTA", "schedules": [[0, 1], [0, 3]]}],
    "CIC0236": [{"code": "CIC0236", "name": "TELEINFORMÁTICA E REDES 2", "classNum": 1, "teacher": "JACIR LUIZ BORDIM", "schedules": [[4, 1], [4, 3]]}],
    "CIC0247": [{"code": "CIC0247", "name": "INTRODUÇÃO AO AMBIENTE UNIVERSITÁRIO NA COMPUTAÇÃO", "classNum": 1, "teacher": "MARCELO GRANDI MANDELLI (15h)\\nMARISTELA TERTO DE HOLANDA", "schedules": [[4, 2]]}],
    "CIC0248": [{"code": "CIC0248", "name": "SISTEMAS DE TEMPO REAL", "classNum": 1, "teacher": "FLAVIO DE BARROS VIDAL", "schedules": [[1, 2], [1, 4]]}],
    "CIC0256": [{"code": "CIC0256", "name": "PRÁTICA EXTENSIONISTA EM COMPUTAÇÃO A", "classNum": 1, "teacher": "MARCELO ANTONIO MAROTTA", "schedules": [[1, 1], [1, 3]]}],
    "IFD0004": [{"code": "IFD0004", "name": "FÍSICA ZERO", "classNum": 1, "teacher": "BERNARDO DE ASSUNCAO MELLO", "schedules": [[2, 1]]}, {"code": "IFD0004", "name": "FÍSICA ZERO", "classNum": 2, "teacher": "BERNARDO DE ASSUNCAO MELLO", "schedules": [[5, 0], [5, 1]]}],
    "IFD0005": [{"code": "IFD0005", "name": "FÍSICA TEÓRICA PARA CIÊNCIAS AGRÁRIAS", "classNum": 1, "teacher": "JULIANI PENHA CALAND", "schedules": [[5, 1], [5, 3]]}, {"code": "IFD0005", "name": "FÍSICA TEÓRICA PARA CIÊNCIAS AGRÁRIAS", "classNum": 2, "teacher": "GALINA GULIS", "schedules": [[4, 1], [4, 3]]}, {"code": "IFD0005", "name": "FÍSICA TEÓRICA PARA CIÊNCIAS AGRÁRIAS", "classNum": 3, "teacher": "GALINA GULIS", "schedules": [[3, 1], [3, 3]]}],
    "IFD0006": [{"code": "IFD0006", "name": "FÍSICA EXPERIMENTAL PARA CIÊNCIAS AGRÁRIAS", "classNum": 1, "teacher": "LUANA CRISTINA WOUK", "schedules": [[4, 1]]}, {"code": "IFD0006", "name": "FÍSICA EXPERIMENTAL PARA CIÊNCIAS AGRÁRIAS", "classNum": 2, "teacher": "JULIANI PENHA CALAND", "schedules": [[0, 0]]}, {"code": "IFD0006", "name": "FÍSICA EXPERIMENTAL PARA CIÊNCIAS AGRÁRIAS", "classNum": 3, "teacher": "JULIANI PENHA CALAND", "schedules": [[3, 0]]}, {"code": "IFD0006", "name": "FÍSICA EXPERIMENTAL PARA CIÊNCIAS AGRÁRIAS", "classNum": 4, "teacher": "LUANA CRISTINA WOUK", "schedules": [[3, 0]]}],
    "IFD0010": [{"code": "IFD0010", "name": "MÉTODOS DA FÍSICA EXPERIMENTAL", "classNum": 1, "teacher": "NADIA MARIA DE LIZ KOCHE", "schedules": [[3, 2]]}, {"code": "IFD0010", "name": "MÉTODOS DA FÍSICA EXPERIMENTAL", "classNum": 2, "teacher": "ALEXANDRA MOCELLIN", "schedules": [[3, 0]]}, {"code": "IFD0010", "name": "MÉTODOS DA FÍSICA EXPERIMENTAL", "classNum": 3, "teacher": "SERGIO COSTA ULHOA", "schedules": [[5, 4]]}],
    "IFD0011": [{"code": "IFD0011", "name": "FUNDAMENTOS MATEMÁTICOS DA FÍSICA A", "classNum": 1, "teacher": "HELENA DE SOUZA BRAGANCA ROCHA", "schedules": [[1, 1], [1, 3]]}],
    "IFD0012": [{"code": "IFD0012", "name": "FUNDAMENTOS MATEMÁTICOS DA FÍSICA B", "classNum": 1, "teacher": "CAROLINA MATTE GREGORY", "schedules": [[1, 1], [1, 3]]}],
    "IFD0013": [{"code": "IFD0013", "name": "ONDAS, ÓPTICA E TERMODINÂMICA", "classNum": 1, "teacher": "TIAGO DE SOUSA ARAUJO CASSIANO", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "IFD0014": [{"code": "IFD0014", "name": "LABORATÓRIO DE INSTRUMENTAÇÃO CIENTÍFICA A", "classNum": 1, "teacher": "PAULO EDUARDO NARCIZO DE SOUZA", "schedules": [[3, 1]]}, {"code": "IFD0014", "name": "LABORATÓRIO DE INSTRUMENTAÇÃO CIENTÍFICA A", "classNum": 2, "teacher": "JOHN FREDY RICARDO MARROQUIN", "schedules": [[0, 5]]}],
    "IFD0015": [{"code": "IFD0015", "name": "MECÂNICA CLÁSSICA A", "classNum": 1, "teacher": "CAIO CESAR HOLANDA RIBEIRO", "schedules": [[0, 0], [0, 2]]}],
    "IFD0016": [{"code": "IFD0016", "name": "LABORATÓRIO DE MECÂNICA", "classNum": 1, "teacher": "LUIZ FERNANDO RONCARATTI JUNIOR", "schedules": [[3, 0]]}],
    "IFD0017": [{"code": "IFD0017", "name": "FÍSICA MATEMÁTICA A", "classNum": 1, "teacher": "ALEKSANDR NIKOLAIEVICH PINZUL", "schedules": [[1, 1], [1, 3]]}],
    "IFD0018": [{"code": "IFD0018", "name": "RELATIVIDADE E FÍSICA QUÂNTICA", "classNum": 1, "teacher": "ANNIBAL DIAS DE FIGUEIREDO NETO", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "IFD0019": [{"code": "IFD0019", "name": "MECÂNICA CLÁSSICA B", "classNum": 1, "teacher": "ANNIBAL DIAS DE FIGUEIREDO NETO", "schedules": [[0, 0], [0, 2]]}],
    "IFD0020": [{"code": "IFD0020", "name": "MÉTODOS COMPUTACIONAIS A", "classNum": 1, "teacher": "MARIANA PENNA LIMA VITENTI", "schedules": [[1, 1], [1, 3]]}],
    "IFD0021": [{"code": "IFD0021", "name": "LABORATÓRIO DE FÍSICA MODERNA", "classNum": 1, "teacher": "GERALDO JOSE DA SILVA", "schedules": [[5, 4]]}, {"code": "IFD0021", "name": "LABORATÓRIO DE FÍSICA MODERNA", "classNum": 2, "teacher": "SEBASTIAO WILLIAM DA SILVA", "schedules": [[3, 2]]}],
    "IFD0022": [{"code": "IFD0022", "name": "LABORATÓRIO DE OSCILAÇÕES, ONDAS E FLUIDOS", "classNum": 1, "teacher": "PEDRO AUGUSTO MATOS RODRIGUES", "schedules": [[3, 3]]}],
    "IFD0023": [{"code": "IFD0023", "name": "FÍSICA MATEMÁTICA B", "classNum": 1, "teacher": "ARSEN ROBERT MELIKYAN", "schedules": [[1, 1], [1, 3]]}],
    "IFD0024": [{"code": "IFD0024", "name": "MECÂNICA QUÂNTICA A", "classNum": 1, "teacher": "ANTONIO CARLOS PEDROZA", "schedules": [[1, 0], [1, 2]]}],
    "IFD0025": [{"code": "IFD0025", "name": "TEORIA ELETROMAGNÉTICA A", "classNum": 1, "teacher": "PAULO SERGIO DA SILVA CALDAS", "schedules": [[0, 1], [0, 3]]}],
    "IFD0026": [{"code": "IFD0026", "name": "LABORATÓRIO DE ELETROMAGNETISMO A", "classNum": 1, "teacher": "GERALDO JOSE DA SILVA", "schedules": [[3, 2]]}],
    "IFD0027": [{"code": "IFD0027", "name": "LABORATÓRIO DE TERMODINÂMCIA E FÍSICA ESTATÍSTICA", "classNum": 1, "teacher": "JOSE ANTONIO HUAMANI COAQUIRA", "schedules": [[3, 1]]}],
    "IFD0029": [{"code": "IFD0029", "name": "TEORIA ELETROMAGNÉTICA B", "classNum": 1, "teacher": "ARSEN ROBERT MELIKYAN", "schedules": [[0, 1], [0, 3]]}],
    "IFD0030": [{"code": "IFD0030", "name": "MECÂNICA QUÂNTICA B", "classNum": 1, "teacher": "PEDRO HENRIQUE DE OLIVEIRA NETO", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "IFD0031": [{"code": "IFD0031", "name": "TERMODINÂMICA E FÍSICA ESTATÍSTICA", "classNum": 1, "teacher": "ISMAEL SEGUNDO DA SILVA CARRASCO", "schedules": [[1, 1], [1, 3]]}],
    "IFD0032": [{"code": "IFD0032", "name": "LABORATÓRIO DE ÓPTICA E FOTÔNICA", "classNum": 1, "teacher": "PEDRO AUGUSTO MATOS RODRIGUES", "schedules": [[3, 1]]}],
    "IFD0055": [{"code": "IFD0055", "name": "ELETROMAGNETISMO", "classNum": 1, "teacher": "FABIO FERREIRA MONTEIRO", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "IFD0057": [{"code": "IFD0057", "name": "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 1, "teacher": "A DEFINIR", "schedules": [[2, 0], [2, 2]]}, {"code": "IFD0057", "name": "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 2, "teacher": "A DEFINIR", "schedules": [[0, 1]]}, {"code": "IFD0057", "name": "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 3, "teacher": "A DEFINIR", "schedules": [[0, 3]]}, {"code": "IFD0057", "name": "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 4, "teacher": "A DEFINIR", "schedules": [[4, 3]]}, {"code": "IFD0057", "name": "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 11, "teacher": "A DEFINIR", "schedules": [[0, 5]]}],
    "IFD0058": [{"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 1, "teacher": "A DEFINIR", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 2, "teacher": "A DEFINIR", "schedules": [[0, 5]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 3, "teacher": "A DEFINIR", "schedules": [[3, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 4, "teacher": "A DEFINIR", "schedules": [[2, 3], [2, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 5, "teacher": "A DEFINIR", "schedules": [[2, 0], [5, 0], [2, 1], [5, 1], [2, 2], [2, 3], [2, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 6, "teacher": "A DEFINIR", "schedules": [[2, 0], [2, 1], [2, 2]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 7, "teacher": "A DEFINIR", "schedules": [[0, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 8, "teacher": "A DEFINIR", "schedules": [[6, 0], [6, 2], [6, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 9, "teacher": "A DEFINIR", "schedules": [[2, 0], [2, 2], [2, 4]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 10, "teacher": "A DEFINIR", "schedules": [[2, 1], [2, 3], [2, 5]]}, {"code": "IFD0058", "name": "TRABALHO DE CONCLUSÃO DE CURSO", "classNum": 11, "teacher": "A DEFINIR", "schedules": [[4, 0], [4, 2]]}],
    "IFD0059": [{"code": "IFD0059", "name": "TÓPICOS ESPECIAIS A", "classNum": 1, "teacher": "ANTONIO CARLOS PEDROZA", "schedules": [[4, 1], [4, 3]]}],
    "IFD0060": [{"code": "IFD0060", "name": "TÓPICOS ESPECIAIS B", "classNum": 2, "teacher": "VINICIUS DE ABREU OLIVEIRA", "schedules": [[4, 0], [4, 2]]}],
    "IFD0069": [{"code": "IFD0069", "name": "MECÂNICA", "classNum": 1, "teacher": "ALEXANDRE SILVA SANTOS", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "IFD0132": [{"code": "IFD0132", "name": "TEORIA DOS GRUPOS APLICADA A FISICA", "classNum": 1, "teacher": "GERALDO MAGELA E SILVA", "schedules": [[0, 2], [0, 4]]}],
    "IFD0171": [{"code": "IFD0171", "name": "FISICA 1", "classNum": 1, "teacher": "JEROME DEPEYROT", "schedules": [[3, 1], [3, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 2, "teacher": "RAFAEL BESSE", "schedules": [[6, 0], [5, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 3, "teacher": "NATHANN TEIXEIRA RODRIGUES", "schedules": [[6, 0], [5, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 4, "teacher": "RAFAEL BESSE", "schedules": [[1, 2], [1, 4]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 5, "teacher": "JOSE FRANCISCO DA ROCHA NETO", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 6, "teacher": "NATHANN TEIXEIRA RODRIGUES", "schedules": [[1, 2], [1, 4]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 7, "teacher": "HELENA DE SOUZA BRAGANCA ROCHA", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 8, "teacher": "DAVID LIMA AZEVEDO", "schedules": [[4, 0], [4, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 9, "teacher": "DAVID LIMA AZEVEDO", "schedules": [[3, 0], [3, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 10, "teacher": "CLODOALDO RODRIGUES DA COSTA JUNIOR", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 11, "teacher": "JOSE FRANCISCO DA ROCHA NETO", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 12, "teacher": "CLODOALDO RODRIGUES DA COSTA JUNIOR", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 13, "teacher": "GABRIELA CUNHA POSSA", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 14, "teacher": "JEROME DEPEYROT", "schedules": [[4, 1], [4, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 15, "teacher": "CAROLINA MATTE GREGORY", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 16, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[0, 2], [0, 4]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 17, "teacher": "A DEFINIR", "schedules": [[6, 0], [5, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 18, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 19, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[4, 1], [4, 3]]}],
    "IFD0173": [{"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 1, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[3, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 2, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[3, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 3, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[1, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 4, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[0, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 5, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[1, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 6, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[1, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 8, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[3, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 9, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[3, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 10, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": [[1, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 11, "teacher": "NILO MAKIUCHI", "schedules": [[1, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 12, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": [[4, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 13, "teacher": "VINICIUS DE ABREU OLIVEIRA", "schedules": [[0, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 14, "teacher": "JAILTON CORREIA FRAGA JUNIOR", "schedules": [[3, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 15, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": [[1, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 16, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": [[1, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 17, "teacher": "ALEXANDRE SILVA SANTOS", "schedules": [[0, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 18, "teacher": "FABIO LUIS DE OLIVEIRA PAULA", "schedules": [[4, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 19, "teacher": "NILO MAKIUCHI", "schedules": [[1, 5]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 20, "teacher": "ALEXANDRE SILVA SANTOS", "schedules": [[0, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 21, "teacher": "VINICIUS DE ABREU OLIVEIRA", "schedules": [[0, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 22, "teacher": "LEONARDO LUIZ E CASTRO", "schedules": [[3, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 23, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": [[0, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 24, "teacher": "LUIZ FERNANDO RONCARATTI JUNIOR", "schedules": [[3, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 25, "teacher": "JULIANI PENHA CALAND", "schedules": [[6, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 26, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": [[1, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 27, "teacher": "LEONARDO LUIZ E CASTRO", "schedules": [[3, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 28, "teacher": "JAILTON CORREIA FRAGA JUNIOR", "schedules": [[6, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 29, "teacher": "NILO MAKIUCHI", "schedules": [[1, 4]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 30, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[0, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 31, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[1, 4]]}],
    "IFD0175": [{"code": "IFD0175", "name": "FISICA 2", "classNum": 1, "teacher": "FABIO MENEZES DE SOUZA LIMA", "schedules": [[1, 1], [1, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 2, "teacher": "CAIO MATHEUS FERREIRA DE CARVALHO", "schedules": [[4, 1], [4, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 3, "teacher": "ALEXANDRE DODONOV", "schedules": [[3, 0], [3, 2]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 4, "teacher": "ISMAEL SEGUNDO DA SILVA CARRASCO", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 5, "teacher": "GALINA GULIS", "schedules": [[1, 2], [1, 4]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 6, "teacher": "RAPHAEL MATOZO TROMER", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 7, "teacher": "DANIEL MULLER", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 8, "teacher": "MIGUEL CITELI DE FREITAS", "schedules": [[3, 0], [3, 2]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 9, "teacher": "TARCISIO MARCIANO DA ROCHA FILHO", "schedules": [[6, 0], [5, 2]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 10, "teacher": "DANIEL MULLER", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 11, "teacher": "RAPHAEL MATOZO TROMER", "schedules": [[1, 1], [1, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 12, "teacher": "LUIZ ANTONIO RIBEIRO JUNIOR", "schedules": [[4, 1], [4, 3]]}, {"code": "IFD0175", "name": "FISICA 2", "classNum": 13, "teacher": "TARCISIO MARCIANO DA ROCHA FILHO (60h)\\nHELENA DE SOUZA BRAGANCA ROCHA", "schedules": [[6, 0], [5, 2]]}],
    "IFD0177": [{"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 1, "teacher": "FABIO LUIS DE OLIVEIRA PAULA", "schedules": [[5, 4]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 2, "teacher": "RICARDO DOS REIS TEIXEIRA MARINHO", "schedules": [[3, 1]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 3, "teacher": "MARIA APARECIDA GODOY SOLER PAJANIAN", "schedules": [[0, 4]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 4, "teacher": "GERALDO MAGELA E SILVA", "schedules": [[0, 1]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 5, "teacher": "LUANA CRISTINA WOUK", "schedules": [[3, 4]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 6, "teacher": "FABIO LUIS DE OLIVEIRA PAULA", "schedules": [[3, 3]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 7, "teacher": "RICARDO DOS REIS TEIXEIRA MARINHO", "schedules": [[0, 2]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 8, "teacher": "A DEFINIR", "schedules": [[0, 0]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 9, "teacher": "ALEXANDRA MOCELLIN", "schedules": [[3, 3]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 10, "teacher": "JOSE EDUARDO MARTINS", "schedules": [[3, 4]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 11, "teacher": "HELENA DE SOUZA BRAGANCA ROCHA (60h)\\nLETICIA GONCALVES NUNES COELHO", "schedules": [[0, 2]]}, {"code": "IFD0177", "name": "FISICA 2 EXPERIMENTAL", "classNum": 12, "teacher": "LETICIA GONCALVES NUNES COELHO", "schedules": [[0, 4]]}],
    "IFD0179": [{"code": "IFD0179", "name": "FISICA 3", "classNum": 1, "teacher": "FABIO MENEZES DE SOUZA LIMA", "schedules": [[6, 0], [6, 4]]}, {"code": "IFD0179", "name": "FISICA 3", "classNum": 2, "teacher": "PAULO EDUARDO NARCIZO DE SOUZA", "schedules": [[1, 2], [1, 4]]}, {"code": "IFD0179", "name": "FISICA 3", "classNum": 3, "teacher": "DANIEL LIMA NASCIMENTO", "schedules": [[3, 0], [3, 2]]}, {"code": "IFD0179", "name": "FISICA 3", "classNum": 4, "teacher": "DANIEL LIMA NASCIMENTO", "schedules": [[3, 1], [3, 3]]}, {"code": "IFD0179", "name": "FISICA 3", "classNum": 5, "teacher": "PAULO SERGIO DA SILVA CALDAS", "schedules": [[4, 1], [4, 3]]}, {"code": "IFD0179", "name": "FISICA 3", "classNum": 6, "teacher": "RICARDO GARGANO", "schedules": [[4, 0], [4, 2]]}],
    "IFD0181": [{"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 1, "teacher": "JORLANDIO FRANCISCO FELIX", "schedules": [[3, 0]]}, {"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 2, "teacher": "NADIA MARIA DE LIZ KOCHE", "schedules": [[0, 4]]}, {"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 3, "teacher": "JOSE LEONARDO FERREIRA", "schedules": [[0, 2]]}, {"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 4, "teacher": "JORLANDIO FRANCISCO FELIX", "schedules": [[0, 0]]}, {"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 5, "teacher": "SEBASTIAO WILLIAM DA SILVA", "schedules": [[3, 4]]}, {"code": "IFD0181", "name": "FISICA 3 EXPERIMENTAL", "classNum": 6, "teacher": "JOSE ANTONIO HUAMANI COAQUIRA", "schedules": [[0, 1]]}],
    "IFD0247": [{"code": "IFD0247", "name": "METODOLOGIA DO ENSINO DE FÍSICA", "classNum": 1, "teacher": "ANDRE LUIS MIRANDA DE BARCELLOS COELHO", "schedules": [[5, 1], [5, 3]]}],
    "IFD0254": [{"code": "IFD0254", "name": "TEORIA ELETROMAGNETICA", "classNum": 1, "teacher": "MARCO CEZAR BARBOSA FERNANDES", "schedules": [[5, 1], [5, 3]]}],
    "IFD0256": [{"code": "IFD0256", "name": "FISICA MODERNA 1", "classNum": 1, "teacher": "MARCO CEZAR BARBOSA FERNANDES", "schedules": [[6, 1], [6, 3]]}],
    "IFD0296": [{"code": "IFD0296", "name": "METODOS MATEMATICOS DA FISICA TEORICA", "classNum": 1, "teacher": "ANTONY MARCO MOTA POLITO", "schedules": [[6, 0], [6, 2]]}],
    "IFD0304": [{"code": "IFD0304", "name": "FISICA PARA DESENHO INDUSTRIAL", "classNum": 1, "teacher": "NILO MAKIUCHI", "schedules": [[3, 0], [3, 2], [3, 4]]}],
    "IFD0334": [{"code": "IFD0334", "name": "MATERIAIS DIDÁTICOS PARA O ENSINO DE FÍSICA", "classNum": 1, "teacher": "MARIA DE FATIMA RODRIGUES MAKIUCHI", "schedules": [[6, 1], [6, 3]]}],
    "IFD0338": [{"code": "IFD0338", "name": "PROJETOS E PROGRAMAS PARA O ENSINO DE FÍSICA", "classNum": 1, "teacher": "JAILTON CORREIA FRAGA JUNIOR", "schedules": [[6, 1], [6, 3]]}],
    "IFD0340": [{"code": "IFD0340", "name": "FUNDAMENTOS DE FÍSICA", "classNum": 1, "teacher": "GALINA GULIS", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0340", "name": "FUNDAMENTOS DE FÍSICA", "classNum": 2, "teacher": "JOHN FREDY RICARDO MARROQUIN", "schedules": [[5, 1], [6, 2]]}, {"code": "IFD0340", "name": "FUNDAMENTOS DE FÍSICA", "classNum": 3, "teacher": "MARIA APARECIDA GODOY SOLER PAJANIAN", "schedules": [[0, 1], [0, 3]]}],
    "IFD0342": [{"code": "IFD0342", "name": "FUNDAMENTOS DE ASTRONOMIA E ASTROFÍSICA", "classNum": 1, "teacher": "JOSE LEONARDO FERREIRA", "schedules": [[4, 1], [4, 3]]}],
    "IFD0353": [{"code": "IFD0353", "name": "PROGRAMAÇÃO PARA SISTEMAS FÍSICOS", "classNum": 1, "teacher": "BERNARDO DE ASSUNCAO MELLO", "schedules": [[0, 2], [0, 4]]}, {"code": "IFD0353", "name": "PROGRAMAÇÃO PARA SISTEMAS FÍSICOS", "classNum": 2, "teacher": "MARIANA PENNA LIMA VITENTI", "schedules": [[3, 2], [3, 4]]}],
    "IFD0360": [{"code": "IFD0360", "name": "CÁLCULO 2", "classNum": 1, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": []}],
    "IFD0361": [{"code": "IFD0361", "name": "CÁLCULO 3", "classNum": 1, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": []}],
    "IFD0364": [{"code": "IFD0364", "name": "ELETROMAGNETISMO", "classNum": 1, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": []}],
    "IFD0365": [{"code": "IFD0365", "name": "METODOLOGIA DO ENSINO DE FÍSICA", "classNum": 1, "teacher": "ROBERTO VINICIOS LESSA DO COUTO (30h)\\nALESSANDRA FERREIRA ALBERNAZ", "schedules": []}],
    "IFD0366": [{"code": "IFD0366", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 1", "classNum": 1, "teacher": "ROBERTO VINICIOS LESSA DO COUTO (45h)\\nOLAVO LEOPOLDINO DA SILVA FILHO", "schedules": []}],
    "IFD0367": [{"code": "IFD0367", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 2", "classNum": 1, "teacher": "ROBERTO VINICIOS LESSA DO COUTO (45h)\\nMARCELLO FERREIRA", "schedules": []}],
    "IFD0368": [{"code": "IFD0368", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 3", "classNum": 1, "teacher": "VINICIUS RICARDO MARQUES DE SOUZA (45h)\\nOLAVO LEOPOLDINO DA SILVA FILHO", "schedules": []}],
    "IFD0369": [{"code": "IFD0369", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 4", "classNum": 1, "teacher": "VINICIUS RICARDO MARQUES DE SOUZA (45h)\\nMARCELLO FERREIRA", "schedules": []}],
    "IFD0370": [{"code": "IFD0370", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 5", "classNum": 1, "teacher": "VINICIUS RICARDO MARQUES DE SOUZA (45h)\\nMARCELLO FERREIRA", "schedules": []}],
    "IFD0372": [{"code": "IFD0372", "name": "FÍSICA QUÂNTICA", "classNum": 1, "teacher": "FABIO FERREIRA MONTEIRO", "schedules": []}],
    "IFD0376": [{"code": "IFD0376", "name": "HISTÓRIA DA FÍSICA CLÁSSICA", "classNum": 1, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": []}],
    "IFD0377": [{"code": "IFD0377", "name": "HISTÓRIA DA FÍSICA MODERNA", "classNum": 1, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": []}],
    "IFD0379": [{"code": "IFD0379", "name": "LABORATÓRIO DE FÍSICA MODERNA", "classNum": 1, "teacher": "FABIO LUIS DE OLIVEIRA PAULA", "schedules": []}],
    "IFD0380": [{"code": "IFD0380", "name": "LABORATÓRIO DE INSTRUMENTAÇÃO CIENTÍFICA A", "classNum": 1, "teacher": "LETICIA GONCALVES NUNES COELHO", "schedules": []}],
    "IFD0382": [{"code": "IFD0382", "name": "LABORATÓRIO DE ONDAS E ELETROMAGNETISMO", "classNum": 1, "teacher": "LETICIA GONCALVES NUNES COELHO", "schedules": []}],
    "IFD0383": [{"code": "IFD0383", "name": "MATERIAIS DIDÁTICOS PARA O ENSINO DE FÍSICA", "classNum": 1, "teacher": "ROBERTO VINICIOS LESSA DO COUTO (30h)\\nMARCELLO FERREIRA", "schedules": []}],
    "IFD0384": [{"code": "IFD0384", "name": "METODOLOGIA DA PESQUISA EM ENSINO DE CIÊNCIAS", "classNum": 1, "teacher": "ALESSANDRA FERREIRA ALBERNAZ (15h)\\nVINICIUS RICARDO MARQUES DE SOUZA", "schedules": []}],
    "IFD0387": [{"code": "IFD0387", "name": "TEORIAS DA APRENDIZAGEM E ENSINO DE FÍSICA", "classNum": 1, "teacher": "FABIO FERREIRA MONTEIRO", "schedules": []}],
    "IFD0388": [{"code": "IFD0388", "name": "TICS NO ENSINO DE FÍSICA", "classNum": 1, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": []}],
    "IFD0389": [{"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 1, "teacher": "ALESSANDRA FERREIRA ALBERNAZ", "schedules": []}, {"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 2, "teacher": "DEMETRIO ANTONIO DA SILVA FILHO", "schedules": []}, {"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 3, "teacher": "LETICIA GONCALVES NUNES COELHO", "schedules": []}, {"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 4, "teacher": "VINICIUS RICARDO MARQUES DE SOUZA", "schedules": []}, {"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 5, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": []}, {"code": "IFD0389", "name": "TRABALHO DE CONCLUSÃO DE CURSO 1", "classNum": 6, "teacher": "VANESSA CARVALHO DE ANDRADE", "schedules": []}],
    "IFD0390": [{"code": "IFD0390", "name": "TRABALHO DE CONCLUSÃO DE CURSO 2", "classNum": 1, "teacher": "FABIO FERREIRA MONTEIRO", "schedules": []}, {"code": "IFD0390", "name": "TRABALHO DE CONCLUSÃO DE CURSO 2", "classNum": 2, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": []}, {"code": "IFD0390", "name": "TRABALHO DE CONCLUSÃO DE CURSO 2", "classNum": 3, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": []}],
    "IFD0392": [{"code": "IFD0392", "name": "PROJETOS E PROGRAMAS PARA O ENSINO DE FÍSICA", "classNum": 1, "teacher": "ROBERTO VINICIOS LESSA DO COUTO (30h)\\nKHALIL OLIVEIRA PORTUGAL", "schedules": []}],
    "IFD0417": [{"code": "IFD0417", "name": "FRONTEIRAS DA FÍSICA", "classNum": 1, "teacher": "LUIZ FERNANDO RONCARATTI JUNIOR", "schedules": [[6, 0]]}],
    "IFD0418": [{"code": "IFD0418", "name": "MECÂNICA 1", "classNum": 1, "teacher": "JAILTON CORREIA FRAGA JUNIOR", "schedules": [[5, 1], [5, 3]]}],
    "IFD0419": [{"code": "IFD0419", "name": "MECÂNICA 2", "classNum": 1, "teacher": "ALEXANDRE CAVALHEIRO DIAS", "schedules": [[5, 1], [5, 3]]}],
    "IFD0420": [{"code": "IFD0420", "name": "TERMODINÂMICA", "classNum": 1, "teacher": "LEONARDO LUIZ E CASTRO", "schedules": [[6, 0], [5, 2]]}],
    "IFD0421": [{"code": "IFD0421", "name": "ELETROMAGNETISMO 1", "classNum": 1, "teacher": "VANESSA CARVALHO DE ANDRADE", "schedules": [[5, 0], [5, 2]]}],
    "IFD0422": [{"code": "IFD0422", "name": "ELETROMAGNETISMO 2", "classNum": 1, "teacher": "ANTONY MARCO MOTA POLITO", "schedules": [[5, 0], [5, 2]]}],
    "IFD0423": [{"code": "IFD0423", "name": "ONDAS E ÓPTICA", "classNum": 1, "teacher": "TIAGO DE SOUSA ARAUJO CASSIANO", "schedules": [[5, 0], [5, 2]]}],
    "IFD0424": [{"code": "IFD0424", "name": "LABORATÓRIO DE FÍSICA CLÁSSICA 1", "classNum": 1, "teacher": "JULIANI PENHA CALAND", "schedules": [[5, 4], [0, 5]]}],
    "IFD0425": [{"code": "IFD0425", "name": "LABORATÓRIO DE FÍSICA CLÁSSICA 2", "classNum": 1, "teacher": "JOHN FREDY RICARDO MARROQUIN", "schedules": [[5, 4], [0, 5]]}],
    "IFD0426": [{"code": "IFD0426", "name": "HISTÓRIA DA FÍSICA CLÁSSICA", "classNum": 1, "teacher": "ANDRE LUIS MIRANDA DE BARCELLOS COELHO", "schedules": [[6, 1], [6, 3]]}],
    "IFD0427": [{"code": "IFD0427", "name": "FÍSICA MODERNA 2", "classNum": 1, "teacher": "ADRIANA PEREIRA IBALDO", "schedules": [[5, 0], [5, 2]]}],
    "IFD0428": [{"code": "IFD0428", "name": "LABORATÓRIO DE FÍSICA MODERNA E CONTEMPORÂNEA", "classNum": 1, "teacher": "GERALDO JOSE DA SILVA", "schedules": [[5, 4]]}],
    "IFD0429": [{"code": "IFD0429", "name": "HISTÓRIA DA FÍSICA MODERNA", "classNum": 1, "teacher": "CASSIO COSTA LARANJEIRAS", "schedules": [[6, 0], [6, 2]]}],
    "IFD0430": [{"code": "IFD0430", "name": "INTRODUÇÃO AO ENSINO E DIVULGAÇÃO DA FÍSICA", "classNum": 1, "teacher": "FELIPPE GUIMARAES MACIEL", "schedules": [[6, 0]]}],
    "IFD0431": [{"code": "IFD0431", "name": "EPISTEMOLOGIA E ENSINO DE FÍSICA", "classNum": 1, "teacher": "CASSIO COSTA LARANJEIRAS", "schedules": [[5, 0], [5, 2]]}],
    "IFD0432": [{"code": "IFD0432", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 1", "classNum": 1, "teacher": "MARIA DE FATIMA RODRIGUES MAKIUCHI", "schedules": [[2, 0], [2, 1], [5, 1]]}],
    "IFD0433": [{"code": "IFD0433", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 2", "classNum": 1, "teacher": "FELIPPE GUIMARAES MACIEL", "schedules": [[2, 0], [2, 1], [5, 1], [2, 2], [2, 3]]}],
    "IFD0434": [{"code": "IFD0434", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 3", "classNum": 1, "teacher": "KHALIL OLIVEIRA PORTUGAL", "schedules": [[5, 0], [5, 1], [5, 2], [5, 3]]}],
    "IFD0435": [{"code": "IFD0435", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 4", "classNum": 1, "teacher": "MARCELLO FERREIRA", "schedules": [[2, 0], [2, 1], [5, 1], [2, 2], [2, 3]]}],
    "IFD0436": [{"code": "IFD0436", "name": "ESTÁGIO CURRICULAR SUPERVISIONADO EM FÍSICA 5", "classNum": 1, "teacher": "ERONDINA AZEVEDO DE LIMA", "schedules": [[5, 0], [5, 1], [5, 2], [5, 3]]}],
    "IFD0438": [{"code": "IFD0438", "name": "TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO NO ENSINO DE FÍSICA", "classNum": 1, "teacher": "KHALIL OLIVEIRA PORTUGAL", "schedules": [[5, 4]]}],
    "MAT0010": [{"code": "MAT0010", "name": "GEOMETRIA ANALÍTICA PARA MATEMÁTICA", "classNum": 1, "teacher": "NILTON MOURA BARROSO NETO", "schedules": [[4, 1], [4, 3]]}, {"code": "MAT0010", "name": "GEOMETRIA ANALÍTICA PARA MATEMÁTICA", "classNum": 2, "teacher": "EMERSON FERREIRA DE MELO", "schedules": [[6, 0], [5, 2]]}],
    "MAT0022": [{"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 1, "teacher": "WESCLEY WELL VICENTE BEZERRA", "schedules": [[6, 1], [5, 3]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 2, "teacher": "MIRELSON MARTINS FREITAS (30h)\\nGIOVANY DE JESUS MALCHER FIGUEIREDO", "schedules": [[6, 1], [6, 3]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 3, "teacher": "JIAZHENG ZHOU", "schedules": [[5, 0], [5, 2]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 4, "teacher": "JIAZHENG ZHOU", "schedules": [[5, 0], [5, 2]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 5, "teacher": "JIAZHENG ZHOU", "schedules": [[5, 0], [6, 4]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 6, "teacher": "JIAZHENG ZHOU (30h)\\nVICTOR PETROGRADSKIY", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 7, "teacher": "JIAZHENG ZHOU (30h)\\nANDRE CALDAS DE SOUZA", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 8, "teacher": "JIAZHENG ZHOU", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 9, "teacher": "MIRELSON MARTINS FREITAS", "schedules": [[6, 1], [6, 3]]}, {"code": "MAT0022", "name": "MATEMATICA 1", "classNum": 10, "teacher": "MIRELSON MARTINS FREITAS", "schedules": [[0, 1], [0, 3]]}],
    "MAT0023": [{"code": "MAT0023", "name": "MATEMATICA 2", "classNum": 2, "teacher": "ADAIL DE CASTRO CAVALHEIRO", "schedules": [[3, 2], [3, 4]]}, {"code": "MAT0023", "name": "MATEMATICA 2", "classNum": 3, "teacher": "MAYRA SOARES COSTA RODRIGUES", "schedules": [[3, 1], [3, 3]]}],
    "MAT0025": [{"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 1, "teacher": "LUIZ CLAUDIO PEREIRA", "schedules": [[5, 3], [5, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 2, "teacher": "ANDREA GENOVESE DE OLIVEIRA", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 3, "teacher": "WILLIAN CINTRA DA SILVA (60h)\\nMARCELO FERNANDES FURTADO", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 4, "teacher": "LUIS ROBERTO LUCINGER DE ALMEIDA", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 5, "teacher": "MAURO MORAES ALVES PATRAO (30h)\\nLINEU DA COSTA ARAUJO NETO", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 6, "teacher": "ALBERTO MASAYOSHI FARIA OHASHI (60h)\\nMAURO MORAES ALVES PATRAO", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 7, "teacher": "DANIELA AMORIM AMATO", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 8, "teacher": "DANIELA AMORIM AMATO", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 9, "teacher": "BENEDITO LEANDRO NETO", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 10, "teacher": "LUIS ROBERTO LUCINGER DE ALMEIDA", "schedules": [[5, 0], [5, 2], [5, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 11, "teacher": "BENEDITO LEANDRO NETO (30h)\\nJOSE ANTONIO OLIVEIRA DE FREITAS", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 12, "teacher": "LUIS HENRIQUE DE MIRANDA (60h)\\nMANUELA CAETANO MARTINS DE REZENDE", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 13, "teacher": "ANDREA GENOVESE DE OLIVEIRA (30h)\\nRAQUEL CARNEIRO DORR", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 14, "teacher": "GUY GREBOT (60h)\\nRICARDO RUVIARO", "schedules": [[1, 0], [1, 1], [1, 2]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 15, "teacher": "MANUELA CAETANO MARTINS DE REZENDE", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 16, "teacher": "RICARDO RUVIARO (30h)\\nWANG QIAOLING", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 17, "teacher": "BENEDITO LEANDRO NETO", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 18, "teacher": "ROBERTO OSCAR GANDULFO (60h)\\nLUIS ROBERTO LUCINGER DE ALMEIDA", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 19, "teacher": "PAULO HENRIQUE PEREIRA DA COSTA", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 20, "teacher": "ROGERIO CESAR DOS SANTOS", "schedules": [[3, 3], [4, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 21, "teacher": "DANIELA AMORIM AMATO", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 22, "teacher": "ANDREA GENOVESE DE OLIVEIRA", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 23, "teacher": "LUIS ROBERTO LUCINGER DE ALMEIDA", "schedules": [[5, 0], [5, 2], [5, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 24, "teacher": "RICARDO RAMOS FRAGELLI", "schedules": [[1, 0], [1, 2], [1, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 25, "teacher": "MATHEUS BERNARDINI DE SOUZA", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 26, "teacher": "LINDOMAR BOMFIM DE CARVALHO DE JESUS", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 27, "teacher": "WESLEY FERREIRA LOPES", "schedules": [[2, 0], [2, 2], [2, 4]]}],
    "MAT0026": [{"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 1, "teacher": "ANTONIO LUIZ DE MELO", "schedules": [[0, 0], [0, 2]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 2, "teacher": "YEVSEY YEHOSHUA SOBOLEVSKY", "schedules": [[3, 0], [3, 1], [3, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 3, "teacher": "A DEFINIR", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 4, "teacher": "A DEFINIR", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 5, "teacher": "LUCAS CONQUE SECO FERREIRA", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 6, "teacher": "LUCAS CONQUE SECO FERREIRA", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 7, "teacher": "JANETE SOARES DE GAMBOA", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 8, "teacher": "KELLCIO OLIVEIRA ARAUJO", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 9, "teacher": "JANETE SOARES DE GAMBOA", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 10, "teacher": "MAURO MORAES ALVES PATRAO", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 11, "teacher": "A DEFINIR", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 12, "teacher": "A DEFINIR", "schedules": [[6, 1], [5, 3], [5, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 13, "teacher": "KELLCIO OLIVEIRA ARAUJO", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 14, "teacher": "LUIZA YOKO TANEGUTI", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 15, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0027": [{"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 2, "teacher": "ADAIL DE CASTRO CAVALHEIRO", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 3, "teacher": "VICTOR PETROGRADSKIY", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 4, "teacher": "CARLOS ALBERTO PEREIRA DOS SANTOS", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 5, "teacher": "THEO ALLAN DARN ZAPATA", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 6, "teacher": "A DEFINIR", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 7, "teacher": "ANDRE CALDAS DE SOUZA", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 8, "teacher": "NILTON MOURA BARROSO NETO", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 9, "teacher": "LINEU DA COSTA ARAUJO NETO", "schedules": [[0, 1], [0, 3], [0, 4]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 10, "teacher": "PAULO HENRIQUE PEREIRA DA COSTA", "schedules": [[5, 0], [6, 1], [6, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 11, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 12, "teacher": "TATIANE DA SILVA EVANGELISTA", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0028": [{"code": "MAT0028", "name": "VARIAVEL COMPLEXA 1", "classNum": 1, "teacher": "ARY VASCONCELOS MEDINO", "schedules": [[3, 0], [3, 1], [3, 3]]}, {"code": "MAT0028", "name": "VARIAVEL COMPLEXA 1", "classNum": 2, "teacher": "RICARDO PARREIRA DA SILVA", "schedules": [[5, 0], [6, 1], [6, 3]]}],
    "MAT0031": [{"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 1, "teacher": "WANG QIAOLING", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 2, "teacher": "PAVEL ZALESSKI", "schedules": [[1, 2], [1, 4]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 3, "teacher": "PEDRO ROITMAN", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 4, "teacher": "JAQUELINE GODOY MESQUITA", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 5, "teacher": "ALEXEI KRASSILNIKOV", "schedules": [[5, 1], [5, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 6, "teacher": "PAVEL ZALESSKI", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 7, "teacher": "LILIANE DE ALMEIDA MAIA", "schedules": [[4, 1], [4, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 8, "teacher": "EDUARDO ANTONIO DA SILVA", "schedules": [[4, 1], [4, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 9, "teacher": "PAVEL SHUMYATSKY", "schedules": [[4, 0], [4, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 10, "teacher": "CARLOS MABER CARRION RIVEROS", "schedules": [[4, 1], [4, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 11, "teacher": "RICARDO PARREIRA DA SILVA", "schedules": [[5, 1], [5, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 12, "teacher": "LUIZA YOKO TANEGUTI", "schedules": [[1, 0], [1, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 13, "teacher": "YEVSEY YEHOSHUA SOBOLEVSKY", "schedules": [[3, 2], [3, 4]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 14, "teacher": "MATHEUS BERNARDINI DE SOUZA", "schedules": [[0, 1], [0, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 16, "teacher": "WESLEY FERREIRA LOPES", "schedules": [[3, 0], [3, 2]]}],
    "MAT0034": [{"code": "MAT0034", "name": "ALGEBRA 1", "classNum": 1, "teacher": "IRINA SVIRIDOVA", "schedules": [[0, 1], [0, 4]]}, {"code": "MAT0034", "name": "ALGEBRA 1", "classNum": 2, "teacher": "ALINE GOMES DA SILVA PINTO", "schedules": [[5, 1], [5, 4]]}, {"code": "MAT0034", "name": "ALGEBRA 1", "classNum": 3, "teacher": "HEMAR TEIXEIRA GODINHO", "schedules": [[0, 1], [0, 3]]}],
    "MAT0038": [{"code": "MAT0038", "name": "TEORIA DOS NÚMEROS 1", "classNum": 1, "teacher": "DIEGO MARQUES FERREIRA", "schedules": [[5, 1], [5, 3]]}, {"code": "MAT0038", "name": "TEORIA DOS NÚMEROS 1", "classNum": 2, "teacher": "HEMAR TEIXEIRA GODINHO", "schedules": [[1, 1], [1, 3]]}],
    "MAT0039": [{"code": "MAT0039", "name": "ALGEBRA LINEAR", "classNum": 1, "teacher": "ALEXEI KRASSILNIKOV", "schedules": [[4, 0], [4, 1], [4, 3]]}],
    "MAT0040": [{"code": "MAT0040", "name": "ALGEBRA 2", "classNum": 1, "teacher": "SHEILA CAMPOS CHAGAS", "schedules": [[0, 1], [0, 3]]}],
    "MAT0045": [{"code": "MAT0045", "name": "ANALISE 1", "classNum": 1, "teacher": "MARCELO FERNANDES FURTADO", "schedules": [[0, 0], [0, 2]]}, {"code": "MAT0045", "name": "ANALISE 1", "classNum": 2, "teacher": "JIAZHENG ZHOU", "schedules": [[6, 1], [5, 4]]}],
    "MAT0050": [{"code": "MAT0050", "name": "GEOMETRIA DIFERENCIAL 1", "classNum": 1, "teacher": "JOAO PAULO DOS SANTOS", "schedules": [[3, 1], [3, 3]]}],
    "MAT0053": [{"code": "MAT0053", "name": "CALCULO NUMERICO", "classNum": 1, "teacher": "A DEFINIR", "schedules": [[1, 0], [1, 2]]}, {"code": "MAT0053", "name": "CALCULO NUMERICO", "classNum": 2, "teacher": "FLAVIA FERREIRA RAMOS ZAPATA", "schedules": [[4, 1], [4, 3]]}, {"code": "MAT0053", "name": "CALCULO NUMERICO", "classNum": 3, "teacher": "FLAVIA FERREIRA RAMOS ZAPATA", "schedules": [[3, 1], [3, 3]]}, {"code": "MAT0053", "name": "CALCULO NUMERICO", "classNum": 4, "teacher": "RADERSON RODRIGUES DA SILVA", "schedules": [[0, 0], [0, 2]]}, {"code": "MAT0053", "name": "CALCULO NUMERICO", "classNum": 5, "teacher": "CARLOS MABER CARRION RIVEROS", "schedules": [[3, 1], [3, 3]]}],
    "MAT0059": [{"code": "MAT0059", "name": "METODOS MATEMÁTICOS DA FÍSICA 1", "classNum": 1, "teacher": "RADERSON RODRIGUES DA SILVA", "schedules": [[1, 0], [1, 2], [1, 4]]}],
    "MAT0066": [{"code": "MAT0066", "name": "SEMINÁRIO DE TÓPICOS EM ANÁLISE", "classNum": 1, "teacher": "ALINE GOMES DA SILVA PINTO", "schedules": [[1, 0], [1, 2]]}],
    "MAT0075": [{"code": "MAT0075", "name": "CALCULO DE PROBABILIDADE 1", "classNum": 1, "teacher": "LEANDRO MARTINS CIOLETTI", "schedules": [[5, 0], [6, 2], [5, 4]]}, {"code": "MAT0075", "name": "CALCULO DE PROBABILIDADE 1", "classNum": 2, "teacher": "DANIELE DA SILVA BARATELA MARTINS NETO", "schedules": [[1, 0], [1, 1], [1, 3]]}, {"code": "MAT0075", "name": "CALCULO DE PROBABILIDADE 1", "classNum": 3, "teacher": "EDUARDO ANTONIO DA SILVA", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0076": [{"code": "MAT0076", "name": "CALCULO DE PROBABILIDADE 2", "classNum": 1, "teacher": "CATIA REGINA GONCALVES", "schedules": [[1, 0], [1, 2]]}],
    "MAT0080": [{"code": "MAT0080", "name": "INTRODUCAO A TEORIA DOS GRAFOS", "classNum": 1, "teacher": "DANIELA AMORIM AMATO", "schedules": [[3, 1], [3, 3]]}],
    "MAT0087": [{"code": "MAT0087", "name": "SEMINARIO TOPICOS ESPECIAIS", "classNum": 1, "teacher": "ARY VASCONCELOS MEDINO", "schedules": [[2, 2]]}, {"code": "MAT0087", "name": "SEMINARIO TOPICOS ESPECIAIS", "classNum": 2, "teacher": "LUCIANA MARIA DIAS DE AVILA RODRIGUES", "schedules": [[2, 3]]}, {"code": "MAT0087", "name": "SEMINARIO TOPICOS ESPECIAIS", "classNum": 3, "teacher": "GIOVANY DE JESUS MALCHER FIGUEIREDO", "schedules": [[5, 3]]}, {"code": "MAT0087", "name": "SEMINARIO TOPICOS ESPECIAIS", "classNum": 4, "teacher": "MARCELO FERNANDES FURTADO", "schedules": [[4, 0], [3, 1]]}],
    "MAT0106": [{"code": "MAT0106", "name": "ANALISE 3", "classNum": 1, "teacher": "LILIANE DE ALMEIDA MAIA", "schedules": [[1, 1], [1, 3]]}],
    "MAT0111": [{"code": "MAT0111", "name": "GEOMETRIA 1", "classNum": 1, "teacher": "GUY GREBOT", "schedules": [[0, 0], [0, 2]]}],
    "MAT0114": [{"code": "MAT0114", "name": "GEOMETRIA 2", "classNum": 1, "teacher": "RUI SEIMETZ", "schedules": [[6, 0], [5, 2]]}],
    "MAT0117": [{"code": "MAT0117", "name": "SEMINÁRIO DE TÓPICOS EM MATEMÁTICA APLICADA", "classNum": 1, "teacher": "YURI DUMARESQ SOBRAL", "schedules": [[1, 1], [1, 3]]}],
    "MAT0122": [{"code": "MAT0122", "name": "ÁLGEBRA PARA O ENSINO 1", "classNum": 1, "teacher": "CLEYTON HERCULES GONTIJO", "schedules": [[3, 1], [0, 5]]}],
    "MAT0124": [{"code": "MAT0124", "name": "REGÊNCIA 2", "classNum": 1, "teacher": "IGOR DOS SANTOS LIMA", "schedules": [[0, 4], [2, 5]]}],
    "MAT0129": [{"code": "MAT0129", "name": "GEOMETRIA PARA O ENSINO 1", "classNum": 1, "teacher": "RAQUEL CARNEIRO DORR", "schedules": [[3, 2], [1, 5]]}],
    "MAT0131": [{"code": "MAT0131", "name": "GEOMETRIA PARA O ENSINO 2", "classNum": 1, "teacher": "REGINA DA SILVA PINA NEVES", "schedules": [[5, 1], [2, 5]]}],
    "MAT0134": [{"code": "MAT0134", "name": "ÁLGEBRA PARA O ENSINO 2", "classNum": 1, "teacher": "CLEYTON HERCULES GONTIJO", "schedules": [[5, 2], [3, 5]]}],
    "MAT0136": [{"code": "MAT0136", "name": "REGÊNCIA 1", "classNum": 1, "teacher": "REGINA DA SILVA PINA NEVES", "schedules": [[5, 3], [0, 5]]}],
    "MAT0137": [{"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 1, "teacher": "BENEDITO LEANDRO NETO", "schedules": [[2, 0], [2, 2], [2, 4]]}, {"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 2, "teacher": "BENEDITO LEANDRO NETO", "schedules": [[5, 2], [0, 5]]}, {"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 4, "teacher": "JOSE ANTONIO OLIVEIRA DE FREITAS", "schedules": [[2, 0], [2, 2], [2, 4]]}, {"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 6, "teacher": "JOSE ANTONIO OLIVEIRA DE FREITAS", "schedules": [[5, 3], [0, 5]]}, {"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 7, "teacher": "MANUELA CAETANO MARTINS DE REZENDE", "schedules": [[5, 2], [0, 5]]}, {"code": "MAT0137", "name": "CÁLCULO 1 - SEMIPRESENCIAL", "classNum": 8, "teacher": "MANUELA CAETANO MARTINS DE REZENDE", "schedules": [[2, 0], [2, 2], [2, 4]]}],
    "MAT0141": [{"code": "MAT0141", "name": "PRÁTICAS DE EXTENSÃO EM MATEMÁTICA 3", "classNum": 1, "teacher": "RUI SEIMETZ (60h)\\nIGOR DOS SANTOS LIMA", "schedules": [[5, 3], [0, 5]]}],
    "MAT0142": [{"code": "MAT0142", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 1", "classNum": 1, "teacher": "ALINE GOMES DA SILVA PINTO", "schedules": [[2, 0]]}, {"code": "MAT0142", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 1", "classNum": 2, "teacher": "ANDRE CALDAS DE SOUZA", "schedules": [[2, 1]]}, {"code": "MAT0142", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 1", "classNum": 3, "teacher": "ANDREA GENOVESE DE OLIVEIRA", "schedules": [[2, 2]]}],
    "MAT0144": [{"code": "MAT0144", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 3", "classNum": 1, "teacher": "THEO ALLAN DARN ZAPATA", "schedules": [[2, 4]]}, {"code": "MAT0144", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 3", "classNum": 2, "teacher": "THEO ALLAN DARN ZAPATA", "schedules": [[0, 5]]}, {"code": "MAT0144", "name": "INICIAÇÃO CIENTÍFICA EM MATEMÁTICA 3", "classNum": 3, "teacher": "MANUELA CAETANO MARTINS DE REZENDE", "schedules": [[2, 0]]}]
  }
)

/** @type {Record<string, {code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}>} */
const classById = {};
Object.entries(classes).forEach(([code, allClasses]) => {
  allClasses.forEach(c => {
    classById[code + c.classNum] = c;
  })
});

const translateDayToStr = ["", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
class Grade {
  /** @type {HTMLTableElement} */
  #table

  /** @type {HTMLTableCellElement[][]} */
  #grade;

  /** @type {Record<string, boolean>} */
  #isDone;

  /** @type {Set<string>} */
  #selectedClasses;

  /** @type {HTMLDivElement} */
  #list;

  /** @type {{ code: string; name: string; classNum: number; teacher: string; schedules: [number, number][];}[][][]} */
  #possibleValues = [
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
    [[], [], [], [], [], []],
  ]

  #saveLocalStorage() {
    window.localStorage.setItem("isDone", JSON.stringify(this.#isDone));
    window.localStorage.setItem("selectedClasses", JSON.stringify(Array.from(this.#selectedClasses)));
  }

  /** @param {string} code @returns {boolean} */
  #haveRequirements(code) {
    const stack = [];
    for (const token of lessonByCode[code].requirements) {
      if (token === "-") {
        stack.push(true);
      } else if (token === "E") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a && b);
      } else if (token === "OU") {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a || b);
      } else {
        stack.push(this.#isDone[token] ?? false);
      }
    }

    return stack.pop();
  }

  /** @param {string} id */
  #chooseClassById(id) {
    const lessonClass = classById[id];
    this.#clearLessonByCode(lessonClass.code);

    for (const [i, j] of lessonClass.schedules) {
      const element = this.#grade[i][j].children[0].children[0];
      if (element.id && element.id !== id) {
        this.#selectedClasses.delete(element.id);
        this.#clearChooseById(element.id);
      }

      element.innerText = nicknames[lessonClass.code];
      element.id = id;
    }
    this.#selectedClasses.add(id);
    this.#saveLocalStorage();
  }

  /** @param {string} id */
  #clearChooseById(id) {
    for (const [i, j] of classById[id].schedules) {
      const element = this.#grade[i][j].children[0].children[0];
      element.innerText = "-";
      element.id = "";
    }
  }

  /** @param {string} code */
  #clearLessonByCode(code) {
    this.#grade.forEach(e => {
      e.forEach((g) => {
        const element = g.children[0].children[0];
        if (element.innerText === nicknames[code]) {
          element.innerText = "-";
          element.id = "";
        }
      })
    })
  }

  /** @param {string} id */
  #warnAddById(id) {
    const lesson = classById[id];
    this.#warnRemoveByCode(lesson.code);

    for (const [i, j] of lesson.schedules) {
      const td = this.#grade[i][j];
      const select = td.children[0].children[0];

      if (select.id && select.id !== lesson.id) {
        this.#warnRemoveById(select.id);
      }
    }

    for (const [i, j] of lesson.schedules) {
      if (this.#grade[i][j].attributeStyleMap.get("background-color")) {
        this.#grade[i][j].attributeStyleMap.set("background-color", "#ff7c40"); // yellow
      } else {
        this.#grade[i][j].attributeStyleMap.set("background-color", "#40ff40"); // green
      }
    }
  }

  /**
   * 
   * @param {string} id 
   */
  #warnRemoveById(id) {
    for (const [i, j] of classById[id].schedules) {
      this.#grade[i][j].attributeStyleMap.set("background-color", "#ff4040"); // red
    }
  }

  /**
   * 
   * @param {string} code 
   */
  #warnRemoveByCode(code) {
    this.#grade.forEach(e => {
      e.forEach((g) => {
        const element = g.children[0].children[0];

        if (element.innerText === nicknames[code]) {
          g.attributeStyleMap.set("background-color", "#ff4040"); // red
        }
      })
    });
  }

  #clearWarnings() {
    this.#grade.forEach(e => {
      e.forEach(g => {
        g.attributeStyleMap.delete("background-color");
      })
    });
  }

  /**  @returns {HTMLTableElement} */
  getTable(rebuild = false) {
    if (this.#table && !rebuild) {
      return this.#table;
    }

    this.#possibleValues = [
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
      [[], [], [], [], [], []],
    ];
    curriculum.forEach(s => {
      s.forEach(m => {
        if (this.#isDone[m.code] || !this.#haveRequirements(m.code)) {
          return;
        }

        classes[m.code]?.forEach(c => {
          if (c.schedules.some(([i, j]) => i > 5 || j > 5)) {
            return;
          }

          c.schedules.forEach(([i, j]) => {
            this.#possibleValues[i][j].push(c);
          })
        });
      })

    });


    this.#table = document.createElement("table");

    const thead = document.createElement("thead");
    this.#table.appendChild(thead);

    const headerRows = document.createElement("tr");
    translateDayToStr.forEach((n) => {
      const th = document.createElement("th");
      th.innerHTML = n;
      headerRows.appendChild(th);
    });
    thead.appendChild(headerRows);

    const tbody = document.createElement("tbody");
    this.#table.appendChild(tbody);

    this.#grade = this.#possibleValues.map((lessonsByHour, i) => {
      const tr = document.createElement("tr");

      const hour = document.createElement("td");
      hour.innerHTML = `${(i * 2 + 8).toString().padStart(2, "0")}:00 <br /> - <br /> ${(i * 2 + 9).toString().padStart(2, "0")}:50`;
      tr.appendChild(hour);

      const gradeRows = lessonsByHour.map((lessons) => {
        const td = document.createElement("td");

        const selectContainer = document.createElement("div");
        selectContainer.classList.add("select-container");

        const selectBox = document.createElement("button");
        selectBox.classList.add("select-box");
        selectBox.innerText = "-";
        selectContainer.appendChild(selectBox);

        const selectOptionsContainer = document.createElement("div");
        selectOptionsContainer.classList.add("select-options-container");

        const resetOption = document.createElement("div");
        resetOption.classList.add("select-option");
        resetOption.innerText = "-";
        selectOptionsContainer.appendChild(resetOption);

        resetOption.addEventListener("click", () => {
          if (selectBox.id) {
            this.#clearChooseById(selectBox.id);
          }
        });

        resetOption.addEventListener("mouseenter", () => {
          if (selectBox.id) {
            this.#warnRemoveById(selectBox.id);
          }
        });

        resetOption.addEventListener("mouseout", () => {
          this.#clearWarnings();
        });

        for (const lesson of lessons) {
          const selectOption = document.createElement("div");
          selectOption.classList.add("select-option");
          selectOption.innerHTML = `${nicknames[lesson.code]} - ${lesson.teacher}`;
          selectOptionsContainer.appendChild(selectOption);

          selectOption.addEventListener("click", () => {
            this.#chooseClassById(lesson.code + lesson.classNum);
          });

          selectOption.addEventListener("mouseenter", () => {
            this.#warnAddById(lesson.code + lesson.classNum);
          });

          selectOption.addEventListener("mouseout", () => {
            this.#clearWarnings();
          });
        }

        selectContainer.appendChild(selectOptionsContainer);
        td.appendChild(selectContainer);
        tr.appendChild(td);
        return td;
      });
      tbody.appendChild(tr);

      return gradeRows;
    });

    this.#selectedClasses.forEach(id => {
      this.#chooseClassById(id);
    });
    return this.#table;
  }

  getList(rebuild = false) {
    if (this.#list && !rebuild) {
      return this.#list;
    }

    this.#list = document.createElement("div");
    this.#list.classList.add("container");

    curriculum.forEach((semester, i) => {
      const title = document.createElement("h1");
      title.innerText = `${i + 1}° Semestre:`
      this.#list.appendChild(title);

      const unorderedList = document.createElement("ul");
      semester.forEach((lesson, j) => {
        const isDone = this.#isDone[lesson.code];
        const listItem = document.createElement("li");
        listItem.classList.add("semesterLesson");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = lesson.code;
        checkbox.checked = isDone;

        const label = document.createElement("label");
        label.innerText = lesson.name;
        label.for = lesson.code;
        label.style.textDecoration = isDone ? "line-through" : "none";

        checkbox.addEventListener("change", async (event) => {
          this.#isDone[lesson.code] = event.target.checked;
          this.#saveLocalStorage();

          label.style.textDecoration = event.target.checked ? "line-through" : "none";
          if (event.target.checked) {
            listItem.style.filter = "opacity(0.5)";
          } else {
            listItem.style.filter = this.#haveRequirements(lesson.code) ? "" : "opacity(0.5)";
          }
          this.updateState();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        if (isDone) {
          listItem.style.filter = "opacity(0.5)";
        } else {
          if (!this.#haveRequirements(lesson.code)) {
            checkbox.disabled = true;

            listItem.style.filter = "opacity(0.5)";
          }
        }
        unorderedList.appendChild(listItem);
      });

      this.#list.appendChild(unorderedList);
    });

    return this.#list;
  }

  updateState() {
    this.#list.replaceWith(this.getList(true));
    this.#table.replaceWith(this.getTable(true));
  }

  #healthyCheckRequirements() {
    const tmp = this.#isDone;

    this.#isDone = {};
    curriculum.forEach(s => {
      s.forEach(m => {
        this.#isDone[m.code] = true;
      })
    });

    const errors = [];
    curriculum.forEach(s => {
      s.forEach(m => {
        if (!this.#haveRequirements(m.code)) {
          errors.push({ code: m.code, name: m.name });
        }
      })
    });
    if (errors.length) {
      throw new Error("Impossible requirements for " + JSON.stringify(errors));
    }

    this.#isDone = tmp;
  }

  #healthyCheckLessons() {
    curriculum.forEach((semester) => {
      semester.forEach((lesson) => {
        if (!classes[lesson.code]) {
          console.warn("Lesson does not have any class: " + lesson.name);
        }
      });
    });
  }

  constructor() {
    this.#healthyCheckRequirements();
    this.#healthyCheckLessons()

    this.#isDone = window.localStorage.getItem("isDone");
    if (!this.#isDone) {
      this.#isDone = {};
    } else {
      this.#isDone = JSON.parse(this.#isDone);
    }

    this.#selectedClasses = window.localStorage.getItem("selectedClasses");
    if (!this.#selectedClasses) {
      this.#selectedClasses = new Set();
    } else {
      this.#selectedClasses = new Set(JSON.parse(this.#selectedClasses));
    }
    this.#saveLocalStorage();
  }
}

