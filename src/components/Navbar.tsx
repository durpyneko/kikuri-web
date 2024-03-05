// React
import NextLink from "next/link";

// Chakra
import {
  Center,
  Tab,
  Tabs,
  TabList,
  useTheme,
  Box,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box marginBottom={2}>
      <Tabs position="relative" variant="unstyled">
        <Center>
          <TabList>
            <NextLink href="/">
              <Tab
                _hover={{
                  color: theme.colors.accent,
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: `${theme.colors.accent} 2px solid` }}
              >
                Home
              </Tab>
            </NextLink>
            <NextLink href="/about">
              <Tab
                _hover={{
                  color: theme.colors.accent,
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: `${theme.colors.accent} 2px solid` }}
              >
                About
              </Tab>
            </NextLink>
            {/* <NextLink href="/blog">
              <Tab
                _hover={{
                  color: theme.colors.accent,
                  transition: "color 0.2s linear",
                  cursor: "pointer",
                }}
                _selected={{ borderBottom: `${theme.colors.accent} 2px solid` }}
              >
                Blog
              </Tab>
            </NextLink> */}
          </TabList>
        </Center>
      </Tabs>
    </Box>
  );
}
