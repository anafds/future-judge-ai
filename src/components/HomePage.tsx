import { Button } from "@/components/ui/button-custom";
import { Zap, AlertTriangle, Target } from "lucide-react";

interface HomePageProps {
  onStartQuiz: () => void;
}

export default function HomePage({ onStartQuiz }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="ai-background absolute inset-0"></div>
      <div className="hero-glow"></div>
      <div className="circuit-pattern absolute inset-0 opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <AlertTriangle className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-blinker font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Descubra em 30 segundos</span>
            <br />
            <span className="text-foreground">o que vai acontecer com seu negócio</span>
            <br />
            <span className="text-destructive">se você continuar ignorando a IA</span>
          </h1>

          {/* Subheadline */}
          <div className="text-xl md:text-2xl font-blinker font-thin mb-12 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            <div className="border border-primary/30 rounded-lg p-6 glass-card">
              <p className="mb-4">
                <strong className="text-primary">Sabia agora:</strong> Sua empresa e você estão preparados para IA?
              </p>
              <p className="text-lg">
                Descubra em <span className="text-primary font-bold">1 minuto</span>. 
                Ganhe um <span className="text-gradient font-bold">diagnóstico completo</span>.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
            <div className="glass-card p-6 hover-lift">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-blinker font-bold text-lg mb-2">Diagnóstico Instantâneo</h3>
              <p className="text-muted-foreground text-sm">Avaliação em 30 segundos com resultado imediato</p>
            </div>
            <div className="glass-card p-6 hover-lift">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-blinker font-bold text-lg mb-2">Alertas Personalizados</h3>
              <p className="text-muted-foreground text-sm">Descubra exatamente onde você está perdendo</p>
            </div>
            <div className="glass-card p-6 hover-lift">
              <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-4" />
              <h3 className="font-blinker font-bold text-lg mb-2">Relatório Completo</h3>
              <p className="text-muted-foreground text-sm">PDF detalhado enviado por email</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onStartQuiz}
              className="animate-pulse-glow"
            >
              <Zap className="w-6 h-6 mr-3" />
              COMEÇAR DIAGNÓSTICO AGORA
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⚡ <strong>100% Gratuito</strong> • 
              📱 <strong>1 minuto</strong> • 
              📧 <strong>Resultado por email</strong>
            </p>
          </div>

          {/* Warning Banner */}
          <div className="mt-12 border border-destructive/50 bg-destructive/10 rounded-lg p-4 animate-fade-in-up">
            <p className="text-destructive font-blinker font-bold text-sm">
              ⚠️ ATENÇÃO: Seus concorrentes já podem estar usando IA enquanto você hesita
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}