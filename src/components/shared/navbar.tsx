"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="mx-auto max-w-screen-xl bg-background p-4 text-text"
      ref={navRef}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" onClick={handleNavClick}>
          <Image src="/logo.png" alt="SWIFTWAVE.AI Logo" width={140} height={140} />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-16 z-[100] w-full space-y-4 bg-background p-4 text-center text-sm md:static md:flex md:w-auto md:items-center md:space-x-10 md:space-y-0 md:bg-background md:p-0`}
        >
          <Link
            href="/"
            className="group relative block py-2 md:inline-block"
            onClick={handleNavClick}
          >
            <span className="relative">
              Home
              <span
                className={`absolute -bottom-2 left-0 h-0.5 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"} bg-primary transition-all duration-300`}
              ></span>
            </span>
          </Link>
          <Link
            href="/apps"
            className="group relative block py-2 md:inline-block"
            onClick={handleNavClick}
          >
            <span className="relative">
              Apps
              <span
                className={`absolute -bottom-2 left-0 h-0.5 ${pathname.includes("/apps") ? "w-full" : "w-0 group-hover:w-full"} bg-primary transition-all duration-300`}
              ></span>
            </span>
          </Link>
          <Link
            href="/pricing"
            className="group relative block py-2 md:inline-block"
            onClick={handleNavClick}
          >
            <span className="relative">
              Pricing
              <span
                className={`absolute -bottom-2 left-0 h-0.5 ${pathname.includes("/pricing") ? "w-full" : "w-0 group-hover:w-full"} bg-primary transition-all duration-300`}
              ></span>
            </span>
          </Link>
          <Link
            href="/contact-us"
            className="group relative block py-2 md:inline-block"
            onClick={handleNavClick}
          >
            <span className="relative">
              Contact us
              <span
                className={`absolute -bottom-2 left-0 h-0.5 ${pathname.includes("/contact") ? "w-full" : "w-0 group-hover:w-full"} bg-primary transition-all duration-300`}
              ></span>
            </span>
          </Link>
          <button
            className="block w-full rounded-md border-2 border-accent px-4 py-2 text-center text-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D2AC47] hover:via-[#F7EF8A] hover:to-[#AE8625] hover:text-black md:inline-block md:w-auto"
            onClick={handleNavClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
