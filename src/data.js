export const haveList = [
  'Você salva referências.',
  'Segue perfis.',
  'Vê Reels que gostaria de fazer.',
  'Tem fotos e vídeos.',
  'Tem conhecimento e histórias.',
];

export const painList = [
  'Não sabe o que postar.',
  'Posta quando sobra tempo.',
  'Os Stories acontecem sem planejamento.',
  'Os Reels ficam para depois.',
  'Fala muito sobre destinos.',
  'Fala pouco sobre por que comprar com você.',
];

export const repositionTags = ['POSICIONAMENTO', 'AUTORIDADE', 'RELACIONAMENTO', 'OPORTUNIDADE', 'VENDA'];

export const pillars = [
  {
    num: '01',
    title: 'CRIAR',
    desc: 'Transformar conhecimento, viagens, experiências, bastidores e produtos em conteúdos que as pessoas tenham vontade de consumir.',
  },
  {
    num: '02',
    title: 'COMUNICAR',
    desc: 'Construir uma presença que deixe claro quem você é, o que sua agência faz, para quem vende e por que confiar em você.',
  },
  {
    num: '03',
    title: 'VENDER',
    desc: 'Usar conteúdo estrategicamente para despertar desejo, gerar relacionamento, criar conversas e conduzir clientes até a venda.',
  },
];

const journeyLabels = ['CLAREZA', 'ESTRATÉGIA', 'CONEXÃO', 'PRESENÇA', 'CONSISTÊNCIA', 'CONVERSÃO'];
export const journey = journeyLabels.map((label, i) => ({
  num: '0' + (i + 1),
  label,
  hasNext: i < journeyLabels.length - 1,
}));

export const encounters = [
  {
    num: '01',
    tag: 'CLAREZA',
    title: 'RAIO-X DA SUA COMUNICAÇÃO',
    intro: 'Antes de produzir mais, entender o que sua agência está comunicando hoje: o que vende, o que está confuso, o que precisa ganhar espaço e pelo que quer ser lembrada.',
    topics: ['O que sua agência vende', 'O que seu perfil transmite', 'Territórios editoriais', 'Marca x produtos x presença pessoal'],
    missionTitle: 'MAPA DE COMUNICAÇÃO DA AGÊNCIA',
  },
  {
    num: '02',
    tag: 'ESTRATÉGIA',
    title: 'O QUE POSTAR, ONDE POSTAR E POR QUÊ',
    intro: 'Parar de ver conteúdo apenas como "post de Instagram" e trabalhar inspiração, autoridade, prova social, objeções e oferta dentro de uma matriz.',
    topics: ['Inspiração', 'Autoridade', 'Bastidores', 'Prova social', 'Objeções', 'Ofertas e CTA'],
    flowLabel: 'MATRIZ DE CONTEÚDO',
    flow: [
      { label: 'ATRAIR', hasNext: true },
      { label: 'CONECTAR', hasNext: true },
      { label: 'PROVAR', hasNext: true },
      { label: 'VENDER', hasNext: false },
    ],
    channels: ['REEL', 'STORIES', 'CARROSSEL', 'WHATSAPP', 'E-MAIL', 'BLOG', 'SITE'],
    missionTitle: 'MATRIZ DE CONTEÚDO + BANCO DE PAUTAS',
  },
  {
    num: '03',
    tag: 'CONEXÃO',
    title: 'STORIES QUE AS PESSOAS QUEREM ACOMPANHAR',
    intro: 'Storytelling, sequências, enquetes, caixa de perguntas e interação — Stories construindo proximidade, relacionamento, confiança e movimento comercial.',
    topics: ['Bastidores', 'Storytelling', 'Enquetes e interação', 'Rotina e presença'],
    missionTitle: '7 DIAS DE STORIES ESTRATÉGICOS',
  },
  {
    num: '04',
    tag: 'PRESENÇA',
    title: 'APAREÇA: VÍDEOS E REELS SEM COMPLICAÇÃO',
    intro: 'Segurança diante da câmera, enquadramento, luz, roteiro, hooks e edição — aproveitando viagens e famtours em Reels educativos, de autoridade e comerciais.',
    topics: ['Segurança na câmera', 'Roteiro e hooks', 'Edição e cortes', 'Aproveitamento de famtours'],
    quote: '"Você não precisa de um estúdio. Precisa aprender a usar aquilo que provavelmente já tem nas mãos: celular + conhecimento."',
    missionTitle: 'GRAVAR E PUBLICAR CONTEÚDOS EM VÍDEO',
  },
  {
    num: '05',
    tag: 'CONSISTÊNCIA',
    title: '30 DIAS DE CONTEÚDO SEM IMPROVISO',
    intro: 'Organizar ideias, fotos, vídeos e pautas para parar de decidir o conteúdo no dia em que ele precisa ser publicado.',
    topics: ['Organização de pautas', 'Feed, Stories e Reels', 'WhatsApp e e-mail'],
    flowLabel: 'O CALENDÁRIO EDITORIAL CONVERSA COM O COMERCIAL',
    flow: [
      { label: 'O QUE QUERO VENDER', hasNext: true },
      { label: 'O QUE PRECISO COMUNICAR', hasNext: true },
      { label: 'QUANDO COMEÇAR', hasNext: true },
      { label: 'O QUE PRODUZIR', hasNext: false },
    ],
    missionTitle: 'CALENDÁRIO EDITORIAL + COMERCIAL DE 30 DIAS',
  },
  {
    num: '06',
    tag: 'CONVERSÃO',
    title: 'CONTEÚDO QUE DESPERTA DESEJO E GERA VENDAS',
    intro: 'Com o Método IMPACTO: transformar atenção em oportunidade através de posicionamento, oferta, prova social e condução para a conversa comercial.',
    topics: ['Posicionamento e oferta', 'Geração de leads', 'Prova social e objeções', 'Divulgação de grupos e saídas'],
    quote: '"Nem todo conteúdo precisa vender. Mas todo conteúdo precisa ter uma função dentro da sua estratégia."',
    missionTitle: 'CAMPANHA CREATIONS PARA UM PRODUTO REAL',
  },
];

