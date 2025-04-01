import { AppointmentButton } from "@/components/shared/appointment-button";

export default function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center">
        <h2 className="mb-6 text-3xl font-bold">Ofisimizi Ziyaret Edin</h2>
        <p className="text-primary-foreground/90 mx-auto mb-8 max-w-2xl text-xl">
          Zenova Psikoloji&apos;nin rahatlatıcı ve güvenli ortamında profesyonel
          destek almak için hemen randevu alın.
        </p>
        <AppointmentButton variant="cta" />
      </div>
    </section>
  );
}
