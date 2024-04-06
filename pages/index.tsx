import Image from "next/image";
import { Inter } from "next/font/google";
import { color } from "framer-motion";
import Homes from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p className="text-2xl bg-white"> </p>
      <Homes>
      </Homes>
    </>
  );
}
