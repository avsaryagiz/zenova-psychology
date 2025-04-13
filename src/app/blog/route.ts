import { ROUTES } from "@/config/routes";
import { redirect } from "next/navigation";

export async function GET() {
  redirect(ROUTES.INTERNAL.BLOG.CATEGORY());
}
