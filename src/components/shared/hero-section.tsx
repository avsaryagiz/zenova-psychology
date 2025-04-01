import Image from "next/image";
import { AppointmentButton } from "@/components/shared/appointment-button";

interface IHeroSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function HeroSection({
  id,
  title,
  description,
  imageUrl = "/images/home/hero/profesyonel-destek.jpg",
  imageAlt = "Zenova Psikoloji",
}: IHeroSectionProps) {
  return (
    <section id={id} className="relative h-[400px] py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
      <div className="relative z-10 container text-white">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
            {title}
          </h1>
          <p className="mb-8 text-lg md:text-xl">{description}</p>
          <AppointmentButton />
        </div>
      </div>
    </section>
  );
}
