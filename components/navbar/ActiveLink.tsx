import Link from "next/link";
import { ListItem, Text, Button, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

export const ActiveLink = ({
  url,
  title,
  color,
  darkcolor,
  locale2,
  condition,
}: any) => {
  const { asPath, locale } = useRouter();
  const { colorMode } = useColorMode();
  return (
    <Link href={url} locale={locale2}>
      {condition == "1" ? (
        <Text
          fontWeight="700"
          color={asPath == url ? color : "#FCF7F2"}
          _hover={{ color: color }}
          cursor="pointer"
        >
          {title}
        </Text>
      ) : condition == "2" ? (
        <Text
          display="inline-flex"
          fontSize="2xl"
          //   className={montserrat.className}
          fontWeight="bold"
          color={asPath == url ? darkcolor : color}
          cursor="pointer"
          _hover={{ color: darkcolor }}
        >
          {title}
        </Text>
      ) : condition == "3" && title !== "ERP 360" ? (
        <ListItem color={color}>
          <Text
            cursor="pointer"
            w="275px"
            color={asPath === url ? color : "#FCF7F2"}
            transitionDuration=".2s"
            _hover={{ fontWeight: "700", color: darkcolor }}
          >
            {title}
          </Text>
        </ListItem>
      ) : condition == "3" && title === "ERP 360" ? (
        <ListItem color={color}>
          <Text
            cursor="pointer"
            w="245px"
            transitionDuration=".2s"
            _hover={{ fontWeight: "700", color: darkcolor }}
          >
            {title}
          </Text>
        </ListItem>
      ) : locale == locale2 ? (
        <Button
          position={"relative"}
          zIndex={10}
          color="#5BFCF3"
          //   className={montserrat.className}
          fontWeight={700}
          variant="outline"
          mr={{ base: "0px", lg: "10px" }}
          w="31px"
          border="none"
          _hover={{ bgColor: "odoo.700" }}
          _active={{ bgColor: "odoo.200" }}
          fontSize="18px"
        >
          {title}
        </Button>
      ) : (
        <Button
          position={"relative"}
          zIndex={10}
          color={colorMode === "light" ? "#fff" : "#FCF7F2"}
          //   className={montserrat.className}
          fontWeight={400}
          variant="outline"
          mr={{ base: "0px", lg: "10px" }}
          w="31px"
          border="none"
          _hover={{ bgColor: "odoo.700" }}
          _active={{ bgColor: "odoo.200" }}
          fontSize="18px"
        >
          {title}
        </Button>
      )}
      {/* <Text fontWeight='700' color={asPath == url ? color : '#fff'} _hover={{ color: color }} cursor='pointer'>
                {title}
            </Text> */}
    </Link>
  );
};

export default ActiveLink;
