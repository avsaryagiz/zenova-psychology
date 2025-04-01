"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  AdolescentIcon,
  ChevronRightIcon,
  ChildIcon,
  CoupleIcon,
  FamilyIcon,
  HeartCrackIcon,
  MedicalTestIcon,
  UserGearIcon,
} from "@/components/icons";
import {
  buttonVariants,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "bireysel-terapi",
    title: "Bireysel Terapi",
    icon: UserGearIcon,
    image: "/images/home/services/bireysel-terapi.webp",
    shortDescription:
      "Kişisel sorunlarınızı çözmek ve kendinizi daha iyi anlamak için bire bir terapi seansları.",
    longDescription:
      "Bireysel terapi, kişisel zorluklar, duygusal sıkıntılar veya davranış sorunları yaşayan bireylere özel olarak tasarlanmış bir terapi türüdür. Uzman psikologlarımız, depresyon, kaygı bozuklukları, travma sonrası stres bozukluğu, öfke kontrolü, özgüven sorunları ve kişisel gelişim gibi çeşitli konularda destek sağlar. Güvenli ve yargısız bir ortamda, düşüncelerinizi ve duygularınızı keşfetmenize, zorlukların üstesinden gelmenize ve daha sağlıklı başa çıkma mekanizmaları geliştirmenize yardımcı oluruz.",
    benefits: [
      "Duygusal zorlukların üstesinden gelme",
      "Özgüven ve öz-farkındalık geliştirme",
      "Stres ve kaygıyı azaltma teknikleri",
      "Sağlıklı ilişkiler kurma becerileri",
      "Kişisel hedeflere ulaşma desteği",
    ],
  },
  {
    id: "cift-terapisi",
    title: "Çift Terapisi",
    icon: CoupleIcon,
    image: "/images/home/services/cift-terapisi.webp",
    shortDescription:
      "İlişkinizi güçlendirmek ve iletişim sorunlarını çözmek için profesyonel destek.",
    longDescription:
      "Çift terapisi, ilişkilerinde zorluk yaşayan çiftlere yardımcı olmak için tasarlanmıştır. İletişim sorunları, güven eksikliği, çatışma çözümü, yakınlık sorunları veya yaşam değişiklikleri gibi konularda uzmanlaşmış terapistlerimiz, ilişkinizi güçlendirmenize ve daha sağlıklı bir bağ kurmanıza yardımcı olur. Terapide, her iki tarafın da duyulduğu ve anlaşıldığı güvenli bir ortam sağlayarak, çiftlerin birbirlerini daha iyi anlamalarını ve ilişkilerindeki zorlukları birlikte aşmalarını destekleriz.",
    benefits: [
      "Etkili iletişim becerilerini geliştirme",
      "Çatışmaları sağlıklı bir şekilde çözme",
      "Duygusal bağı güçlendirme",
      "Güven ve saygıyı yeniden inşa etme",
      "Ortak hedefler belirleme ve ilişkiyi yenileme",
    ],
  },
  {
    id: "aile-terapisi",
    title: "Aile Terapisi",
    icon: FamilyIcon,
    image: "/images/home/services/aile-terapisi.webp",
    shortDescription:
      "Aile içi ilişkileri güçlendirmek ve çatışmaları çözmek için aile odaklı terapi.",
    longDescription:
      "Aile terapisi, aile üyeleri arasındaki ilişkileri iyileştirmek ve aile içi sorunları çözmek için tasarlanmış bir terapi yaklaşımıdır. Aile dinamikleri, ebeveyn-çocuk ilişkileri, kardeş çatışmaları, ergenlik sorunları, boşanma süreci veya yeni bir aile üyesinin katılımı gibi konularda uzmanlaşmış terapistlerimiz, ailenizin daha sağlıklı iletişim kurmasına ve zorlukları birlikte aşmasına yardımcı olur. Terapide, her aile üyesinin sesinin duyulduğu ve değer gördüğü bir ortam yaratarak, ailenin bir bütün olarak güçlenmesini hedefleriz.",
    benefits: [
      "Aile içi iletişimi güçlendirme",
      "Çatışmaları yapıcı bir şekilde çözme",
      "Aile bağlarını kuvvetlendirme",
      "Ebeveynlik becerilerini geliştirme",
      "Zorlu yaşam geçişlerinde destek sağlama",
    ],
  },
  {
    id: "cocuk-terapisi",
    title: "Çocuk Terapisi",
    icon: ChildIcon,
    image: "/images/home/services/cocuk-terapisi.webp",
    shortDescription:
      "Çocukların ve ergenlerin duygusal ve davranışsal sorunlarına yönelik özel terapi.",
    longDescription:
      "Çocuk terapisi, çocukların duygusal, davranışsal ve gelişimsel zorluklarını ele almak amacıyla özel olarak yapılandırılmış bir terapi sürecidir. Uzman çocuk psikologlarımız, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), kaygı, davranış sorunları, okul uyum problemleri, travma ve aile içi değişiklikler gibi konularda destek sağlar. Çocuğun yaşına ve gelişim düzeyine uygun oyun terapisi, sanat terapisi ve bilişsel davranışçı terapi gibi çeşitli yöntemler kullanarak, çocuğun duygusal iyilik halini ve sağlıklı gelişimini desteklemeyi hedefleriz.",
    benefits: [
      "Duyguları tanıma ve ifade etme becerilerini geliştirme",
      "Davranış sorunlarını anlama ve düzenleme",
      "Aile içi iletişimi güçlendirme",
      "Ebeveynlik becerilerini geliştirme",
      "Zorlu yaşam geçişlerinde (taşınma, boşanma, yeni kardeş vb.) destek sağlama",
      "Oyun ve sanat yoluyla duygusal gelişimi destekleme",
    ],
  },
  {
    id: "ergen-terapisi",
    title: "Ergen Terapisi",
    icon: AdolescentIcon,
    image: "/images/home/services/ergen-terapisi.webp",
    shortDescription:
      "Çocukların ve ergenlerin duygusal ve davranışsal sorunlarına yönelik özel terapi.",
    longDescription:
      "Ergen terapisi, gençlerin ergenlik dönemine özgü duygusal ve davranışsal zorluklarla başa çıkmasına yardımcı olmak için tasarlanmıştır. Ergen psikologlarımız, depresyon, kaygı bozuklukları, öfke yönetimi, kimlik gelişimi, okul sorunları, akran ilişkileri, sınav kaygısı ve aile içi çatışmalar gibi alanlarda gençlere profesyonel destek sunar. Terapide, ergenin kendini ifade edebileceği güvenli bir alan oluşturarak, özgüvenini güçlendirmeyi, sosyal becerilerini geliştirmeyi ve sağlıklı bir bireysel gelişim süreci geçirmesini amaçlarız.",
    benefits: [
      "Kimlik gelişimini destekleme",
      "Aile içi ve sosyal çatışmaları yapıcı şekilde çözme",
      "Akran ilişkilerini sağlıklı kurma ve sürdürme",
      "Sınav ve gelecek kaygısıyla başa çıkma",
      "Duygusal dalgalanmaları ve öfke yönetimini ele alma",
      "Aile bağlarını kuvvetlendirme",
    ],
  },
  {
    id: "travma-terapisi",
    title: "Travma Terapisi",
    icon: HeartCrackIcon,
    image: "/images/home/services/travma-terapisi.webp",
    shortDescription:
      "Travmatik deneyimlerin üstesinden gelmek için özel terapi teknikleri.",
    longDescription:
      "Travma terapisi, travmatik olayların etkilerini ele almak ve iyileşme sürecini desteklemek için özel olarak tasarlanmıştır. EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme), Travma Odaklı Bilişsel Davranışçı Terapi (TF-BDT) ve diğer kanıta dayalı yaklaşımlar konusunda uzmanlaşmış terapistlerimiz, travma sonrası stres bozukluğu (TSSB), kompleks travma, çocukluk çağı travması ve diğer travmatik deneyimlerin üstesinden gelmenize yardımcı olur. Güvenli ve destekleyici bir ortamda, travmatik anıların etkisini azaltmak, tetikleyicilerle başa çıkmak ve yaşam kalitenizi artırmak için sizinle birlikte çalışırız.",
    benefits: [
      "Travmatik anıların etkisini azaltma",
      "Tetikleyicilerle başa çıkma stratejileri",
      "Duygusal düzenleme becerilerini geliştirme",
      "Güvenlik ve kontrol hissini yeniden kazanma",
      "Travma sonrası büyüme ve dayanıklılık",
    ],
  },
  {
    id: "test-degerlendirme",
    title: "Psikolojik Testler",
    icon: MedicalTestIcon,
    image: "/images/home/services/test-degerlendirme.webp",
    shortDescription:
      "Kişilik, zeka ve yetenek değerlendirmeleri için kapsamlı psikolojik testler.",
    longDescription:
      "Psikolojik testler, bireylerin bilişsel yeteneklerini, kişilik özelliklerini, duygusal durumlarını ve davranışsal eğilimlerini değerlendirmek için kullanılan bilimsel araçlardır. Uzman psikologlarımız, zeka testleri, kişilik envanterleri, nöropsikolojik değerlendirmeler, dikkat ve öğrenme bozuklukları değerlendirmeleri gibi çeşitli testler uygulayarak, bireylerin güçlü yönlerini ve gelişim alanlarını belirler. Test sonuçları, doğru tanı konulmasına, etkili tedavi planları oluşturulmasına ve kişisel veya mesleki gelişim için öneriler sunulmasına yardımcı olur.",
    benefits: [
      "Doğru tanı ve tedavi planlaması",
      "Güçlü yönleri ve gelişim alanlarını belirleme",
      "Eğitim ve kariyer planlamasına destek",
      "Kişisel farkındalığı artırma",
      "Gelişim sürecini izleme ve değerlendirme",
    ],
  },
];

