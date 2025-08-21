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
    title: '☠️ CURIOSO – O Fim Está Próximo',
    description: 'Sua empresa está à beira do colapso digital. Você acha a IA incrível, mas continua olhando de fora. Enquanto você assiste, o mercado avança sem você.',
    mainAlert: 'APOCALIPSE IMINENTE: Sua empresa corre sério risco de se tornar irrelevante em pouco tempo.',
    criticalAlerts: [
      'Produtividade sendo drenada por tarefas manuais',
      'Concorrentes já estão anos à frente',
      'Sua empresa está rumo ao fim do mundo corporativo se nada mudar agora'
    ]
  },
  iniciante: {
    range: [21, 30],
    title: '🔥 INICIANTE – Zona de Perigo',
    description: 'Você começou a experimentar a IA, mas continua brincando com fogo. Implementações rasas não vão salvar sua empresa.',
    mainAlert: 'ALERTA VERMELHO: Sua empresa já sente os tremores do apocalipse competitivo.',
    criticalAlerts: [
      'Uso pontual da IA não gera impacto real',
      'Falta visão estratégica para sobreviver',
      'Sua equipe não está preparada para o colapso que vem aí'
    ]
  },
  implementador: {
    range: [31, 40],
    title: '⚡ IMPLEMENTADOR – Sobrevivente em Risco',
    description: 'Sua empresa já respira com ajuda da IA, mas ainda está vulnerável. O que você conquistou pode não durar se não acelerar agora.',
    mainAlert: 'COLAPSO À VISTA: O mercado não perdoa quem anda devagar. “Bom” não salva ninguém do fim.',
    criticalAlerts: [
      'ROI real ainda não está sendo explorado ao máximo',
      'Concorrentes podem ultrapassar e te engolir',
      'As oportunidades de inovação estão sendo perdidas a cada mês'
    ]
  },
  estrategista: {
    range: [41, 50],
    title: '👑 ESTRATEGISTA – À Beira do Trono ou da Queda',
    description: 'Você está entre a elite que redesenha negócios com IA. Mas cuidado: até gigantes tombam quando acham que já venceram.',
    mainAlert: 'JUÍZO FINAL: A estagnação é o inimigo silencioso. O próximo movimento define se você domina ou é dominado.',
    criticalAlerts: [
      'A evolução da IA é diária, e você pode ser superado',
      'Novos players surgem preparados para te derrubar',
      'Se não acelerar a execução, sua vantagem vira pó'
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