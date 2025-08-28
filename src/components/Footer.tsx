import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-corporate rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">ERPro</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Sistema ERP completo para pequenas e médias empresas. Controle total do seu negócio com tecnologia moderna e segura.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contato@erpro.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/funcionalidades" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Funcionalidades
              </Link>
              <Link to="/precos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Preços
              </Link>
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">Notas Fiscais</span>
              <span className="block text-sm text-muted-foreground">Controle de Estoque</span>
              <span className="block text-sm text-muted-foreground">Pedidos de Venda</span>
              <span className="block text-sm text-muted-foreground">Relatórios</span>
              <span className="block text-sm text-muted-foreground">Integração Bancária</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ERPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;