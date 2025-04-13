"use client";
import { SearchIcon } from "@/components/icons";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import { Category, Post } from "@/types/strapi_types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IPostFilterSectionProps {
  categories: Category[];
  activeCategory: string;
  posts: Post[];
}

export default function PostFilterSection({
  categories,
  activeCategory,
}: IPostFilterSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    activeCategory ? activeCategory : "Tüm Kategoriler",
  );
  const router = useRouter();
  return (
    <section className="border-t py-8 shadow-inner">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <label htmlFor="category-filter" className="text-sm font-medium">
              Kategori:
            </label>
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                router.push(
                  value === "Tüm Kategoriler"
                    ? ROUTES.INTERNAL.BLOG.CATEGORY("tum-kategoriler")
                    : ROUTES.INTERNAL.BLOG.CATEGORY(value),
                );
              }}
            >
              <SelectTrigger
                id="category-filter"
                className="w-full md:w-[200px]"
              >
                <SelectValue placeholder="Kategori Seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tum-kategoriler" className="capitalize">
                  Tüm Kategoriler
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category.slug}
                    value={category.slug}
                    className="capitalize"
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full md:w-[300px]">
            <Input
              type="search"
              placeholder="Blog yazısı ara..."
              className="pr-10"
            />
            <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
