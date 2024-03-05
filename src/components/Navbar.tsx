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
  Link,
} from "@chakra-ui/react";

// Icons
import { FaGithub } from "react-icons/fa";

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
            <Link
              href="https://github.com/durpyneko/kikuri-web"
              target="_blank"
              position={"fixed"}
              right={0}
              p={2}
            >
              <FaGithub fontSize={"26px"} />
            </Link>
          </TabList>
        </Center>
      </Tabs>
    </Box>
  );
}
