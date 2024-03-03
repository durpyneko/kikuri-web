// Chakra
import { Center, Box, Text, useTheme } from "@chakra-ui/react";

// Interfaces
interface SectionBoxProps {
  title: string;
}

export default function SectionBox({ title }: SectionBoxProps) {
  const theme = useTheme();
  return (
    <Box bg={theme.colors.accentDark} p={10} borderRadius={10} margin={2}>
      <Center>
        <Text>{title}</Text>
      </Center>
    </Box>
  );
}
