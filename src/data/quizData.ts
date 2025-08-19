export interface QuizQuestion {
  id: number;
  category: 'Produtividade' | 'Performance' | 'Inovação' | 'Liderança';
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'Produtividade',
    question: 'Como você e sua equipe usam IA para automatizar tarefas repetitivas?',
    options: [
      { text: 'Nunca usamos IA para isso', score: 1 },
      { text: 'Usamos ferramentas básicas esporadicamente', score: 2 },
      { text: 'Temos algumas automações funcionando', score: 3 },
      { text: 'IA é integrada em vários processos', score: 4 },
      { text: 'Toda operação repetitiva é automatizada com IA', score: 5 }
    ]
  },
  {
    id: 2,
    category: 'Produtividade',
    question: 'Quanto tempo sua equipe economiza mensalmente usando ferramentas de IA?',
    options: [
      { text: 'Zero - não usamos IA', score: 1 },
      { text: 'Algumas horas', score: 2 },
      { text: '1-2 dias', score: 3 },
      { text: '3-5 dias', score: 4 },
      { text: 'Mais de uma semana', score: 5 }
    ]
  },
  {
    id: 3,
    category: 'Performance',
    question: 'Como você mede o ROI das implementações de IA no seu negócio?',
    options: [
      { text: 'Não medimos - não usamos IA', score: 1 },
      { text: 'Não sabemos medir ainda', score: 2 },
      { text: 'Medimos algumas métricas básicas', score: 3 },
      { text: 'Temos KPIs definidos para IA', score: 4 },
      { text: 'ROI é medido e otimizado constantemente', score: 5 }
    ]
  },
  {
    id: 4,
    category: 'Performance', 
    question: 'Qual o impacto da IA na qualidade dos seus produtos/serviços?',
    options: [
      { text: 'Nenhum - não implementamos ainda', score: 1 },
      { text: 'Pouco impacto perceptível', score: 2 },
      { text: 'Melhorias pontuais', score: 3 },
      { text: 'Melhoria significativa na qualidade', score: 4 },
      { text: 'IA transformou completamente nossa qualidade', score: 5 }
    ]
  },
  {
    id: 5,
    category: 'Inovação',
    question: 'Como sua empresa usa IA para criar novos produtos ou serviços?',
    options: [
      { text: 'Não usamos IA para inovação', score: 1 },
      { text: 'Estamos explorando possibilidades', score: 2 },
      { text: 'Temos alguns protótipos', score: 3 },
      { text: 'Lançamos produtos com IA integrada', score: 4 },
      { text: 'IA é o core da nossa inovação', score: 5 }
    ]
  },
  {
    id: 6,
    category: 'Inovação',
    question: 'Sua empresa tem vantagem competitiva através da IA?',
    options: [
      { text: 'Não temos diferencial com IA', score: 1 },
      { text: 'Estamos no mesmo nível dos concorrentes', score: 2 },
      { text: 'Temos algumas vantagens pontuais', score: 3 },
      { text: 'IA nos dá vantagem competitiva clara', score: 4 },
      { text: 'Somos líderes do setor em IA', score: 5 }
    ]
  },
  {
    id: 7,
    category: 'Liderança',
    question: 'Qual seu nível de conhecimento sobre IA e suas aplicações?',
    options: [
      { text: 'Básico - ouço falar mas não sei aplicar', score: 1 },
      { text: 'Conheço algumas ferramentas', score: 2 },
      { text: 'Entendo bem as possibilidades', score: 3 },
      { text: 'Sou referência em IA na empresa', score: 4 },
      { text: 'Especialista - oriento a estratégia de IA', score: 5 }
    ]
  },
  {
    id: 8,
    category: 'Liderança',
    question: 'Como você prepara sua equipe para trabalhar com IA?',
    options: [
      { text: 'Não temos preparação específica', score: 1 },
      { text: 'Alguns treinamentos pontuais', score: 2 },
      { text: 'Programa de capacitação em andamento', score: 3 },
      { text: 'Equipe bem treinada e engajada', score: 4 },
      { text: 'Time especializado e sempre atualizado', score: 5 }
    ]
  },
  {
    id: 9,
    category: 'Liderança',
    question: 'Sua empresa tem uma estratégia clara de IA para os próximos 2 anos?',
    options: [
      { text: 'Não temos estratégia definida', score: 1 },
      { text: 'Estamos começando a pensar nisso', score: 2 },
      { text: 'Temos um plano inicial', score: 3 },
      { text: 'Estratégia bem definida e em execução', score: 4 },
      { text: 'Roadmap detalhado com metas claras', score: 5 }
    ]
  },
  {
    id: 10,
    category: 'Liderança',
    question: 'Como você vê sua posição competitiva em IA daqui a 1 ano?',
    options: [
      { text: 'Provavelmente ficaremos para trás', score: 1 },
      { text: 'Ainda estaremos explorando', score: 2 },
      { text: 'Acompanharemos o mercado', score: 3 },
      { text: 'Seremos referência no setor', score: 4 },
      { text: 'Lideraremos a transformação do mercado', score: 5 }
    ]
  }
];

