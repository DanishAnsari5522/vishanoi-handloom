import type { AppProps } from "next/app";
// import { SiteProvider } from "@/context/SiteContext";
import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {/* <NextThemesProvider> */}
        {/* <SiteProvider> */}
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        {/* </SiteProvider> */}
      {/* </NextThemesProvider> */}
    </NextUIProvider>
  );
}
