import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  CreditCard, 
  Users, 
  Settings, 
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Target
} from "lucide-react";

const Funcionalidades = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "Emissão de Notas Fiscais",
      description: "Emissão automática de NFe, NFCe e NFSe com integração total à Receita Federal. Validação em tempo real e armazenamento seguro.",
      details: [
        "NFe (Nota Fiscal Eletrônica)",
        "NFCe (Nota Fiscal de Consumidor Eletrônica)",
        "NFSe (Nota Fiscal de Serviços Eletrônica)",
        "Cancelamento e carta de correção",
        "Integração com SEFAZ",
        "Backup automático"
      ]
    },
    {
      icon: Package,
      title: "Controle de Estoque",
      description: "Gestão completa do inventário com alertas inteligentes, controle de lotes e movimentações detalhadas.",
      details: [
        "Controle de entrada e saída",
        "Alertas de estoque mínimo",
        "Gestão de fornecedores",
        "Controle de lotes e validade",
        "Inventário e auditoria",
        "Código de barras"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Pedidos de Venda",
      description: "Gestão completa do processo de vendas, desde o orçamento até a entrega e faturamento.",
      details: [
        "Orçamentos e propostas",
        "Controle de pedidos",
        "Gestão de clientes",
        "Comissões de vendedores",
        "Integração com estoque",
        "Histórico de vendas"
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com indicadores financeiros, vendas, estoque e performance da empresa.",
      details: [
        "Dashboard executivo",
        "Relatórios financeiros",
        "Análise de vendas",
        "Gráficos e métricas",
        "Relatórios personalizados",
        "Exportação para Excel/PDF"
      ]
    },
    {
      icon: CreditCard,
      title: "Gestão Financeira",
      description: "Controle completo das finanças com contas a pagar, receber, fluxo de caixa e conciliação bancária.",
      details: [
        "Contas a pagar e receber",
        "Fluxo de caixa",
        "Conciliação bancária",
        "Controle de cartões",
        "Relatórios financeiros",
        "Integração bancária"
      ]
    },
    {
      icon: Users,
      title: "CRM Integrado",
      description: "Gestão de relacionamento com clientes, histórico de atendimentos e acompanhamento de oportunidades.",
      details: [
        "Cadastro de clientes",
        "Histórico de atendimentos",
        "Follow-up automático",
        "Gestão de oportunidades",
        "Campanhas de marketing",
        "Análise de perfil"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Settings,
      title: "Configurações Avançadas",
      description: "Personalize o sistema conforme suas necessidades"
    },
    {
      icon: Shield,
      title: "Segurança de Dados",
      description: "Criptografia e backup automático dos dados"
    },
    {
      icon: Smartphone,
      title: "Acesso Mobile",
      description: "Aplicativo mobile para gestão em qualquer lugar"
    },
    {
      icon: Cloud,
      title: "Armazenamento em Nuvem",
      description: "Seus dados seguros e acessíveis de qualquer lugar"
    },
    {
      icon: Zap,
      title: "Integrações",
      description: "Conecte com marketplaces, bancos e outras ferramentas"
    },
    {
      icon: Target,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para sua empresa"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Funcionalidades do Sistema
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todas as funcionalidades que tornam nosso ERP a escolha ideal para sua empresa crescer de forma organizada e eficiente.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Recursos Adicionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para conhecer na prática?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como essas funcionalidades podem transformar sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contato">
                Solicitar Demonstração
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/precos">
                Ver Planos e Preços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funcionalidades;