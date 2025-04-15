import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn, isExternalPath } from "@/lib/utils";
import { DEFAULT_VARIABLES } from "@/config/constants";

const VARIANT_LABELS = {
  default: "Randevu Al",
  cta: "Ücretsiz İlk Görüşme İçin Randevu Alın",
  header: "Hemen Bir Randevu Al",
};

interface IAppointmenButtonProps {
  variant?: "default" | "cta" | "header";
  href?: string;
  label?: string;
  className?: string;
}

export default function AppointmentButton({
  variant = "default",
  href = DEFAULT_VARIABLES.APPOINTMENT_URL,
  label,
  className,
  ...props
}: IAppointmenButtonProps) {
  const isExternal = href ? isExternalPath(href) : false;
  const Component = href ? (isExternal ? "a" : Link) : Button;
  const defaultLabel = VARIANT_LABELS[variant] || "Buton";

  if (variant === "header") {
    return (
      <>
        <Component
          href={href}
          className={cn(
            buttonVariants({ variant: "default", size: "custom" }),
            "max-sm:hidden",
            className,
          )}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...props}
        >
          {label || defaultLabel}
        </Component>
        <Component
          href={href}
          className={cn(
            buttonVariants({ variant: "default", size: "custom" }),
            "sm:hidden",
            className,
          )}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...props}
        >
          Randevu Al
        </Component>
      </>
    );
  }

  return (
    <Component
      href={href}
      className={cn(
        buttonVariants({
          variant: variant === "cta" ? "secondary" : "default",
          size: "lg",
        }),
        variant === "default" &&
          "max-sm:h-8 max-sm:gap-1.5 max-sm:px-3 max-sm:has-[>svg]:px-2.5",
        className,
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {label || defaultLabel}
    </Component>
  );
}
