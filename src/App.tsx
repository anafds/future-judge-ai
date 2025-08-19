import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/components/HomePage";
import QuizPage from "@/components/QuizPage";
import FormPage from "@/components/FormPage";
import ResultPage from "@/components/ResultPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

type Step = 'home' | 'quiz' | 'form' | 'result';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  empresa: string;
  cargo: string;
  funcionarios: string;
}

const App = () => {
  const [currentStep, setCurrentStep] = useState<Step>('home');
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [totalScore, setTotalScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (answers: number[]) => {
    const score = answers.reduce((sum, answer) => sum + answer, 0);
    setQuizAnswers(answers);
    setTotalScore(score);
    setCurrentStep('form');
  };

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setCurrentStep('result');
    
    // Here you would typically:
    // 1. Send data to backend/API
    // 2. Generate PDF 
    // 3. Send email
    // 4. Integrate with RD Station
    console.log('Quiz Data:', { answers: quizAnswers, totalScore, formData: data });
  };

  const handleRestart = () => {
    setCurrentStep('home');
    setQuizAnswers([]);
    setFormData(null);
    setTotalScore(0);
  };

  const handleBackToQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleBackToHome = () => {
    setCurrentStep('home');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'home':
        return <HomePage onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <QuizPage onQuizComplete={handleQuizComplete} onBack={handleBackToHome} />;
      case 'form':
        return <FormPage onFormSubmit={handleFormSubmit} onBack={handleBackToQuiz} />;
      case 'result':
        return <ResultPage answers={quizAnswers} totalScore={totalScore} onRestart={handleRestart} />;
      default:
        return <HomePage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={renderCurrentStep()} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
