// Chakra
import { Center, Box, Text, useTheme } from "@chakra-ui/react";

// Interfaces
interface SectionBoxProps {
  title: string;
  clickable: boolean;
}

export default function SectionBox({ title, clickable }: SectionBoxProps) {
  const theme = useTheme();
  return (
    <Box
      bg={theme.colors.accent}
      boxShadow="5px 10px 10px rgba(0, 0, 0, 0.2)"
      p={10}
      borderRadius={10}
      margin={2}
      _hover={{
        bg: theme.colors.accentDark,
        transition: "background 0.2s ease-in-out",
        cursor: clickable ? "pointer" : "not-allowed",
      }}
      w={{ base: "90vw", sm: "auto" }}
    >
      <Center>
        <Text>{title}</Text>
      </Center>
    </Box>
  );
}
