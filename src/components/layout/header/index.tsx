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
