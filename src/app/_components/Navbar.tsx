"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Cart from "../components/SideCart";
import React from "react";
import { cn } from "@/lib/utils";

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
    <header className="z-10 block h-16 w-full md:h-24">
      <NavigationMenu
        onValueChange={onNavChange}
        //   className="fixed top-0 flex h-16 w-full flex-col  bg-white px-2 md:h-24"
        // >
        //   <NavigationMenuList className="flex w-full list-none justify-between">
        className="fixed top-0 flex w-full flex-col justify-between bg-white"
      >
        <NavigationMenuList className="flex h-full w-full list-none flex-col">
          <p className="w-screen bg-secondary py-1 text-center text-primary">
            Bienvenidx a nuestra tienda online!
          </p>
          <div className=" flex h-16 w-full list-none items-center justify-between px-2">
            {/* Desde aca borrar al comentario de arriba */}
            <Sheet>
              <div className="md:hidden">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <SheetTrigger>
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
                </NavigationMenuLink>
              </div>
              <SheetContent side={"left"} className="flex w-[85%] flex-col ">
                <SheetTitle className="text-center">
                  <SheetClose asChild>
                    <Link href="/">
                      <span className="cursor-pointer font-logo font-normal text-primary">
                        CRUEL SUMMER
                      </span>
                    </Link>
                  </SheetClose>
                </SheetTitle>
                <SheetHeader className="mt-3 h-full items-center gap-2">
                  {items.map((item) => (
                    <Button asChild key={item.id} className="w-44" variant={"ghost"}>
                      <SheetClose asChild>
                        <Link href={item.href} aria-label={`seccion ${item.title}`}>
                          <span className="text-lg">{item.title}</span>
                        </Link>
                      </SheetClose>
                    </Button>
                  ))}
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <NavigationMenuItem className=" md:pl-12">
              <Link href="/" legacyBehavior passHref>
                <p className="cursor-pointer font-logo text-2xl text-primary md:text-3xl">
                  Cruel Summer
                </p>
              </Link>
            </NavigationMenuItem>
            <div className="flex">
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuTrigger className="submenu-trigger">Productos</NavigationMenuTrigger>
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
                            "mx-2 my-1 w-[170px] hover:bg-secondary",
                          )}
                        >
                          <h4>{item.title}</h4>
                        </NavigationMenuLink>
                      </Link>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="mr-auto md:pr-12">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Cart />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </div>
          {/* borrar div */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll('.submenu-trigger[data-state="open"]');
    if (triggers.length === 0) return;

    const firstTrigger = triggers[0] as HTMLElement;
    const viewports = document.getElementsByClassName("submenu-viewport");

    if (viewports.length > 0) {
      const viewport = viewports[0] as HTMLElement;
      viewport.style.left = `${firstTrigger.offsetLeft}px`;
    }
  });
}
