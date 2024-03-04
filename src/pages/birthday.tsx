// React
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

// Chakra
import { Center, Text, Image, Button, useTheme, Flex } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";
import Link from "next/link";

// Lib
import fetcher from "@/lib/fetcher";

// Interface
interface Kikuri {
  image: string;
  source: string;
}

// Main
export default function Birthday() {
  const theme = useTheme();

  const { data, error, isLoading } = useSWR<Kikuri>("/api/kikuri", fetcher, {
    revalidateOnFocus: false,
  });

  const [time, setTime] = useState("0 0 0");
  const [image, setImage] = useState("");
  const [source, setSource] = useState("none");

  const [isImageLoading, setIsImageLoading] = useState(true);

  function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 8, 28, 0, 0, 0);
    if (now.getMonth() > 8 || (now.getMonth() === 8 && now.getDate() > 28)) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const difference = Number(targetDate) - Number(now);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTime(countdown);
  }

  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (data) {
      setIsImageLoading(true);
      setImage(data.image);
      setSource(data.source);
    }
    if (error) console.error(error.message);
  }, [data]);

  const colors = ["#a24177", theme.colors.accent]; // lighter, darker

  return (
    <>
      <Header header="Birthday" />
      <Center>
        <Text fontSize={{ base: 18, sm: 20 }}>Kikuri's birthday is in:</Text>
      </Center>
      <Center>
        <Text color={theme.colors.accent} fontSize={{ base: 34, sm: 40 }}>
          {time}
        </Text>
      </Center>
      {error && (
        <Center>
          <Text color={theme.colors.accent}>
            Failed to fetch data. Check console for details
          </Text>
        </Center>
      )}
      <Center>
        <Image
          src={image}
          alt="Image of Kikuri"
          maxH={"73vh"}
          maxW={"90vw"}
          onLoad={() => setIsImageLoading(false)}
        />
      </Center>
      <Center pt={2} px={4}>
        <Flex direction={"column"}>
          {/* conditional rendering for source */}
          {source !== "none" ? (
            source.split("\n").map((line: string, index: number) => (
              <Center key={index}>
                <Link href={line} target="_blank">
                  <Text
                    color={colors[index % colors.length]}
                    fontSize={{ base: 18, sm: 20 }}
                  >
                    {line}
                  </Text>
                </Link>
              </Center>
            ))
          ) : (
            <Text color={theme.colors.accent} fontSize={{ base: 18, sm: 20 }}>
              Source is not recorded in the database
            </Text>
          )}
        </Flex>
      </Center>
      <Center>
        <Button
          bg={theme.colors.accent}
          _hover={{ bg: theme.colors.hover }}
          m={2}
          onClick={() => mutate("/api/kikuri")}
          isLoading={isLoading || isImageLoading}
          loadingText="Loading"
          spinnerPlacement="start"
        >
          Refresh
        </Button>
      </Center>
    </>
  );
}
