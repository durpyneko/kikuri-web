// Chakra
import { extendTheme } from "@chakra-ui/react";

export const kikuri = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    background: "#181a1b",
    backgroundLight: "#25232d",
    accent: "#7c325b",
    accentDark: "#491d35",
    hover: "#491d35",
    link: "#ff6391",
  },
  components: {
    Button: {
      bg: "accent",
      _hover: { bg: "hover" },
    },
    Input: {
      bg: "background",
      _hover: { bg: "hover" },
      focusBorderColor: "accent",
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "background",
      },
      color: "white",
    },
  },
});
