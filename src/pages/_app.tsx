// React
import * as React from "react";

// Next
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

// Chakra
import { Box, ChakraProvider } from "@chakra-ui/react";
import { kikuri } from "@/lib/theme";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font
import { Noto_Sans_Mono } from "next/font/google";
const noto_sans_mono = Noto_Sans_Mono({ subsets: ["latin"] });

// App
const helloConsole = [
  "color: purple",
  "font-size: 16px",
  "font-weight: bold",
  "font-family: monospace",
  "background-color: pink",
  "padding: 10px",
  "border: 2px solid purple",
].join(";");

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("%cHello there! ", helloConsole);
  });
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={kikuri}>
      <Analytics />
      <Box className={noto_sans_mono.className}>
        <Navbar />
        <Component {...pageProps} />
        <Box mt={50}>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
