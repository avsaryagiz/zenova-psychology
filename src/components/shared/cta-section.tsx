import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import AppointmentButton from "./appointment-button";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

interface ICTASectionProps {
  id?: string;
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function CTASection({
  id = "randevu-al",
  title,
  description,
  backgroundImage,
}: ICTASectionProps) {
  return (
    <section
      id={id}
      className="relative flex h-96 items-center justify-center overflow-hidden bg-cover bg-fixed py-24 md:py-32"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 h-96 w-full bg-cover bg-center bg-no-repeat" />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          backgroundImage ? "bg-primary/80" : "bg-primary",
        )}
      />

      {/* Content */}
      <div className="text-primary-foreground relative z-10 container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 capitalize sm:mb-6">{title}</h2>
          <p className="text-primary-foreground/90 mb-8 sm:text-xl">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <AppointmentButton variant="cta" />
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
