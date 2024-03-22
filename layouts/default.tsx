import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
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
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
