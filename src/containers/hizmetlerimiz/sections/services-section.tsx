import { ChevronRightIcon } from "@/components/icons";
import TitleSection from "@/components/shared/title-section";
import { Card, CardContent } from "@/components/ui";
import { SERVICES_ITEMS } from "@/config/constants/services-dummy-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesSection() {
  return (
    <section id="hizmetlerimiz" className="py-16 md:py-24">
      <div className="container">
        <TitleSection
          title="Sunduğumuz Hizmetler"
          description="Zenova Psikoloji'de, çeşitli psikolojik ihtiyaçlara yönelik geniş bir yelpazede hizmet sunuyoruz. Aşağıda sunduğumuz hizmetleri detaylı olarak inceleyebilirsiniz."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_ITEMS.map(
            ({ id, icon: Icon, image, shortDescription, title }) => (
              <Card key={id} className="gap-0 overflow-hidden border py-0">
                <div className="relative aspect-square h-[300px] w-full overflow-hidden">
                  <Image
                    src={image || "/images/home/hero/profesyonel-destek.jpg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-primary">
                      <Icon className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {shortDescription}
                  </p>
                  <Link
                    href={`#${id}`}
                    className="text-primary inline-flex items-center hover:underline"
                  >
                    Detaylı Bilgi <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
