import Link from "next/link";
import { Button, Input } from "@/components/ui";
import { MENUS } from "@/config/menus";
import { contactInfo } from "../layout-constants";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t py-6">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h4>Zenova Psikoloji</h4>
            <p className="text-muted-foreground">
              Hafta içi her gün 09:00 - 18:00 saatleri arasında açığız. Size
              yardımcı olmaktan mutluluk duyarız!
            </p>
            <div className="flex flex-col space-y-2">
              {contactInfo.map(({ Icon, text, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-description flex items-center gap-2 transition-colors"
                >
                  <Icon className="text-primary size-4 shrink-0" />
                  <span className="flex flex-wrap text-sm">{text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Hızlı Bağlantılar</h4>
            <nav className="flex flex-col space-y-2">
              {MENUS.HEADER.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  className="hover:text-primary text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4>Bültenimize Abone Olun</h4>
            <p className="text-muted-foreground text-sm">
              En son haberler ve güncellemeler için bültenimize abone olun.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-background"
              />
              <Button className="w-full">Abone Ol</Button>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-4">
            <h4>Bizi Bulun</h4>
            <div className="h-[200px] w-full overflow-hidden rounded-md border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96367.89527997425!2d28.78638966148627!3d40.992499862871696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cabba660a8b4a1%3A0x556e3cf27e1bb2b!2sZuhuratbaba%20Mah.%20Dr.%20Tevfik%20Sa%C4%9Flam%20Cad%20G%C3%BCrmen%20Apt.%20No%3A7%20Daire%3A%207%2C%2034147%20Bak%C4%B1rk%C3%B6y%2F%C4%B0stanbul!3m2!1d40.9925292!2d28.8687905!5e0!3m2!1str!2str!4v1743444416641!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Haritalar"
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media & Copyright */}
      <FooterCopyright />
    </footer>
  );
}
