import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";

const contactInfo = [
  {
    Icon: LocationIcon,
    text: "Zuhuratbaba Mah. Dr. Tevfik Sağlam Cad Gürmen Apt. No:7 Daire: 7, 34147 Bakırköy/İstanbul",
    link: "https://maps.app.goo.gl/bF4uiLptcxKJKBM26",
  },
  {
    Icon: MailIcon,
    text: "info@zenovapsikoloji.com",
    link: "mailto:info@zenovapsikoloji.com",
  },
  {
    Icon: PhoneIcon,
    text: "+90 555 123 45 67",
    link: "tel:+905551234567",
  },
];

export default function HeaderBanner() {
  return (
    <section className="bg-accent py-3 max-lg:hidden">
      <div className="text-accent-foreground container flex items-start justify-between gap-12 text-xs">
        <p className="flex flex-wrap">
          Hafta içi her gün 09:00 - 18:00 saatleri arasında açığız. Size
          yardımcı olmaktan mutluluk duyarız!
        </p>
        <div className="flex items-start gap-6">
          {contactInfo.map(({ Icon, text, link }, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon className="text-primary size-4" />
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-description flex flex-wrap transition-colors"
                >
                  {text}
                </a>
              ) : (
                <p>{text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
