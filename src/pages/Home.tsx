import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart3, FileText, Package, ShoppingCart, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-erp.jpg";

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: "Notas Fiscais",
      description: "Emissão automática de NFe e NFCe com integração total à Receita Federal"
    },
    {
      icon: Package,
      title: "Controle de Estoque",
      description: "Gestão completa do seu estoque com alertas de baixa e relatórios detalhados"
    },
    {
      icon: ShoppingCart,
      title: "Pedidos de Venda",
      description: "Controle total dos pedidos desde a cotação até a entrega"
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com métricas e indicadores do seu negócio"
    }
  ];

  const benefits = [
    "Redução de 80% no tempo de emissão de notas fiscais",
    "Controle total do estoque em tempo real",
    "Aumento de 40% na produtividade das vendas",
    "Relatórios automáticos para tomada de decisões",
    "Suporte técnico especializado 24/7",
    "Integração com principais bancos e marketplaces"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme sua empresa com o
                <span className="block text-white"> ERP mais completo</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-xl">
                Sistema de gestão empresarial completo para pequenas e médias empresas. 
                Controle financeiro, estoque, vendas e emissão de notas fiscais em uma única plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
                  <Link to="/contato">
                    Solicitar Demonstração Gratuita
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  Ver Funcionalidades
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Sistema ERP Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo que sua empresa precisa para crescer de forma organizada e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher nosso ERP?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Mais de 5.000 empresas já confiam em nossa solução para gerenciar seus negócios.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
                <div className="text-muted-foreground">Empresas Atendidas</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Garantido</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Suporte Técnico</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">15 anos</div>
                <div className="text-muted-foreground">de Experiência</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para revolucionar sua gestão?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como nosso ERP pode transformar sua empresa.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/contato">
              Começar Agora
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;