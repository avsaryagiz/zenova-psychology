import Image from "next/image";
import TitleSection from "@/components/shared/title-section";
import { PROCESS_STEPS } from "@/config/constants/proccess-dumy-data";

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 sm:px-6">
        <TitleSection
          title="Terapi Süreci"
          description="Zenova Psikoloji'de terapi süreciniz nasıl ilerler? Adım adım terapi yolculuğunuzu keşfedin."
        />

        <div className="mx-auto mt-10 max-w-4xl md:mt-12">
          <div className="relative">
            {/* Vertical line - hidden on small mobile, visible on larger screens */}
            <div className="bg-primary/20 absolute top-0 left-6 h-full w-0.5 sm:left-8 md:left-1/2 md:-ml-0.5"></div>

            {/* Steps */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {PROCESS_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.title + (index + 1)}
                    className="relative md:flex md:items-center"
                  >
                    {/* Text content */}
                    <div
                      className={`mb-4 pl-16 sm:pl-20 md:mb-0 md:w-1/2 md:pl-0 ${
                        isEven
                          ? "md:justify-end md:pr-8"
                          : "md:order-2 md:justify-start md:pl-8"
                      }`}
                    >
                      <div className={`${isEven ? "md:text-right" : ""}`}>
                        <h3 className="text-lg font-semibold sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Number indicator */}
                    <div className="bg-primary text-primary-foreground absolute top-0 left-2 z-10 flex size-8 items-center justify-center rounded-full sm:left-4 md:left-1/2 md:-ml-4">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>

                    {/* Image */}
                    <div
                      className={`pl-16 sm:pl-20 md:w-1/2 md:pl-0 ${isEven ? "md:pl-8" : "md:order-1 md:pr-8"}`}
                    >
                      <div
                        className={`h-[120px] overflow-hidden rounded-lg sm:h-[150px] ${!isEven ? "md:ml-auto" : ""}`}
                      >
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={500}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
