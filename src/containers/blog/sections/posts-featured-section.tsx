import TitleSection from "@/components/shared/title-section";
import React from "react";
import FeaturedPostCard from "./components/post-featured-card";
import { Post } from "@/types/strapi-types";

interface IFeatuedPostProps {
  posts: Post[];
}

export default function FeaturedPostsSection({ posts }: IFeatuedPostProps) {
  return (
    <section className="py-12 bg-card md:py-16">
      <div className="container">
        <TitleSection
          title="Öne Çıkan Yazılar"
          titleClassName="self-start mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <FeaturedPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
