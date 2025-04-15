export const ROUTES = {
  INTERNAL: {
    HOME: "/",
    ABOUT: {
      ROOT: "/hakkimizda",
      TEAM: "/hakkimizda/ekibimiz",
      OFFICE: "/hakkimizda/ofisimiz",
      WHO_WE_ARE: "/hakkimizda/bizi-taniyin",
    },
    SERVICES: {
      ROOT: "/hizmetlerimiz",
      SERVICE: (service: string) => `/hizmetlerimiz/${service}`,
    },
    BLOG: {
      ROOT: "/blog",
      CATEGORY: (category = "tum-kategoriler") => `/blog/${category}`,
      POST: (slug: string | number) => `/blog/post/${slug}`,
    },
    VIDEO_GALLERY: "/video-galeri",
    CONTACT: "/iletisim",
    APPOINTMENT: "/randevu-al",
  },
  SOCIAL: {
    YOUTUBE: "https://www.youtube.com/@sabuncupsikoloji",
  },
} as const;
