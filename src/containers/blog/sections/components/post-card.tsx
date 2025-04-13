import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import {
  Badge,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import {
  calculateReadingTime,
  formatDate,
  generateDescription,
} from "@/lib/utils";
import { Post } from "@/types/strapi_types";
import Image from "next/image";
import Link from "next/link";

interface IPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: IPostCardProps) {
  return (
    <Card className="overflow-hidden w-full border p-0">
      <div className="relative aspect-[16/9] cursor-pointer overflow-hidden">
        <Link href={ROUTES.INTERNAL.BLOG.POST(post.slug)}>
          <Image
            src={post.cover_image.url || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Badge key={category.slug} variant="primary">
              <Link href={ROUTES.INTERNAL.BLOG.CATEGORY(category.slug)}>
                {category.name}
              </Link>
            </Badge>
          ))}
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
        <CardDescription className="">
          <p className="text-muted-foreground line-clamp-4">
            {generateDescription(post.content)}
            ...
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex items-center justify-between border-t p-4">
        <div className="flex gap-2">
          <UserIcon className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-sm">
            {post.expert.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <CalendarIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <div className="flex gap-1">
            <ClockIcon className="text-muted-foreground size-4" />
            <span className="text-muted-foreground text-sm">
              {calculateReadingTime(post.content)}dk
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
