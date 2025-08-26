export interface AITool {
  id: string;
  name: string;
  category: 'Conversacional' | 'Pesquisa' | 'Criativo' | 'Produtividade' | 'Análise';
  description: string;
  bestFor: string[];
  targetProfile: ('curioso' | 'iniciante' | 'implementador' | 'estrategista')[];
  targetCategories: ('Produtividade' | 'Performance' | 'Inovação' | 'Liderança')[];
}

export const aiTools: AITool[] = [
  // GPT Models
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    category: 'Conversacional',
    description: 'Indicado para conversas naturais e produtividade, com suporte multimodal (imagem, áudio e texto).',
    bestFor: ['Redação profissional', 'Brainstorm de ideias', 'Análise de documentos', 'Comunicação com clientes'],
    targetProfile: ['curioso', 'iniciante', 'implementador'],
    targetCategories: ['Produtividade', 'Liderança']
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini',
    category: 'Produtividade',
    description: 'Ideal para quem busca velocidade e economia, ótimo para chatbots e aplicativos com muitas requisições.',
    bestFor: ['Chatbots para atendimento', 'Automação de respostas', 'Processamento em massa', 'Aplicações básicas'],
    targetProfile: ['curioso', 'iniciante'],
    targetCategories: ['Produtividade', 'Performance']
  },
  {
    id: 'gpt-o3',
    name: 'GPT o3',
    category: 'Análise',
    description: 'Voltado para tarefas altamente complexas, como matemática, ciência e codificação avançada.',
    bestFor: ['Análises técnicas profundas', 'Resolução de problemas complexos', 'Geração de relatórios técnicos', 'Pesquisa científica'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Performance', 'Inovação', 'Liderança']
  },
  {
    id: 'gpt-o4-mini',
    name: 'GPT o4-mini',
    category: 'Produtividade',
    description: 'Equilibra custo e velocidade para tarefas diretas como posts, relatórios e automações simples.',
    bestFor: ['Posts para redes sociais', 'E-mails automáticos', 'Relatórios padronizados', 'Criação de conteúdo regular'],
    targetProfile: ['iniciante', 'implementador'],
    targetCategories: ['Produtividade', 'Performance']
  },

  // Claude Models
  {
    id: 'claude-opus-4',
    name: 'Claude Opus 4',
    category: 'Análise',
    description: 'Voltado para leitura longa, escrita técnica e tarefas complexas, ideal para relatórios e análises.',
    bestFor: ['Relatórios extensos', 'Textos jurídicos', 'Análise de contratos', 'Documentação técnica'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Performance', 'Liderança']
  },
  {
    id: 'claude-sonnet-4',
    name: 'Claude Sonnet 4',
    category: 'Análise',
    description: 'Modelo híbrido com grande contexto (200K), útil para análises de alto volume de dados.',
    bestFor: ['Análise de grandes volumes de dados', 'Revisão de documentos extensos', 'Pesquisa de mercado', 'Due diligence'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Performance', 'Inovação', 'Liderança']
  },
  {
    id: 'claude-haiku-35',
    name: 'Claude Haiku 3.5',
    category: 'Produtividade',
    description: 'Mais ágil, indicado para respostas rápidas, FAQs e atendimento automático.',
    bestFor: ['Atendimento ao cliente', 'FAQs automáticos', 'Respostas rápidas', 'Suporte básico'],
    targetProfile: ['curioso', 'iniciante', 'implementador'],
    targetCategories: ['Produtividade', 'Performance']
  },

  // Perplexity
  {
    id: 'perplexity-pro',
    name: 'Perplexity Pro Search',
    category: 'Pesquisa',
    description: 'Realiza buscas profundas e iterativas na web com fontes confiáveis, permitindo escolher o modelo.',
    bestFor: ['Pesquisa de mercado', 'Inteligência competitiva', 'Tendências do setor', 'Verificação de informações'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Inovação', 'Liderança']
  },
  {
    id: 'perplexity-deep',
    name: 'Perplexity Deep Research',
    category: 'Pesquisa',
    description: 'Faz múltiplas buscas, lê documentos e gera relatórios completos em 2-4 minutos.',
    bestFor: ['Relatórios de mercado', 'Análise de concorrência', 'Research estratégico', 'Due diligence rápida'],
    targetProfile: ['estrategista'],
    targetCategories: ['Performance', 'Inovação', 'Liderança']
  },

  // Gemini Models
  {
    id: 'gemini-25-flash',
    name: 'Gemini 2.5 Flash',
    category: 'Produtividade',
    description: 'Focado em respostas em tempo real e produtividade rápida, integrado ao Google.',
    bestFor: ['Produtividade no Gmail', 'Google Docs automatizado', 'Respostas rápidas', 'Integração com Google Workspace'],
    targetProfile: ['iniciante', 'implementador'],
    targetCategories: ['Produtividade']
  },
  {
    id: 'gemini-25-pro',
    name: 'Gemini 2.5 Pro',
    category: 'Análise',
    description: 'Análise de dados complexos, documentos extensos, vídeos e áudios com até 1 milhão de tokens.',
    bestFor: ['Análise de relatórios financeiros', 'Processamento de vídeos', 'Documentos de centenas de páginas', 'Códigos complexos'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Performance', 'Inovação', 'Liderança']
  },

  // Image Generation
  {
    id: 'imagen-4',
    name: 'Imagen 4 (Google)',
    category: 'Criativo',
    description: 'Alta qualidade visual para criar imagens realistas e logotipos profissionais.',
    bestFor: ['Criação de logotipos', 'Imagens para marketing', 'Materiais visuais profissionais', 'Identidade visual'],
    targetProfile: ['iniciante', 'implementador', 'estrategista'],
    targetCategories: ['Inovação', 'Performance']
  },
  {
    id: 'gpt-4o-imagem',
    name: 'GPT-4o Imagem',
    category: 'Criativo',
    description: 'Criação visual integrada ao ChatGPT, facilitando produções rápidas e simples.',
    bestFor: ['Criações visuais rápidas', 'Protótipos visuais', 'Ideias de design', 'Mockups simples'],
    targetProfile: ['curioso', 'iniciante', 'implementador'],
    targetCategories: ['Inovação', 'Produtividade']
  },
  {
    id: 'flux-kontext',
    name: 'Flux (Kontext)',
    category: 'Criativo',
    description: 'Voltado para design emocional e criativo, ideal para imagens ultrarrealistas.',
    bestFor: ['Imagens ultrarrealistas', 'Design emocional', 'Melhoria de fotos', 'Arte digital avançada'],
    targetProfile: ['implementador', 'estrategista'],
    targetCategories: ['Inovação']
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

  // Se não há problemas críticos, focar em otimização avançada
  const targetCategories = lowScoreCategories.length > 0 
    ? lowScoreCategories 
    : ['Performance', 'Inovação', 'Liderança'];

  // Filtrar IAs relevantes para o perfil e categorias problemáticas
  const relevantAIs = aiTools.filter(ai => 
    ai.targetProfile.includes(profileKey as any) ||
    ai.targetCategories.some(cat => targetCategories.includes(cat))
  );

  // Priorizar por relevância e diversidade
  const prioritizedAIs = relevantAIs
    .sort((a, b) => {
      // Priorizar IAs que atendem múltiplas categorias problemáticas
      const aRelevance = a.targetCategories.filter(cat => targetCategories.includes(cat)).length;
      const bRelevance = b.targetCategories.filter(cat => targetCategories.includes(cat)).length;
      
      if (aRelevance !== bRelevance) return bRelevance - aRelevance;
      
      // Priorizar IAs adequadas ao perfil
      const aProfileMatch = a.targetProfile.includes(profileKey as any) ? 1 : 0;
      const bProfileMatch = b.targetProfile.includes(profileKey as any) ? 1 : 0;
      
      return bProfileMatch - aProfileMatch;
    });

  // Garantir diversidade de categorias (máximo 1 por categoria, exceto se muito relevante)
  const diverseAIs: AITool[] = [];
  const usedCategories = new Set<string>();
  
  for (const ai of prioritizedAIs) {
    if (diverseAIs.length >= 4) break;
    
    if (!usedCategories.has(ai.category) || diverseAIs.length < 2) {
      diverseAIs.push(ai);
      usedCategories.add(ai.category);
    }
  }

  return diverseAIs.slice(0, 4);
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
    curioso: "Com base no seu perfil, estas IAs podem ajudar você a dar os primeiros passos práticos:",
    iniciante: "Para acelerar sua implementação de IA, recomendamos estas ferramentas específicas:",
    implementador: "Para otimizar seus resultados atuais, estas IAs podem levar sua empresa ao próximo nível:",
    estrategista: "Para manter sua liderança e explorar novas fronteiras, considere estas ferramentas avançadas:"
  };
  
  return messages[profileKey as keyof typeof messages] || messages.curioso;
}