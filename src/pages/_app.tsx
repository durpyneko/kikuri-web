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

// Font
import { Noto_Sans_Mono } from "next/font/google";
const noto_sans_mono = Noto_Sans_Mono({ subsets: ["latin"] });

// App
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={kikuri}>
      <Analytics />
      <Box className={noto_sans_mono.className}>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
