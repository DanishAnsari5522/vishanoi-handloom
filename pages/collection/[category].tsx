import Image from "next/image";
import { Inter } from "next/font/google";
import { color } from "framer-motion";
import { useRouter } from 'next/router';
import Collection from "@/components/home/collection";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
    const router = useRouter()
    return (
        <>
            <Collection category={router.query.category} />
        </>
    );
}
