"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ROUTES } from "@/config/routes";
import {
  CalendarIcon,
  ClockIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "depresyon-belirtileri-ve-tedavi-yontemleri",
    title: "Depresyon Belirtileri ve Tedavi Yöntemleri",
    excerpt:
      "Depresyon, günümüzde en yaygın ruhsal sorunlardan biridir. Bu yazıda depresyonun belirtilerini ve etkili tedavi yöntemlerini ele alıyoruz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ruhsal-saglik",
    categoryName: "Ruhsal Sağlık",
    author: "Dr. Elif Yılmaz",
    date: "15 Mart 2023",
    readTime: "8 dk",
    featured: true,
  },
  {
    id: 2,
    slug: "kaygi-bozukluklari-ve-basa-cikma-yontemleri",
    title: "Kaygı Bozuklukları ve Başa Çıkma Yöntemleri",
    excerpt:
      "Kaygı bozuklukları, günlük yaşamı önemli ölçüde etkileyebilen bir grup ruhsal sorundur. Bu yazıda kaygı bozukluklarının türlerini ve etkili başa çıkma stratejilerini inceliyoruz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ruhsal-saglik",
    categoryName: "Ruhsal Sağlık",
    author: "Uzm. Psk. Ahmet Kaya",
    date: "22 Nisan 2023",
    readTime: "10 dk",
    featured: false,
  },
  {
    id: 3,
    slug: "cocuklarda-dikkat-eksikligi-ve-hiperaktivite-bozuklugu",
    title: "Çocuklarda Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB)",
    excerpt:
      "DEHB, çocukluk çağında sık görülen nörogelişimsel bir bozukluktur. Bu yazıda DEHB'nin belirtilerini, tanı sürecini ve tedavi yaklaşımlarını ele alıyoruz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cocuk-psikolojisi",
    categoryName: "Çocuk Psikolojisi",
    author: "Uzm. Psk. Selin Demir",
    date: "10 Mayıs 2023",
    readTime: "12 dk",
    featured: false,
  },
  {
    id: 4,
    slug: "iliskilerde-iletisim-sorunlari-ve-cozum-yollari",
    title: "İlişkilerde İletişim Sorunları ve Çözüm Yolları",
    excerpt:
      "Sağlıklı bir ilişkinin temeli etkili iletişimdir. Bu yazıda ilişkilerde yaşanan iletişim sorunlarını ve bunları aşmanın yollarını inceliyoruz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "iliskiler",
    categoryName: "İlişkiler",
    author: "Uzm. Psk. Ahmet Kaya",
    date: "18 Haziran 2023",
    readTime: "9 dk",
    featured: true,
  },
  {
    id: 5,
    slug: "travma-sonrasi-stres-bozuklugu-ve-emdr-terapisi",
    title: "Travma Sonrası Stres Bozukluğu ve EMDR Terapisi",
    excerpt:
      "Travmatik olaylar sonrası gelişebilen TSSB'nin belirtileri ve EMDR terapisinin bu bozukluğun tedavisindeki etkinliği hakkında bilgiler.",
    image: "/placeholder.svg?height=400&width=600",
    category: "terapi-yontemleri",
    categoryName: "Terapi Yöntemleri",
    author: "Uzm. Psk. Burak Öztürk",
    date: "5 Temmuz 2023",
    readTime: "11 dk",
    featured: false,
  },
  {
    id: 6,
    slug: "mindfulness-ve-stres-yonetimi",
    title: "Mindfulness ve Stres Yönetimi",
    excerpt:
      "Günlük yaşamın yoğun temposunda stresle başa çıkmanın etkili bir yolu olan mindfulness (bilinçli farkındalık) uygulamaları hakkında bilgiler.",
    image: "/placeholder.svg?height=400&width=600",
    category: "kisisel-gelisim",
    categoryName: "Kişisel Gelişim",
    author: "Uzm. Psk. Zeynep Aydın",
    date: "15 Ağustos 2023",
    readTime: "7 dk",
    featured: false,
  },
  {
    id: 7,
    slug: "uyku-bozukluklari-ve-saglikli-uyku-icin-oneriler",
    title: "Uyku Bozuklukları ve Sağlıklı Uyku İçin Öneriler",
    excerpt:
      "Uyku bozuklukları, fiziksel ve ruhsal sağlığımızı önemli ölçüde etkileyebilir. Bu yazıda yaygın uyku bozukluklarını ve kaliteli uyku için önerileri ele alıyoruz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "saglikli-yasam",
    categoryName: "Sağlıklı Yaşam",
    author: "Dr. Elif Yılmaz",
    date: "20 Eylül 2023",
    readTime: "8 dk",
    featured: false,
  },
  {
    id: 8,
    slug: "ebeveynlik-becerileri-ve-cocuk-gelisimi",
    title: "Ebeveynlik Becerileri ve Çocuk Gelişimi",
    excerpt:
      "Etkili ebeveynlik becerileri ve bunların çocuğun sağlıklı gelişimi üzerindeki etkileri hakkında bilgiler ve öneriler.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cocuk-psikolojisi",
    categoryName: "Çocuk Psikolojisi",
    author: "Uzm. Psk. Ayşe Kara",
    date: "10 Ekim 2023",
    readTime: "10 dk",
    featured: true,
  },
  {
    id: 9,
    slug: "is-stresini-yonetme-ve-is-yasam-dengesi",
    title: "İş Stresini Yönetme ve İş-Yaşam Dengesi",
    excerpt:
      "Modern çalışma hayatında iş stresini yönetmenin ve sağlıklı bir iş-yaşam dengesi kurmanın yolları hakkında pratik öneriler.",
    image: "/placeholder.svg?height=400&width=600",
    category: "saglikli-yasam",
    categoryName: "Sağlıklı Yaşam",
    author: "Uzm. Psk. Can Yılmaz",
    date: "15 Kasım 2023",
    readTime: "9 dk",
    featured: false,
  },
  {
    id: 10,
    slug: "kisilik-bozukluklari-ve-tedavi-yaklasimlari",
    title: "Kişilik Bozuklukları ve Tedavi Yaklaşımları",
    excerpt:
      "Kişilik bozukluklarının türleri, belirtileri ve tedavisinde kullanılan psikoterapi yaklaşımları hakkında kapsamlı bir inceleme.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ruhsal-saglik",
    categoryName: "Ruhsal Sağlık",
    author: "Uzm. Psk. Zeynep Aydın",
    date: "20 Aralık 2023",
    readTime: "12 dk",
    featured: false,
  },
  {
    id: 11,
    slug: "bagimliliklar-ve-tedavi-sureci",
    title: "Bağımlılıklar ve Tedavi Süreci",
    excerpt:
      "Madde ve davranışsal bağımlılıkların nedenleri, belirtileri ve tedavi süreçleri hakkında bilgiler ve yaklaşımlar.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ruhsal-saglik",
    categoryName: "Ruhsal Sağlık",
    author: "Dr. Elif Yılmaz",
    date: "10 Ocak 2024",
    readTime: "11 dk",
    featured: false,
  },
  {
    id: 12,
    slug: "yas-sureci-ve-kayip-ile-basa-cikma",
    title: "Yas Süreci ve Kayıp ile Başa Çıkma",
    excerpt:
      "Sevilen birinin kaybı sonrası yaşanan yas sürecinin aşamaları ve bu zorlu dönemde kendimize ve sevdiklerimize nasıl destek olabileceğimiz.",
    image: "/placeholder.svg?height=400&width=600",
    category: "ruhsal-saglik",
    categoryName: "Ruhsal Sağlık",
    author: "Uzm. Psk. Burak Öztürk",
    date: "15 Şubat 2024",
    readTime: "10 dk",
    featured: false,
  },
];

