import React from "react";
import BlogPostCard from "../../sections/components/post-card";
import type { Post } from "@/types/shared-types";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import TitleSection from "@/components/shared/title-section";

interface IRelatedPost {
  relatedPosts: Post[];
}

export default function PostsRelatedSection({ relatedPosts }: IRelatedPost) {
  return (
    <section className="bg-card shadow-inner border-t py-12 md:py-16">
      <div className="container">
        <TitleSection
          title="İlgili Yazılar"
          titleClassName="items-start mb-8"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
