import type { IFAQItem } from "@/types/shared-types";

export const CONTACT_FAQ_ITEMS: IFAQItem[] = [
  {
    question: "Randevu almak için ne yapmalıyım?",
    answer:
      "Randevu almak için web sitemizdeki randevu formunu doldurabilir, telefon numaramızı arayabilir veya e-posta gönderebilirsiniz. Size en kısa sürede dönüş yaparak uygun bir randevu saati belirleyeceğiz.",
  },
  {
    question: "İlk görüşme ücretsiz mi?",
    answer:
      "Evet, Zenova Psikoloji'de ilk tanışma görüşmesi ücretsizdir. Bu görüşmede sizi tanımak, sorunlarınızı anlamak ve size en uygun terapi planını oluşturmak için zaman ayırıyoruz.",
  },
  {
    question: "Terapi seansları ne kadar sürüyor?",
    answer:
      "Terapi seanslarımız genellikle 45-50 dakika sürmektedir. Ancak ilk görüşme veya bazı özel terapi türleri için bu süre 60-90 dakika olabilir.",
  },
  {
    question: "Seans ücretleri ne kadar?",
    answer:
      "Seans ücretlerimiz, terapi türüne ve uzmanın deneyimine göre değişiklik gösterebilir. Güncel fiyat bilgisi için lütfen bizimle iletişime geçiniz.",
  },
  {
    question: "Online terapi hizmeti veriyor musunuz?",
    answer:
      "Evet, yüz yüze terapinin yanı sıra online terapi hizmeti de sunmaktayız. Bu, özellikle uzakta yaşayan veya ofisimize gelemeyen danışanlarımız için ideal bir seçenektir.",
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Nakit, kredi kartı ve banka havalesi ile ödeme kabul ediyoruz. Ayrıca bazı özel sağlık sigortaları ile anlaşmamız bulunmaktadır.",
  },
] as const;

export const OFFICE_FAQ_ITEMS: IFAQItem[] = [
  {
    question: "Ofise nasıl ulaşabilirim?",
    answer:
      "Ofisimiz İstanbul Kadıköy'de, metro istasyonuna 5 dakika yürüme mesafesindedir. Ayrıca otobüs ve metrobüs duraklarına da yakındır. Özel aracınızla geliyorsanız, binamızın altında ücretli otopark bulunmaktadır.",
  },
  {
    question: "Randevu almadan ofisi ziyaret edebilir miyim?",
    answer:
      "Ofisimizi ziyaret etmek için önceden randevu almanızı öneririz. Bu şekilde size daha iyi hizmet verebilir ve bekleme sürelerini en aza indirebiliriz. Ancak acil durumlar için her zaman elimizden geleni yapmaya çalışırız.",
  },
  {
    question: "Ofiste otopark var mı?",
    answer:
      "Evet, binamızın altında ücretli bir otopark bulunmaktadır. Ayrıca çevrede çeşitli ücretli otoparklar da mevcuttur.",
  },
  {
    question: "Ofis engelli erişimine uygun mu?",
    answer:
      "Evet, ofisimiz engelli erişimine tamamen uygundur. Asansör, geniş koridorlar ve engelli tuvaleti bulunmaktadır.",
  },
  {
    question: "Çocuğumu terapi seansına getirebilir miyim?",
    answer:
      "Evet, çocuk terapisi için özel olarak tasarlanmış odalarımız bulunmaktadır. Ebeveynler için bekleme alanımızda rahatça bekleyebilirsiniz.",
  },
] as const;

export const HOME_FAQ_ITEMS: IFAQItem[] = [
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
] as const;
