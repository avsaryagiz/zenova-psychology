"use client";

import { useState } from "react";
import FeaturedPostsSection from "./sections/posts-featured-section";
import PostFilterSection from "./sections/posts-filter-section";
import PostsGridSection from "./sections/posts-grid-section";
import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";
import { BLOG_POSTS } from "@/config/constants/blog-dummy-data";

export default function BlogContainer() {
  const [selectedCategory, setSelectedCategory] = useState("tum");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "tum" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = BLOG_POSTS.filter((post) => post.featured);

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
      <HeroSection
        title="Blog"
        description=" Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzmanlarımızın kaleme aldığı bilgilendirici yazılar ve makaleler."
      />

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <FeaturedPostsSection posts={featuredPosts} />
      )}

      {/* Filter Section */}
      <PostFilterSection
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Blog Posts Grid Section */}
      <PostsGridSection
        currentPage={currentPage}
        paginate={paginate}
        totalPages={totalPages}
        currentPosts={currentPosts}
        setSelectedCategory={setSelectedCategory}
        setSearchQuery={setSearchQuery}
        setCurrentPage={setCurrentPage}
      />

      {/* CTA Section */}
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description=" Blog yazılarımızda ele aldığımız konular hakkında profesyonel destek almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
