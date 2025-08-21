import { useState } from "react";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, MapPin, Building, Users, Briefcase } from "lucide-react";

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
                <Select value={formData.cidade} onValueChange={(value) => handleInputChange('cidade', value)}>
                  <SelectTrigger className={`bg-input border-border focus:border-primary ${errors.cidade ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Selecione sua cidade" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px]">
                    <SelectItem value="Abadia de Goiás - GO">Abadia de Goiás - GO</SelectItem>
                    <SelectItem value="Abadia dos Dourados - MG">Abadia dos Dourados - MG</SelectItem>
                    <SelectItem value="Abadiânia - GO">Abadiânia - GO</SelectItem>
                    <SelectItem value="Abaeté - MG">Abaeté - MG</SelectItem>
                    <SelectItem value="Abaetetuba - PA">Abaetetuba - PA</SelectItem>
                    <SelectItem value="Abaiara - CE">Abaiara - CE</SelectItem>
                    <SelectItem value="Abaíra - BA">Abaíra - BA</SelectItem>
                    <SelectItem value="Abaré - BA">Abaré - BA</SelectItem>
                    <SelectItem value="Abatiá - PR">Abatiá - PR</SelectItem>
                    <SelectItem value="Abdon Batista - SC">Abdon Batista - SC</SelectItem>
                    <SelectItem value="Abelardo Luz - SC">Abelardo Luz - SC</SelectItem>
                    <SelectItem value="Abre Campo - MG">Abre Campo - MG</SelectItem>
                    <SelectItem value="Abreus - BA">Abreus - BA</SelectItem>
                    <SelectItem value="Acará - PA">Acará - PA</SelectItem>
                    <SelectItem value="Açailândia - MA">Açailândia - MA</SelectItem>
                    <SelectItem value="Acauã - PI">Acauã - PI</SelectItem>
                    <SelectItem value="Accua - GO">Accua - GO</SelectItem>
                    <SelectItem value="Acopiara - CE">Acopiara - CE</SelectItem>
                    <SelectItem value="Água Branca - AL">Água Branca - AL</SelectItem>
                    <SelectItem value="Água Branca - PB">Água Branca - PB</SelectItem>
                    <SelectItem value="Água Clara - MS">Água Clara - MS</SelectItem>
                    <SelectItem value="Água Doce - SC">Água Doce - SC</SelectItem>
                    <SelectItem value="Águas Belas - PE">Águas Belas - PE</SelectItem>
                    <SelectItem value="Águas de Lindóia - SP">Águas de Lindóia - SP</SelectItem>
                    <SelectItem value="Águas de São Pedro - SP">Águas de São Pedro - SP</SelectItem>
                    <SelectItem value="Águas Formosas - MG">Águas Formosas - MG</SelectItem>
                    <SelectItem value="Águas Vermelhas - MG">Águas Vermelhas - MG</SelectItem>
                    <SelectItem value="Aimorés - MG">Aimorés - MG</SelectItem>
                    <SelectItem value="Alagoa Grande - PB">Alagoa Grande - PB</SelectItem>
                    <SelectItem value="Alagoa Nova - PB">Alagoa Nova - PB</SelectItem>
                    <SelectItem value="Alagoinha - PE">Alagoinha - PE</SelectItem>
                    <SelectItem value="Alagoinha - PB">Alagoinha - PB</SelectItem>
                    <SelectItem value="Alameda - BA">Alameda - BA</SelectItem>
                    <SelectItem value="Alambari - SP">Alambari - SP</SelectItem>
                    <SelectItem value="Alto Araguaia - MT">Alto Araguaia - MT</SelectItem>
                    <SelectItem value="Altamira - PA">Altamira - PA</SelectItem>
                    <SelectItem value="Anápolis - GO">Anápolis - GO</SelectItem>
                    <SelectItem value="Aparecida - SP">Aparecida - SP</SelectItem>
                    <SelectItem value="Aparecida de Goiânia - GO">Aparecida de Goiânia - GO</SelectItem>
                    <SelectItem value="Aracaju - SE">Aracaju - SE</SelectItem>
                    <SelectItem value="Araçatuba - SP">Araçatuba - SP</SelectItem>
                    <SelectItem value="Araguaína - TO">Araguaína - TO</SelectItem>
                    <SelectItem value="Araguari - MG">Araguari - MG</SelectItem>
                    <SelectItem value="Arapongas - PR">Arapongas - PR</SelectItem>
                    <SelectItem value="Araraquara - SP">Araraquara - SP</SelectItem>
                    <SelectItem value="Araras - SP">Araras - SP</SelectItem>
                    <SelectItem value="Araxá - MG">Araxá - MG</SelectItem>
                    <SelectItem value="Ariquemes - RO">Ariquemes - RO</SelectItem>
                    <SelectItem value="Assis - SP">Assis - SP</SelectItem>
                    <SelectItem value="Atibaia - SP">Atibaia - SP</SelectItem>
                    <SelectItem value="Bagé - RS">Bagé - RS</SelectItem>
                    <SelectItem value="Barbacena - MG">Barbacena - MG</SelectItem>
                    <SelectItem value="Barra Mansa - RJ">Barra Mansa - RJ</SelectItem>
                    <SelectItem value="Barretos - SP">Barretos - SP</SelectItem>
                    <SelectItem value="Barueri - SP">Barueri - SP</SelectItem>
                    <SelectItem value="Bauru - SP">Bauru - SP</SelectItem>
                    <SelectItem value="Belém - PA">Belém - PA</SelectItem>
                    <SelectItem value="Belo Horizonte - MG">Belo Horizonte - MG</SelectItem>
                    <SelectItem value="Betim - MG">Betim - MG</SelectItem>
                    <SelectItem value="Blumenau - SC">Blumenau - SC</SelectItem>
                    <SelectItem value="Boa Vista - RR">Boa Vista - RR</SelectItem>
                    <SelectItem value="Botucatu - SP">Botucatu - SP</SelectItem>
                    <SelectItem value="Bragança Paulista - SP">Bragança Paulista - SP</SelectItem>
                    <SelectItem value="Brasília - DF">Brasília - DF</SelectItem>
                    <SelectItem value="Cabo Frio - RJ">Cabo Frio - RJ</SelectItem>
                    <SelectItem value="Caçador - SC">Caçador - SC</SelectItem>
                    <SelectItem value="Cachoeiro de Itapemirim - ES">Cachoeiro de Itapemirim - ES</SelectItem>
                    <SelectItem value="Camaçari - BA">Camaçari - BA</SelectItem>
                    <SelectItem value="Campina Grande - PB">Campina Grande - PB</SelectItem>
                    <SelectItem value="Campinas - SP">Campinas - SP</SelectItem>
                    <SelectItem value="Campo Grande - MS">Campo Grande - MS</SelectItem>
                    <SelectItem value="Campos dos Goytacazes - RJ">Campos dos Goytacazes - RJ</SelectItem>
                    <SelectItem value="Canoas - RS">Canoas - RS</SelectItem>
                    <SelectItem value="Carapicuíba - SP">Carapicuíba - SP</SelectItem>
                    <SelectItem value="Cariacica - ES">Cariacica - ES</SelectItem>
                    <SelectItem value="Caruaru - PE">Caruaru - PE</SelectItem>
                    <SelectItem value="Cascavel - PR">Cascavel - PR</SelectItem>
                    <SelectItem value="Catanduva - SP">Catanduva - SP</SelectItem>
                    <SelectItem value="Caxias - MA">Caxias - MA</SelectItem>
                    <SelectItem value="Caxias do Sul - RS">Caxias do Sul - RS</SelectItem>
                    <SelectItem value="Chapecó - SC">Chapecó - SC</SelectItem>
                    <SelectItem value="Codo - MA">Codo - MA</SelectItem>
                    <SelectItem value="Colatina - ES">Colatina - ES</SelectItem>
                    <SelectItem value="Colombo - PR">Colombo - PR</SelectItem>
                    <SelectItem value="Contagem - MG">Contagem - MG</SelectItem>
                    <SelectItem value="Corumbá - MS">Corumbá - MS</SelectItem>
                    <SelectItem value="Criciúma - SC">Criciúma - SC</SelectItem>
                    <SelectItem value="Cuiabá - MT">Cuiabá - MT</SelectItem>
                    <SelectItem value="Curitiba - PR">Curitiba - PR</SelectItem>
                    <SelectItem value="Diadema - SP">Diadema - SP</SelectItem>
                    <SelectItem value="Dourados - MS">Dourados - MS</SelectItem>
                    <SelectItem value="Embu das Artes - SP">Embu das Artes - SP</SelectItem>
                    <SelectItem value="Feira de Santana - BA">Feira de Santana - BA</SelectItem>
                    <SelectItem value="Florianópolis - SC">Florianópolis - SC</SelectItem>
                    <SelectItem value="Fortaleza - CE">Fortaleza - CE</SelectItem>
                    <SelectItem value="Foz do Iguaçu - PR">Foz do Iguaçu - PR</SelectItem>
                    <SelectItem value="Franca - SP">Franca - SP</SelectItem>
                    <SelectItem value="Garanhuns - PE">Garanhuns - PE</SelectItem>
                    <SelectItem value="Goiânia - GO">Goiânia - GO</SelectItem>
                    <SelectItem value="Governador Valadares - MG">Governador Valadares - MG</SelectItem>
                    <SelectItem value="Gravataí - RS">Gravataí - RS</SelectItem>
                    <SelectItem value="Guarapuava - PR">Guarapuava - PR</SelectItem>
                    <SelectItem value="Guaratinguetá - SP">Guaratinguetá - SP</SelectItem>
                    <SelectItem value="Guaruja - SP">Guaruja - SP</SelectItem>
                    <SelectItem value="Guarulhos - SP">Guarulhos - SP</SelectItem>
                    <SelectItem value="Ibirité - MG">Ibirité - MG</SelectItem>
                    <SelectItem value="Imperatriz - MA">Imperatriz - MA</SelectItem>
                    <SelectItem value="Indaiatuba - SP">Indaiatuba - SP</SelectItem>
                    <SelectItem value="Ipatinga - MG">Ipatinga - MG</SelectItem>
                    <SelectItem value="Itabuna - BA">Itabuna - BA</SelectItem>
                    <SelectItem value="Itajaí - SC">Itajaí - SC</SelectItem>
                    <SelectItem value="Itapevi - SP">Itapevi - SP</SelectItem>
                    <SelectItem value="Itaquaquecetuba - SP">Itaquaquecetuba - SP</SelectItem>
                    <SelectItem value="Itu - SP">Itu - SP</SelectItem>
                    <SelectItem value="Jaguariúna - SP">Jaguariúna - SP</SelectItem>
                    <SelectItem value="Jaú - SP">Jaú - SP</SelectItem>
                    <SelectItem value="Jequié - BA">Jequié - BA</SelectItem>
                    <SelectItem value="Ji-Paraná - RO">Ji-Paraná - RO</SelectItem>
                    <SelectItem value="João Pessoa - PB">João Pessoa - PB</SelectItem>
                    <SelectItem value="Joinville - SC">Joinville - SC</SelectItem>
                    <SelectItem value="Juazeiro - BA">Juazeiro - BA</SelectItem>
                    <SelectItem value="Juazeiro do Norte - CE">Juazeiro do Norte - CE</SelectItem>
                    <SelectItem value="Juiz de Fora - MG">Juiz de Fora - MG</SelectItem>
                    <SelectItem value="Jundiaí - SP">Jundiaí - SP</SelectItem>
                    <SelectItem value="Lajeado - RS">Lajeado - RS</SelectItem>
                    <SelectItem value="Limeira - SP">Limeira - SP</SelectItem>
                    <SelectItem value="Linhares - ES">Linhares - ES</SelectItem>
                    <SelectItem value="Londrina - PR">Londrina - PR</SelectItem>
                    <SelectItem value="Luziânia - GO">Luziânia - GO</SelectItem>
                    <SelectItem value="Macapá - AP">Macapá - AP</SelectItem>
                    <SelectItem value="Maceió - AL">Maceió - AL</SelectItem>
                    <SelectItem value="Manaus - AM">Manaus - AM</SelectItem>
                    <SelectItem value="Marabá - PA">Marabá - PA</SelectItem>
                    <SelectItem value="Maracanaú - CE">Maracanaú - CE</SelectItem>
                    <SelectItem value="Marília - SP">Marília - SP</SelectItem>
                    <SelectItem value="Maringá - PR">Maringá - PR</SelectItem>
                    <SelectItem value="Mauá - SP">Mauá - SP</SelectItem>
                    <SelectItem value="Mogi das Cruzes - SP">Mogi das Cruzes - SP</SelectItem>
                    <SelectItem value="Montes Claros - MG">Montes Claros - MG</SelectItem>
                    <SelectItem value="Mossoró - RN">Mossoró - RN</SelectItem>
                    <SelectItem value="Natal - RN">Natal - RN</SelectItem>
                    <SelectItem value="Niterói - RJ">Niterói - RJ</SelectItem>
                    <SelectItem value="Nova Friburgo - RJ">Nova Friburgo - RJ</SelectItem>
                    <SelectItem value="Nova Iguaçu - RJ">Nova Iguaçu - RJ</SelectItem>
                    <SelectItem value="Olinda - PE">Olinda - PE</SelectItem>
                    <SelectItem value="Osasco - SP">Osasco - SP</SelectItem>
                    <SelectItem value="Palmas - TO">Palmas - TO</SelectItem>
                    <SelectItem value="Parnaíba - PI">Parnaíba - PI</SelectItem>
                    <SelectItem value="Passo Fundo - RS">Passo Fundo - RS</SelectItem>
                    <SelectItem value="Patos - PB">Patos - PB</SelectItem>
                    <SelectItem value="Paulista - PE">Paulista - PE</SelectItem>
                    <SelectItem value="Pelotas - RS">Pelotas - RS</SelectItem>
                    <SelectItem value="Petrolina - PE">Petrolina - PE</SelectItem>
                    <SelectItem value="Piracicaba - SP">Piracicaba - SP</SelectItem>
                    <SelectItem value="Poços de Caldas - MG">Poços de Caldas - MG</SelectItem>
                    <SelectItem value="Ponta Grossa - PR">Ponta Grossa - PR</SelectItem>
                    <SelectItem value="Porto Alegre - RS">Porto Alegre - RS</SelectItem>
                    <SelectItem value="Porto Velho - RO">Porto Velho - RO</SelectItem>
                    <SelectItem value="Presidente Prudente - SP">Presidente Prudente - SP</SelectItem>
                    <SelectItem value="Recife - PE">Recife - PE</SelectItem>
                    <SelectItem value="Ribeirão das Neves - MG">Ribeirão das Neves - MG</SelectItem>
                    <SelectItem value="Ribeirão Preto - SP">Ribeirão Preto - SP</SelectItem>
                    <SelectItem value="Rio Branco - AC">Rio Branco - AC</SelectItem>
                    <SelectItem value="Rio de Janeiro - RJ">Rio de Janeiro - RJ</SelectItem>
                    <SelectItem value="Rio Grande - RS">Rio Grande - RS</SelectItem>
                    <SelectItem value="Salvador - BA">Salvador - BA</SelectItem>
                    <SelectItem value="Santa Maria - RS">Santa Maria - RS</SelectItem>
                    <SelectItem value="Santarém - PA">Santarém - PA</SelectItem>
                    <SelectItem value="Santo André - SP">Santo André - SP</SelectItem>
                    <SelectItem value="Santos - SP">Santos - SP</SelectItem>
                    <SelectItem value="São Bernardo do Campo - SP">São Bernardo do Campo - SP</SelectItem>
                    <SelectItem value="São Caetano do Sul - SP">São Caetano do Sul - SP</SelectItem>
                    <SelectItem value="São Carlos - SP">São Carlos - SP</SelectItem>
                    <SelectItem value="São Gonçalo - RJ">São Gonçalo - RJ</SelectItem>
                    <SelectItem value="São José - SC">São José - SC</SelectItem>
                    <SelectItem value="São José do Rio Preto - SP">São José do Rio Preto - SP</SelectItem>
                    <SelectItem value="São José dos Campos - SP">São José dos Campos - SP</SelectItem>
                    <SelectItem value="São José dos Pinhais - PR">São José dos Pinhais - PR</SelectItem>
                    <SelectItem value="São Leopoldo - RS">São Leopoldo - RS</SelectItem>
                    <SelectItem value="São Luís - MA">São Luís - MA</SelectItem>
                    <SelectItem value="São Paulo - SP">São Paulo - SP</SelectItem>
                    <SelectItem value="São Vicente - SP">São Vicente - SP</SelectItem>
                    <SelectItem value="Sorocaba - SP">Sorocaba - SP</SelectItem>
                    <SelectItem value="Sumaré - SP">Sumaré - SP</SelectItem>
                    <SelectItem value="Suzano - SP">Suzano - SP</SelectItem>
                    <SelectItem value="Taboão da Serra - SP">Taboão da Serra - SP</SelectItem>
                    <SelectItem value="Taubaté - SP">Taubaté - SP</SelectItem>
                    <SelectItem value="Teófilo Otoni - MG">Teófilo Otoni - MG</SelectItem>
                    <SelectItem value="Teresina - PI">Teresina - PI</SelectItem>
                    <SelectItem value="Uberaba - MG">Uberaba - MG</SelectItem>
                    <SelectItem value="Uberlândia - MG">Uberlândia - MG</SelectItem>
                    <SelectItem value="Uruguaiana - RS">Uruguaiana - RS</SelectItem>
                    <SelectItem value="Várzea Grande - MT">Várzea Grande - MT</SelectItem>
                    <SelectItem value="Vila Velha - ES">Vila Velha - ES</SelectItem>
                    <SelectItem value="Vitória - ES">Vitória - ES</SelectItem>
                    <SelectItem value="Vitória da Conquista - BA">Vitória da Conquista - BA</SelectItem>
                    <SelectItem value="Volta Redonda - RJ">Volta Redonda - RJ</SelectItem>
                  </SelectContent>
                </Select>
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