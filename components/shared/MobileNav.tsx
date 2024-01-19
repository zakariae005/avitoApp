import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { NavbarLinks } from "@/constants";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FaBars className="text-2xl" />
      </SheetTrigger>
      <SheetContent side="left" className="h-screen bg-white p-4">
        <Link href="/">
          <Image
            src="/assets/images/avito.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex h-full flex-col gap-6 pt-16">
          <SheetClose>
            {NavbarLinks.map((link) => (
              <Link key={link.route} href={link.route}>
                <p className="flex items-center justify-start gap-4 bg-transparent p-4 text-gray-800">
                  {link.value}
                </p>
              </Link>
            ))}
          </SheetClose>
          <div className="mt-4 flex flex-col">
            <Link href="/">
              <Button className="bg-white text-gray-800 hover:bg-gray-200">
                Se Connecter
              </Button>
            </Link>
            <Link href="/">
              <Button className="mt-2 bg-red-500 text-white hover:bg-red-600">
                Create account
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
