import React from "react";
import { useState } from "react";
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
// import VishnoiLogo from "../public/assets/Images/VishnoiLogo.png"

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
            src="/assets/Images/Vtests.png" alt="My Image" width={20} height={20}
          />

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Image
            src="/assets/Images/Vtests.png" alt="My Image" width={120} height={120}
          />
        </NavbarBrand>
        <NavbarItem onClick={()=>(setIsMenuOpen(true))}>

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
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} >
        <NavbarItem>
          <Link color="foreground" href="/" onClick={()=>(setIsMenuOpen(false))}>
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/aboutUs" onClick={()=>(setIsMenuOpen(false))}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactUS" onClick={()=>(setIsMenuOpen(false))}>
            CONTACT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/newProduct" onClick={()=>(setIsMenuOpen(false))}>
            PRODUCT
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
