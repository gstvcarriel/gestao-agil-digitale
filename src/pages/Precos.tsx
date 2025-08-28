import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

const Precos = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 99",
      period: "/mês",
      description: "Ideal para pequenas empresas iniciantes",
      features: [
        "Até 2 usuários",
        "Emissão de NFe e NFCe",
        "Controle básico de estoque",
        "Relatórios essenciais",
        "Suporte por email",
        "1 empresa"
      ],
      notIncluded: [
        "CRM avançado",
        "Múltiplas empresas",
        "API personalizada",
        "Suporte prioritário"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Profissional",
      price: "R$ 199",
      period: "/mês",
      description: "Perfeito para empresas em crescimento",
      features: [
        "Até 10 usuários",
        "Todas as funcionalidades do Básico",
        "CRM completo",
        "Gestão financeira avançada",
        "Relatórios personalizados",
        "Suporte por telefone",
        "Até 3 empresas",
        "Integração com bancos"
      ],
      notIncluded: [
        "API personalizada",
        "Suporte 24/7"
      ],
      popular: true,
      buttonVariant: "cta" as const
    },
    {
      name: "Avançado",
      price: "R$ 399",
      period: "/mês",
      description: "Para empresas que precisam do máximo",
      features: [
        "Usuários ilimitados",
        "Todas as funcionalidades",
        "API personalizada",
        "Suporte 24/7 prioritário",
        "Consultor dedicado",
        "Empresas ilimitadas",
        "Relatórios avançados",
        "Integrações personalizadas",
        "Backup em tempo real"
      ],
      notIncluded: [],
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  const additionalInfo = [
    {
      title: "Sem Taxa de Instalação",
      description: "Implementação gratuita em todos os planos"
    },
    {
      title: "Treinamento Incluído",
      description: "Capacitação completa da sua equipe"
    },
    {
      title: "Migração de Dados",
      description: "Transferimos seus dados do sistema atual"
    },
    {
      title: "Teste Gratuito",
      description: "30 dias para testar sem compromisso"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Planos e Preços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Todos os planos incluem atualizações gratuitas e suporte técnico especializado.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-card transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center space-x-1">
                    <Star size={14} />
                    <span>Mais Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                      <div className="w-5 h-5 border border-gray-300 rounded flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <Link to="/contato">
                    {plan.popular ? "Escolher Plano" : "Solicitar Demonstração"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-subtle rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            O que está incluído em todos os planos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Posso mudar de plano a qualquer momento?
              </h3>
              <p className="text-muted-foreground text-sm">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas na próxima cobrança.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Existe fidelidade ou multa por cancelamento?
              </h3>
              <p className="text-muted-foreground text-sm">
                Não há fidelidade. Você pode cancelar a qualquer momento sem multas ou taxas adicionais.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Como funciona o suporte técnico?
              </h3>
              <p className="text-muted-foreground text-sm">
                Oferecemos suporte por email, telefone e chat. O plano Avançado inclui suporte prioritário 24/7.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Os dados ficam seguros?
              </h3>
              <p className="text-muted-foreground text-sm">
                Sim, utilizamos criptografia de ponta e backup automático. Seus dados ficam em servidores seguros no Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e tire todas as suas dúvidas com nossos especialistas.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/contato">
              Agendar Demonstração Gratuita
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Precos;