export const missions = encounters.map((e) => ({ num: e.num, title: e.missionTitle }));

export const accompFlow = ['APRENDE', 'APLICA', 'COMPARTILHA', 'RECEBE DIRECIONAMENTO', 'AJUSTA', 'AVANÇA'];

const impactLabels = ['CONTEÚDO', 'POSICIONAMENTO', 'ESTRATÉGIA', 'OPORTUNIDADE', 'VENDA'];
export const impactFlow = impactLabels.map((label, i) => ({ label, hasNext: i < impactLabels.length - 1 }));

export const calendarItems = [
  { date: 'TEMPORADA DISNEY', opp: 'Aberturas e novidades de parques', idea: 'Bastidores + autoridade em destino', format: 'REEL' },
  { date: 'CALENDÁRIO UNIVERSAL', opp: 'Lançamentos e atrações novas', idea: 'Prova social de quem já foi', format: 'STORIES' },
  { date: 'UNITED PARKS', opp: 'Pacotes e experiências sazonais', idea: 'Educação sobre o destino', format: 'CARROSSEL' },
  { date: 'ALTA TEMPORADA', opp: 'Janelas de viagem em alta', idea: 'Oferta conectada ao calendário comercial', format: 'WHATSAPP' },
];

export const deliverables = [
  'Mapa de Comunicação da Agência',
  'Territórios editoriais',
  'Matriz estratégica de conteúdo',
  'Banco de pautas',
  'Estruturas para Stories',
  'Formatos para vídeos e Reels',
  'Rotina de produção',
  'Calendário Editorial de 30 dias',
  'Calendário Comercial conectado ao conteúdo',
  'Calendário de Oportunidades Disney, Universal e United Parks',
  'Estratégia de conversão com Método IMPACTO',
  'Campanha de conteúdo para um produto real',
];

export const knowList = [
  'O QUE POSTAR.',
  'POR QUE POSTAR.',
  'COMO CRIAR.',
  'COMO APARECER.',
  'COMO SE ORGANIZAR.',
  'COMO COMUNICAR VALOR.',
  'COMO TRANSFORMAR CONTEÚDO EM OPORTUNIDADE.',
];

export const offerFeatures = [
  '90 DIAS',
  '6 ENCONTROS AO VIVO',
  'ACOMPANHAMENTO MONA + CAMILA',
  'GRUPO EXCLUSIVO NO WHATSAPP',
  'MÉTODO IMPACTO',
  'CALENDÁRIO DE OPORTUNIDADES',
];

export const faqData = [
  {
    question: 'Preciso ter feito o AGIR para participar?',
    answer: 'Não. O CREATIONS 2.0 é um programa independente. Ele complementa perfeitamente o trabalho desenvolvido no AGIR, mas qualquer agente de viagens que queira estruturar seu marketing pode participar.',
  },
  {
    question: 'Preciso saber editar vídeos?',
    answer: 'Não. Uma das propostas do CREATIONS é justamente descomplicar a produção e ensinar uma rotina possível de executar.',
  },
  {
    question: 'Preciso aparecer nos vídeos?',
    answer: 'Você será estimulado a desenvolver sua presença e ganhar mais segurança para aparecer, respeitando sua personalidade e a comunicação da sua marca.',
  },
  {
    question: 'É apenas sobre Instagram?',
    answer: 'Não. O Instagram é um dos canais trabalhados, mas o CREATIONS aborda comunicação de forma mais ampla, incluindo Stories, Reels, WhatsApp, e-mail, blog e site.',
  },
  {
    question: 'O Método IMPACTO é outro curso?',
    answer: 'Não. O Método IMPACTO está incorporado ao CREATIONS 2.0 e é utilizado para conectar conteúdo a estratégia, posicionamento, oportunidades comerciais e vendas.',
  },
  {
    question: 'Terei acompanhamento entre os encontros?',
    answer: 'Sim. Os participantes terão 90 dias de acompanhamento no grupo exclusivo de WhatsApp com Mona Coscarella e Camila Moretti para dúvidas, aplicação das Missões Creations e direcionamentos.',
  },
];
