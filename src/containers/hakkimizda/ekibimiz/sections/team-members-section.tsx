import Image from "next/image";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { AppointmentButton } from "@/components/shared";
import {
  Badge,
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";

interface ITeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  category: string;
  specialties: string[];
  education: string[];
  experience: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
  };
}

const teamMembers = [
  {
    id: 1,
    name: "Dr. Elif Yılmaz",
    title: "Klinik Psikolog",
    image: "/images/home/team/team-women-1.jpg",
    category: "klinik",
    specialties: ["Depresyon", "Kaygı Bozuklukları", "Travma Sonrası Stres"],
    education: [
      "Doktora - Klinik Psikoloji, İstanbul Üniversitesi",
      "Yüksek Lisans - Psikoloji, Boğaziçi Üniversitesi",
      "Lisans - Psikoloji, ODTÜ",
    ],
    experience: "12 yıl",
    bio: "Dr. Elif Yılmaz, Zenova Psikoloji'nin kurucusu ve klinik direktörüdür. 12 yıllık klinik deneyimi ile özellikle depresyon, kaygı bozuklukları ve travma sonrası stres bozukluğu alanlarında uzmanlaşmıştır. Bilişsel Davranışçı Terapi, Şema Terapi ve EMDR konularında ileri düzey eğitimlere sahiptir. Danışanlarıyla empatik ve destekleyici bir ilişki kurarak, onların zorlukların üstesinden gelmelerine ve daha tatmin edici bir yaşam sürmelerine yardımcı olmayı amaçlar.",
    contact: {
      email: "elif.yilmaz@zenovapsikoloji.com",
      phone: "+90 212 123 4567",
    },
  },
  {
    id: 2,
    name: "Ahmet Kaya",
    title: "Aile ve Çift Terapisti",
    image: "/images/home/team/team-men-2.jpg",
    category: "aile",
    specialties: ["Çift Terapisi", "Evlilik Danışmanlığı", "Aile İçi İletişim"],
    education: [
      "Yüksek Lisans - Aile Danışmanlığı, Marmara Üniversitesi",
      "Lisans - Psikoloji, Hacettepe Üniversitesi",
    ],
    experience: "8 yıl",
    bio: "Ahmet Kaya, çift ve aile terapisi alanında 8 yıllık deneyime sahip uzman bir terapisttir. Gottman Metodu ve Duygu Odaklı Terapi konularında ileri düzey eğitimler almıştır. Çiftlerin ve ailelerin ilişkilerini güçlendirmelerine, iletişim sorunlarını çözmelerine ve daha sağlıklı bağlar kurmalarına yardımcı olmak konusunda tutkuludur. Empatik ve yargısız yaklaşımıyla, danışanlarının kendilerini güvende ve anlaşılmış hissetmelerini sağlar.",
    contact: {
      email: "ahmet.kaya@zenovapsikoloji.com",
      phone: "+90 212 123 4568",
    },
  },
  {
    id: 3,
    name: "Selin Demir",
    title: "Çocuk ve Ergen Psikoloğu",
    image: "/images/home/team/team-women-2.jpg",
    category: "cocuk",
    specialties: [
      "Gelişimsel Bozukluklar",
      "Davranış Sorunları",
      "Okul Problemleri",
    ],
    education: [
      "Yüksek Lisans - Çocuk ve Ergen Psikolojisi, Ankara Üniversitesi",
      "Lisans - Psikoloji, İstanbul Üniversitesi",
    ],
    experience: "10 yıl",
    bio: "Selin Demir, çocuk ve ergen psikolojisi alanında 10 yıllık deneyime sahip uzman bir psikologtur. Oyun terapisi, sanat terapisi ve bilişsel davranışçı terapi tekniklerini kullanarak, çocukların ve ergenlerin duygusal ve davranışsal zorluklarını aşmalarına yardımcı olur. Çocukların kendilerini güvende ve rahat hissedecekleri sıcak bir ortam yaratarak, onların duygusal ifade becerilerini geliştirmelerine ve özgüvenlerini artırmalarına destek olur.",
    contact: {
      email: "selin.demir@zenovapsikoloji.com",
      phone: "+90 212 123 4569",
    },
  },
  {
    id: 4,
    name: "Burak Öztürk",
    title: "Psikoterapist",
    image: "/images/home/team/team-men-1.jpg",
    category: "klinik",
    specialties: ["Travma Terapisi", "EMDR", "Stres Yönetimi"],
    education: [
      "Yüksek Lisans - Klinik Psikoloji, Ege Üniversitesi",
      "Lisans - Psikoloji, Dokuz Eylül Üniversitesi",
    ],
    experience: "7 yıl",
    bio: "Burak Öztürk, travma terapisi ve EMDR konusunda uzmanlaşmış 7 yıllık deneyime sahip bir psikoterapisttir. Travma sonrası stres bozukluğu, fobiler ve kaygı bozuklukları gibi alanlarda çalışmaktadır. Danışanlarına güvenli bir ortam sağlayarak, travmatik deneyimlerin üstesinden gelmelerine ve hayatlarında yeniden kontrol hissi kazanmalarına yardımcı olur. Empatik ve destekleyici yaklaşımıyla, danışanlarının iyileşme sürecinde yanlarında olur.",
    contact: {
      email: "burak.ozturk@zenovapsikoloji.com",
      phone: "+90 212 123 4570",
    },
  },
  {
    id: 5,
    name: "Zeynep Aydın",
    title: "Klinik Psikolog",
    image: "/images/home/team/team-women-1.jpg",
    category: "klinik",
    specialties: ["Depresyon", "Kişilik Bozuklukları", "Bağımlılık"],
    education: [
      "Doktora - Klinik Psikoloji, Hacettepe Üniversitesi",
      "Yüksek Lisans - Psikoloji, ODTÜ",
      "Lisans - Psikoloji, Bilkent Üniversitesi",
    ],
    experience: "9 yıl",
    bio: "Zeynep Aydın, 9 yıllık klinik deneyime sahip uzman bir psikologtur. Depresyon, kişilik bozuklukları ve bağımlılık alanlarında uzmanlaşmıştır. Şema Terapi, Bilişsel Davranışçı Terapi ve Diyalektik Davranış Terapisi konularında ileri düzey eğitimlere sahiptir. Danışanlarıyla işbirlikçi bir ilişki kurarak, onların içgörü kazanmalarına ve yaşam kalitelerini artırmalarına yardımcı olur.",
    contact: {
      email: "zeynep.aydin@zenovapsikoloji.com",
      phone: "+90 212 123 4571",
    },
  },
  {
    id: 6,
    name: "Mehmet Yıldız",
    title: "Aile Terapisti",
    image: "/images/home/team/team-men-2.jpg",
    category: "aile",
    specialties: [
      "Aile İçi Çatışmalar",
      "Ebeveynlik Becerileri",
      "Boşanma Süreci",
    ],
    education: [
      "Yüksek Lisans - Aile Danışmanlığı, İstanbul Üniversitesi",
      "Lisans - Psikoloji, Boğaziçi Üniversitesi",
    ],
    experience: "6 yıl",
    bio: "Mehmet Yıldız, aile terapisi alanında 6 yıllık deneyime sahip uzman bir terapisttir. Aile içi çatışmalar, ebeveynlik becerileri ve boşanma süreci gibi konularda ailelere destek olmaktadır. Sistemik Aile Terapisi ve Çözüm Odaklı Terapi konularında eğitimler almıştır. Ailelerin güçlü yönlerini keşfetmelerine ve zorlukları birlikte aşmalarına yardımcı olmak için çalışır.",
    contact: {
      email: "mehmet.yildiz@zenovapsikoloji.com",
      phone: "+90 212 123 4572",
    },
  },
  {
    id: 7,
    name: "Ayşe Kara",
    title: "Çocuk Gelişim Uzmanı",
    image: "/images/home/team/team-women-2.jpg",
    category: "cocuk",
    specialties: [
      "Erken Çocukluk Gelişimi",
      "Öğrenme Güçlükleri",
      "Dikkat Eksikliği",
    ],
    education: [
      "Yüksek Lisans - Çocuk Gelişimi, Gazi Üniversitesi",
      "Lisans - Çocuk Gelişimi, Hacettepe Üniversitesi",
    ],
    experience: "8 yıl",
    bio: "Ayşe Kara, çocuk gelişimi alanında 8 yıllık deneyime sahip uzman bir terapisttir. Erken çocukluk gelişimi, öğrenme güçlükleri ve dikkat eksikliği konularında uzmanlığa sahiptir. Çocukların gelişimsel ihtiyaçlarını değerlendirerek, onların potansiyellerini en üst düzeye çıkarmalarına yardımcı olacak stratejiler geliştirir. Ayrıca ebeveynlere, çocuklarının gelişimini desteklemek için pratik öneriler sunar.",
    contact: {
      email: "ayse.kara@zenovapsikoloji.com",
      phone: "+90 212 123 4573",
    },
  },
  {
    id: 8,
    name: "Can Yılmaz",
    title: "Psikoterapist",
    image: "/images/home/team/team-men-2.jpg",
    category: "klinik",
    specialties: [
      "Kaygı Bozuklukları",
      "Obsesif Kompulsif Bozukluk",
      "Panik Atak",
    ],
    education: [
      "Yüksek Lisans - Klinik Psikoloji, Koç Üniversitesi",
      "Lisans - Psikoloji, Sabancı Üniversitesi",
    ],
    experience: "5 yıl",
    bio: "Can Yılmaz, kaygı bozuklukları ve obsesif kompulsif bozukluk alanında uzmanlaşmış 5 yıllık deneyime sahip bir psikoterapisttir. Bilişsel Davranışçı Terapi ve Kabul ve Kararlılık Terapisi (ACT) konularında eğitimler almıştır. Danışanlarının kaygılarını anlamalarına ve etkili başa çıkma stratejileri geliştirmelerine yardımcı olarak, onların daha sakin ve tatmin edici bir yaşam sürmelerini destekler.",
    contact: {
      email: "can.yilmaz@zenovapsikoloji.com",
      phone: "+90 212 123 4574",
    },
  },
];

