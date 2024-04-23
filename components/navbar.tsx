import React from "react";
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
// import VishnoiLogo from "../public/assets/Images/VishnoiLogo.png"

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        <NavbarItem>
          <Link color="foreground" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
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



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
