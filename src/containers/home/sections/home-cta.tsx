"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function HomeCTASection() {
  return (
    <section
      id="randevu-al"
      className="relative flex h-96 items-center justify-center overflow-hidden bg-cover bg-fixed py-24 md:py-32"
      style={{
        backgroundImage: `url('/images/home/hero/aile-terapisi.jpg')`,
      }}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 h-96 w-full bg-cover bg-center bg-no-repeat" />

      {/* Overlay */}
      <div className="bg-primary/80 absolute inset-0" />

      {/* Content */}
      <div className="text-primary-foreground relative z-10 container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 sm:mb-6">
            Hayatınızı Değiştirmeye Bugün Başlayın
          </h2>
          <p className="text-primary-foreground/90 mb-8 sm:text-xl">
            Profesyonel destek almak için ilk adımı atın. Zenova Psikoloji
            olarak, ruh sağlığınız için yanınızdayız. Size yardımcı olmak için
            buradayız.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTES.INTERNAL.APPOINTMENT}
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Ücretsiz İlk Görüşme İçin Randevu Alın
            </Link>

            <Link
              href={ROUTES.INTERNAL.CONTACT}
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
