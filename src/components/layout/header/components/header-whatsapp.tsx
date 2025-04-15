import { WhatsappIcon } from "@/components/icons";
import { SOCIAL_MEDIA_ROUTES } from "@/config/social-media-routes";
import { cn, formatPhoneNumber } from "@/lib/utils";

interface HeaderWhatsappProps {
  className?: string;
}

export default function HeaderWhatsapp({ className }: HeaderWhatsappProps) {
  return (
    <a
      href={`https://wa.me/${formatPhoneNumber(SOCIAL_MEDIA_ROUTES.PHONE)}`}
      className={cn(
        "flex items-center gap-2 text-[#128c7e] transition-transform hover:scale-105 max-xl:items-start",
        className,
      )}
    >
      <WhatsappIcon className="size-6" />
      <h3 className="max-xl:text-xl">{SOCIAL_MEDIA_ROUTES.PHONE}</h3>
    </a>
  );
}