export default function HomeServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section
      id="hizmetlerimiz"
      className="container flex min-h-screen flex-col items-center justify-center max-md:py-10"
    >
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="mx-auto mb-4 w-fit border-b">Hizmetlerimiz</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Zenova Psikoloji olarak, bireylerin ve ailelerin ruh sağlığı
            ihtiyaçlarına yönelik kapsamlı ve profesyonel hizmetler sunuyoruz.
          </p>
        </div>

        <Tabs
          defaultValue={services[0].id}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-md:hidden"
        >
          <div className="mb-12 flex justify-center">
            <TabsList className="flex items-start gap-3">
              {services.map(({ id, icon: Icon, title }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="flex h-auto cursor-pointer flex-col items-center gap-2 p-2 px-4"
                >
                  <span className="text-accent-foreground">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-xs font-medium">{title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map(({ id, benefits, image, longDescription, title }) => (
            <TabsContent
              key={id}
              value={id}
              className="mt-0 focus-visible:ring-0 focus-visible:outline-none"
            >
              <div className="grid h-[500px] gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-6">
                    {longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold">Faydaları:</h4>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <ChevronRightIcon className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={ROUTES.INTERNAL.APPOINTMENT}
                    className={buttonVariants({ size: "lg" })}
                    role="button"
                  >
                    Randevu Al
                  </Link>
                </div>

                <div className="relative order-1 my-auto h-[300px] overflow-hidden rounded-lg md:order-2 md:h-[400px]">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* Mobile Service Cards (visible on small screens) */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
        {services.map(({ id, icon: Icon, shortDescription, title }) => (
          <Link
            key={id}
            href={ROUTES.INTERNAL.SERVICES.SERVICE(id)}
            role="presentation"
            className={cn(
              "bg-card cursor-pointer rounded-lg border p-6 transition-all duration-300",
              activeTab === id
                ? "border-primary shadow-md"
                : "border-border hover:border-primary/50",
            )}
            onClick={() => setActiveTab(id)}
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="text-primary">
                <Icon className="size-4" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{shortDescription}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
