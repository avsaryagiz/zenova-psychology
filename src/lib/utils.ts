import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string) {
  if (!phone || typeof phone !== "string") return "";

  const cleanedPhone = phone.trim().replace(/\s+/g, "");
  return cleanedPhone.startsWith("+")
    ? cleanedPhone.substring(1)
    : cleanedPhone;
}
