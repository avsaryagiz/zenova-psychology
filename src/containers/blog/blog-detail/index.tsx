import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import PostsRelatedSection from "./sections/posts-related-section";
import CTASection from "@/components/shared/cta-section";
import { Badge } from "@/components/ui";
import { calculateReadingTime, formatDate } from "@/lib/utils";
import { BlocksRenderer } from "./components";
import { HeadingBlockNode, RootNode } from "./components/blocks-renderer";
import { TableOfContents } from "./sections/toc";
import { ROUTES } from "@/config/routes";
import { Post } from "@/types/strapi_types";

interface BlogDetailContainerProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogDetailContainer({
  post,
  relatedPosts,
}: BlogDetailContainerProps) {
  const content = post.content as RootNode[];
  const filteredHeadings: HeadingBlockNode[] = content.filter(
    (item): item is HeadingBlockNode => item.type === "heading",
  );

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.cover_image.url || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container text-white">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex flex-wrap items-center justify-center gap-2">
              {post.categories.map((category) => (
                <Link
                  key={category.id}
                  href={ROUTES.INTERNAL.BLOG.CATEGORY(category.slug)}
                >
                  <Badge variant="primary">{category.name}</Badge>
                </Link>
              ))}
            </div>
            <h1 className="mb-6 text-3xl leading-tight font-bold md:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>{post.expert.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>{calculateReadingTime(post.content)}dk okuma süresi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section for 2xl and above */}
      <section className="relative container mx-auto my-8 hidden justify-center md:my-12 2xl:flex">
        {/* Article */}
        <div className="w-full max-w-3xl">
          <article className="w-full">
            <BlocksRenderer content={post.content as RootNode[]} />
          </article>
        </div>

        {/* TOC */}
        {filteredHeadings ? (
          <aside className="absolute top-0 right-20 hidden h-full min-h-screen w-[250px] 2xl:block">
            <TableOfContents headings={filteredHeadings} />
          </aside>
        ) : null}
      </section>

      {/* Blog Content Section for below 2xl */}
      <section className="mx-auto my-8 grid max-w-6xl gap-8 md:my-12 md:gap-12 lg:grid-cols-[1fr_250px] 2xl:hidden">
        <div className="container mx-auto flex justify-center">
          <article className="w-full max-w-3xl">
            <BlocksRenderer content={post.content as RootNode[]} />
          </article>
        </div>

        {filteredHeadings ? (
          <aside className="hidden lg:block">
            <TableOfContents headings={filteredHeadings} />
          </aside>
        ) : null}
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <PostsRelatedSection relatedPosts={relatedPosts} />
      )}

      {/* CTA Section */}
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description="Bu yazıda ele aldığımız konular hakkında profesyonel destek almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
