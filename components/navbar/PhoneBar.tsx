import { Flex, Text } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { useContext } from "react";
import { IpApiContext } from "../../context/IpApiContext";

/**
 * PhoneBar is component for telephones in the navbar using the geolocation
 */

export const PhoneBar = () => {
  const valor = useContext(IpApiContext);

  return (
    <Flex
      color="#fff"
      bgColor="#375269"
      h="2.5rem"
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "12px", md: 6 }}
      p="1.25rem"
    >
      <a href="https://www.estelio.com/" target="_blank">
        <Flex cursor="pointer" alignItems="center" gap={2}>
          <IoMdHome fontSize={"30px"} color="#F47C20" />
          {/* <Text
            fontStyle="italic"
            fontSize={{ base: "12px", md: "16px" }}
            textAlign="center"
          >
            Home Estelio
          </Text> */}
        </Flex>
      </a>
      <Link href={`${valor.link}`}>
        <Flex cursor="pointer" alignItems="center" gap={2}>
          <FaPhoneAlt color="#F47C20" />
          <Text
            fontStyle="italic"
            fontSize={{ base: "12px", md: "16px" }}
            textAlign="center"
          >{`${valor.country} ${valor.phone}`}</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default PhoneBar;
