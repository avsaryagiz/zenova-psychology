// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { ROUTES } from "@/config/routes";
// import {
//   Calendar,
//   Clock,
//   Facebook,
//   Instagram,
//   Linkedin,
//   MessageSquare,
//   Twitter,
//   User,
// } from "lucide-react";

// // Blog posts data (same as in blog/page.tsx)
// const blogPosts = [
//   {
//     id: 1,
//     slug: "depresyon-belirtileri-ve-tedavi-yontemleri",
//     title: "Depresyon Belirtileri ve Tedavi Yöntemleri",
//     excerpt:
//       "Depresyon, günümüzde en yaygın ruhsal sorunlardan biridir. Bu yazıda depresyonun belirtilerini ve etkili tedavi yöntemlerini ele alıyoruz.",
//     image: "/placeholder.svg?height=400&width=600",
//     category: "ruhsal-saglik",
//     categoryName: "Ruhsal Sağlık",
//     author: "Dr. Elif Yılmaz",
//     authorTitle: "Klinik Psikolog",
//     authorImage: "/placeholder.svg?height=100&width=100",
//     date: "15 Mart 2023",
//     readTime: "8 dk",
//     featured: true,
//     content: `
//       <h2>Depresyon Nedir?</h2>
//       <p>Depresyon, kişinin günlük yaşamını, düşüncelerini, duygularını ve davranışlarını olumsuz etkileyen ciddi bir ruhsal bozukluktur. Sadece geçici bir üzüntü hali değil, uzun süreli ve yoğun bir mutsuzluk, ilgi kaybı ve yaşamdan zevk alamama durumudur.</p>
      
//       <h2>Depresyonun Belirtileri</h2>
//       <p>Depresyon belirtileri kişiden kişiye değişiklik gösterebilir, ancak en yaygın belirtiler şunlardır:</p>
//       <ul>
//         <li>Sürekli üzgün, boş veya umutsuz hissetmek</li>
//         <li>Önceden zevk alınan aktivitelere karşı ilgi kaybı</li>
//         <li>Uyku sorunları (uykusuzluk veya aşırı uyuma)</li>
//         <li>İştah ve kilo değişimleri</li>
//         <li>Enerji kaybı ve sürekli yorgunluk hissi</li>
//         <li>Konsantrasyon güçlüğü ve karar vermede zorluk</li>
//         <li>Değersizlik veya suçluluk duyguları</li>
//         <li>İntihar düşünceleri veya ölüm hakkında düşünmek</li>
//       </ul>
      
//       <h2>Depresyonun Nedenleri</h2>
//       <p>Depresyonun tek bir nedeni yoktur. Genellikle biyolojik, psikolojik ve sosyal faktörlerin bir kombinasyonu sonucu ortaya çıkar:</p>
//       <ul>
//         <li><strong>Biyolojik Faktörler:</strong> Beyin kimyasındaki değişiklikler, genetik yatkınlık, hormonal dengesizlikler</li>
//         <li><strong>Psikolojik Faktörler:</strong> Düşük benlik saygısı, mükemmeliyetçilik, olumsuz düşünce kalıpları</li>
//         <li><strong>Sosyal Faktörler:</strong> Travmatik yaşam olayları, kayıplar, ilişki sorunları, ekonomik zorluklar</li>
//       </ul>
      
//       <h2>Depresyon Tedavi Yöntemleri</h2>
//       <p>Depresyon tedavi edilebilir bir rahatsızlıktır. Etkili tedavi yöntemleri şunlardır:</p>
      
//       <h3>1. Psikoterapi</h3>
//       <p>Psikoterapi, depresyon tedavisinde etkili bir yöntemdir. En yaygın kullanılan psikoterapi türleri şunlardır:</p>
//       <ul>
//         <li><strong>Bilişsel Davranışçı Terapi (BDT):</strong> Olumsuz düşünce kalıplarını tanıma ve değiştirme üzerine odaklanır.</li>
//         <li><strong>Kişilerarası Terapi:</strong> Kişinin ilişkilerindeki sorunları çözmeye yardımcı olur.</li>
//         <li><strong>Psikodinamik Terapi:</strong> Bilinçaltı çatışmaları ve geçmiş deneyimlerin etkilerini anlamaya odaklanır.</li>
//       </ul>
      
