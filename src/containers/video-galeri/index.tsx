"use client";

import { useState } from "react";
import VideoGridSection from "./sections/video-grid-section";
import SubscribeSection from "./sections/subscribe-section";
import HeroSection from "@/components/shared/hero-section";
import CTASection from "@/components/shared/cta-section";
import VideoModal from "./sections/video-modal";
import type { UnifiedVideo } from "@/types/strapi-types";

interface IVideoGalleryContainerProps {
  videos: UnifiedVideo[];
}

export default function VideoGalleryContainer({
  videos,
}: IVideoGalleryContainerProps) {
  const [selectedVideo, setSelectedVideo] = useState<UnifiedVideo | null>(null);

  return (
    <main className="flex flex-col">
      <HeroSection
        title="Video Galeri"
        description="Zenova Psikoloji'nin eğitim videoları, danışan deneyimleri ve merkez tanıtımlarını içeren video galerimize hoş geldiniz. Ruh sağlığı hakkında bilgilendirici içeriklerimizi keşfedin."
      />

      <VideoGridSection setSelectedVideo={setSelectedVideo} videos={videos} />
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
