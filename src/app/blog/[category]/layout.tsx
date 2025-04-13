import { CTASection, HeroSection } from "@/components/shared";
import FeaturedPostsSection from "@/containers/blog/sections/posts-featured-section";
import { getCachedLatestPosts } from "@/lib/services";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const featuredPosts = await getCachedLatestPosts();
  return (
    <main className="flex flex-col">
      <HeroSection
        title="Blog"
        description=" Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzmanlarımızın kaleme aldığı bilgilendirici yazılar ve makaleler."
      />
      {featuredPosts.length > 0 && (
        <FeaturedPostsSection posts={featuredPosts} />
      )}
      {children}
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description=" Blog yazılarımızda ele aldığımız konular hakkında profesyonel destek almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
