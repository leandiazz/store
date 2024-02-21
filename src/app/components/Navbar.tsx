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
  NavigationMenuViewport
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="py-1 flex items-center justify-between">
      <Link href="/">
        <p className="text-xl px-2 ml-1">Cruel Summer</p>
      </Link>
      <p>Barra de busqueda</p>
      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          {/*  */}
          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
              <ul className="w-[125px] p-1">
                <ListItem href="#" title="Crear cuenta" />
                <ListItem href="#" title="Iniciar sesion" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/*  */}

          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-0 left-0 sm:w-auto">
              <ul className="w-[300px] grid grid-cols-2 p-1">
                <ListItem href="#" title="Vestidos" />
                <ListItem href="#" title="Faldas" />
                <ListItem href="#" title="Pantalones" />
                <ListItem href="#" title="Remerones" />
                <ListItem href="#" title="Tops" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Contact */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                contacto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Cart */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart"
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
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-200",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
