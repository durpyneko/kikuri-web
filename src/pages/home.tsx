// React
import NextLink from "next/link";

// Chakra
import { Box, Center, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

// Components
import SectionBox from "@/components/SectionBox";
import Header from "@/components/Header";

export default function Home() {
  const columnCounts = {
    base: 1, // On smaller screens
    sm: 2, // On small screens and above
    md: 3, // On medium screens and above
    lg: 4, // On large screens and above
  };
  return (
    <>
      <Header header="Home" />
      <Flex justify="center">
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
              <SectionBox title="Birthday 🍰" clickable={true} />
            </NextLink>
          </GridItem>
          <GridItem>
            <SectionBox title="Thingy 2!" clickable={false} />
          </GridItem>
          <GridItem>
            <SectionBox title="Thingy 3!" clickable={false} />
          </GridItem>
          <GridItem>
            <SectionBox title="Thingy 4!" clickable={false} />
          </GridItem>
        </Grid>
      </Flex>
      <Image
        position={"fixed"}
        right={0}
        bottom={0}
        src="/kikuri/GHvNJecaQAE9DQa_edit.png"
        maxH={500}
        zIndex={-1}
      />
    </>
  );
}
