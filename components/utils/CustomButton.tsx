import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";

type Custom = {
  bgColor: string;
  bgHover: string;
  color?: string;
  text: string;
  margin?: string | object;
  link?: string;
  padding?: string;
};

export const CustomButton = ({
  bgColor,
  color = "#fff",
  bgHover,
  text,
  margin = "20px auto",
  link = "#",
  padding = "24px",
}: Custom) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        fontFamily={"Montserrat"}
        bgColor={bgColor}
        color={color}
        _hover={{ bg: bgHover }}
        size="lg"
        m={margin}
        fontSize={{ base: "16px", md: "18px" }}
        transition=".3s"
        px={padding}
      >
        <Link href={link}>{text}</Link>
      </Button>
    </Flex>
  );
};
