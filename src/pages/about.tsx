// Chakra
import Header from "@/components/Header";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

// Misc
import { LoremIpsum } from "lorem-ipsum";

export default function About() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  const text = lorem.generateParagraphs(1);
  return (
    <>
      <Header header="About" />
      <Center>
        <Flex maxW={"70vw"}>
          <Box>
            <Text>{text}</Text>
          </Box>
        </Flex>
      </Center>
    </>
  );
}