export default function TeamMembersSection() {
  return (
    <section className="container py-16 md:py-24">
      <Tabs defaultValue="tum" className="w-full">
        <TabsList className="mx-auto mb-8 flex h-fit flex-wrap justify-center">
          <TabsTrigger value="tum">Tüm Ekip</TabsTrigger>
          <TabsTrigger value="klinik">Klinik Psikologlar</TabsTrigger>
          <TabsTrigger value="aile">Aile Terapistleri</TabsTrigger>
          <TabsTrigger value="cocuk">Çocuk Psikologları</TabsTrigger>
        </TabsList>

        <TabsContent value="tum" className="mt-0">
          <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="klinik" className="mt-0">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .filter((member) => member.category === "klinik")
              .map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="aile" className="mt-0">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .filter((member) => member.category === "aile")
              .map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cocuk" className="mt-0">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .filter((member) => member.category === "cocuk")
              .map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function TeamMemberCard({ member }: { member: ITeamMember }) {
  return (
    <Card className="bg-card flex flex-col gap-0 overflow-hidden border py-0">
      <div className="relative aspect-square h-80 w-auto overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-grow flex-col p-4">
        <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
        <p className="text-primary mb-4">{member.title}</p>

        <div className="mb-4">
          <p className="mb-2 text-sm font-medium">Uzmanlık Alanları:</p>
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((specialty, index) => (
              <Badge key={index}>{specialty}</Badge>
            ))}
          </div>
        </div>

        {/* Bio kısmını esnek yapıyoruz */}
        <p className="text-muted-foreground mb-3 flex-grow overflow-hidden text-justify text-sm">
          {member.bio}
        </p>

        <div className="mt-auto space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MailIcon className="text-primary h-4 w-4" />
            <span className="text-muted-foreground">
              {member.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <PhoneIcon className="text-primary h-4 w-4" />
            <span className="text-muted-foreground">
              {member.contact.phone}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <AppointmentButton
            className="w-full"
            href={`${ROUTES.INTERNAL.APPOINTMENT}?therapist=${member.id}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
