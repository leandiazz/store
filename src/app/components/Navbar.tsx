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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DropdownProductos: { title: string; href: string }[] = [
  { title: "Vestidos", href: "/" },
  { title: "Faldas", href: "/" },
  { title: "Pantalones", href: "/" },
  { title: "Remerones", href: "/" },
  { title: "Tops", href: "/" }
];
const DropdownUser: { title: string; href: string }[] = [
  { title: "Crear cuenta", href: "/" },
  { title: "Iniciar sesion", href: "/" }
];

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <Link
        href="/"
        className="block select-none p-3 leading-none font-medium hover:bg-purple-200 "
      >
        Cruel Summer
      </Link>

      {/* Vista celular */}

      {/* Vista dispositivo grande */}
      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          {/* USER MENU */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-white">usuario</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="flex flex-col gap-3 p-4 w-40 ">
                {DropdownUser.map(component => (
                  <ListItem key={component.title} title={component.title} href={component.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* PRODUCTS MENU */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>productos</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid grid-cols-2 gap-3 p-4 w-72">
                {DropdownProductos.map(component => (
                  <ListItem key={component.title} title={component.title} href={component.href} />
                ))}
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

          {/* Search */}

          <Popover>
            <PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
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
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>

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
        <NavigationMenuViewport className="bg-white" />
      </NavigationMenu>
    </header>
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-200",
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
