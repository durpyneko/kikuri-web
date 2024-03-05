// React
import { useEffect, useState } from "react";

// Chakra
import { Box, Center, Link, Text, useTheme } from "@chakra-ui/react";

export default function Footer() {
  const theme = useTheme();

  const [randomKaomoji, setRandomKaomoji] = useState("");

  const date = new Date();

  const kaomojis = [
    "/ᐠ •ヮ• マ Ⳋ",
    "^•ﻌ•^ฅ♡",
    "/ᐠ_ ꞈ _ᐟ\\",
    "≽^- ˕ -^≼",
    "- ˕ •マ",
    "≽^•⩊•^≼",
    "/ᐠ - ⩊ -マ Ⳋ",
    "≽ ^ • ⩊ • ^ ≼",
    "/ᐠ. .ᐟ\\ฅ",
    "ฅ/ᐠ˶> ﻌ<˶ᐟ\\ฅ",
    "/ᐠﹷ ‸ ﹷ ᐟ\\ﾉ",
    "(≽^╥⩊╥^≼)",
  ];

  useEffect(() => {
    setRandomKaomoji(kaomojis[Math.floor(Math.random() * kaomojis.length)]);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Center>
        <Text bg={theme.colors.accent} borderTopRadius={10} px={3} py={1}>
          <Box as={"span"} mr={2}>
            &#169;{" "}
            <Link href="https://durpy.dev" target="_blank">
              durpyneko
            </Link>{" "}
            {date.getFullYear()}
          </Box>
          |
          <Box as={"span"} ml={2}>
            {randomKaomoji}
          </Box>
        </Text>
      </Center>
    </Box>
  );
}
