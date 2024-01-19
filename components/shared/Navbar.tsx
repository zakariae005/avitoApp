// Navbar.js

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaPlusSquare } from "react-icons/fa";
import { NavbarLinks } from "@/constants";
import MobileNav from "./MobileNav";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full border-b border-gray-300 bg-white p-4 text-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/avito.svg"
            alt="logo"
            width={100}
            height={100}
            className="md:mt-2"
          />
        </Link>
        <div className="hidden space-x-4 md:flex">
          {NavbarLinks.map((link) => (
            <Link href={link.route} key={link.route}>
              <p className="hover:text-gray-500">{link.value}</p>
            </Link>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <Button className="bg-white text-gray-800 hover:bg-gray-200">
              Se Connecter
            </Button>
          </Link>
          <Link href="/publier-annonce">
            <Button className="bg-red-500 text-white hover:bg-red-600">
              <FaPlusSquare className="mr-2" />
              Publier une annonce
            </Button>
          </Link>
          <UserButton afterSignOutUrl="/"/>
        </div>
        {/* Show the MobileNav only on small devices */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
