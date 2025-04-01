import {
  ChildIcon,
  HeartCrackIcon,
  HeartIcon,
  MedicalTestIcon,
  UsersIcon,
  LightbulbIcon,
  BookOpenIcon,
} from "@/components/icons";
import { IServiceItem } from "@/types/shared-types";

export const SERVICES_ITEMS: IServiceItem[] = [
  {
    id: "bireysel",
    title: "Bireysel Terapi",
    shortDescription:
      "Kişisel sorunlarınızı çözmek ve kendinizi daha iyi anlamak için bire bir terapi seansları.",
    longDescription:
      "Bireysel terapi, kişisel zorluklar, duygusal sıkıntılar veya davranış sorunları yaşayan bireylere özel olarak tasarlanmış bir terapi türüdür. Uzman psikologlarımız, depresyon, kaygı bozuklukları, travma sonrası stres bozukluğu, öfke kontrolü, özgüven sorunları ve kişisel gelişim gibi çeşitli konularda destek sağlar. Güvenli ve yargısız bir ortamda, düşüncelerinizi ve duygularınızı keşfetmenize, zorlukların üstesinden gelmenize ve daha sağlıklı başa çıkma mekanizmaları geliştirmenize yardımcı oluruz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Duygusal zorlukların üstesinden gelme",
      "Özgüven ve öz-farkındalık geliştirme",
      "Stres ve kaygıyı azaltma teknikleri",
      "Sağlıklı ilişkiler kurma becerileri",
      "Kişisel hedeflere ulaşma desteği",
    ],
    approaches: [
      "Bilişsel Davranışçı Terapi (BDT)",
      "Şema Terapi",
      "Psikodinamik Terapi",
      "Mindfulness Temelli Terapiler",
      "Kabul ve Kararlılık Terapisi (ACT)",
    ],
    duration: "45-50 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "cift",
    title: "Çift Terapisi",
    shortDescription:
      "İlişkinizi güçlendirmek ve iletişim sorunlarını çözmek için profesyonel destek.",
    longDescription:
      "Çift terapisi, ilişkilerinde zorluk yaşayan çiftlere yardımcı olmak için tasarlanmıştır. İletişim sorunları, güven eksikliği, çatışma çözümü, yakınlık sorunları veya yaşam değişiklikleri gibi konularda uzmanlaşmış terapistlerimiz, ilişkinizi güçlendirmenize ve daha sağlıklı bir bağ kurmanıza yardımcı olur. Terapide, her iki tarafın da duyulduğu ve anlaşıldığı güvenli bir ortam sağlayarak, çiftlerin birbirlerini daha iyi anlamalarını ve ilişkilerindeki zorlukları birlikte aşmalarını destekleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: HeartIcon,
    benefits: [
      "Etkili iletişim becerilerini geliştirme",
      "Çatışmaları sağlıklı bir şekilde çözme",
      "Duygusal bağı güçlendirme",
      "Güven ve saygıyı yeniden inşa etme",
      "Ortak hedefler belirleme ve ilişkiyi yenileme",
    ],
    approaches: [
      "Gottman Metodu",
      "Duygu Odaklı Terapi (EFT)",
      "İmago İlişki Terapisi",
      "Çözüm Odaklı Kısa Terapi",
      "Sistemik Terapi",
    ],
    duration: "60-75 dakika",
    frequency: "Haftada bir veya iki haftada bir",
  },
  {
    id: "aile",
    title: "Aile Terapisi",
    shortDescription:
      "Aile içi ilişkileri güçlendirmek ve çatışmaları çözmek için aile odaklı terapi.",
    longDescription:
      "Aile terapisi, aile üyeleri arasındaki ilişkileri iyileştirmek ve aile içi sorunları çözmek için tasarlanmış bir terapi yaklaşımıdır. Aile dinamikleri, ebeveyn-çocuk ilişkileri, kardeş çatışmaları, ergenlik sorunları, boşanma süreci veya yeni bir aile üyesinin katılımı gibi konularda uzmanlaşmış terapistlerimiz, ailenizin daha sağlıklı iletişim kurmasına ve zorlukları birlikte aşmasına yardımcı olur. Terapide, her aile üyesinin sesinin duyulduğu ve değer gördüğü bir ortam yaratarak, ailenin bir bütün olarak güçlenmesini hedefleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Aile içi iletişimi güçlendirme",
      "Çatışmaları yapıcı bir şekilde çözme",
      "Aile bağlarını kuvvetlendirme",
      "Ebeveynlik becerilerini geliştirme",
      "Zorlu yaşam geçişlerinde destek sağlama",
    ],
    approaches: [
      "Yapısal Aile Terapisi",
      "Stratejik Aile Terapisi",
      "Sistemik Aile Terapisi",
      "Çözüm Odaklı Aile Terapisi",
      "Anlatı Terapisi",
    ],
    duration: "60-75 dakika",
    frequency: "Haftada bir veya iki haftada bir",
  },
  {
    id: "cocuk",
    title: "Çocuk ve Ergen Terapisi",
    shortDescription:
      "Çocukların ve ergenlerin duygusal ve davranışsal sorunlarına yönelik özel terapi.",
    longDescription:
      "Çocuk ve ergen terapisi, çocukların ve gençlerin duygusal, davranışsal ve gelişimsel zorluklarını ele almak için özel olarak tasarlanmıştır. Uzman çocuk psikologlarımız, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), kaygı, depresyon, davranış sorunları, okul zorlukları, akran ilişkileri, travma ve aile değişiklikleri gibi çeşitli konularda destek sağlar. Çocuğunuzun yaşına ve ihtiyaçlarına uygun oyun terapisi, sanat terapisi ve bilişsel davranışçı terapi gibi çeşitli teknikler kullanarak, çocuğunuzun duygusal iyilik halini ve sağlıklı gelişimini destekleriz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: ChildIcon,
    benefits: [
      "Duygusal ifade becerilerini geliştirme",
      "Özgüven ve öz-saygıyı artırma",
      "Sosyal becerileri güçlendirme",
      "Davranış sorunlarını azaltma",
      "Akademik başarıyı destekleme",
    ],
    approaches: [
      "Oyun Terapisi",
      "Sanat Terapisi",
      "Bilişsel Davranışçı Terapi (BDT)",
      "Çözüm Odaklı Terapi",
      "Aile Sistemleri Yaklaşımı",
    ],
    duration: "45-50 dakika",
    frequency: "Haftada bir",
  },
  {
    id: "travma",
    title: "Travma Terapisi",
    shortDescription:
      "Travmatik deneyimlerin üstesinden gelmek için özel terapi teknikleri.",
    longDescription:
      "Travma terapisi, travmatik olayların etkilerini ele almak ve iyileşme sürecini desteklemek için özel olarak tasarlanmıştır. EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme), Travma Odaklı Bilişsel Davranışçı Terapi (TF-BDT) ve diğer kanıta dayalı yaklaşımlar konusunda uzmanlaşmış terapistlerimiz, travma sonrası stres bozukluğu (TSSB), kompleks travma, çocukluk çağı travması ve diğer travmatik deneyimlerin üstesinden gelmenize yardımcı olur. Güvenli ve destekleyici bir ortamda, travmatik anıların etkisini azaltmak, tetikleyicilerle başa çıkmak ve yaşam kalitenizi artırmak için sizinle birlikte çalışırız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: HeartCrackIcon,
    benefits: [
      "Travmatik anıların etkisini azaltma",
      "Tetikleyicilerle başa çıkma stratejileri",
      "Duygusal düzenleme becerilerini geliştirme",
      "Güvenlik ve kontrol hissini yeniden kazanma",
      "Travma sonrası büyüme ve dayanıklılık",
    ],
    approaches: [
      "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme)",
      "Travma Odaklı Bilişsel Davranışçı Terapi (TF-BDT)",
      "Somatik Deneyimleme",
      "Anlatı Maruz Bırakma Terapisi",
      "Duygu Düzenleme Becerileri Eğitimi",
    ],
    duration: "60-90 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "grup",
    title: "Grup Terapisi",
    shortDescription:
      "Benzer sorunları yaşayan kişilerle birlikte iyileşme ve gelişme fırsatı.",
    longDescription:
      "Grup terapisi, benzer zorlukları yaşayan bireylerin bir araya gelerek, profesyonel bir terapist eşliğinde deneyimlerini paylaştıkları ve birbirlerinden öğrendikleri bir terapi türüdür. Kaygı, depresyon, ilişki sorunları, bağımlılık, yas süreci ve kişisel gelişim gibi çeşitli konularda grup terapileri düzenliyoruz. Grup ortamı, yalnız olmadığınızı görmenize, farklı bakış açıları kazanmanıza ve sosyal becerilerinizi geliştirmenize olanak tanır. Grup üyeleri arasındaki destek ve geri bildirimler, iyileşme sürecinizi hızlandırabilir ve kişisel gelişiminize katkıda bulunabilir.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: UsersIcon,
    benefits: [
      "Yalnız olmadığınızı hissetme",
      "Farklı bakış açıları ve çözümler keşfetme",
      "Sosyal becerileri geliştirme",
      "Grup desteği ve dayanışma",
      "Maliyet etkin bir terapi seçeneği",
    ],
    approaches: [
      "Bilişsel Davranışçı Grup Terapisi",
      "Kişilerarası Grup Terapisi",
      "Destekleyici-İfade Edici Grup Terapisi",
      "Psikoeğitim Grupları",
      "Beceri Geliştirme Grupları",
    ],
    duration: "90-120 dakika",
    frequency: "Haftada bir",
  },
  {
    id: "online",
    title: "Online Terapi",
    shortDescription:
      "Evinizin konforunda profesyonel psikolojik destek alma imkanı.",
    longDescription:
      "Online terapi, yüz yüze terapiye alternatif olarak, internet üzerinden video görüşmesi yoluyla sunulan profesyonel psikolojik destek hizmetidir. Uzak mesafede yaşayanlar, yoğun iş temposu nedeniyle ofise gelemeyenler, fiziksel engeli olanlar veya evden çıkmakta zorlananlar için ideal bir seçenektir. Online terapide, yüz yüze terapide kullanılan aynı terapi teknikleri ve yaklaşımlar uygulanır. Güvenli ve gizli bir platform üzerinden gerçekleştirilen seanslar, ofis ortamında alacağınız terapiyle aynı etkinliğe sahiptir. Tek ihtiyacınız olan, internet bağlantısı ve kamera/mikrofon özelliği olan bir cihaz.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: LightbulbIcon,
    benefits: [
      "Zaman ve mekân esnekliği",
      "Seyahat süresi ve maliyetinden tasarruf",
      "Kendi konfor alanınızda terapi alma",
      "Daha geniş terapist seçeneğine erişim",
      "Fiziksel engeller olmadan terapi alma imkanı",
    ],
    approaches: [
      "Bireysel Online Terapi",
      "Çift ve Aile Online Terapisi",
      "Grup Online Terapisi",
      "Kriz Müdahalesi",
      "Takip Seansları",
    ],
    duration: "45-60 dakika",
    frequency: "Haftada bir veya danışanın ihtiyacına göre",
  },
  {
    id: "test",
    title: "Psikolojik Testler",
    shortDescription:
      "Kişilik, zeka ve yetenek değerlendirmeleri için kapsamlı psikolojik testler.",
    longDescription:
      "Psikolojik testler, bireylerin bilişsel yeteneklerini, kişilik özelliklerini, duygusal durumlarını ve davranışsal eğilimlerini değerlendirmek için kullanılan bilimsel araçlardır. Uzman psikologlarımız, zeka testleri, kişilik envanterleri, nöropsikolojik değerlendirmeler, dikkat ve öğrenme bozuklukları değerlendirmeleri gibi çeşitli testler uygulayarak, bireylerin güçlü yönlerini ve gelişim alanlarını belirler. Test sonuçları, doğru tanı konulmasına, etkili tedavi planları oluşturulmasına ve kişisel veya mesleki gelişim için öneriler sunulmasına yardımcı olur.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: MedicalTestIcon,
    benefits: [
      "Doğru tanı ve tedavi planlaması",
      "Güçlü yönleri ve gelişim alanlarını belirleme",
      "Eğitim ve kariyer planlamasına destek",
      "Kişisel farkındalığı artırma",
      "Gelişim sürecini izleme ve değerlendirme",
    ],
    approaches: [
      "Zeka ve Bilişsel Yetenek Testleri",
      "Kişilik Envanterleri",
      "Nöropsikolojik Değerlendirmeler",
      "Dikkat ve Öğrenme Bozuklukları Değerlendirmeleri",
      "Mesleki Yönelim ve Kariyer Testleri",
    ],
    duration: "60-120 dakika",
    frequency: "İhtiyaca göre",
  },
  {
    id: "workshop",
    title: "Atölyeler ve Eğitimler",
    shortDescription:
      "Kişisel gelişim ve ruh sağlığı konularında grup atölyeleri ve eğitimler.",
    longDescription:
      "Zenova Psikoloji olarak, kişisel gelişim ve ruh sağlığı konularında düzenli olarak atölyeler ve eğitimler düzenliyoruz. Stres yönetimi, mindfulness, etkili iletişim, ebeveynlik becerileri, duygusal zeka geliştirme gibi çeşitli konularda uzman psikologlarımız tarafından hazırlanan bu programlar, teorik bilgilerin yanı sıra pratik uygulamalar da içerir. Küçük gruplar halinde düzenlenen atölyelerimiz, hem öğrenme hem de sosyalleşme fırsatı sunar. Ayrıca, kurumlar için özel olarak tasarlanmış eğitim programları da sunmaktayız.",
    image: "/images/home/hero/profesyonel-destek.jpg",
    icon: BookOpenIcon,
    benefits: [
      "Yeni beceriler ve stratejiler öğrenme",
      "Benzer ilgi alanlarına sahip kişilerle tanışma",
      "Teorik bilgileri pratik uygulamalarla pekiştirme",
      "Grup dinamiğinden faydalanma",
      "Maliyet etkin bir gelişim fırsatı",
    ],
    approaches: [
      "Stres Yönetimi Atölyeleri",
      "Mindfulness ve Meditasyon Eğitimleri",
      "Etkili İletişim Becerileri Atölyeleri",
      "Ebeveynlik Becerileri Eğitimleri",
      "Duygusal Zeka Geliştirme Programları",
    ],
    duration: "2-6 saat veya birkaç hafta süren programlar",
    frequency: "Düzenli olarak açılan programlar",
  },
] as const;
