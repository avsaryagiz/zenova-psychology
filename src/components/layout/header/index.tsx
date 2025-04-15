"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import LogoType from "/public/images/logo/zenova-logo-type.png";
import LogoMark from "/public/images/logo/zenova-logo-mark.png";
import { HeaderBanner, HeaderNav, HeaderWhatsapp } from "./components";
import { AppointmentButton } from "@/components/shared";
import { ROUTES } from "@/config/routes";

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
              className="h-16 w-auto max-lg:hidden"
            />

            <Image
              src={LogoMark}
              priority
              alt="Zenova Psikoloji Logo"
              className="hidden h-9 w-auto max-lg:block"
            />
          </Link>
          <div className="flex items-center gap-8 lg:gap-16">
            <HeaderWhatsapp className="max-md:hidden" />
            <AppointmentButton variant="header" />
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
              <HeaderWhatsapp />
            </div>
          </motion.nav>
        ) : (
          <nav className="border-b shadow-md">
            <div className="container flex items-center justify-between gap-4 py-2">
              <HeaderNav />
              <HeaderWhatsapp className="hidden max-md:flex" />
            </div>
          </nav>
        )}
      </AnimatePresence>
    </header>
  );
}
