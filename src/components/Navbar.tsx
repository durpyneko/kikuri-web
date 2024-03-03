// React
import NextLink from "next/link";

// Chakra
import {
  Center,
  Tab,
  Tabs,
  TabList,
  TabIndicator,
  useTheme,
  Box,
} from "@chakra-ui/react";

export default function Navbar() {
  const theme = useTheme();
  return (
    <Box marginBottom={2}>
      <Tabs position="relative" variant="unstyled">
        <Center>
          <TabList>
            <NextLink href="/">
              <Tab>Home</Tab>
            </NextLink>
            <NextLink href="/about">
              <Tab>About</Tab>
            </NextLink>
            <NextLink href="/blog">
              <Tab>Blog</Tab>
            </NextLink>
          </TabList>
        </Center>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg={theme.colors.accent}
          borderRadius="1px"
        />
      </Tabs>
    </Box>
  );
}
