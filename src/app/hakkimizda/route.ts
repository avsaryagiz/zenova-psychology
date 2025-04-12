import { redirect } from "next/navigation";
import { ROUTES } from "@/config/routes";

export async function GET() {
  redirect(ROUTES.INTERNAL.ABOUT.WHO_WE_ARE);
}