//       <h3>2. İlaç Tedavisi</h3>
//       <p>Antidepresan ilaçlar, beyin kimyasını dengeleyerek depresyon belirtilerini azaltmaya yardımcı olur. Yaygın kullanılan antidepresan türleri şunlardır:</p>
//       <ul>
//         <li>Seçici Serotonin Geri Alım İnhibitörleri (SSRI)</li>
//         <li>Serotonin-Norepinefrin Geri Alım İnhibitörleri (SNRI)</li>
//         <li>Atipik Antidepresanlar</li>
//         <li>Trisiklik Antidepresanlar</li>
//       </ul>
//       <p>İlaç tedavisi mutlaka bir psikiyatrist gözetiminde uygulanmalıdır.</p>
      
//       <h3>3. Yaşam Tarzı Değişiklikleri</h3>
//       <p>Aşağıdaki yaşam tarzı değişiklikleri, depresyon tedavisini destekleyebilir:</p>
//       <ul>
//         <li>Düzenli fiziksel aktivite</li>
//         <li>Dengeli beslenme</li>
//         <li>Düzenli uyku alışkanlıkları</li>
//         <li>Stres yönetimi teknikleri (mindfulness, meditasyon)</li>
//         <li>Sosyal destek ağlarını güçlendirme</li>
//         <li>Alkol ve madde kullanımını azaltma veya bırakma</li>
//       </ul>
      
//       <h2>Ne Zaman Profesyonel Yardım Almalı?</h2>
//       <p>Eğer depresyon belirtileri iki haftadan uzun süredir devam ediyorsa ve günlük yaşamınızı etkiliyorsa, profesyonel yardım almanız önemlidir. Özellikle intihar düşünceleri varsa, acil olarak bir uzmana başvurulmalıdır.</p>
      
//       <h2>Sonuç</h2>
//       <p>Depresyon, ciddi ancak tedavi edilebilir bir ruhsal bozukluktur. Erken tanı ve uygun tedavi ile depresyonun üstesinden gelmek mümkündür. Eğer siz veya bir yakınınız depresyon belirtileri gösteriyorsa, bir ruh sağlığı uzmanına başvurmaktan çekinmeyin. Unutmayın, yardım istemek güçlülüğün bir göstergesidir.</p>
//     `,
//   },
//   {
//     id: 2,
//     slug: "kaygi-bozukluklari-ve-basa-cikma-yontemleri",
//     title: "Kaygı Bozuklukları ve Başa Çıkma Yöntemleri",
//     excerpt:
//       "Kaygı bozuklukları, günlük yaşamı önemli ölçüde etkileyebilen bir grup ruhsal sorundur. Bu yazıda kaygı bozukluklarının türlerini ve etkili başa çıkma stratejilerini inceliyoruz.",
//     image: "/placeholder.svg?height=400&width=600",
//     category: "ruhsal-saglik",
//     categoryName: "Ruhsal Sağlık",
//     author: "Uzm. Psk. Ahmet Kaya",
//     authorTitle: "Klinik Psikolog",
//     authorImage: "/placeholder.svg?height=100&width=100",
//     date: "22 Nisan 2023",
//     readTime: "10 dk",
//     featured: false,
//     content: `
//       <h2>Kaygı Bozuklukları Nedir?</h2>
//       <p>Kaygı bozuklukları, aşırı korku, endişe ve kaygı ile karakterize edilen bir grup ruhsal bozukluktur. Bu bozukluklar, kişinin günlük yaşamını, ilişkilerini ve genel işlevselliğini önemli ölçüde etkileyebilir.</p>
      
//       <h2>Kaygı Bozukluklarının Türleri</h2>
//       <p>Kaygı bozuklukları çeşitli türlere ayrılır:</p>
      
//       <h3>1. Yaygın Kaygı Bozukluğu (YKB)</h3>
//       <p>Yaygın Kaygı Bozukluğu, günlük olaylar ve aktiviteler hakkında aşırı ve kontrol edilemeyen endişe ile karakterizedir. Bu endişe genellikle iş, sağlık, aile, para veya diğer günlük konular üzerine odaklanır.</p>
//       <p>Belirtileri:</p>
//       <ul>
//         <li>Sürekli ve kontrol edilemeyen endişe</li>
//         <li>Huzursuzluk ve gerginlik hissi</li>
//         <li>Kolay yorulma</li>
//         <li>Konsantrasyon güçlüğü</li>
//         <li>Kas gerginliği</li>
//         <li>Uyku sorunları</li>
//       </ul>
      
