// React
import NextLink from "next/link";

// Chakra
import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";

// Components
import SectionBox from "@/components/SectionBox";
import Header from "@/components/Header";

export default function Home() {
  const columnCounts = {
    base: 1, // On smaller screens
    sm: 1, // On small screens and above
    md: 2, // On medium screens and above
    lg: 3, // On large screens and above
  };
  return (
    <>
      <Header header="Home" />
      <Box>
        <Center>
          <Flex>
            <Grid
              templateColumns={{
                base: `repeat(${columnCounts.base}, 1fr)`,
                sm: `repeat(${columnCounts.sm}, 1fr)`,
                md: `repeat(${columnCounts.md}, 1fr)`,
                lg: `repeat(${columnCounts.lg}, 1fr)`,
              }}
            >
              <GridItem>
                <NextLink href={"/birthday"}>
                  <SectionBox title="Birthday 🍰" />
                </NextLink>
              </GridItem>
              <GridItem>
                <SectionBox title="Hello nya 2!" />
              </GridItem>
              <GridItem>
                <SectionBox title="Hello nya 3!" />
              </GridItem>
              <GridItem>
                <SectionBox title="Hello nya 4!" />
              </GridItem>
            </Grid>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
