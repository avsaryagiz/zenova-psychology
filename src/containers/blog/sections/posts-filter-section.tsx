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
import { Category, Post } from "@/types/strapi-types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IPostFilterSectionProps {
  categories: Category[];
  activeCategory: string;
  posts: Post[];
  setFilteredPosts: (posts: Post[]) => void;
}

export default function PostFilterSection({
  categories,
  activeCategory,
  posts,
  setFilteredPosts,
}: IPostFilterSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    activeCategory ? activeCategory : "Tüm Kategoriler",
  );
  const [searchQuery, setSearchQuery] = useState<string>(""); // Arama sorgusu
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredPosts = posts.filter(
      (post) => post.title.toLowerCase().includes(query.toLowerCase()), // Başlıkta arama yapılıyor
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <section className="py-8">
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

          <div className="relative w-full rounded-md bg-white md:w-[300px]">
            <Input
              type="search"
              placeholder="Blog yazısı ara..."
              className="pr-10"
              value={searchQuery} // Arama sorgusunu Input'a yansıtıyoruz
              onChange={(e) => handleSearch(e.target.value)} // Arama sorgusu değiştiğinde handleSearch çalışır
            />
            <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