//       <h3>2. Panik Bozukluğu</h3>
//       <p>Panik bozukluğu, beklenmedik ve tekrarlayan panik atakları ile karakterizedir. Panik atakları, yoğun korku ve fiziksel rahatsızlık hissi ile birlikte gelen ani başlangıçlı dönemlerdir.</p>
//       <p>Belirtileri:</p>
//       <ul>
//         <li>Çarpıntı ve kalp atışlarında hızlanma</li>
//         <li>Terleme</li>
//         <li>Titreme veya sarsılma</li>
//         <li>Nefes darlığı veya boğulma hissi</li>
//         <li>Göğüs ağrısı veya rahatsızlık</li>
//         <li>Baş dönmesi veya bayılacak gibi hissetme</li>
//         <li>Gerçekdışılık hissi (derealizasyon) veya kendine yabancılaşma (depersonalizasyon)</li>
//         <li>Kontrolü kaybetme veya çıldırma korkusu</li>
//         <li>Ölüm korkusu</li>
//       </ul>
      
//       <h3>3. Sosyal Kaygı Bozukluğu (Sosyal Fobi)</h3>
//       <p>Sosyal Kaygı Bozukluğu, sosyal ortamlarda veya performans gerektiren durumlarda yoğun korku ve kaygı ile karakterizedir. Kişi, başkaları tarafından olumsuz değerlendirilmekten veya utanç verici bir duruma düşmekten aşırı korkar.</p>
//       <p>Belirtileri:</p>
//       <ul>
//         <li>Sosyal ortamlarda yoğun kaygı</li>
//         <li>Başkaları tarafından yargılanma korkusu</li>
//         <li>Utanç verici durumlardan aşırı korku</li>
//         <li>Sosyal ortamlardan kaçınma</li>
//         <li>Fiziksel belirtiler: kızarma, terleme, titreme, mide bulantısı</li>
//       </ul>
      
//       <h3>4. Özgül Fobiler</h3>
//       <p>Özgül fobiler, belirli nesneler veya durumlar karşısında aşırı ve mantıksız korku ile karakterizedir. Yaygın fobiler arasında yükseklik, uçak, kapalı alanlar, kan, böcekler ve hayvanlar yer alır.</p>
      
//       <h3>5. Agorafobi</h3>
//       <p>Agorafobi, kaçmanın zor olabileceği veya yardım bulunamayacağı durumlarda bulunmaktan korkmaktır. Bu durumlar arasında toplu taşıma araçları, açık alanlar, kapalı alanlar, kalabalık yerler veya evden uzakta olmak sayılabilir.</p>
      
//       <h2>Kaygı Bozukluklarıyla Başa Çıkma Yöntemleri</h2>
      
//       <h3>1. Psikoterapi</h3>
//       <p>Kaygı bozukluklarının tedavisinde en etkili psikoterapi yaklaşımları şunlardır:</p>
//       <ul>
//         <li><strong>Bilişsel Davranışçı Terapi (BDT):</strong> Kaygıya neden olan olumsuz düşünce kalıplarını tanıma ve değiştirme üzerine odaklanır.</li>
//         <li><strong>Maruz Bırakma Terapisi:</strong> Kişi, kontrollü bir ortamda korktuğu nesne veya durumla kademeli olarak yüzleştirilir.</li>
//         <li><strong>Kabul ve Kararlılık Terapisi (ACT):</strong> Kaygı duygularını kabul etmeyi ve değerler doğrultusunda hareket etmeyi öğretir.</li>
//       </ul>
      
//       <h3>2. İlaç Tedavisi</h3>
//       <p>Kaygı bozukluklarının tedavisinde kullanılan ilaçlar şunlardır:</p>
//       <ul>
//         <li>Seçici Serotonin Geri Alım İnhibitörleri (SSRI)</li>
//         <li>Serotonin-Norepinefrin Geri Alım İnhibitörleri (SNRI)</li>
//         <li>Benzodiazepinler (kısa süreli kullanım için)</li>
//         <li>Beta blokerler (fiziksel belirtileri azaltmak için)</li>
//       </ul>
//       <p>İlaç tedavisi mutlaka bir psikiyatrist gözetiminde uygulanmalıdır.</p>
      
