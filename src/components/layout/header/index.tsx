"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import HeaderBanner from "./header-banner";
import HeaderSearch from "./header-search";
import HeaderNav from "./header-nav";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "@/components/icons";
import { SOCIAL_MEDIA_ROUTES } from "@/config/social-media-routes";
import Image from "next/image";
import LogoType from "/public/images/logo/zenova-logo-type.png";
import LogoMark from "/public/images/logo/zenova-logo-mark.png";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="flex flex-col">
      <HeaderBanner />
      <div className="border-b py-4">
        <div className="container flex items-center justify-between">
          <Link href={ROUTES.INTERNAL.HOME}>
            <Image
              src={LogoType}
              priority
              alt="Zenova Psikoloji Logo"
              className="h-16 w-auto max-sm:hidden"
            />

            <Image
              src={LogoMark}
              priority
              alt="Zenova Psikoloji Logo"
              className="hidden h-9 w-auto max-sm:block"
            />
          </Link>
          <div className="flex items-center gap-8 lg:gap-16">
            <a
              href={`tel:${SOCIAL_MEDIA_ROUTES.PHONE.trim()}`}
              className="flex items-center text-[#128c7e] transition-transform hover:scale-105 max-xl:flex-col max-xl:items-start max-md:hidden lg:gap-2"
            >
              <WhatsappIcon className="size-4 lg:size-9" />
              <h3 className="max-xl:text-xl">{SOCIAL_MEDIA_ROUTES.PHONE}</h3>
            </a>
            <Link
              className={cn(
                buttonVariants({ variant: "default", size: "custom" }),
                "max-sm:hidden",
              )}
              href={ROUTES.INTERNAL.APPOINTMENT}
            >
              Hemen Bir Randevu Al
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
      </div>

      {/* Sticky nav animation */}
      <AnimatePresence>
        {isSticky ? (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-background fixed top-0 right-0 left-0 z-50 w-full shadow-md"
          >
            <div className="container flex items-center justify-between gap-4 py-2">
              <HeaderNav />
              <HeaderSearch />
            </div>
          </motion.nav>
        ) : (
          <nav className="shadow-sm">
            <div className="container flex items-center justify-between gap-4 py-2">
              <HeaderNav />
              <HeaderSearch />
            </div>
          </nav>
        )}
      </AnimatePresence>
    </header>
  );
}
