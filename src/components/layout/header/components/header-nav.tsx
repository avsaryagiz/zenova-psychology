"use client";

import { forwardRef, useState } from "react";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoType from "/public/images/logo/zenova-logo-type.png";
import { MenuIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import SocialLinks from "../../social-links";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";
import { MENUS } from "@/config/menus";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu (visible on screens smaller than lg) */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px]">
            <SheetHeader className="flex items-center justify-between border-b px-8 pt-4 pb-1">
              <SheetTitle className="text-lg font-medium">
                <Link href={ROUTES.INTERNAL.HOME} className="font-heading">
                  <Image
                    src={LogoType}
                    priority
                    alt="Zenova Psikoloji Logo"
                    className="h-12 w-auto"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4 px-8">
              {MENUS.HEADER.map((menu) =>
                menu.children?.length ? (
                  <Accordion
                    key={menu.key}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value={menu.key}>
                      <AccordionTrigger className="justify-start gap-2 py-0 text-sm leading-tight font-medium">
                        {menu.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 pt-4 pl-4">
                          {menu.children.map((item) => (
                            <Link
                              key={item.key}
                              href={item.path}
                              className="hover:text-primary py-2 text-sm"
                              onClick={() => setOpen(false)}
                            >
                              <div className="font-medium">{item.label}</div>
                              <p className="text-muted-foreground text-xs">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={menu.key}
                    href={menu.path}
                    className="hover:text-primary font-heading text-sm font-medium"
                    title={menu.title}
                    onClick={() => setOpen(false)}
                  >
                    {menu.label}
                  </Link>
                ),
              )}
            </div>
            <SheetFooter className="items-center border-t pt-6 pb-6">
              <SocialLinks />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu (visible only on lg screens and above) */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            {MENUS.HEADER.map((menu) =>
              menu.children?.length ? (
                <NavigationMenuItem key={menu.key}>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    {menu.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 max-xl:p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menu.children.map((item) => (
                        <ListItem
                          key={item.key}
                          title={item.label}
                          href={item.path}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={menu.key}>
                  <Link
                    href={menu.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full text-left",
                    )}
                    title={menu.title}
                  >
                    {menu.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-accent-description line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
