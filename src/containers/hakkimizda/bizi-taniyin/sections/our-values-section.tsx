import { Card, CardContent } from "@/components/ui";
import TitleSection from "@/components/shared/title-section";
import {
  AwardIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import LightbulbIcon from "@/components/icons/lightbulb-icon";

export default function OurValuesSection() {
  return (
    <section id="degerlerimiz" className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Değerlerimiz"
          description=" Zenova Psikoloji olarak, her danışanımıza sunduğumuz hizmette bizi yönlendiren temel değerlerimiz var. Bu değerler, çalışmalarımızın ve yaklaşımımızın temelini oluşturur."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <HeartIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Empati</h3>
              <p className="text-muted-foreground">
                Her danışanımızın deneyimini anlamak ve onların perspektifinden
                bakabilmek için içten bir çaba gösteriyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <AwardIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Profesyonellik</h3>
              <p className="text-muted-foreground">
                En yüksek etik standartlara bağlı kalarak, profesyonel ve
                kaliteli hizmet sunmayı taahhüt ediyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <ShieldIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Güven</h3>
              <p className="text-muted-foreground">
                Danışanlarımızla güvene dayalı bir ilişki kurmak ve bu güveni
                korumak en önemli önceliğimizdir.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <LightbulbIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Yenilikçilik</h3>
              <p className="text-muted-foreground">
                Psikoloji alanındaki en son araştırmaları ve tedavi yöntemlerini
                takip ederek hizmetlerimizi sürekli geliştiriyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <UsersIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Kapsayıcılık</h3>
              <p className="text-muted-foreground">
                Farklı geçmişlere, kültürlere ve deneyimlere sahip tüm bireylere
                saygılı ve kapsayıcı bir ortam sunuyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <CheckCircleIcon className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Sonuç Odaklılık</h3>
              <p className="text-muted-foreground">
                Danışanlarımızın hedeflerine ulaşmalarına yardımcı olmak için
                kanıta dayalı ve sonuç odaklı yaklaşımlar kullanıyoruz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
