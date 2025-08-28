import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      mensagem: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      subtitle: "Segunda a sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@erpro.com.br",
      subtitle: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP",
      subtitle: "Atendimento presencial com agendamento"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h",
      subtitle: "Sábados: 8h às 12h"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar a gestão da sua empresa. 
            Entre em contato conosco e agende uma demonstração gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Send className="w-6 h-6" />
                <span>Solicitar Demonstração</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre sua empresa e suas necessidades..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  Enviar Mensagem
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-corporate rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <Card className="bg-gradient-subtle hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Por que escolher nossa demonstração?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Demonstração personalizada para seu negócio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Análise gratuita dos seus processos atuais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Consultoria especializada sem compromisso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Teste gratuito por 30 dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Precisa de ajuda imediata?
                </h3>
                <p className="mb-4 opacity-90">
                  Nossa equipe está pronta para atender você
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 w-full"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Ligar Agora: (11) 9999-9999
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Dúvidas Frequentes sobre Demonstração
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Quanto tempo dura a demonstração?
              </h3>
              <p className="text-muted-foreground text-sm">
                Nossa demonstração personalizada dura entre 30 a 60 minutos, dependendo das suas necessidades específicas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                A demonstração é realmente gratuita?
              </h3>
              <p className="text-muted-foreground text-sm">
                Sim, é 100% gratuita e sem compromisso. Nosso objetivo é mostrar como podemos ajudar sua empresa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Posso fazer a demonstração online?
              </h3>
              <p className="text-muted-foreground text-sm">
                Sim, oferecemos demonstrações online via videochamada para sua comodidade e segurança.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Preciso preparar algo antes da demonstração?
              </h3>
              <p className="text-muted-foreground text-sm">
                Não é necessário. Apenas tenha em mente os principais desafios da sua empresa que gostaria de resolver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;