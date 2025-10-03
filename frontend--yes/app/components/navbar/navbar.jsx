"use client";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuAktive = show ? "right-0" : "-right-full";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let scrollActive = scroll
    ? " text-black bg-white shadow"
    : "bg-transparent text-black";

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${scrollActive}`}
    >
      <div className="container mx-auto px-6 md:px-10 py-4 bg-white">
        <div className="navbarbox flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-xl font-bold">Learntera.id</h1>
          </div>

          {/* Menu */}
          <ul
            className={`flex lg:gap-8 md:static 
              md:flex-row md:shadow-none
              md:w-auto md:h-full md:translate-x-0 
              gap-6 fixed ${menuAktive} top-0 w-full h-full flex-col 
              py-10 px-6 shadow-lg bg-white  font-bold 
              duration-500 ease-in-out`}
          >
            {/* Close button mobile */}
            <i
              className="ri-close-line text-3xl absolute top-5 right-5 cursor-pointer md:hidden"
              onClick={handleClick}
            ></i>

            <li className="px-3 py-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="/" className="px-3 py-2 cursor-pointer">
                        About
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
             <li className="px-3 py-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="/page/Academic" className="px-3 py-2 cursor-pointer">
                        Find Academic
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li className="px-3 py-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="relative group px-3 py-2 text-black font-medium">
                      Information
                      {/* underline animasi */}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-row gap-6 p-6 bg-white text-black shadow-lg rounded-md">
                      <NavigationMenuLink asChild>
                        <a href="#product1" className="hover:underline">
                          About
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="#product2" className="hover:underline">
                          About
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
           
            <div className="md:hidden mt-6">
              <a
                href="/login"
                className="bg-amber-700 px-4 py-2  text-white font-bold hover:bg-amber-600 transition-all block text-center"
              >
                Login
              </a>
            </div>
          </ul>

          {/* Button Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/login"
              className="bg-amber-700 px-4 py-2  text-white font-bold hover:bg-amber-600 transition-all"
            >
              Login
            </a>
          </div>

          {/* Burger Menu */}
          <i
            className="ri-menu-3-line text-2xl md:hidden block cursor-pointer"
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