// Categories
const categories = [
  { value: "tum", label: "Tüm Kategoriler" },
  { value: "ruhsal-saglik", label: "Ruhsal Sağlık" },
  { value: "cocuk-psikolojisi", label: "Çocuk Psikolojisi" },
  { value: "iliskiler", label: "İlişkiler" },
  { value: "terapi-yontemleri", label: "Terapi Yöntemleri" },
  { value: "kisisel-gelisim", label: "Kişisel Gelişim" },
  { value: "saglikli-yasam", label: "Sağlıklı Yaşam" },
];

export default function BlogContainer() {
  const [selectedCategory, setSelectedCategory] = useState("tum");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "tum" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Zenova Psikoloji Blog"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container text-white">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
              Blog
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Ruh sağlığı, psikoloji ve kişisel gelişim konularında
              uzmanlarımızın kaleme aldığı bilgilendirici yazılar ve makaleler.
            </p>
            <Button size="lg" asChild>
              <Link href={ROUTES.INTERNAL.APPOINTMENT}>Randevu Alın</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Öne Çıkan Yazılar
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="border-t py-8">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <label htmlFor="category-filter" className="text-sm font-medium">
                Kategori:
              </label>
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  setSelectedCategory(value);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger
                  id="category-filter"
                  className="w-full md:w-[200px]"
                >
                  <SelectValue placeholder="Kategori Seçin" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full md:w-[300px]">
              <Input
                type="search"
                placeholder="Blog yazısı ara..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pr-10"
              />
              <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          {currentPosts.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </Button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <Button
                        key={index}
                        variant={
                          currentPage === index + 1 ? "default" : "outline"
                        }
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-muted mb-4 rounded-full p-3">
                <SearchIcon className="text-muted-foreground h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Yazı Bulunamadı</h3>
              <p className="text-muted-foreground mb-6">
                Arama kriterlerinize uygun yazı bulunamadı. Lütfen farklı bir
                arama terimi deneyin veya filtreleri sıfırlayın.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("tum");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
              >
                Filtreleri Sıfırla
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Bültenimize Abone Olun</h2>
            <p className="text-muted-foreground mb-8">
              Yeni blog yazılarımızdan, etkinliklerimizden ve psikoloji
              dünyasındaki gelişmelerden haberdar olmak için bültenimize abone
              olun.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-grow"
              />
              <Button>Abone Ol</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Profesyonel Destek İçin Yanınızdayız
          </h2>
          <p className="text-primary-foreground/90 mx-auto mb-8 max-w-2xl text-xl">
            Blog yazılarımızda ele aldığımız konular hakkında profesyonel destek
            almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href={ROUTES.INTERNAL.APPOINTMENT}>
              Ücretsiz İlk Görüşme İçin Randevu Alın
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

// Featured Post Card Component
interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryName: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full overflow-hidden border">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium">
            {post.categoryName}
          </span>
          <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <UserIcon className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full overflow-hidden border">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
            {post.categoryName}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-6 pt-4">
        <div className="flex items-center gap-2">
          <UserIcon className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">{post.author}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CalendarIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">
              {post.readTime}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
