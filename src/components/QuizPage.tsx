import { useState } from "react";
import { Button } from "@/components/ui/button-custom";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, type QuizQuestion } from "@/data/quizData";
import { ArrowLeft } from "lucide-react";

interface QuizPageProps {
  onQuizComplete: (answers: number[]) => void;
  onBack: () => void;
}

export default function QuizPage({ onQuizComplete, onBack }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelect = (score: number) => {
    setSelectedAnswer(score);
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      const newAnswers = [...answers, score];
      
      if (currentQuestion < quizQuestions.length - 1) {
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Quiz completed
        onQuizComplete(newAnswers);
      }
    }, 500);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
      setAnswers(answers.slice(0, -1));
    } else {
      onBack();
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <div className="hero-glow"></div>
      <div className="circuit-pattern absolute inset-0 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-blinker font-bold text-gradient mb-4">
              Descubra o futuro da sua empresa em 30 segundos
            </h1>
            <p className="text-muted-foreground">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2 bg-muted">
              <div 
                className="h-full bg-gradient-primary transition-all duration-500 rounded-full progress-fill"
                style={{ width: `${progress}%` }}
              />
            </Progress>
          </div>

          {/* Question Card */}
          <div className="glass-card p-8 mb-8 animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-4">
                {question.category}
              </span>
              <h2 className="text-xl md:text-2xl font-blinker font-bold text-foreground leading-relaxed">
                {question.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.score)}
                  className={`w-full p-4 text-left rounded-lg border transition-all hover-lift ${
                    selectedAnswer === option.score
                      ? 'border-primary bg-primary/10 shadow-orange'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 mt-0.5 flex-shrink-0 ${
                      selectedAnswer === option.score 
                        ? 'border-primary bg-primary' 
                        : 'border-muted-foreground'
                    }`}>
                      {selectedAnswer === option.score && (
                        <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                      )}
                    </div>
                    <span className="font-blinker text-foreground">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-start items-center">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentQuestion === 0 ? 'Voltar' : 'Anterior'}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}