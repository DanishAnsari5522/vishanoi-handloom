import React from "react";
import { Link, Divider } from "@nextui-org/react";
export const Footer = () => {
  return (
    <>
      <div className="bg-black py-4">
        <div className="container mx-auto px-5">
          <div className="flex flex-row items-center gap-4 justify-center">
            <Link href="/" className="text-white underline">Home</Link>
            <Link href="/aboutUs" className="text-white underline">About</Link>
            <Link href="/contactUs" className="text-white underline">Contact</Link>
            <Link href="/newProduct" className="text-white underline">Product</Link>
          </div>

          <Divider className="my-4 bg-white" />
          <div>
            <p className="text-center text-white">Copyright © 2024 Vishnoi Handloom
            </p>
          </div>
        </div>
        <div>

        </div>
      </div>

    </>
  );
};
