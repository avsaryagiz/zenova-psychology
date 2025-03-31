import LinkedinIcon from "../icons/linkedin-icon";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
  YouTubeIcon,
} from "../icons";
import { SOCIAL_MEDIA_ROUTES } from "@/config/social-media-routes";

export const CONTACT_INFO = [
  {
    Icon: LocationIcon,
    text: SOCIAL_MEDIA_ROUTES.LOCATION,
    link: SOCIAL_MEDIA_ROUTES.MAP,
  },
  {
    Icon: MailIcon,
    text: SOCIAL_MEDIA_ROUTES.MAIL,
    link: `mailto:${SOCIAL_MEDIA_ROUTES.MAIL}`,
  },
  {
    Icon: PhoneIcon,
    text: SOCIAL_MEDIA_ROUTES.PHONE,
    link: `tel:${SOCIAL_MEDIA_ROUTES.PHONE.trim()}`,
  },
];

export const SOCIAL_LINK_CONTENTS = {
  facebook: {
    href: SOCIAL_MEDIA_ROUTES.FACEBOOK,
    icon: FacebookIcon,
    label: "Facebook",
    title: "Facebook Sayfamızı Ziyaret Edin",
  },
  instagram: {
    href: SOCIAL_MEDIA_ROUTES.INSTAGRAM,
    icon: InstagramIcon,
    label: "Instagram",
    title: "Instagram'da Bizi Takip Edin",
  },
  linkedin: {
    href: SOCIAL_MEDIA_ROUTES.LINKEDIN,
    icon: LinkedinIcon,
    label: "LinkedIn",
    title: "LinkedIn Profilimizi Görüntüleyin",
  },
  x: {
    href: SOCIAL_MEDIA_ROUTES.X,
    icon: XIcon,
    label: "Twitter",
    title: "X (Twitter) Hesabımıza Göz Atın",
  },
  youtube: {
    href: SOCIAL_MEDIA_ROUTES.YOUTUBE,
    icon: YouTubeIcon,
    label: "YouTube",
    title: "YouTube Kanalımıza Abone Olun",
  },
};
