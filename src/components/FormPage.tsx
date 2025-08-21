import { useState } from "react";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User, Mail, Phone, MapPin, Building, Users, Briefcase, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  empresa: string;
  cargo: string;
  funcionarios: string;
}

interface FormPageProps {
  onFormSubmit: (formData: FormData) => void;
  onBack: () => void;
}

export default function FormPage({ onFormSubmit, onBack }: FormPageProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    cidade: '',
    empresa: '',
    cargo: '',
    funcionarios: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cidadeOpen, setCidadeOpen] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Empresa é obrigatória';
    }

    if (!formData.cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
    }

    if (!formData.funcionarios) {
      newErrors.funcionarios = 'Número de funcionários é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      <div className="hero-glow"></div>
      <div className="circuit-pattern absolute inset-0 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-blinker font-bold text-gradient mb-4">
              Quase lá! Seus dados para o diagnóstico
            </h1>
            <p className="text-muted-foreground">
              Precisamos dessas informações para personalizar seu relatório
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-card p-8 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome */}
              <div>
                <Label htmlFor="nome" className="flex items-center mb-2 font-blinker font-bold">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className={`bg-input border-border focus:border-primary ${errors.nome ? 'border-destructive' : ''}`}
                />
                {errors.nome && <p className="text-destructive text-sm mt-1">{errors.nome}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="flex items-center mb-2 font-blinker font-bold">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-input border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp" className="flex items-center mb-2 font-blinker font-bold">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className={`bg-input border-border focus:border-primary ${errors.whatsapp ? 'border-destructive' : ''}`}
                />
                {errors.whatsapp && <p className="text-destructive text-sm mt-1">{errors.whatsapp}</p>}
              </div>

              {/* Cidade */}
              <div>
                <Label htmlFor="cidade" className="flex items-center mb-2 font-blinker font-bold">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Cidade *
                </Label>
                <Popover open={cidadeOpen} onOpenChange={setCidadeOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={cidadeOpen}
                      className={cn(
                        "w-full justify-between bg-input border-border focus:border-primary hover:bg-input text-left font-normal",
                        !formData.cidade && "text-muted-foreground",
                        errors.cidade && "border-destructive"
                      )}
                    >
                      {formData.cidade || "Selecione sua cidade"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Buscar cidade..." />
                      <CommandList>
                        <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem value="São Paulo - SP" onSelect={() => { handleInputChange('cidade', "São Paulo - SP"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "São Paulo - SP" ? "opacity-100" : "opacity-0")} />
                            São Paulo - SP
                          </CommandItem>
                          <CommandItem value="Rio de Janeiro - RJ" onSelect={() => { handleInputChange('cidade', "Rio de Janeiro - RJ"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Rio de Janeiro - RJ" ? "opacity-100" : "opacity-0")} />
                            Rio de Janeiro - RJ
                          </CommandItem>
                          <CommandItem value="Belo Horizonte - MG" onSelect={() => { handleInputChange('cidade', "Belo Horizonte - MG"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Belo Horizonte - MG" ? "opacity-100" : "opacity-0")} />
                            Belo Horizonte - MG
                          </CommandItem>
                          <CommandItem value="Brasília - DF" onSelect={() => { handleInputChange('cidade', "Brasília - DF"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Brasília - DF" ? "opacity-100" : "opacity-0")} />
                            Brasília - DF
                          </CommandItem>
                          <CommandItem value="Salvador - BA" onSelect={() => { handleInputChange('cidade', "Salvador - BA"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Salvador - BA" ? "opacity-100" : "opacity-0")} />
                            Salvador - BA
                          </CommandItem>
                          <CommandItem value="Fortaleza - CE" onSelect={() => { handleInputChange('cidade', "Fortaleza - CE"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Fortaleza - CE" ? "opacity-100" : "opacity-0")} />
                            Fortaleza - CE
                          </CommandItem>
                          <CommandItem value="Recife - PE" onSelect={() => { handleInputChange('cidade', "Recife - PE"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Recife - PE" ? "opacity-100" : "opacity-0")} />
                            Recife - PE
                          </CommandItem>
                          <CommandItem value="Porto Alegre - RS" onSelect={() => { handleInputChange('cidade', "Porto Alegre - RS"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Porto Alegre - RS" ? "opacity-100" : "opacity-0")} />
                            Porto Alegre - RS
                          </CommandItem>
                          <CommandItem value="Curitiba - PR" onSelect={() => { handleInputChange('cidade', "Curitiba - PR"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Curitiba - PR" ? "opacity-100" : "opacity-0")} />
                            Curitiba - PR
                          </CommandItem>
                          <CommandItem value="Goiânia - GO" onSelect={() => { handleInputChange('cidade', "Goiânia - GO"); setCidadeOpen(false); }}>
                            <Check className={cn("mr-2 h-4 w-4", formData.cidade === "Goiânia - GO" ? "opacity-100" : "opacity-0")} />
                            Goiânia - GO
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.cidade && <p className="text-destructive text-sm mt-1">{errors.cidade}</p>}
              </div>

              {/* Empresa */}
              <div>
                <Label htmlFor="empresa" className="flex items-center mb-2 font-blinker font-bold">
                  <Building className="w-4 h-4 mr-2 text-primary" />
                  Empresa *
                </Label>
                <Input
                  id="empresa"
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={formData.empresa}
                  onChange={(e) => handleInputChange('empresa', e.target.value)}
                  className={`bg-input border-border focus:border-primary ${errors.empresa ? 'border-destructive' : ''}`}
                />
                {errors.empresa && <p className="text-destructive text-sm mt-1">{errors.empresa}</p>}
              </div>

              {/* Cargo */}
              <div>
                <Label htmlFor="cargo" className="flex items-center mb-2 font-blinker font-bold">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" />
                  Cargo *
                </Label>
                <Select value={formData.cargo} onValueChange={(value) => handleInputChange('cargo', value)}>
                  <SelectTrigger className={`bg-input border-border focus:border-primary ${errors.cargo ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Selecione seu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CEO / Sócio">CEO / Sócio</SelectItem>
                    <SelectItem value="CMO">CMO</SelectItem>
                    <SelectItem value="Diretor / Gestor">Diretor / Gestor</SelectItem>
                    <SelectItem value="Coordenador / Gerente">Coordenador / Gerente</SelectItem>
                    <SelectItem value="Gestor de tráfego">Gestor de tráfego</SelectItem>
                    <SelectItem value="Co-produtor">Co-produtor</SelectItem>
                    <SelectItem value="Comercial / Inside Sales">Comercial / Inside Sales</SelectItem>
                    <SelectItem value="Estudante / Estagiário">Estudante / Estagiário</SelectItem>
                    <SelectItem value="Professor / Pesquisador">Professor / Pesquisador</SelectItem>
                    <SelectItem value="Analista / Dados / BI">Analista / Dados / BI</SelectItem>
                    <SelectItem value="Autônomo">Autônomo</SelectItem>
                  </SelectContent>
                </Select>
                {errors.cargo && <p className="text-destructive text-sm mt-1">{errors.cargo}</p>}
              </div>

              {/* Número de funcionários */}
              <div>
                <Label htmlFor="funcionarios" className="flex items-center mb-2 font-blinker font-bold">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Número de funcionários *
                </Label>
                <Select value={formData.funcionarios} onValueChange={(value) => handleInputChange('funcionarios', value)}>
                  <SelectTrigger className={`bg-input border-border focus:border-primary ${errors.funcionarios ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Selecione o tamanho da empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Individual">Individual</SelectItem>
                    <SelectItem value="2 - 10">2 - 10</SelectItem>
                    <SelectItem value="11 - 25">11 - 25</SelectItem>
                    <SelectItem value="26 - 49">26 - 49</SelectItem>
                    <SelectItem value="Acima de 50">Acima de 50</SelectItem>
                  </SelectContent>
                </Select>
                {errors.funcionarios && <p className="text-destructive text-sm mt-1">{errors.funcionarios}</p>}
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-4 pt-6">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={onBack}
                  className="flex-1"
                >
                  Voltar às perguntas
                </Button>
                <Button 
                  type="submit"
                  variant="hero"
                  className="flex-1"
                >
                  GERAR MEU DIAGNÓSTICO
                </Button>
              </div>

            </form>
          </div>

          {/* Privacy Notice */}
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              🔒 Seus dados estão seguros e serão usados apenas para gerar seu diagnóstico personalizado
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}