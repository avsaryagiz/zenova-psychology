import PostFilterSection from "./sections/posts-filter-section";
import PostsGridSection from "./sections/posts-grid-section";
import type { Category, Post } from "@/types/strapi_types";

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
  return (
    <div className="flex flex-col">
      {/* Filter Section */}
      <PostFilterSection
        activeCategory={activeCategory}
        categories={categories}
        posts={posts}
      />

      {/* Blog Posts Grid Section */}
      <PostsGridSection posts={posts} />
    </div>
  );
}
