import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  video: boolean;
  videoUrl: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Giovanna Grego",
    role: "Criadora de conteúdo @giogregoo",
    text: "Me ajudou a trazer muita coisa no meu negócio. Principalmente a questão de equipe que teria que ter e eu vi que a IA permite escalar. Ensina o passo a passo de tudo, muita aplicação, muita coisa na prática.",
    video: true,
    videoUrl: "https://www.youtube.com/embed/TfATpjF3BrE?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/5664c657-7461-4466-92e8-afa6315c1c6e.png",
    rating: 5
  },
  {
    name: "Fernando Mourão",
    role: "CRO da Crosser Capital",
    text: "Efetivamente posso atestar que todo o trabalho é muito prático, muito implementado. Quem sair na frente, efetivamente vai ganhar. Na imersão, a gente tem um atendimento diferenciado, uma aplicação muito inteligente e muito prática.",
    video: true,
    videoUrl: "https://www.youtube.com/embed/ZWucMtnpEUQ?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/729aeec9-701e-4522-8fc7-5dc56affdbc4.png",
    rating: 5
  },
  {
    name: "Isabella Magalhães",
    role: "CEO da Agência IM6",
    text: "Aprendi uma questão tão importante na imersão que transformou a forma como entregamos um produto na agência. Estava em busca de criar esse produto mas entendi, com a imersão que consigo fazer com IA sem gastar 1 real a mais e o melhor fazer de forma simples, prática e rápido. Pra mim foi o grande ponto da imersão.",
    video: true,
    videoUrl: "https://www.youtube.com/embed/YJlYjDyNiac?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/74777625-5611-4ef2-bd44-1e9e46362993.png",
    rating: 5
  },
  {
    name: "Icaro Avante",
    role: "Head de Operações",
    text: "O que mais gostei é a maneira prática e fácil de como o Rodrigo consegue conduzir de forma simples. Consegui aplicar na imersão que antes eu achava que era privilégio de poucos. Muito prática a imersão",
    video: true,
    videoUrl: "https://www.youtube.com/embed/mX1ranZWzD8?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/d15834b7-2a52-497b-a5dd-58951c38d2fb.png",
    rating: 5
  },
  {
    name: "Fernanda Reda",
    role: "Diretora da MM Aluguel de carros",
    text: "A imersão foi uma grande oportunidade pra eu repensar no meu dia a dia e tornar minha rotina mais leve através da Inteligência Artificial trazendo mais eficiência operacional otimizando tempo e recurso para minhas empresas e vida pessoal. E a troca com outras pessoas enriquece muito o ambiente.",
    video: true,
    videoUrl: "https://www.youtube.com/embed/9eWvPwqFW9Y?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/d1ef77d6-5a93-4555-8301-3f29062eda1c.png",
    rating: 5
  },
  {
    name: "Victor Guelman",
    role: "Criador de conteúdo @victorguelman",
    text: "O grande diferencial do treinamento é a parte prática onde o Rodrigo da os exercícios pra gente poder desenvolver e utilizar as ferramentas de IA para os nossos negócios e muito importante é o acompanhamento dele durante a imersão pra gente conseguir o melhor resultado.",
    video: true,
    videoUrl: "https://www.youtube.com/embed/JsXta0UC4Lk?autoplay=1&modestbranding=1&rel=0&playsinline=1",
    avatar: "/lovable-uploads/332759fe-4c83-4d15-8335-bf3ca91b3f15.png",
    rating: 5
  }
];

export const TestimonialsCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Veja o que nossos alunos dizem
        </h3>
        <p className="text-muted-foreground">
          Resultados reais de quem já transformou seu negócio com IA
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-card border-border hover:border-primary/20 transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                    {testimonial.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                            onClick={() => setSelectedVideo(testimonial.videoUrl)}
                          >
                            <Play className="w-4 h-4 text-primary" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0">
                          <div className="aspect-video">
                            <iframe
                              src={testimonial.videoUrl}
                              className="w-full h-full rounded-lg"
                              allowFullScreen
                              title={`Depoimento de ${testimonial.name}`}
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
      </Carousel>
    </div>
  );
};