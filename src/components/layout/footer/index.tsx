import Image from "next/image";
import Link from "next/link";
import LogoType from "/public/images/logo/zenova-logo-type.png";
import FooterCopyright from "./footer-copyright";
import { Button, Input } from "@/components/ui";
import { CONTACT_INFO } from "../layout-constants";
import { ROUTES } from "@/config/routes";
import { MENUS } from "@/config/menus";

export default function Footer() {
  return (
    <footer className="text-card-foreground border-t py-6">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Link href={ROUTES.INTERNAL.HOME}>
              <Image
                src={LogoType}
                priority
                alt="Zenova Psikoloji Logo"
                className="h-16 w-auto max-sm:hidden"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Salı - Pazar : 10:00 - 19:00 saatleri arasında açığız. Size
              yardımcı olmaktan mutluluk duyarız!
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ icon: Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-description flex items-center gap-2 transition-colors"
                >
                  <Icon className="text-primary size-4 shrink-0" />
                  <span className="flex flex-wrap text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="w-fit border-b">Hızlı Bağlantılar</h4>
            <nav className="flex flex-col gap-2">
              {MENUS.HEADER.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  className="hover:text-primary w-fit text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="w-fit border-b">Bültenimize Abone Olun</h4>
            <p className="text-muted-foreground text-sm">
              En son haberler ve güncellemeler için bültenimize abone olun.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-background"
              />
              <Button className="cursor-pointer">Abone Ol</Button>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-4">
            <h4 className="w-fit border-b">Bizi Bulun</h4>
            <div className="h-[200px] w-full overflow-hidden rounded-md border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4952037905914!2d28.866215576608024!3d40.99253322039337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabba660a8b4a1%3A0x556e3cf27e1bb2b!2sSabuncu%20Psikoloji!5e0!3m2!1str!2str!4v1743491030152!5m2!1str!2str"
                title="Zenova Psikoloji - Google Haritalar"
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
                height="300"
                width="400"
                style={{
                  border: 0,
                }}
                allowFullScreen
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
