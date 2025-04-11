import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import { Card } from "@/components/ui";
import { ROUTES } from "@/config/routes";
import type { Post } from "@/types/shared-types";

export default function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Card className="group h-full overflow-hidden border p-0">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium">
            {post.categoryName}
          </span>
          <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
            <Link
              href={ROUTES.INTERNAL.BLOG.POST(post.slug)}
              className="hover:underline"
            >
              {post.title}
            </Link>
          </h3>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <UserIcon className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
