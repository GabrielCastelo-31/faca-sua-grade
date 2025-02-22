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
      "code": "FGA0302",
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
  "FGA0302": "Eng. Amb.",
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
    "FGA0302": [{"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 1, "teacher": "MARIA VITORIA DUARTE FERRARI", "schedules": [[0, 2], [0, 4]]}, {"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 2, "teacher": "JOSIANE DO SOCORRO AGUIAR DE SOUZA DE OLIVEIRA CAMPOS", "schedules": [[4, 0], [4, 2]]}, {"code": "FGA0302", "name": "ENGENHARIA E AMBIENTE", "classNum": 3, "teacher": "FERNANDO PAIVA SCARDUA", "schedules": [[1, 1], [1, 3]]}],
    "FGA0308": [{"code": "FGA0308", "name": "ELETRÔNICA EMBARCADA", "classNum": 1, "teacher": "GUILLERMO ALVAREZ BESTARD", "schedules": [[4, 0], [4, 2], [4, 4]]}],
    "FGA0309": [{"code": "FGA0309", "name": "SISTEMAS OPERACIONAIS EMBARCADOS", "classNum": 1, "teacher": "DIOGO CAETANO GARCIA", "schedules": [[3, 0], [3, 2], [3, 4]]}],
    "FGA0320": [{"code": "FGA0320", "name": "FELICIDADE", "classNum": 1, "teacher": "WANDER CLEBER MARIA PEREIRA DA SILVA", "schedules": [[3, 1], [3, 3]]}],
    "CIC0004": [{"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 8, "teacher": "CLENIO EMIDIO DA FONSECA", "schedules": [[3, 0], [3, 2], [3, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 9, "teacher": "FABRICIO ATAIDES BRAZ", "schedules": [[4, 0], [0, 1], [0, 3]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 10, "teacher": "DANIEL SUNDFELD LIMA", "schedules": [[3, 0], [1, 2], [1, 4]]}, {"code": "CIC0004", "name": "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "classNum": 11, "teacher": "NILTON CORREIA DA SILVA", "schedules": [[4, 0], [0, 1], [0, 3]]}],
    "MAT0025": [{"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 24, "teacher": "RICARDO RAMOS FRAGELLI", "schedules": [[1, 0], [1, 2], [1, 4]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 25, "teacher": "MATHEUS BERNARDINI DE SOUZA", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 26, "teacher": "LINDOMAR BOMFIM DE CARVALHO DE JESUS", "schedules": [[0, 0], [0, 1], [0, 3]]}, {"code": "MAT0025", "name": "CÁLCULO 1", "classNum": 27, "teacher": "WESLEY FERREIRA LOPES", "schedules": [[2, 0], [2, 2], [2, 4]]}],
    "MAT0026": [{"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 2, "teacher": "YEVSEY YEHOSHUA SOBOLEVSKY", "schedules": [[3, 0], [3, 1], [3, 3]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 14, "teacher": "LUIZA YOKO TANEGUTI", "schedules": [[0, 0], [0, 2], [0, 4]]}, {"code": "MAT0026", "name": "CÁLCULO 2", "classNum": 15, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0027": [{"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 11, "teacher": "VINICIUS DE CARVALHO RISPOLI", "schedules": [[4, 0], [4, 1], [4, 3]]}, {"code": "MAT0027", "name": "CÁLCULO 3", "classNum": 12, "teacher": "TATIANE DA SILVA EVANGELISTA", "schedules": [[1, 0], [1, 1], [1, 3]]}],
    "MAT0031": [{"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 12, "teacher": "LUIZA YOKO TANEGUTI", "schedules": [[1, 0], [1, 2]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 13, "teacher": "YEVSEY YEHOSHUA SOBOLEVSKY", "schedules": [[3, 2], [3, 4]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 14, "teacher": "MATHEUS BERNARDINI DE SOUZA", "schedules": [[0, 1], [0, 3]]}, {"code": "MAT0031", "name": "INTRODUCAO A ALGEBRA LINEAR", "classNum": 16, "teacher": "WESLEY FERREIRA LOPES", "schedules": [[3, 0], [3, 2]]}],
    "IFD0171": [{"code": "IFD0171", "name": "FISICA 1", "classNum": 13, "teacher": "GABRIELA CUNHA POSSA", "schedules": [[0, 1], [0, 3]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 18, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[0, 0], [0, 2]]}, {"code": "IFD0171", "name": "FISICA 1", "classNum": 19, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[4, 1], [4, 3]]}],
    "IFD0173": [{"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 1, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[3, 1]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 2, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[3, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 3, "teacher": "EBERTH DE ALMEIDA CORREA", "schedules": [[1, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 5, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[1, 0]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 6, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[1, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 8, "teacher": "WYTLER CORDEIRO DOS SANTOS", "schedules": [[3, 3]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 9, "teacher": "RAFAEL MORGADO SILVA", "schedules": [[3, 2]]}, {"code": "IFD0173", "name": "FISICA 1 EXPERIMENTAL", "classNum": 30, "teacher": "RONNI GERALDO GOMES DE AMORIM", "schedules": [[0, 3]]}],
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
        selectBox.innerText = lessons.length ? "-" : "🔒";
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
          if (this.#isDone[lesson.code] || !this.#haveRequirements(lesson.code)) {
            Array.from(this.#selectedClasses).forEach(v => {
              if(this.#isDone[v.slice(0, 7)]) {
                this.#selectedClasses.delete(v);
              }
            });
          }
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
      Object.entries(this.#isDone).forEach(([k, v]) => {
        if(!v) {
          delete this.#isDone[k];
        }
      })
    }

    this.#selectedClasses = window.localStorage.getItem("selectedClasses");
    if (!this.#selectedClasses) {
      this.#selectedClasses = new Set();
    } else {
      /**@type Set<string> */
      const selectedClassesSaved = new Set(JSON.parse(this.#selectedClasses));
      Array.from(selectedClassesSaved).forEach(v => {
        if(this.#isDone[v.slice(0, 7)] || !this.#haveRequirements(v.slice(0, 7))) {
          selectedClassesSaved.delete(v);
        }
      })
      this.#selectedClasses = selectedClassesSaved;
    }
    this.#saveLocalStorage();
  }
}

