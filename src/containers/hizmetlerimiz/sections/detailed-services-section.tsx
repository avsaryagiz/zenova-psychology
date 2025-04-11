import Image from "next/image";
import { BarChartIcon, ChevronRightIcon, ClockIcon } from "@/components/icons";
import { AppointmentButton } from "@/components/shared/appointment-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import TitleSection from "@/components/shared/title-section";
import { SERVICES_ITEMS } from "@/config/constants/services-dummy-data";

export default function DetailedServicesSection() {
  return (
    <section className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Hizmetlerimiz Hakkında Detaylı Bilgi"
          description="Her bir hizmetimiz hakkında detaylı bilgi edinmek için aşağıdaki sekmeleri kullanabilirsiniz."
        />

        <Tabs defaultValue={SERVICES_ITEMS[0].id} className="mt-12 w-full">
          <TabsList className="mb-8 flex h-fit w-full flex-wrap justify-center gap-2">
            {SERVICES_ITEMS.map(({ id, title }) => (
              <TabsTrigger key={id} value={id} id={id}>
                {title}
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES_ITEMS.map(
            ({
              approaches,
              benefits,
              duration,
              frequency,
              id,
              image,
              longDescription,
              title,
            }) => (
              <TabsContent key={id} value={id} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="mb-3 font-semibold">Faydaları:</h4>
                      <ul className="space-y-2">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ChevronRightIcon className="text-primary mt-0.5 size-5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3 font-semibold">
                        Kullanılan Yaklaşımlar:
                      </h4>
                      <ul className="space-y-2">
                        {approaches.map((approach, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ChevronRightIcon className="text-primary mt-0.5 size-5 flex-shrink-0" />
                            <span>{approach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="text-primary size-8" />
                        <div>
                          <p className="text-sm font-medium">Seans Süresi</p>
                          <p className="text-muted-foreground text-sm">
                            {duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChartIcon className="text-primary size-8" />
                        <div>
                          <p className="text-sm font-medium">Seans Sıklığı</p>
                          <p className="text-muted-foreground text-sm">
                            {frequency}
                          </p>
                        </div>
                      </div>
                    </div>

                    <AppointmentButton />
                  </div>

                  <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
                    <Image
                      src={image || "/images/home/hero/profesyonel-destek.jpg"}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>
    </section>
  );
}
