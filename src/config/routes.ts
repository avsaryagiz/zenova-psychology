export const ROUTES = {
  INTERNAL: {
    HOME: "/",
    ABOUT: {
      ROOT: "/hakkimizda",
      TEAM: "/hakkimizda/ekibimiz",
      OFFICE: "/hakkimizda/ofisimiz",
      WHO_WE_ARE: "/hakkimizda/biz-kimiz",
    },
    SERVICES: {
      ROOT: "/hizmetlerimiz",
      SERVICE: (service: string) => `/hizmetlerimiz/${service}`,
    },
    BLOG: {
      ROOT: "/blog",
      CATEGORY: (category: string) => `/blog/${category}`,
      POST: (slug: string | number) => `/blog/post/${slug}`,
    },
    VIDEO_GALLERY: "/video-galeri",
    CONTACT: "/iletisim",
    APPOINTMENT: "/randevu-al",
  },
} as const;
