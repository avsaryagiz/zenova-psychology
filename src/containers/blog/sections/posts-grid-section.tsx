import { SearchIcon } from "@/components/icons";
import BlogPostCard from "./components/post-card";
import { Button } from "@/components/ui";
import type { Post } from "@/types/strapi-types";

interface IPostsGridSectionProps {
  posts: Post[];
}

export default function PostsGridSection({ posts }: IPostsGridSectionProps) {
  return (
    <section>
      <div className="container">
        {posts.length > 0 ? (
          <div className="flex flex-col justify-center gap-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
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
            <Button variant="outline">Filtreleri Sıfırla</Button>
          </div>
        )}
      </div>
    </section>
  );
}
