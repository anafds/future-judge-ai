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
  scoreRange: [number, number];
  title: string;
  description: string;
  alert: string;
}

export const userProfiles: Record<string, UserProfile> = {
  curioso: {
    scoreRange: [10, 18],
    title: "Curioso em IA",
    description: "\"Acho incrível o que a IA pode fazer, mas ainda não sei por onde começar.\" Você demonstra curiosidade genuína sobre IA e está no momento perfeito para dar os primeiros passos práticos. Sua curiosidade é o primeiro ingrediente do sucesso!",
    alert: "💡 PRIMEIRO PASSO: Sua curiosidade é valiosa! Agora é hora de transformá-la em ação. Comece com ferramentas simples para sentir o poder da IA no seu dia a dia. Pequenos passos hoje se tornam grandes vantagens amanhã."
  },
  experimentador: {
    scoreRange: [19, 26],
    title: "Experimentador em Evolução",
    description: "\"Já testei algumas ferramentas, mas ainda estou longe de aplicar com profundidade.\" Você já superou a barreira inicial e está experimentando ativamente. Está no caminho certo - agora é hora de criar consistência e conexão com seus objetivos!",
    alert: "🎯 ACELERE A CONSISTÊNCIA: Você já provou que consegue usar IA! O próximo passo é criar rotinas consistentes e conectar as ferramentas aos seus objetivos principais. A diferença está na aplicação frequente e direcionada."
  },
  executor: {
    scoreRange: [27, 34],
    title: "Executor Prático",
    description: "\"Consigo aplicar IA no meu dia a dia e vejo valor real nisso.\" Parabéns! Você está entre os profissionais que transformaram curiosidade em resultados práticos. Já vê o valor real e aplica com frequência - isso é uma conquista significativa!",
    alert: "🚀 OTIMIZE E MENSURE: Você domina a aplicação prática! Agora é hora de otimizar processos, medir resultados específicos e expandir para áreas que ainda não explorou. Você tem potencial para muito mais."
  },
  integrador: {
    scoreRange: [35, 42],
    title: "Integrador Sistêmico",
    description: "\"A IA já faz parte do meu fluxo e de parte da operação.\" Excepcional! Você não apenas usa IA, mas a integrou aos seus processos. Está entre os líderes que entendem que IA não é ferramenta isolada, mas parte fundamental da operação moderna.",
    alert: "🏗️ EXPANDA ESTRATEGICAMENTE: Sua integração operacional é impressionante! O próximo nível é expandir para automações mais complexas, conectar sistemas e começar a pensar em como a IA pode redefinir seu modelo de negócio."
  },
  estrategista: {
    scoreRange: [43, 50],
    title: "Estrategista Transformador",
    description: "\"Estou redesenhando o modelo de negócio com base no poder da IA.\" Você está no topo da evolução em IA! Não apenas aplica ferramentas, mas repensa estratégias e modelos inteiros. Você é um verdadeiro pioneiro da transformação digital.",
    alert: "👑 LIDERANÇA CONTÍNUA: Você está liderando a revolução da IA! Mantenha-se à frente explorando novas fronteiras, compartilhando conhecimento e inovando constantemente. Sua visão estratégica é um diferencial competitivo raro."
  }
};

export function calculateProfile(totalScore: number): UserProfile {
  if (totalScore <= 18) return userProfiles.curioso;
  if (totalScore <= 26) return userProfiles.experimentador;
  if (totalScore <= 34) return userProfiles.executor;
  if (totalScore <= 42) return userProfiles.integrador;
  return userProfiles.estrategista;
}

export function generateCriticalAlerts(answers: number[], totalScore: number): string[] {
  const lowScoreQuestions = answers
    .map((score, index) => ({ score, question: quizQuestions[index] }))
    .filter(item => item.score <= 2);

  if (lowScoreQuestions.length === 0) {
    // Para pontuações altas, alertas sobre manutenção da liderança
    return [
      'IA evolui rapidamente - manter-se atualizado é crucial',
      'Novos competidores podem emergir com soluções disruptivas', 
      'Oportunidades de mercado podem estar sendo perdidas'
    ];
  }

  // Agrupar por categoria para evitar duplicatas
  const categoriesWithIssues = new Set(lowScoreQuestions.map(item => item.question.category));
  
  const alerts: string[] = [];
  categoriesWithIssues.forEach(category => {
    switch (category) {
      case 'Produtividade':
        alerts.push('Automação inadequada está custando tempo e dinheiro');
        break;
      case 'Performance': 
        alerts.push('ROI e qualidade poderiam ser dramaticamente melhores');
        break;
      case 'Inovação':
        alerts.push('Concorrentes podem estar inovando mais rapidamente');
        break;
      case 'Liderança':
        alerts.push('Liderança despreparada = estratégia de IA fadada ao fracasso');
        break;
    }
  });

  return alerts.slice(0, 3); // Limitar a 3 alertas máximo
}