//       <h3>3. Kendi Kendine Yardım Stratejileri</h3>
//       <p>Kaygıyla başa çıkmak için günlük yaşamda uygulayabileceğiniz stratejiler:</p>
//       <ul>
//         <li><strong>Nefes Egzersizleri:</strong> Derin ve yavaş nefes alma, kaygı anında vücudu sakinleştirebilir.</li>
//         <li><strong>Progresif Kas Gevşetme:</strong> Vücuttaki kas gruplarını sırayla gerip gevşetme, fiziksel gerginliği azaltır.</li>
//         <li><strong>Mindfulness (Bilinçli Farkındalık):</strong> Şimdiki ana odaklanma ve düşünceleri yargılamadan gözlemleme pratiği.</li>
//         <li><strong>Düzenli Fiziksel Aktivite:</strong> Egzersiz, kaygıyı azaltan doğal bir stres gidericidir.</li>
//         <li><strong>Dengeli Beslenme:</strong> Kafein ve alkol gibi kaygıyı tetikleyebilecek maddeleri sınırlandırmak.</li>
//         <li><strong>Yeterli Uyku:</strong> Düzenli uyku düzeni, kaygıyla başa çıkma kapasitesini artırır.</li>
//         <li><strong>Sosyal Destek:</strong> Güvendiğiniz kişilerle duygularınızı paylaşmak.</li>
//       </ul>
      
//       <h2>Ne Zaman Profesyonel Yardım Almalı?</h2>
//       <p>Eğer kaygınız:</p>
//       <ul>
//         <li>Günlük yaşamınızı, işinizi veya ilişkilerinizi etkiliyorsa</li>
//         <li>Sevdiğiniz aktivitelerden kaçınmanıza neden oluyorsa</li>
//         <li>Kontrol edilemez düzeydeyse</li>
//         <li>Fiziksel belirtilere neden oluyorsa</li>
//         <li>Madde kullanımına yönelmenize neden oluyorsa</li>
//       </ul>
//       <p>profesyonel yardım almanız önemlidir.</p>
      
//       <h2>Sonuç</h2>
//       <p>Kaygı bozuklukları yaygın görülen, ancak etkili tedavi yöntemleri bulunan ruhsal bozukluklardır. Erken tanı ve uygun tedavi ile kaygı bozukluklarının üstesinden gelmek mümkündür. Eğer siz veya bir yakınınız kaygı belirtileri gösteriyorsa, bir ruh sağlığı uzmanına başvurmaktan çekinmeyin.</p>
//     `,
//   },
//   // Other blog posts data would be here
// ];

// // Comments data
// const commentsData = [
//   {
//     id: 1,
//     name: "Ayşe Yılmaz",
//     date: "20 Mart 2023",
//     content:
//       "Çok bilgilendirici bir yazı olmuş. Depresyon belirtilerini bu kadar detaylı anlatan bir kaynak bulmak gerçekten zor. Teşekkürler!",
//     replies: [
//       {
//         id: 101,
//         name: "Dr. Elif Yılmaz",
//         date: "21 Mart 2023",
//         content:
//           "Yorumunuz için teşekkür ederim Ayşe Hanım. Depresyon hakkında farkındalık yaratmak bizim için çok önemli.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Mehmet Kaya",
//     date: "22 Mart 2023",
//     content:
//       "Yazıda bahsedilen yaşam tarzı değişikliklerini uygulamaya başladım ve gerçekten faydasını görüyorum. Özellikle düzenli egzersiz ve meditasyon ruh halimi olumlu yönde etkiledi.",
//     replies: [],
//   },
//   {
//     id: 3,
//     name: "Zeynep Demir",
//     date: "25 Mart 2023",
//     content:
//       "Bir yakınım depresyon tedavisi görüyor ve bu yazı sayesinde ona nasıl destek olabileceğimi daha iyi anladım. Profesyonel yardımın önemini vurguladığınız için ayrıca teşekkür ederim.",
//     replies: [],
//   },
// ];

// export default function BlogDetailPage() {
//   const params = useParams();
//   const { slug } = params;

//   const [post, setPost] = useState(null);
//   const [relatedPosts, setRelatedPosts] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [commentStatus, setCommentStatus] = useState({ type: "", message: "" });

//   useEffect(() => {
//     // Find the current post
//     const currentPost = blogPosts.find((post) => post.slug === slug);
//     setPost(currentPost);

