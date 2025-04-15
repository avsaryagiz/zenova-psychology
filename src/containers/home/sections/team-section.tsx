import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import TitleSection from "@/components/shared/title-section";
import { ChevronRightIcon } from "@/components/icons";
import { DEFAULT_VARIABLES } from "@/config/constants";
import { ROUTES } from "@/config/routes";
import type { Expert } from "@/types/strapi-types";

interface TeamSectionProps {
  teamMembers: Expert[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section id="uzman-kadro" className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Uzman Kadromuz"
          description="Alanında uzman ve deneyimli psikologlarımızla tanışın."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map(
            ({ bio, image, name, expertTitle, specialities }, index) =>
              specialities && specialities.length > 0 ? (
                <Card
                  key={index}
                  className="gap-4 overflow-hidden border-none p-0 pb-4 text-center shadow-none"
                >
                  <Avatar className="relative h-96 w-full overflow-hidden rounded-md">
                    <AvatarImage
                      src={image.url}
                      draggable="false"
                      alt={`
                        Zenova Psikoloji: ${name}`}
                      className="object-cover select-none"
                    />
                    <AvatarFallback className="bg-transparent">
                      <Image
                        src={DEFAULT_VARIABLES.EXPERT_IMAGE as string}
                        alt={`
                          Zenova Psikoloji: ${name}`}
                        fill
                        className="object-contain"
                      />
                    </AvatarFallback>
                  </Avatar>
                  <CardHeader>
                    <CardTitle>
                      <h3 className="text-xl font-semibold">{name}</h3>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-primary">{expertTitle}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {bio}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button afterIcon={ChevronRightIcon} className="w-full">
                      <Link href={ROUTES.INTERNAL.ABOUT.TEAM}>Daha Fazla</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
