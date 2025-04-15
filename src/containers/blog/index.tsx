"use client";
import { useEffect, useState } from "react";
import PostFilterSection from "./sections/posts-filter-section";
import PostsGridSection from "./sections/posts-grid-section";
import { TitleSection } from "@/components/shared";
import { Button } from "@/components/ui";
import { DEFAULT_VARIABLES } from "@/config/constants";
import type { Category, Post } from "@/types/strapi-types";

interface BlogContainerProps {
  posts: Post[];
  categories: Category[];
  activeCategory: string;
}

export default function BlogContainer({
  posts,
  categories,
  activeCategory,
}: BlogContainerProps) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);

  useEffect(() => {
    setVisiblePosts(filteredPosts.slice(0, DEFAULT_VARIABLES.ITEMS_PER_PAGE));
  }, [filteredPosts]);

  const loadMorePosts = () => {
    const nextPosts = filteredPosts.slice(
      visiblePosts.length,
      visiblePosts.length + DEFAULT_VARIABLES.ITEMS_PER_PAGE,
    );
    setVisiblePosts([...visiblePosts, ...nextPosts]);
  };

  return (
    <div className="flex flex-col py-12 shadow-inner">
      <TitleSection title="Blog Yazıları" />

      {/* Filter Section */}
      <PostFilterSection
        activeCategory={activeCategory}
        categories={categories}
        posts={posts}
        setFilteredPosts={setFilteredPosts}
      />

      {/* Blog Posts Grid Section */}
      <PostsGridSection posts={visiblePosts} />

      {/* Load More Button */}
      {visiblePosts.length < filteredPosts.length && (
        <div className="mt-16 flex justify-center">
          <Button onClick={loadMorePosts} className="cursor-pointer">
            Daha Fazla Yükle
          </Button>
        </div>
      )}
    </div>
  );
}
