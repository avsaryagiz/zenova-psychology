import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugifyFn from "slugify";
import type { ContentBlock, ContentNodeChild } from "@/types/strapi-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get YouTube embed URL from a YouTube video URL.
 * @param url - The YouTube video URL (e.g., "https://www.youtube.com/watch?v=VIDEO_ID").
 * @returns - The YouTube embed URL (e.g., "https://www.youtube.com/embed/VIDEO_ID").
 */
export const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

/**
 * Format a duration string in ISO 8601 format to a human-readable format or total seconds.
 * @param duration - The duration string in ISO 8601 format (e.g., "PT1H30M15S").
 * @param options - Optional configuration object.
 * @param options.asSeconds - If true, return the total duration in seconds instead of a formatted string.
 * @returns - The formatted duration string (e.g., "01:30:15") or total seconds (e.g., 5415).
 * If the input string is not in a valid format, it returns "00:00:00" or 0.
 */
export function formatDuration(
  duration: string,
  options?: { asSeconds?: boolean },
): string | number {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  const matches = duration.match(regex);

  if (!matches) {
    return options?.asSeconds ? 0 : "00:00:00";
  }

  const hours = matches[1] ? parseInt(matches[1], 10) : 0;
  const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
  const seconds = matches[3] ? parseInt(matches[3], 10) : 0;

  if (options?.asSeconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Capitalize the first letters of each word in a string and uppercase the last word
 * @param str - The input string to format
 * @returns - The formatted string with capitalized first letters and uppercase last word
 */
export function formatName(str: string) {
  if (!str) return str;
  const words = str.trim().split(" ");
  const lastWord = words.pop()?.toUpperCase();
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return [...capitalizedWords, lastWord].join(" ");
}

/**
 * Format phone number to remove spaces and special characters
 * @param phone
 * @returns Formatted phone number string
 */
export function formatPhoneNumber(phone: string) {
  if (!phone || typeof phone !== "string") return "";

  const cleanedPhone = phone.trim().replace(/\s+/g, "");
  return cleanedPhone.startsWith("+")
    ? cleanedPhone.substring(1)
    : cleanedPhone;
}

/**
 * Format date string to human readable format
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("tr-TR", options);
}

export function isExternalPath(path: string) {
  return (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("sms:")
  );
}

export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhoneNumber(phone: string) {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
}

export function slugify(str: string) {
  return slugifyFn(str, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
}

/**
 * Generate a description from content blocks
 * @param content - Array of content blocks
 * @param maxLength - Maximum length of the description
 * @returns - Generated description string
 */
export function generateDescription(
  content: ContentBlock[],
  maxLength = 300,
): string {
  const texts: string[] = [];

  function extractText(children: ContentNodeChild[]) {
    for (const child of children) {
      if (child.type === "text" && child.text) {
        texts.push(child.text);
      } else if ("children" in child && Array.isArray(child.children)) {
        extractText(child.children);
      }
    }
  }

  for (const block of content) {
    if ("children" in block && Array.isArray(block.children)) {
      if (
        Array.isArray(block.children) &&
        block.children.every((child) => "type" in child)
      ) {
        extractText(block.children as ContentNodeChild[]);
      }
    }
  }

  const fullText = texts.join(" ").replace(/\s+/g, " ").trim();
  return fullText.slice(0, maxLength);
}

/**
 * Calculate the reading time of content blocks
 * @param content - Array of content blocks
 * @param wordsPerMinute - Number of words read per minute (default: 200)
 * @return - Estimated reading time in minutes
 */
export function calculateReadingTime(
  content: ContentBlock[],
  wordsPerMinute = 200,
): number {
  let totalWords = 0;

  function extractWords(children: ContentNodeChild[]) {
    for (const child of children) {
      if (child.type === "text" && child.text) {
        totalWords += child.text.trim().split(/\s+/).length;
      } else if ("children" in child && Array.isArray(child.children)) {
        extractWords(child.children);
      }
    }
  }

  for (const block of content) {
    if ("children" in block && Array.isArray(block.children)) {
      if (block.children.every((child) => "type" in child && "text" in child)) {
        extractWords(block.children as ContentNodeChild[]);
      }
    }
  }

  return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
}

/**
 * Format key to human readable format
 */

export function formatKey(key: string) {
  return key
    .trim()
    .toLowerCase()
    .replace(/[_\-.\s]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const getImageSizes = () => {
  return "(max-width: 768px) 100vw, (max-width: 1024px) 64rem, 64rem";
};
