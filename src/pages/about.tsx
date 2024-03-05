// Chakra
import { Box, Center, Flex, Text, Link, useTheme } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";

export default function About() {
  const theme = useTheme();
  return (
    <>
      <Header header="About" />
      <Center>
        <Flex maxW={"70vw"} direction={"column"} textAlign={"center"}>
          <Box p={4} bg={theme.colors.accent} borderRadius={10}>
            <Text>
              I made a website of / for{" "}
              <Link
                href="https://bocchi-the-rock.fandom.com/wiki/Kikuri_Hiroi"
                target="_blank"
                color={theme.colors.link}
              >
                Hiroi Kikuri
              </Link>
            </Text>
            <Text>
              Starting updates will be semi consistent being every or other day.
            </Text>
          </Box>
          <Box mt={5}>{/* add space */}</Box>
          <Box p={4} bg={theme.colors.accent} borderRadius={10}>
            <Text>
              Click{" "}
              <Link
                href="https://durpy.dev"
                target="_blank"
                color={theme.colors.link}
              >
                here
              </Link>{" "}
              for my portfolio / main website.
            </Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
}
