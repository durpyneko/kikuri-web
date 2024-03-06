// Chakra
import { Center, Image, Text, Link, VStack } from "@chakra-ui/react";

// Next
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Center>
        <VStack>
          <Link href="/">
            <Text fontSize={"4xl"}>return to home?</Text>
          </Link>
          <Image
            alt="404"
            src="https://http.cat/images/404.jpg"
            w={{ base: "80vw", md: "40vw" }}
          />
        </VStack>
      </Center>
    </>
  );
}
