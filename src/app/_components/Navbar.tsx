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
  SheetFooter,
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
        className="fixed top-0 flex w-full flex-col justify-between bg-white"
      >
        <NavigationMenuList className="flex h-full w-full list-none flex-col">
          <p className="w-screen bg-secondary py-1 text-center text-primary opacity-100">
            Bienvenidx a nuestra tienda online!
          </p>
          <div className="flex h-16 w-full list-none items-center justify-between px-2">
            <Sheet>
              <SheetTrigger
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none  disabled:opacity-50 md:hidden"
                aria-label="menu"
              >
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
              <SheetContent side={"left"} className="flex w-[85%] flex-col ">
                <SheetTitle className="text-center">
                  <SheetClose asChild>
                    <Link href="/">
                      <span className="cursor-pointer text-nowrap font-logo font-normal text-primary">
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
                          <span className="text-nowrap text-lg">{item.title}</span>
                        </Link>
                      </SheetClose>
                    </Button>
                  ))}
                </SheetHeader>
                <SheetFooter className="flex flex-row justify-evenly">
                  <a
                    href="https://www.instagram.com/cruelsummer.ind/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 2500 2500"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="25"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <defs>
                          <radialGradient
                            id="0"
                            cx="332.14"
                            cy="2511.81"
                            r="3263.54"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".09" stopColor="#fa8f21"></stop>
                            <stop offset=".78" stopColor="#d82d7e"></stop>
                          </radialGradient>
                          <radialGradient
                            id="1"
                            cx="1516.14"
                            cy="2623.81"
                            r="2572.12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="#8c3aaa"></stop>
                          </radialGradient>
                        </defs>
                        <path
                          d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                          fill="url(#0)"
                        ></path>
                        <path
                          d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                          fill="url(#1)"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a href="https://wa.me/5491134060366" target="_blank" rel="noopener noreferrer">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 360 362"
                      className="mr-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                        fill="#25D366"
                      />
                    </svg>
                  </a>
                </SheetFooter>
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
                <Cart />
              </NavigationMenuItem>
            </div>
          </div>
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
