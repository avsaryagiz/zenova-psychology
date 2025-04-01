import TitleSection from "@/components/shared/title-section";

const faqs = [
  {
    question: "Terapi seansları ne kadar sürer?",
    answer:
      "Terapi seanslarımız genellikle 45-50 dakika sürmektedir. İlk görüşme ise 60 dakika olabilir.",
  },
  {
    question: "Terapi ne kadar süreyle devam eder?",
    answer:
      "Terapi süresi kişinin ihtiyaçlarına ve sorunun karmaşıklığına bağlı olarak değişir. Bazı danışanlar birkaç seans sonra iyileşme gösterirken, bazıları için daha uzun süreli terapi gerekebilir.",
  },
  {
    question: "Online terapi hizmeti veriyor musunuz?",
    answer:
      "Evet, yüz yüze terapinin yanı sıra online terapi hizmeti de sunmaktayız. Bu, özellikle uzakta yaşayan veya ofisimize gelemeyen danışanlarımız için ideal bir seçenektir.",
  },
  {
    question: "Terapi ücretleriniz nedir?",
    answer:
      "Terapi ücretlerimiz, hizmet türüne ve uzmanın deneyimine göre değişiklik gösterebilir. Detaylı bilgi için lütfen bizimle iletişime geçin.",
  },
];

export default function HomeFAQSection() {
  return (
    <section id="s-s-s" className="py-16 shadow-inner md:py-24">
      <div className="container">
        <TitleSection
          title="Sıkça Sorulan Sorular"
          description=" Psikolojik danışmanlık hizmetlerimiz hakkında merak edilenler."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
