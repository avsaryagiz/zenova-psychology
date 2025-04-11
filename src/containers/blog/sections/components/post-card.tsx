import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import { Post } from "@/types/shared-types";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full overflow-hidden border p-0">
      <div className="relative aspect-[16/9] cursor-pointer overflow-hidden">
        <Link href={ROUTES.INTERNAL.BLOG.POST(post.slug)}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
            {post.categoryName}
          </span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>
          <h3 className="mb-2 text-xl font-bold">
            <Link
              href={ROUTES.INTERNAL.BLOG.POST(post.slug)}
              className="hover:underline"
            >
              {post.title}
            </Link>
          </h3>
        </CardTitle>
        <CardDescription>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex items-center justify-between border-t p-6 pt-4">
        <div className="flex items-center gap-2">
          <UserIcon className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">{post.author}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CalendarIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">
              {post.readTime}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
