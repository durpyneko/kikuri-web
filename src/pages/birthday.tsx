// React
import { useEffect, useState } from "react";

// Chakra
import { Center, Text, Image, useTheme } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";

export default function Birthday() {
  const theme = useTheme();

  const [time, setTime] = useState("000");
  const [image, setImage] = useState("");

  function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 8, 18, 0, 0, 0);
    if (now.getMonth() > 8 || (now.getMonth() === 8 && now.getDate() > 18)) {
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
    const interval = setInterval(updateCountdown, 1000);
    const fetchData = async () => {
      const data = await fetch("/api/kikuri").then((res: any) => res.json());
      setImage(data.image);
    };
    updateCountdown();
    fetchData();
  }, []);

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
      <Center>
        <Image
          src={image}
          alt="Loading Kikuri..."
          maxH={"80vh"}
          maxW={"90vw"}
        />
      </Center>
    </>
  );
}
