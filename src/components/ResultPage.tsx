import { Button } from "@/components/ui/button-custom";
import { calculateProfile, generateCriticalAlerts, userProfiles, type UserProfile } from "@/data/quizData";
import { getRecommendedAIs, getPersonalizedRecommendationText } from "@/data/aiRecommendations";
import { AlertTriangle, Award, MessageCircle, Download, Target, Bot, Sparkles } from "lucide-react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { CountdownTimer } from "./CountdownTimer";

interface ResultPageProps {
  answers: number[];
  totalScore: number;
  onRestart: () => void;
}

export default function ResultPage({ answers, totalScore, onRestart }: ResultPageProps) {
  const profile: UserProfile = calculateProfile(totalScore);
  const criticalAlerts = generateCriticalAlerts(answers, totalScore);
  
  // Determinar chave do perfil para recomendações
  const getProfileKey = (): string => {
    if (totalScore <= 18) return 'curioso';
    if (totalScore <= 26) return 'experimentador';
    if (totalScore <= 34) return 'executor';
    if (totalScore <= 42) return 'integrador';
    return 'estrategista';
  };
  
  const profileKey = getProfileKey();
  
  const recommendedAIs = getRecommendedAIs(answers, totalScore, profileKey);
  const recommendationText = getPersonalizedRecommendationText(profileKey);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de fazer o IA do Juízo Final e meu resultado foi ${profile.title}. Quero garantir minha vaga na oferta exclusiva do Curso Online IA na Prática por R$ 97 no sábado 06/09!`
    );
    window.open(`https://wa.me/5531991249442?text=${message}`, '_blank');
  };

  const getScoreColor = (score: number) => {
    if (score >= 41) return 'text-green-400';
    if (score >= 31) return 'text-yellow-400'; 
    if (score >= 21) return 'text-orange-400';
    return 'text-destructive';
  };

  const getScoreDescription = (score: number) => {
    if (score >= 41) return 'Excelente! Você está na elite da IA';
    if (score >= 31) return 'Bom! Mas há muito potencial a explorar';
    if (score >= 21) return 'Iniciante! É hora de acelerar';
    return 'Crítico! Ação imediata necessária';
  };

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <div className="hero-glow"></div>
      <div className="circuit-pattern absolute inset-0 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-blinker font-bold text-gradient mb-4">
              SEU DIAGNÓSTICO ESTÁ PRONTO
            </h1>
            <p className="text-muted-foreground">
              Baseado nas suas respostas, aqui está sua classificação
            </p>
          </div>

          {/* Score Card */}
          <div className="glass-card p-8 mb-8 text-center animate-fade-in-up">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4 animate-pulse-glow">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className={`text-4xl md:text-5xl font-blinker font-bold mb-2 ${getScoreColor(totalScore)}`}>
                {totalScore}/50
              </h2>
              <p className="text-lg text-muted-foreground">
                {getScoreDescription(totalScore)}
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-2xl md:text-3xl font-blinker font-bold text-gradient mb-4">
                {profile.title}
              </h3>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                {profile.description}
              </p>
            </div>
          </div>

          {/* Main Alert */}
          <div className="border border-destructive/50 bg-destructive/10 rounded-lg p-6 mb-8 animate-fade-in-up">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-destructive mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-blinker font-bold text-destructive mb-2">ALERTA PRINCIPAL</h4>
                <p className="text-foreground">{profile.alert}</p>
              </div>
            </div>
          </div>

          {/* Critical Alerts */}
          <div className="mb-8 animate-fade-in-up">
            <h4 className="font-blinker font-bold text-xl mb-4 flex items-center">
              <Target className="w-5 h-5 text-primary mr-2" />
              PONTOS CRÍTICOS IDENTIFICADOS
            </h4>
            <div className="grid gap-4">
              {criticalAlerts.map((alert, index) => (
                <div key={index} className="glass-card p-4 hover-lift">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <p className="text-foreground">{alert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mb-8 animate-fade-in-up">
            <h4 className="font-blinker font-bold text-xl mb-4 flex items-center">
              <Bot className="w-5 h-5 text-primary mr-2" />
              IAS RECOMENDADAS PARA VOCÊ
            </h4>
            <p className="text-muted-foreground mb-6">
              {recommendationText}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedAIs.map((ai, index) => (
                <div key={ai.id} className="glass-card p-6 hover-lift">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h5 className="font-blinker font-bold text-lg text-foreground mb-1">
                        {ai.name}
                      </h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {ai.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {ai.description}
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-3 mb-4 border border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-1">💡 Exemplo prático:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ai.practicalExample}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground mb-2">Ideal para:</p>
                    <div className="flex flex-wrap gap-1">
                      {ai.bestFor.slice(0, 2).map((use, useIndex) => (
                        <span key={useIndex} className="text-xs bg-background/50 text-muted-foreground px-2 py-1 rounded border border-border">
                          {use}
                        </span>
                      ))}
                      {ai.bestFor.length > 2 && (
                        <span className="text-xs text-primary">
                          +{ai.bestFor.length - 2} mais
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Offer Section */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-blinker font-bold text-gradient mb-6">
              Você acabou de desbloquear uma oferta exclusiva
            </h2>
            
            <CountdownTimer initialMinutes={10} />
            
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                🔓 Oferta desbloqueada apenas para você
              </span>
            </div>
          </div>

          <div className="glass-card p-8 text-center animate-fade-in-up relative overflow-hidden border-2 border-primary/20">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-blinker font-bold text-foreground mb-6 leading-tight">
                Aprenda a criar sua própria IA e não depender 100% de pessoas!
              </h3>
              
              <div className="bg-gradient-to-r from-border/10 to-border/20 rounded-lg p-8 mb-8 border border-primary/20">
                {/* Course Type Badge */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-base font-semibold text-green-400 uppercase tracking-wider">
                    CURSO ONLINE AO VIVO
                  </span>
                </div>
                
                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center justify-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/10">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-bold text-foreground">Sábado, 06/09/2024</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/10">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="text-sm text-muted-foreground">Horário</p>
                      <p className="font-bold text-foreground">Das 10h às 16h</p>
                    </div>
                  </div>
                </div>
                
                {/* Price Section */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl text-muted-foreground line-through opacity-60">R$ 997</span>
                    <div className="bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground px-4 py-2 rounded-full text-base font-bold animate-pulse">
                      90% OFF
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-blinker font-bold text-gradient mb-3">
                    R$ 97
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <span className="text-lg">💳</span>
                    <span className="text-sm font-semibold">Apenas para quem fez o diagnóstico</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Transforme seu conhecimento em IA prática e pare de depender apenas de terceiros. 
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://pay.hotmart.com/O101559482N?off=nif4xe0p', '_blank')}
                className="animate-pulse-glow"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                GARANTA SUA VAGA AGORA
              </Button>
              
              <p className="text-sm text-muted-foreground">
                🎯 <strong>Oferta exclusiva válida apenas hoje</strong> • 
                📱 <strong>Confirmação via WhatsApp</strong>
              </p>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mt-12 animate-fade-in-up">
            <TestimonialsCarousel />
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button variant="outline" onClick={onRestart}>
              Refazer diagnóstico
            </Button>
            <Button variant="ghost" className="text-muted-foreground">
              <Download className="w-4 h-4 mr-2" />
              Baixar relatório PDF
            </Button>
          </div>

          {/* Warning Footer */}
          <div className="text-center mt-8 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              ⚠️ <strong>Lembre-se:</strong> Enquanto você decide, seus concorrentes podem estar implementando IA e ganhando vantagem competitiva
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}