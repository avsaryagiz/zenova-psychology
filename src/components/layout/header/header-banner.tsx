import { CONTACT_INFO } from "../layout-constants";

export default function HeaderBanner() {
  return (
    <section className="bg-accent py-3 max-lg:hidden">
      <div className="text-accent-foreground container flex items-start justify-between gap-12 text-xs">
        <p className="flex flex-wrap">
          Salı - Pazar : 10:00 - 19:00 saatleri arasında açığız. Size yardımcı
          olmaktan mutluluk duyarız!
        </p>
        <div className="flex items-start gap-6">
          {CONTACT_INFO.map(({ icon: Icon, label, href }, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon className="text-primary size-4" />
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-description flex flex-wrap transition-colors"
                >
                  {label}
                </a>
              ) : (
                <p>{label}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
