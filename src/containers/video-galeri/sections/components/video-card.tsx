"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import YoutubeIcon from "@/components/icons/youtube-icon";
import { PlayIcon, YoutubeShortsIcon } from "@/components/icons";
import { formatDuration } from "@/lib/utils";
import type { UnifiedVideo } from "@/types/strapi-types";

export default function VideoCard({
  video,
  onPlay,
}: {
  video: UnifiedVideo;
  onPlay: () => void;
}) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(video.publish_date);
    const localized = date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setFormattedDate(localized);
  }, [video.publish_date]);

  return (
    <Card className="h-full gap-0 overflow-hidden border py-0">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnailURL || "/images/home/hero/profesyonel-destek.jpg"}
          alt={video.title}
          width={640}
          height={480}
          className="aspect-video object-cover transition-transform duration-300 hover:scale-105"
        />
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100"
          onClick={onPlay}
        >
          <Button
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <PlayIcon className="size-6" />
          </Button>
        </div>
        {video.duration ? (
          <div className="absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
            {formatDuration(video.duration)}
          </div>
        ) : null}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-3 text-lg">{video.title}</CardTitle>
        <CardDescription className="mt-1 line-clamp-3 text-sm">
          {video.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex items-center justify-between p-4 pt-0">
        <div className="text-muted-foreground text-xs">{formattedDate}</div>
        <a href={video.url} target="_blank" rel="noopener noreferrer">
          {video.duration ? (
            +formatDuration(video.duration, { asSeconds: true }) > 180 ? (
              <YoutubeIcon className="text-youtube size-6" />
            ) : (
              <YoutubeShortsIcon className="text-youtube size-6" />
            )
          ) : (
            <YoutubeIcon className="text-youtube size-6" />
          )}
        </a>
      </CardFooter>
    </Card>
  );
}
