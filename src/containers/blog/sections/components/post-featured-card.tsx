import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import { Badge, Card } from "@/components/ui";
import { ROUTES } from "@/config/routes";
import type { Post } from "@/types/strapi-types";
import { calculateReadingTime, formatDate } from "@/lib/utils";

export default function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Card className="group h-full overflow-hidden border p-0">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.coverImage.url || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="space-x-2">
            {post.categories.map((category) => (
              <Link
                key={category.id}
                href={ROUTES.INTERNAL.BLOG.CATEGORY(category.slug)}
              >
                <Badge variant="primary">{category.name}</Badge>
              </Link>
            ))}
          </div>
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
              <span>{post.expert.expertTitle}{" "}{post.expert.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{calculateReadingTime(post.content)}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
