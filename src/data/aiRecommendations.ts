export interface AITool {
  id: string;
  name: string;
  category: 'Produtividade Diária' | 'Análise e Pesquisa' | 'Automação Avançada' | 'Criação Visual' | 'Desenvolvimento';
  description: string;
  practicalExample: string;
  bestFor: string[];
  targetProfile: ('curioso' | 'experimentador' | 'executor' | 'integrador' | 'estrategista')[];
  targetCategories: ('Produtividade' | 'Performance' | 'Inovação' | 'Liderança')[];
}

export const aiTools: AITool[] = [
  // Produtividade Diária
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Produtividade Diária',
    description: 'Use quando precisar de conversas naturais, produtividade e criatividade rápida. Ele entende texto, áudio e imagem.',
    practicalExample: 'Você precisa preparar uma proposta de negócio de última hora? Peça ao ChatGPT para estruturar o texto, ajustar o tom e gerar até as versões finais de apresentação.',
    bestFor: ['Redigir e-mails profissionais em segundos', 'Fazer brainstorm de campanhas de marketing', 'Analisar uma imagem ou gráfico e explicar em linguagem simples'],
    targetProfile: ['curioso', 'experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Produtividade', 'Liderança']
  },

  // Análise e Pesquisa
  {
    id: 'claude',
    name: 'Claude',
    category: 'Análise e Pesquisa',
    description: 'É o modelo mais criativo e analítico. Ideal para quem trabalha com informação complexa.',
    practicalExample: 'Você tem 50 páginas de pesquisa de mercado? O Claude consegue transformar isso em um relatório enxuto com os principais insights.',
    bestFor: ['Criar dashboards inteligentes com base em dados brutos', 'Escrever relatórios longos ou jurídicos com clareza', 'Organizar documentos técnicos em resumos estratégicos'],
    targetProfile: ['curioso', 'experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Performance', 'Liderança']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Análise e Pesquisa',
    description: 'O seu Google turbinado por IA. Ótimo para pesquisa de mercado, benchmark e análises profundas.',
    practicalExample: 'Precisa entender como uma empresa do seu setor está se posicionando? O Perplexity entrega em minutos uma visão completa com dados e links originais.',
    bestFor: ['Usar o DeepSearch para estudar concorrentes', 'Comparar diferentes fornecedores e tecnologias', 'Criar relatórios com referências de fontes confiáveis'],
    targetProfile: ['experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Inovação', 'Liderança']
  },

  // Automação Avançada
  {
    id: 'manus',
    name: 'Manus',
    category: 'Automação Avançada',
    description: 'Uma IA que vai além do chat: ela pode controlar seu computador.',
    practicalExample: 'Você precisa montar 10 apresentações diferentes em um dia? A Manus cria os slides, formata e organiza sem que você precise clicar em nada.',
    bestFor: ['Gerar e montar apresentações no PowerPoint automaticamente', 'Abrir aplicativos, executar tarefas repetitivas e automatizar fluxos inteiros', 'Ser um "assistente digital" que realmente age'],
    targetProfile: ['curioso', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Produtividade', 'Performance']
  },

  // Criação Visual
  {
    id: 'freepik',
    name: 'Freepik',
    category: 'Criação Visual',
    description: 'Especializada em design com IA. Serve para criar tanto imagens quanto vídeos.',
    practicalExample: 'Quer lançar um produto novo e não tem designer disponível? O Freepik gera o logotipo, banners e até vídeos de divulgação.',
    bestFor: ['Gerar logotipos, artes realistas ou ilustrações criativas', 'Criar vídeos curtos com base em roteiros de texto', 'Otimizar a identidade visual de uma marca'],
    targetProfile: ['curioso', 'experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'Criação Visual',
    description: 'Transforma imagens em vídeos com realismo impressionante.',
    practicalExample: 'Precisa de um vídeo em inglês com sotaque perfeito, mas não fala o idioma? O HeyGen cria sua versão digital apresentando a mensagem com naturalidade.',
    bestFor: ['Criar avatares que apresentam sua empresa', 'Transformar uma foto em um vídeo institucional', 'Gerar conteúdos dinâmicos sem precisar de câmera ou estúdio'],
    targetProfile: ['executor', 'integrador', 'estrategista'],
    targetCategories: ['Inovação', 'Liderança']
  },

  // Desenvolvimento
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'Desenvolvimento',
    description: 'Ferramenta para criar softwares e sites sem precisar ser programador.',
    practicalExample: 'Quer testar uma nova ideia de negócio em uma semana? No Lovable você cria o site, conecta ao banco de dados e já coloca no ar.',
    bestFor: ['Construir landing pages de captura de leads', 'Desenvolver sistemas internos para resolver problemas da sua empresa', 'Criar aplicativos sob medida para clientes ou projetos pessoais'],
    targetProfile: ['experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'Desenvolvimento',
    description: 'Ferramenta para criar softwares e sites sem precisar ser programador.',
    practicalExample: 'Quer testar uma nova ideia de negócio em uma semana? No Replit você cria o site, conecta ao banco de dados e já coloca no ar.',
    bestFor: ['Construir landing pages de captura de leads', 'Desenvolver sistemas internos para resolver problemas da sua empresa', 'Criar aplicativos sob medida para clientes ou projetos pessoais'],
    targetProfile: ['experimentador', 'executor', 'integrador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  }
];

export function getRecommendedAIs(answers: number[], totalScore: number, profileKey: string): AITool[] {
  // Logic for different profiles
  if (profileKey === 'curioso') {
    return [
      aiTools.find(tool => tool.id === 'chatgpt')!,
      aiTools.find(tool => tool.id === 'claude')!,
      aiTools.find(tool => tool.id === 'manus')!,
      aiTools.find(tool => tool.id === 'freepik')!
    ];
  }
  
  if (profileKey === 'experimentador') {
    return [
      aiTools.find(tool => tool.id === 'chatgpt')!,
      aiTools.find(tool => tool.id === 'perplexity')!,
      aiTools.find(tool => tool.id === 'manus')!,
      aiTools.find(tool => tool.id === 'freepik')!
    ];
  }
  
  if (profileKey === 'executor') {
    const tools = [];
    
    // Check for low scores in specific categories to recommend targeted tools
    if (answers[0] < 3 || answers[4] < 3) tools.push(aiTools.find(tool => tool.id === 'chatgpt')!);
    if (answers[1] < 3 || answers[5] < 3) tools.push(aiTools.find(tool => tool.id === 'claude')!);
    if (answers[2] < 3 || answers[6] < 3) tools.push(aiTools.find(tool => tool.id === 'perplexity')!);
    if (answers[3] < 3 || answers[7] < 3) tools.push(aiTools.find(tool => tool.id === 'manus')!);
    
    // Fill remaining slots with diverse recommendations
    const remainingSlots = 4 - tools.length;
    const additionalTools = [
      aiTools.find(tool => tool.id === 'freepik')!,
      aiTools.find(tool => tool.id === 'heygen')!,
      aiTools.find(tool => tool.id === 'lovable')!,
      aiTools.find(tool => tool.id === 'replit')!
    ].filter(tool => !tools.some(t => t.id === tool.id));
    
    tools.push(...additionalTools.slice(0, remainingSlots));
    return tools.slice(0, 4);
  }
  
  if (profileKey === 'integrador') {
    return [
      aiTools.find(tool => tool.id === 'claude')!,
      aiTools.find(tool => tool.id === 'perplexity')!,
      aiTools.find(tool => tool.id === 'manus')!,
      aiTools.find(tool => tool.id === 'heygen')!
    ];
  }
  
  // Advanced profile - estrategista
  return [
    aiTools.find(tool => tool.id === 'perplexity')!,
    aiTools.find(tool => tool.id === 'claude')!,
    aiTools.find(tool => tool.id === 'heygen')!,
    aiTools.find(tool => tool.id === 'lovable')!
  ];
}

function getQuestionCategory(questionIndex: number): string {
  const categoryMap = [
    'Produtividade', 'Produtividade', // Questões 1-2
    'Performance', 'Performance',     // Questões 3-4
    'Inovação', 'Inovação',          // Questões 5-6
    'Liderança', 'Liderança', 'Liderança', 'Liderança' // Questões 7-10
  ];
  
  return categoryMap[questionIndex] || 'Liderança';
}

export function getPersonalizedRecommendationText(profileKey: string): string {
  const texts = {
    curioso: "Como alguém que está começando a explorar o mundo da IA, selecionei ferramentas que vão te ajudar a dar os primeiros passos com confiança:",
    experimentador: "Você já está experimentando e evoluindo! Aqui estão as ferramentas que vão te ajudar a criar consistência:",
    executor: "Você já está aplicando IA na prática! Vamos potencializar ainda mais seus resultados:",
    integrador: "Como alguém que já integrou IA aos processos, estas ferramentas vão expandir suas possibilidades:",
    estrategista: "Como um verdadeiro estrategista em IA, estas ferramentas vão levar sua liderança ao próximo nível:"
  };
  
  return texts[profileKey as keyof typeof texts] || texts.curioso;
}