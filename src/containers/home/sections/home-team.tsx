import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import TitleSection from "@/components/shared/title-section";

// Sample data
const team = [
  {
    name: "Dr. Elif Yılmaz",
    title: "Klinik Psikolog",
    bio: "10 yıllık deneyime sahip, yetişkin terapisi konusunda uzman.",
    image: "/images/home/team/team-women-1.jpg",
  },
  {
    name: "Ahmet Kaya",
    title: "Aile Terapisti",
    bio: "Çift ve aile terapisi konusunda uzmanlaşmış, 8 yıllık deneyim.",
    image: "/images/home/team/team-men-1.jpg",
  },
  {
    name: "Selin Demir",
    title: "Çocuk Psikoloğu",
    bio: "Çocuk ve ergen psikolojisi alanında 12 yıllık deneyim.",
    image: "/images/home/team/team-women-2.jpg",
  },
  {
    name: "Burak Öztürk",
    title: "Psikoterapist",
    bio: "Travma ve EMDR terapisi konusunda uzmanlaşmış.",
    image: "/images/home/team/team-men-2.jpg",
  },
];

export default function HomeTeamSection() {
  return (
    <section id="uzman-kadro" className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Uzman Kadromuz"
          description="Alanında uzman ve deneyimli psikologlarımızla tanışın."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ bio, image, name, title }, index) => (
            <div key={index} className="text-center">
              <Avatar className="relative h-96 w-full overflow-hidden rounded-md">
                <AvatarImage
                  src={image}
                  draggable="false"
                  alt={`
                    Zenova Psikoloji Uzmanı: ${name}`}
                  className="object-cover select-none"
                />
                <AvatarFallback className="bg-transparent">
                  <Image
                    src="/images/logo/zenova-logo-mark.png"
                    alt={`
                      Zenova Psikoloji Uzmanı: ${name}`}
                    fill
                    className="object-cover"
                  />
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-primary">{title}</p>
              <p className="text-muted-foreground mt-2 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
