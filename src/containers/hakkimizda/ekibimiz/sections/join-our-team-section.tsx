import Image from "next/image";
import Link from "next/link";
import TitleSection from "@/components/shared/title-section";
import { buttonVariants } from "@/components/ui";

export default function JoinOurTeamSection() {
  return (
    <section className="bg-card py-16 shadow-inner md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/home/hero/profesyonel-destek.jpg"
              alt="Zenova Psikoloji Ekip Çalışması"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <TitleSection
              title="Ekibimize Katılın"
              titleClassName="items-start"
              description={
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Zenova Psikoloji olarak, sürekli büyüyen ve gelişen
                    ekibimize yeni uzmanlar katmaktan mutluluk duyuyoruz.
                    Alanında uzmanlaşmış, etik değerlere bağlı ve danışan odaklı
                    çalışmayı benimseyen psikologlar arıyoruz.
                  </p>
                  <p>
                    Ekibimize katılarak, destekleyici ve işbirlikçi bir ortamda
                    çalışma, mesleki gelişim fırsatları ve esnek çalışma
                    koşulları gibi avantajlardan yararlanabilirsiniz.
                  </p>
                  <p>
                    Eğer siz de Zenova Psikoloji ailesinin bir parçası olmak
                    istiyorsanız, özgeçmişinizi ve motivasyon mektubunuzu
                    aşağıdaki e-posta adresine gönderebilirsiniz.
                  </p>
                </div>
              }
            />

            <div className="mt-8">
              <Link
                href="mailto:kariyer@zenovapsikoloji.com"
                className={buttonVariants()}
                role="button"
              >
                Başvuru Yapın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
