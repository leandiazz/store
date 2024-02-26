"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Cart } from "./Cart";

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
  const user = null;
  const favorites = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-white py-2">
      <header className="relative">
        <div className="flex justify-between md:ml-8">
          <div className="flex justify-between md:hidden">
            <Sheet>
              <SheetTrigger className="h-10 max-w-max rounded-md p-2 pb-1 pl-4 pr-4 pt-1 hover:bg-accent focus-visible:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="flex h-full w-full flex-col "
              >
                <SheetHeader>
                  <ul className="mt-20 flex flex-col gap-4 text-3xl">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        aria-label={`seccion ${item.title}`}
                      >
                        <SheetClose>{item.title}</SheetClose>
                      </Link>
                    ))}
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/*  LOGO  */}
          <Link href="/" aria-label="inicio de web">
            <p className="mt-1 text-2xl">Cruel Summer</p>
          </Link>

          <div className="flex justify-between md:hidden">
            <Cart />
          </div>
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
                            "mx-2 my-1 w-[160px] hover:bg-purple-200",
                          )}
                        >
                          <p>{item.title}</p>
                        </NavigationMenuLink>
                      </Link>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*  USER */}
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                  aria-label="autenticacion de usuario"
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  aria-label="productos favoritos"
                  className="h-10 max-w-max rounded-md  p-2 pb-1 pl-4 pr-4 pt-1 hover:bg-accent focus-visible:outline-none"
                >
                  <p className="absolute ml-[10px] mt-[3px] text-xs">
                    <small className="text-white">{favorites}</small>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    fill={favorites !== null ? "1" : "none"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </button>
              </NavigationMenuItem>

              {/* SHIPPING CART */}
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
  );
}
