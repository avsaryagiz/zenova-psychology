import Link from "next/link";
import { Button } from "@/components/ui";
import BlogDetailContainer from "@/containers/blog/blog-detail";
import {
  getCachedPostSlugs,
  getCachedRelatedPosts,
  getCachedSinglePost,
} from "@/lib/services";
import { AppError, handleError } from "@/lib/utils/error-handler";
import { generateDescription } from "@/lib/utils";
import { ERROR_MESSAGES } from "@/config/constants/error-messages";
import { ROUTES } from "@/config/routes";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await getCachedSinglePost(slug);
    const relatedPosts =
      (await getCachedRelatedPosts(
        post.id,
        post.categories.map((category) => category.id),
      )) ?? [];

    return <BlogDetailContainer post={post} relatedPosts={relatedPosts} />;
  } catch (error) {
    handleError(
      new AppError(
        ERROR_MESSAGES.FETCH_POSTS,
        `pg:${ROUTES.INTERNAL.BLOG.POST("slug")}`,
        error,
      ),
    );
    return (
      <div className="container py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Yazı Bulunamadı</h1>
        <p className="text-muted-foreground mb-8">
          Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.
        </p>
        <Button asChild>
          <Link href={ROUTES.INTERNAL.BLOG.CATEGORY("tum-kategoriler")}>
            Blog Sayfasına Dön
          </Link>
        </Button>
      </div>
    );
  }
}

export async function generateStaticParams() {
  const allPostSlugs = await getCachedPostSlugs();
  return allPostSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getCachedSinglePost(slug);

  if (!post.title) {
    return {
      title: "Yazı Bulunamadı",
      description:
        "Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.",
    };
  }

  const { title, content, coverImage } = post;
  const excerpt = generateDescription(content) || "Zenova Psikoloji Blogu";

  const metadata = {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      images: [
        {
          url: coverImage?.url,
          alt: coverImage?.alternativeText,
        },
      ],
    },
    twitter: {
      title,
      description: excerpt,
      images: [
        {
          url: coverImage?.url,
          alt: coverImage?.alternativeText,
        },
      ],
    },
  };

  return metadata;
}
