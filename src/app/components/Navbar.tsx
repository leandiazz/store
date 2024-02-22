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
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Cart } from "./Cart";

export default function Navbar() {
  const user = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50">
      <header className="relative bg-white">
        <div className="flex justify-between md:ml-8">
          <div className="flex justify-between md:hidden">
            <Sheet>
              <SheetTrigger className="ml-3">Productos</SheetTrigger>
              <SheetContent
                side={"left"}
                className="flex h-full w-full flex-col "
              >
                <SheetHeader>
                  <ul className="mt-20 flex flex-col gap-4 text-3xl">
                    <Link href="#">Vestidos</Link>
                    <Link href="#">Faldas</Link>
                    <Link href="#">Tops</Link>
                    <Link href="#">Pantalones</Link>
                    <Link href="#">Remerones</Link>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/*  LOGO  */}
          <Link href="/">
            <p className="p-1 text-2xl ">Cruel Summer</p>
          </Link>

          <div className="flex justify-between md:hidden">
            <Sheet>
              <SheetTrigger className="mr-3">Abrir</SheetTrigger>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <NavigationMenu className="z-50 hidden md:block md:self-stretch">
            <NavigationMenuList>
              {/* PRODUCTS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-0 sm:w-auto">
                  <ul className="grid w-max grid-cols-1 p-1">
                    <ListItem href="#" title="Vestidos" />
                    <ListItem href="#" title="Faldas" />
                    <ListItem href="#" title="Pantalones" />
                    <ListItem href="#" title="Remerones" />
                    <ListItem href="#" title="Tops" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/*  USER */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </NavigationMenuLink>
                </Link>
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
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-200",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
