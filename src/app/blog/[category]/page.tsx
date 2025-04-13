import { notFound } from "next/navigation";
import BlogContainer from "@/containers/blog";
import { getCachedCategories, getCachedPosts } from "@/lib/services";
import { AppError, handleError } from "@/lib/utils/error-handler";
import { ERROR_MESSAGES } from "@/config/constants/error-messages";
import { ROUTES } from "@/config/routes";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  try {
    const { category } = await params;
    const { categories, postsData } = await getCachedPosts(category);
    return (
      <BlogContainer
        posts={postsData}
        categories={categories}
        activeCategory={category}
      />
    );
  } catch (error) {
    handleError(
      new AppError(
        ERROR_MESSAGES.FETCH_POSTS,
        `pg:${ROUTES.INTERNAL.BLOG.CATEGORY("category")}`,
        error,
      ),
    );
    return notFound();
  }
}

export async function generateStaticParams() {
  const categories = await getCachedCategories();
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (category) {
    const categories = await getCachedCategories();
    const categoryName = categories.find((cat) => cat.slug === category)?.name;
    const title =
      category === "tum-kategoriler"
        ? "Zenova Psikoloji Blogu | Tüm Kategoriler"
        : `${categoryName!} Yazıları | Zenova Psikoloji`;

    const description =
      category === "tum-kategoriler"
        ? "Zenova Psikoloji'nin tüm kategori yazıları burada! Ruhsal denge, zihinsel farkındalık ve psikolojik sağlık üzerine geniş bir yelpazeye sahip içeriklerimizi keşfedin."
        : `${categoryName!} kategorisindeki yazılarımızla zihinsel farkındalığınızı artıracak içeriklere ulaşabilirsiniz. Zenova Psikoloji ile ruhsal dengeye bir adım daha yaklaşın.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
      twitter: {
        title,
        description,
      },
    };
  }
}
