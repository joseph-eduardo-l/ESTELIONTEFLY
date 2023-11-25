import Link from "next/link";
// import { Montserrat } from "next/font/google";
import { Button, Flex } from "@chakra-ui/react";

// const montserrat = Montserrat({
//   weight: ["400"],
//   subsets: ["latin"],
// });

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
        // className={montserrat.className}
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
