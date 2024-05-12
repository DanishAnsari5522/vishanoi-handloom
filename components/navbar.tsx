import React from "react";
import { useState } from "react";
// import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button,Image } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
// import VishnoiLogo from "../public/assets/Images/VishnoiLogo.png"

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "Contact",
    "PRODUCTS"

  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="https://res.cloudinary.com/dbz8cdpis/image/upload/v1715529332/vtests_uhaf80.png" alt="My Image" width={100} height={100}
          />

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end" style={{fontFamily:'font-thin'}}>
        <NavbarBrand>
          <Image
            src="https://res.cloudinary.com/dbz8cdpis/image/upload/v1715529332/vtests_uhaf80.png" alt="My Image" width={120} height={120}
          />
        </NavbarBrand>
        <NavbarItem onClick={() => (setIsMenuOpen(true))}>

          <Link color="foreground" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/aboutUs" >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactUS">
            CONTACT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/newProduct">
            PRODUCT
          </Link>
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu
        // isMenuOpen={isMenuOpen as boolean}
        // onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarItem>
          <Link color="foreground" href="/" onClick={() => (setIsMenuOpen(false))}>
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/aboutUs" onClick={() => (setIsMenuOpen(false))}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactUS" onClick={() => (setIsMenuOpen(false))}>
            CONTACT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/newProduct" onClick={() => (setIsMenuOpen(false))} >
            PRODUCT
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
