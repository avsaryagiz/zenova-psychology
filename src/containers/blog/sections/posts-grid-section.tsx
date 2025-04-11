import React from "react";
import BlogPostCard from "./components/post-card";
import { Button } from "@/components/ui";
import { SearchIcon } from "@/components/icons";

interface IPostsGridSectionProps {
  currentPosts: Post[];
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
}
import { Post } from "@/types/shared-types";

export default function PostsGridSection({
  currentPosts,
  totalPages,
  currentPage,
  paginate,
  setSelectedCategory,
  setSearchQuery,
  setCurrentPage,
}: IPostsGridSectionProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        {currentPosts.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    &lt;
                  </Button>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      variant={
                        currentPage === index + 1 ? "default" : "outline"
                      }
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    &gt;
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-muted mb-4 rounded-full p-3">
              <SearchIcon className="text-muted-foreground h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Yazı Bulunamadı</h3>
            <p className="text-muted-foreground mb-6">
              Arama kriterlerinize uygun yazı bulunamadı. Lütfen farklı bir
              arama terimi deneyin veya filtreleri sıfırlayın.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("tum");
                setSearchQuery("");
                setCurrentPage(1);
              }}
            >
              Filtreleri Sıfırla
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
