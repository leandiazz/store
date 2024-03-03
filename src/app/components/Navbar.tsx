"use client";

import {
  SheetTrigger,
  SheetHeader,
  SheetContent,
  SheetClose,
  Sheet,
} from "@/components/ui/sheet";
import {
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuIndicator,
  NavigationMenuContent,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Cart } from "./Cart";
import { FavsLogo, MenuLogo, UserLogo } from "@/lib/Logos";
import { Button } from "@/components/ui/button";

const items: { href: string; title: string; id: number }[] = [
  {
    href: "/productos",
    title: "Todos los productos",
    id: 1,
  },
  {
    href: "/productos?q=vestidos",
    id: 2,
    title: "Vestidos",
  },
  {
    href: "/productos?q=faldas",
    id: 3,
    title: "Faldas",
  },
  {
    href: "/productos?q=tops",
    id: 4,
    title: "Tops",
  },
  {
    href: "/productos?q=pantalones",
    id: 5,
    title: "Pantalones",
  },
  {
    href: "/productos?q=remerones",
    id: 6,
    title: "Remerones",
  },
];

export default function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-white py-2">
      <div className="md:px-20">
        <header className="relative">
          <div className="flex justify-between ">
            {/* MOBILE NAV */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="h-10 max-w-max rounded-md p-2 pb-1 pl-4 pr-4 pt-1 hover:bg-accent focus-visible:outline-none">
                  <MenuLogo />
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="flex h-full w-full flex-col "
                >
                  <SheetHeader>
                    <ul className="mt-20 flex flex-col gap-4 text-3xl">
                      {items.map((item) => (
                        <Button asChild key={item.id} variant={"ghost"}>
                          <Link
                            href={item.href}
                            aria-label={`seccion ${item.title}`}
                          >
                            <SheetClose>{item.title}</SheetClose>
                          </Link>
                        </Button>
                      ))}
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

            {/*  LOGO  */}
            <Link href="/" aria-label="pagina de inicio">
              <p className="mt-1 text-2xl">Cruel Summer</p>
            </Link>

            <div className="flex md:hidden">
              <Cart />
            </div>

            {/* DESKTOP NAV */}
            <NavigationMenu className="z-50 hidden md:block">
              <NavigationMenuList>
                {/* PRODUCTS */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-[180px] flex-col items-center py-1">
                    {items.map((item) => {
                      return (
                        <Link
                          href={item.href}
                          key={item.id}
                          legacyBehavior
                          passHref
                          aria-label={`seccion ${item.title}`}
                        >
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "mx-2 my-1 w-[170px] hover:bg-purple-200",
                            )}
                          >
                            <h4>{item.title}</h4>
                          </NavigationMenuLink>
                        </Link>
                      );
                    })}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* CART */}
                <NavigationMenuItem>
                  <Cart />
                </NavigationMenuItem>

                <NavigationMenuIndicator />
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>
        </header>
      </div>
    </div>
  );
}
