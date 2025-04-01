import { ROUTES } from "./routes";

interface IMenus {
  HEADER: IMenu[];
}

interface IMenu {
  key: string;
  label: string;
  title: string;
  description?: string;
  path: string;
  isExternal: boolean;
  children?: IMenu[];
}

export const MENUS: IMenus = {
  HEADER: [
    {
      key: "HOME",
      label: "Ana Sayfa",
      title: "Anasayfa - Web Sitemizin Ana Sayfası",
      path: ROUTES.INTERNAL.HOME,
      isExternal: false,
    },
    {
      key: "ABOUT",
      label: "Hakkımızda",
      title: "Hakkımızda - Zenova Psikoloji Hakkında Bilgi",
      path: ROUTES.INTERNAL.ABOUT.ROOT,
      children: [
        {
          key: "WHO_WE_ARE",
          label: "Bizi Tanıyın",
          title: "Bizi Tanıyın - Zenova Psikoloji Hakkında Bilgi",
          description: "Zenova Psikoloji hakkında bilgi edinin.",
          path: ROUTES.INTERNAL.ABOUT.WHO_WE_ARE,
          isExternal: false,
        },
        {
          key: "TEAM",
          label: "Ekibimiz",
          title: "Ekibimiz - Uzman Kadromuz",
          description: "Uzman kadromuz hakkında bilgi edinin.",
          path: ROUTES.INTERNAL.ABOUT.TEAM,
          isExternal: false,
        },
        {
          key: "OFFICE",
          label: "Ofisimiz",
          title: "Ofisimiz - Çalışma Ortamımız",
          description: "Çalışma ortamımız hakkında bilgi edinin.",
          path: ROUTES.INTERNAL.ABOUT.OFFICE,
          isExternal: false,
        },
      ],
      isExternal: false,
    },
    {
      key: "SERVICES",
      label: "Hizmetlerimiz",
      title: "Hizmetlerimiz - Sunmuş Olduğumuz Hizmetler",
      path: ROUTES.INTERNAL.SERVICES.ROOT,
      isExternal: false,
    },
    {
      key: "BLOG",
      label: "Blog",
      title: "Blog - Güncel Haberler ve Makaleler",
      path: ROUTES.INTERNAL.BLOG.ROOT,
      isExternal: false,
    },
    {
      key: "VIDEO_GALLERY",
      label: "Video Galeri",
      title: "Video Galeri - Eğitim ve Bilgilendirme Videoları",
      path: ROUTES.INTERNAL.VIDEO_GALLERY,
      isExternal: false,
    },
    {
      key: "CONTACT",
      label: "İletişim",
      title: "İletişim - Bize Ulaşın",
      path: ROUTES.INTERNAL.CONTACT,
      isExternal: false,
    },
  ],

  // add menus here if needed
} as const;
