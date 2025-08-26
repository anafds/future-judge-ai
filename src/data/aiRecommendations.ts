export interface AITool {
  id: string;
  name: string;
  category: 'Produtividade Diária' | 'Análise e Pesquisa' | 'Automação Avançada' | 'Criação Visual' | 'Desenvolvimento';
  description: string;
  practicalExample: string;
  bestFor: string[];
  targetProfile: ('curioso' | 'iniciante' | 'implementador' | 'estrategista')[];
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
    targetProfile: ['curioso', 'iniciante', 'implementador', 'estrategista'],
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
    targetProfile: ['curioso', 'iniciante', 'implementador', 'estrategista'],
    targetCategories: ['Performance', 'Liderança']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'Análise e Pesquisa',
    description: 'O seu Google turbinado por IA. Ótimo para pesquisa de mercado, benchmark e análises profundas.',
    practicalExample: 'Precisa entender como uma empresa do seu setor está se posicionando? O Perplexity entrega em minutos uma visão completa com dados e links originais.',
    bestFor: ['Usar o DeepSearch para estudar concorrentes', 'Comparar diferentes fornecedores e tecnologias', 'Criar relatórios com referências de fontes confiáveis'],
    targetProfile: ['iniciante', 'implementador', 'estrategista'],
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
    targetProfile: ['curioso', 'implementador', 'estrategista'],
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
    targetProfile: ['curioso', 'iniciante', 'implementador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'Criação Visual',
    description: 'Transforma imagens em vídeos com realismo impressionante.',
    practicalExample: 'Precisa de um vídeo em inglês com sotaque perfeito, mas não fala o idioma? O HeyGen cria sua versão digital apresentando a mensagem com naturalidade.',
    bestFor: ['Criar avatares que apresentam sua empresa', 'Transformar uma foto em um vídeo institucional', 'Gerar conteúdos dinâmicos sem precisar de câmera ou estúdio'],
    targetProfile: ['implementador', 'estrategista'],
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
    targetProfile: ['iniciante', 'implementador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'Desenvolvimento',
    description: 'Ferramenta para criar softwares e sites sem precisar ser programador.',
    practicalExample: 'Quer testar uma nova ideia de negócio em uma semana? No Replit você cria o site, conecta ao banco de dados e já coloca no ar.',
    bestFor: ['Construir landing pages de captura de leads', 'Desenvolver sistemas internos para resolver problemas da sua empresa', 'Criar aplicativos sob medida para clientes ou projetos pessoais'],
    targetProfile: ['iniciante', 'implementador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  }
];

export function getRecommendedAIs(
  answers: number[], 
  totalScore: number, 
  profileKey: string
): AITool[] {
  // Identificar categorias com pontuação baixa (≤ 2)
  const lowScoreCategories = answers
    .map((score, index) => ({ score, category: getQuestionCategory(index) }))
    .filter(item => item.score <= 2)
    .map(item => item.category);

  // Recomendações específicas por perfil
  let recommendedTools: AITool[] = [];

  switch (profileKey) {
    case 'curioso':
      // Para curiosos: ChatGPT, Claude, Manus, Freepik (ferramentas acessíveis)
      recommendedTools = aiTools.filter(ai => 
        ['chatgpt', 'claude', 'manus', 'freepik'].includes(ai.id)
      );
      break;
      
    case 'iniciante':
      // Para iniciantes: ferramentas práticas para aplicar
      recommendedTools = aiTools.filter(ai => 
        ['chatgpt', 'perplexity', 'freepik', 'lovable'].includes(ai.id)
      );
      break;
      
    case 'implementador':
      // Para implementadores: baseado nos problemas identificados
      if (lowScoreCategories.includes('Produtividade')) {
        recommendedTools.push(...aiTools.filter(ai => ['chatgpt', 'manus'].includes(ai.id)));
      }
      if (lowScoreCategories.includes('Performance')) {
        recommendedTools.push(...aiTools.filter(ai => ['claude', 'perplexity'].includes(ai.id)));
      }
      if (lowScoreCategories.includes('Inovação')) {
        recommendedTools.push(...aiTools.filter(ai => ['freepik', 'heygen', 'lovable'].includes(ai.id)));
      }
      if (lowScoreCategories.includes('Liderança')) {
        recommendedTools.push(...aiTools.filter(ai => ['perplexity', 'claude'].includes(ai.id)));
      }
      
      // Se não há problemas críticos, mostrar ferramentas avançadas
      if (recommendedTools.length === 0) {
        recommendedTools = aiTools.filter(ai => 
          ['claude', 'perplexity', 'manus', 'heygen'].includes(ai.id)
        );
      }
      break;
      
    case 'estrategista':
      // Para estrategistas: ferramentas para liderança
      recommendedTools = aiTools.filter(ai => 
        ['perplexity', 'claude', 'heygen', 'lovable'].includes(ai.id)
      );
      break;
      
    default:
      // Fallback para curioso
      recommendedTools = aiTools.filter(ai => 
        ['chatgpt', 'claude', 'manus', 'freepik'].includes(ai.id)
      );
  }

  // Remover duplicatas e garantir diversidade
  const uniqueTools = Array.from(new Map(recommendedTools.map(tool => [tool.id, tool])).values());
  
  // Garantir diversidade de categorias
  const diverseTools: AITool[] = [];
  const usedCategories = new Set<string>();
  
  for (const tool of uniqueTools) {
    if (diverseTools.length >= 4) break;
    
    if (!usedCategories.has(tool.category) || diverseTools.length < 2) {
      diverseTools.push(tool);
      usedCategories.add(tool.category);
    }
  }
  
  // Se ainda não temos 4, completar com as restantes
  for (const tool of uniqueTools) {
    if (diverseTools.length >= 4) break;
    if (!diverseTools.some(t => t.id === tool.id)) {
      diverseTools.push(tool);
    }
  }

  return diverseTools.slice(0, 4);
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
  const messages = {
    curioso: "Com base no seu perfil, estas ferramentas práticas podem ajudar você a dar os primeiros passos com IA:",
    iniciante: "Para acelerar sua implementação de IA, recomendamos estas ferramentas específicas:",
    implementador: "Para otimizar seus resultados atuais, estas IAs podem levar sua empresa ao próximo nível:",
    estrategista: "Para manter sua liderança e explorar novas fronteiras, considere estas ferramentas avançadas:"
  };
  
  return messages[profileKey as keyof typeof messages] || messages.curioso;
}