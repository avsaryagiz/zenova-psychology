"use client";

import { useState } from "react";
import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";
import VideoGridSection from "./sections/video-grid-section";
import SubscribeSection from "./sections/subscribe-section";
import VideoModal from "./sections/video-modal";
import { FilterSection } from "./sections";
import { VIDEO_ITEMS } from "@/config/constants/videos-dummy-data";
import type { IVideoItem } from "@/types/shared-types";

export default function VideoGalleryContainer() {
  const [selectedCategory, setSelectedCategory] = useState("tum");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<IVideoItem | null>(null);

  // Filter videos based on category and search query
  const filteredVideos = VIDEO_ITEMS.filter((video) => {
    const matchesCategory =
      selectedCategory === "tum" || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex flex-col">
      <HeroSection
        title="Video Galeri"
        description=" Zenova Psikoloji'nin eğitim videoları, danışan deneyimleri ve
              merkez tanıtımlarını içeren video galerimize hoş geldiniz. Ruh
              sağlığı hakkında bilgilendirici içeriklerimizi keşfedin."
      />
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <VideoGridSection
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        setSelectedVideo={setSelectedVideo}
        videos={filteredVideos}
      />
      {selectedVideo && (
        <VideoModal
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      )}
      <SubscribeSection />
      <CTASection
        title="Profesyonel Destek İçin Yanınızdayız"
        description="Videolarımızda ele aldığımız konular hakkında profesyonel destek almak isterseniz, uzman ekibimiz size yardımcı olmak için hazır."
      />
    </main>
  );
}