export interface UserProfile {
  range: [number, number];
  title: string;
  description: string;
  mainAlert: string;
  criticalAlerts: string[];
}

export const userProfiles: Record<string, UserProfile> = {
  curioso: {
    range: [10, 20],
    title: '🔍 CURIOSO',
    description: 'Você está no início da jornada. Conhece a IA, mas ainda não aplicou de forma consistente.',
    mainAlert: 'ALERTA CRÍTICO: Enquanto você explora, seus concorrentes já estão implementando e ganhando vantagem competitiva.',
    criticalAlerts: [
      'Sua empresa está perdendo oportunidades de produtividade',
      'Concorrentes podem estar se distanciando',
      'Falta estratégia clara de implementação'
    ]
  },
  iniciante: {
    range: [21, 30],
    title: '🚀 INICIANTE',
    description: 'Você deu os primeiros passos, mas ainda há muito potencial inexplorado.',
    mainAlert: 'ALERTA CRÍTICO: Você está na zona de perigo. Não é mais cedo para começar, mas ainda não é tarde demais.',
    criticalAlerts: [
      'Implementações pontuais não geram impacto real',
      'Falta visão estratégica de longo prazo',
      'Equipe não está preparada para a transformação'
    ]
  },
  implementador: {
    range: [31, 40],
    title: '⚡ IMPLEMENTADOR',
    description: 'Você está no caminho certo! Já vê resultados, mas pode acelerar muito mais.',
    mainAlert: 'ALERTA CRÍTICO: Você está bem, mas "bem" não ganha mercado. É hora de acelerar para dominar.',
    criticalAlerts: [
      'Potencial de ROI ainda não explorado',
      'Concorrentes podem estar acelerando mais',
      'Oportunidades de inovação sendo perdidas'
    ]
  },
  estrategista: {
    range: [41, 50],
    title: '👑 ESTRATEGISTA',
    description: 'Parabéns! Você está entre a elite que realmente entende e aplica IA estrategicamente.',
    mainAlert: 'ALERTA CRÍTICO: Mesmo sendo um estrategista, a IA evolui rapidamente. Estagnação = retrocesso.',
    criticalAlerts: [
      'Necessário manter-se atualizado constantemente',
      'Novos competidores podem aparecer',
      'Oportunidades emergentes de IA ainda não exploradas'
    ]
  }
};

export function calculateProfile(totalScore: number): UserProfile {
  for (const profile of Object.values(userProfiles)) {
    if (totalScore >= profile.range[0] && totalScore <= profile.range[1]) {
      return profile;
    }
  }
  return userProfiles.curioso; // fallback
}

export function generateCriticalAlerts(answers: number[], totalScore: number): string[] {
  const lowScoreQuestions = answers
    .map((score, index) => ({ score, question: quizQuestions[index] }))
    .filter(item => item.score <= 2)
    .slice(0, 3);

  if (lowScoreQuestions.length === 0) {
    // Para pontuações altas, alertas sobre manutenção da liderança
    return [
      'IA evolui rapidamente - manter-se atualizado é crucial',
      'Novos competidores podem emergir com soluções disruptivas', 
      'Oportunidades de mercado podem estar sendo perdidas'
    ];
  }

  return lowScoreQuestions.map(item => {
    switch (item.question.category) {
      case 'Produtividade':
        return 'Automação inadequada está custando tempo e dinheiro';
      case 'Performance': 
        return 'ROI e qualidade poderiam ser dramaticamente melhores';
      case 'Inovação':
        return 'Concorrentes podem estar inovando mais rapidamente';
      case 'Liderança':
        return 'Liderança despreparada = estratégia de IA fadada ao fracasso';
      default:
        return 'Área crítica identificada precisa de atenção imediata';
    }
  });
}