import React, { useEffect, useState } from "react";
import Navbars from "@/components/navbar";
// import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Footer } from "./footer";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head />
            <Navbars />
            <main>{children}</main>
            <Footer />
        </>
    );
}
