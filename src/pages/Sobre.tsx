import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Simplificar a gestão empresarial através de tecnologia inovadora, permitindo que pequenas e médias empresas cresçam de forma organizada e eficiente."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a principal referência em sistemas ERP para PMEs no Brasil, democratizando o acesso à tecnologia de gestão empresarial."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Inovação, transparência, comprometimento com o cliente, simplicidade e excelência na entrega de soluções tecnológicas."
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "5.000+",
      label: "Empresas Atendidas",
      description: "Clientes satisfeitos em todo o Brasil"
    },
    {
      icon: TrendingUp,
      number: "15",
      label: "Anos de Experiência",
      description: "Expertise consolidada no mercado"
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Uptime Garantido",
      description: "Disponibilidade e confiabilidade"
    },
    {
      icon: Shield,
      number: "24/7",
      label: "Suporte Técnico",
      description: "Atendimento quando você precisar"
    }
  ];

  const team = [
    {
      name: "Carlos Silva",
      position: "CEO & Fundador",
      description: "15 anos de experiência em sistemas de gestão empresarial"
    },
    {
      name: "Ana Santos",
      position: "CTO",
      description: "Especialista em arquitetura de software e segurança de dados"
    },
    {
      name: "Roberto Lima",
      position: "Diretor Comercial",
      description: "Expert em soluções para pequenas e médias empresas"
    },
    {
      name: "Maria Oliveira",
      position: "Diretora de Suporte",
      description: "Focada na satisfação e sucesso dos nossos clientes"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nós
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa brasileira especializada em sistemas de gestão empresarial, 
            com foco em oferecer soluções simples e eficientes para pequenas e médias empresas.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A ERPro nasceu em 2009 com o objetivo de democratizar o acesso à tecnologia de gestão empresarial. 
                Nossos fundadores, vindos de pequenas empresas, sabiam das dificuldades enfrentadas pelos empreendedores 
                brasileiros para organizar e controlar seus negócios.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos um sistema robusto, mas simples de usar, que atende às necessidades 
                específicas do mercado brasileiro. Hoje, mais de 5.000 empresas confiam em nossa solução para 
                gerenciar suas operações diárias.
              </p>
              <p>
                Nossa paixão é ver nossos clientes crescerem e prosperarem. Cada funcionalidade do nosso sistema 
                foi pensada para resolver problemas reais das empresas brasileiras, sempre com foco na simplicidade 
                e eficiência.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos Pilares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-subtle rounded-lg p-12 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nosso Compromisso
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos comprometidos em oferecer não apenas um sistema, mas uma parceria para o crescimento 
              do seu negócio. Nossa equipe trabalha constantemente para melhorar nossos produtos e serviços, 
              sempre ouvindo as necessidades dos nossos clientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Inovação Constante</h3>
                <p className="text-sm text-muted-foreground">
                  Atualizações regulares com novas funcionalidades
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Suporte Especializado</h3>
                <p className="text-sm text-muted-foreground">
                  Equipe técnica dedicada ao seu sucesso
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Segurança Total</h3>
                <p className="text-sm text-muted-foreground">
                  Seus dados protegidos com a mais alta tecnologia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-lg p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Quer fazer parte da nossa história?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 empresas que já transformaram sua gestão com nosso ERP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contato">
                Solicitar Demonstração
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/precos">
                Ver Planos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;