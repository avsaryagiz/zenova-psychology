import { Button, buttonVariants } from "@/components/ui/button";
import HeaderNav from "./header-nav";
import HeaderBanner from "./header-banner";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import HeaderSearch from "./header-search";

export default function Header() {
  return (
    <header className="flex flex-col">
      <HeaderBanner />
      <div className="border-b py-4">
        <div className="container flex items-center justify-between">
          <h2>Zenova Psikoloji</h2>
          <Link
            className={cn(
              buttonVariants({ variant: "default", size: "custom" }),
              "max-sm:hidden",
            )}
            href={ROUTES.INTERNAL.APPOINTMENT}
          >
            Ücretsiz Bir Randevu Al
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "default", size: "custom" }),
              "sm:hidden",
            )}
            href={ROUTES.INTERNAL.APPOINTMENT}
          >
            Randevu Al
          </Link>
        </div>
      </div>
      <nav className="container flex justify-between py-2 gap-8">
        <HeaderNav />
        <HeaderSearch />
      </nav>
    </header>
  );
}