//     if (currentPost) {
//       // Find related posts (same category, excluding current post)
//       const related = blogPosts
//         .filter(
//           (p) => p.category === currentPost.category && p.id !== currentPost.id,
//         )
//         .slice(0, 3);
//       setRelatedPosts(related);

//       // Set comments for this post
//       setComments(commentsData);
//     }
//   }, [slug]);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate comment submission
//     setTimeout(() => {
//       setCommentStatus({
//         type: "success",
//         message:
//           "Yorumunuz başarıyla gönderildi. İncelendikten sonra yayınlanacaktır.",
//       });
//       setIsSubmitting(false);
//       // Reset form
//       e.target.reset();
//     }, 1500);
//   };

//   if (!post) {
//     return (
//       <div className="container py-16 text-center">
//         <h1 className="mb-4 text-2xl font-bold">Yazı Bulunamadı</h1>
//         <p className="text-muted-foreground mb-8">
//           Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.
//         </p>
//         <Button asChild>
//           <Link href="/blog">Blog Sayfasına Dön</Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <main className="flex flex-col">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={post.image || "/placeholder.svg"}
//             alt={post.title}
//             fill
//             className="object-cover brightness-[0.4]"
//             priority
//           />
//         </div>
//         <div className="relative z-10 container text-white">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="bg-primary text-primary-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
//               {post.categoryName}
//             </span>
//             <h1 className="mb-6 text-3xl leading-tight font-bold md:text-5xl">
//               {post.title}
//             </h1>
//             <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 <span>{post.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>{post.readTime} okuma süresi</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Content Section */}
//       <section className="py-12 md:py-16">
//         <div className="container">
//           <div className="mx-auto max-w-3xl">
//             {/* Author Info */}
//             <div className="mb-8 flex items-center gap-4">
//               <Avatar className="h-12 w-12">
//                 <AvatarImage src={post.authorImage} alt={post.author} />
//                 <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <h3 className="font-semibold">{post.author}</h3>
//                 <p className="text-muted-foreground text-sm">
//                   {post.authorTitle}
//                 </p>
//               </div>
//             </div>

//             {/* Blog Content */}
//             <div
//               className="prose prose-lg dark:prose-invert max-w-none"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Social Share */}
//             <div className="mt-12 border-t pt-8">
//               <h3 className="mb-4 text-lg font-semibold">Bu Yazıyı Paylaş</h3>
//               <div className="flex space-x-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="rounded-full"
//                   aria-label="Facebook'ta Paylaş"
//                 >
//                   <Facebook className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="rounded-full"
//                   aria-label="Twitter'da Paylaş"
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="rounded-full"
//                   aria-label="LinkedIn'de Paylaş"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="rounded-full"
//                   aria-label="Instagram'da Paylaş"
//                 >
//                   <Instagram className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Comments Section */}
//       <section className="border-t py-12 md:py-16">
//         <div className="container">
//           <div className="mx-auto max-w-3xl">
//             <h2 className="mb-8 text-2xl font-bold">
//               Yorumlar ({comments.length})
//             </h2>

//             {/* Comments List */}
//             {comments.length > 0 ? (
//               <div className="space-y-8">
//                 {comments.map((comment) => (
//                   <div key={comment.id} className="space-y-4">
//                     <div className="rounded-lg border p-4">
//                       <div className="mb-2 flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <Avatar className="h-8 w-8">
//                             <AvatarFallback>
//                               {comment.name.charAt(0)}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <h4 className="font-semibold">{comment.name}</h4>
//                             <p className="text-muted-foreground text-xs">
//                               {comment.date}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <p className="text-muted-foreground">{comment.content}</p>
//                     </div>

//                     {/* Comment Replies */}
//                     {comment.replies.length > 0 && (
//                       <div className="ml-8 space-y-4">
//                         {comment.replies.map((reply) => (
//                           <div key={reply.id} className="rounded-lg border p-4">
//                             <div className="mb-2 flex items-center justify-between">
//                               <div className="flex items-center gap-2">
//                                 <Avatar className="h-8 w-8">
//                                   <AvatarFallback>
//                                     {reply.name.charAt(0)}
//                                   </AvatarFallback>
//                                 </Avatar>
//                                 <div>
//                                   <h4 className="font-semibold">
//                                     {reply.name}
//                                   </h4>
//                                   <p className="text-muted-foreground text-xs">
//                                     {reply.date}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <p className="text-muted-foreground">
//                               {reply.content}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="rounded-lg border p-8 text-center">
//                 <MessageSquare className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
//                 <h3 className="mb-2 text-lg font-semibold">Henüz Yorum Yok</h3>
//                 <p className="text-muted-foreground mb-4">
//                   Bu yazı hakkında ilk yorumu siz yapın!
//                 </p>
//               </div>
//             )}

