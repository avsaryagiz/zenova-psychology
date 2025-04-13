import BlogPostCard from "../../sections/components/post-card";
import TitleSection from "@/components/shared/title-section";
import type { Post } from "@/types/strapi_types";

interface IRelatedPost {
  relatedPosts: Post[];
}

export default function PostsRelatedSection({ relatedPosts }: IRelatedPost) {
  return (
    <section className="bg-card border-t py-12 shadow-inner md:py-16">
      <div className="container">
        <TitleSection
          title="İlgili Yazılar"
          titleClassName="items-start mb-8"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogPostCard key={relatedPost.id} post={relatedPost} />
          ))}
        </div>
      </div>
    </section>
  );
}
