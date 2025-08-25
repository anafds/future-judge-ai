import { Button } from "@/components/ui/button-custom";
import { calculateProfile, generateCriticalAlerts, type UserProfile } from "@/data/quizData";
import { AlertTriangle, Award, MessageCircle, Download, Target } from "lucide-react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

interface ResultPageProps {
  answers: number[];
  totalScore: number;
  onRestart: () => void;
}

export default function ResultPage({ answers, totalScore, onRestart }: ResultPageProps) {
  const profile: UserProfile = calculateProfile(totalScore);
  const criticalAlerts = generateCriticalAlerts(answers, totalScore);

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
                <p className="text-foreground">{profile.mainAlert}</p>
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

          {/* Exclusive Offer Section */}
          <div className="glass-card p-8 text-center animate-fade-in-up relative overflow-hidden">
            {/* Exclusive Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary px-6 py-2 rounded-full">
                <span className="text-sm font-blinker font-bold text-primary-foreground">
                  🔓 OFERTA EXCLUSIVA DESBLOQUEADA
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-blinker font-bold text-gradient mb-4">
                Aprenda a criar sua própria IA e não depender 100% de pessoas!
              </h3>
              
              <div className="bg-border/20 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">CURSO ONLINE AO VIVO</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div>📅 <strong>Sábado, 06/09/2024</strong></div>
                  <div>⏰ <strong>Das 10h às 16h</strong></div>
                </div>
                
                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">R$ 997</span>
                    <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                      90% OFF
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-blinker font-bold text-gradient">
                    R$ 97
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    💳 <strong>Apenas para quem fez o diagnóstico</strong>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Transforme seu conhecimento em IA prática e pare de depender apenas de terceiros. 
                <strong className="text-primary"> Vagas limitadas!</strong>
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleWhatsAppClick}
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