//             {/* Comment Form */}
//             <div className="mt-12">
//               <h3 className="mb-4 text-xl font-semibold">Yorum Yap</h3>
//               <form onSubmit={handleCommentSubmit} className="space-y-4">
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="mb-2 block text-sm font-medium"
//                     >
//                       Ad Soyad
//                     </label>
//                     <Input id="name" name="name" required />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="mb-2 block text-sm font-medium"
//                     >
//                       E-posta
//                     </label>
//                     <Input id="email" name="email" type="email" required />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="comment"
//                     className="mb-2 block text-sm font-medium"
//                   >
//                     Yorumunuz
//                   </label>
//                   <Textarea id="comment" name="comment" rows={5} required />
//                 </div>

//                 {commentStatus.message && (
//                   <div
//                     className={`rounded-md p-4 ${
//                       commentStatus.type === "success"
//                         ? "bg-green-50 text-green-700"
//                         : "bg-red-50 text-red-700"
//                     }`}
//                   >
//                     <p>{commentStatus.message}</p>
//                   </div>
//                 )}

//                 <Button type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Gönderiliyor..." : "Yorum Gönder"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Posts Section */}
//       {relatedPosts.length > 0 && (
//         <section className="bg-muted/30 border-t py-12 md:py-16">
//           <div className="container">
//             <h2 className="mb-8 text-2xl font-bold">İlgili Yazılar</h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {relatedPosts.map((relatedPost) => (
//                 <Card
//                   key={relatedPost.id}
//                   className="h-full overflow-hidden border"
//                 >
//                   <div className="relative aspect-[16/9] overflow-hidden">
//                     <Image
//                       src={relatedPost.image || "/placeholder.svg"}
//                       alt={relatedPost.title}
//                       fill
//                       className="object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="mb-2 text-lg font-bold">
//                       <Link
//                         href={`/blog/${relatedPost.slug}`}
//                         className="hover:underline"
//                       >
//                         {relatedPost.title}
//                       </Link>
//                     </h3>
//                     <p className="text-muted-foreground line-clamp-2 text-sm">
//                       {relatedPost.excerpt}
//                     </p>
//                   </CardContent>
//                   <CardFooter className="border-t p-6 pt-4">
//                     <div className="flex w-full items-center justify-between">
//                       <span className="text-muted-foreground text-sm">
//                         {relatedPost.date}
//                       </span>
//                       <span className="text-muted-foreground text-sm">
//                         {relatedPost.readTime}
//                       </span>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Newsletter Section */}
//       <section className="border-t py-12 md:py-16">
//         <div className="container">
//           <div className="bg-primary text-primary-foreground mx-auto max-w-3xl rounded-lg p-8 text-center md:p-12">
//             <h2 className="mb-4 text-2xl font-bold md:text-3xl">
//               Bültenimize Abone Olun
//             </h2>
//             <p className="text-primary-foreground/90 mb-6">
//               Yeni blog yazılarımızdan, etkinliklerimizden ve psikoloji
//               dünyasındaki gelişmelerden haberdar olmak için bültenimize abone
//               olun.
//             </p>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Input
//                 type="email"
//                 placeholder="E-posta adresiniz"
//                 className="bg-primary-foreground text-foreground flex-grow"
//               />
//               <Button variant="secondary">Abone Ol</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="border-t py-12 md:py-16">
//         <div className="container text-center">
//           <h2 className="mb-6 text-2xl font-bold md:text-3xl">
//             Profesyonel Destek İçin Yanınızdayız
//           </h2>
//           <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
//             Bu yazıda ele aldığımız konular hakkında profesyonel destek almak
//             isterseniz, uzman ekibimiz size yardımcı olmak için hazır.
//           </p>
//           <Button size="lg" asChild>
//             <Link href={ROUTES.INTERNAL.APPOINTMENT}>
//               Ücretsiz İlk Görüşme İçin Randevu Alın
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </main>
//   );
// }
