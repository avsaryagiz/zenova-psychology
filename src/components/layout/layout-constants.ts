import LinkedinIcon from "../icons/linkedin-icon";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
  XIcon,
  YouTubeIcon,
} from "../icons";
import { SOCIAL_MEDIA_ROUTES } from "@/config/social-media-routes";
import { formatPhoneNumber } from "@/lib/utils";

export const CONTACT_INFO = [
  {
    icon: LocationIcon,
    label: SOCIAL_MEDIA_ROUTES.LOCATION,
    href: SOCIAL_MEDIA_ROUTES.MAP,
  },
  {
    icon: MailIcon,
    label: SOCIAL_MEDIA_ROUTES.MAIL,
    href: `mailto:${SOCIAL_MEDIA_ROUTES.MAIL}`,
  },
  {
    icon: PhoneIcon,
    label: SOCIAL_MEDIA_ROUTES.PHONE,
    href: `tel:${SOCIAL_MEDIA_ROUTES.PHONE.trim()}`,
  },
];

export const SOCIAL_LINK_CONTENTS = {
  facebook: {
    icon: FacebookIcon,
    label: "Facebook",
    href: SOCIAL_MEDIA_ROUTES.FACEBOOK,
    title: "Facebook Sayfamızı Ziyaret Edin",
  },
  instagram: {
    icon: InstagramIcon,
    label: "Instagram",
    href: SOCIAL_MEDIA_ROUTES.INSTAGRAM,
    title: "Instagram'da Bizi Takip Edin",
  },
  linkedin: {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: SOCIAL_MEDIA_ROUTES.LINKEDIN,
    title: "LinkedIn Profilimizi Görüntüleyin",
  },
  x: {
    icon: XIcon,
    label: "Twitter",
    href: SOCIAL_MEDIA_ROUTES.X,
    title: "X (Twitter) Hesabımıza Göz Atın",
  },
  youtube: {
    icon: YouTubeIcon,
    label: "YouTube",
    href: SOCIAL_MEDIA_ROUTES.YOUTUBE,
    title: "YouTube Kanalımıza Abone Olun",
  },
  whatsapp: {
    icon: WhatsappIcon,
    label: SOCIAL_MEDIA_ROUTES.PHONE,
    href: `https://wa.me/${formatPhoneNumber(SOCIAL_MEDIA_ROUTES.PHONE)}`,
    title: "WhatsApp ile Bize Ulaşın",
  },
};
