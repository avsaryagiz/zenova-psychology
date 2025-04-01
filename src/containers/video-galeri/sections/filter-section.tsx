import { SearchIcon } from "@/components/icons";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import React from "react";

interface FilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function FilterSection({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}: FilterSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <label htmlFor="category-filter" className="text-sm font-medium">
              Kategori:
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                id="category-filter"
                className="w-full md:w-[200px]"
              >
                <SelectValue placeholder="Kategori Seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tum">Tüm Videolar</SelectItem>
                <SelectItem value="egitim">Eğitim Videoları</SelectItem>
                <SelectItem value="tanitim">Tanıtım Videoları</SelectItem>
                <SelectItem value="deneyim">Danışan Deneyimleri</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full md:w-[300px]">
            <Input
              type="search"
              placeholder="Video ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <SearchIcon className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
