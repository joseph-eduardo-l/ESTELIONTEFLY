import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useRouter } from "next/router";
import { en, es } from "@/locale";

const itemColor = "#23BBB3";

const icons = [
  {
    id: 1,
    icon: <FaFacebookF fontSize="18px" />,
    link: "https://www.facebook.com/corporacionestelio",
    text: "facebook",
  },
  {
    id: 3,
    icon: <FaTwitter fontSize="18px" />,
    link: "https://twitter.com/esteliocorp",
    text: "twitter",
  },
  {
    id: 2,
    icon: <GrInstagram fontSize="18px" />,
    link: "https://www.instagram.com/estelio_corp",
    text: "instagram",
  },
  {
    id: 4,
    icon: <FaLinkedinIn fontSize="18px" />,
    link: "https://www.linkedin.com/company/estelio",
    text: "linkedin",
  },
];
const Footer = () => {
  const { colorMode } = useColorMode();
  const { locale } = useRouter();

  const t = locale === "en" ? en : es;
  const {
    global: {
      footer: { countryPhone, privacyPolicy },
    },
  } = t;

  const numerosVenezuela = countryPhone.filter((phone) =>
    phone.phone.includes("+58")
  );
  const numerosPanama = countryPhone.filter((phone) =>
    phone.phone.includes("+507")
  );

  return (
    <>
      <Box
        p="30px 0 20px"
        bg="odoo.400"
        color={colorMode === "light" ? "#fff" : "white.100"}
      >
        <Box
          display={{ base: "block", md: "flex" }}
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent="center"
          // height="full"
          maxW="1200px"
          w={"90%"}
          m="0 auto"
        >
          <Box>
            <a href="https://www.estelio.com/" target="_blank">
              <Image
                m="0 auto 20px"
                src={"/images/logo-2.webp"}
                w="190px"
                h="60px"
                alt="Logo EstelioFooter"
                loading="lazy"
              />
            </a>
          </Box>

          <Divider
            orientation="horizontal"
            w={"90%"}
            m="0px auto 10px"
            opacity={0.2}
            display={{ base: "block", lg: "none" }}
            borderColor={colorMode === "light" ? "inherit" : ""}
          />

          {/* Phones */}
          <Flex
            m="0 auto 25px"
            gap={{ base: "30px", lg: "20px" }}
            justifyContent="center"
            alignItems="center"
            direction={{ base: "column", lg: "row" }}
          >
            {/* Numeros de Venezuela */}

            <Flex
              gap="10px"
              textAlign="center"
              justifyContent="center"
              direction={{ base: "column", lg: "row" }}
            >
              {numerosVenezuela.map(({ country, phone, id }) => {
                return (
                  <>
                    <Box display={"inline-block"}>
                      <Text fontSize={"15px"} fontWeight="700">
                        {country}
                      </Text>
                    </Box>

                    <Box display="inline-block">
                      <Link
                        href={`tel:${phone}`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={"15px"}
                        gap={1}
                        _hover={{ textDecoration: "none", color: "#23BBB3" }}
                      >
                        <FaPhoneAlt /> {phone}
                      </Link>
                    </Box>
                  </>
                );
              })}
            </Flex>

            {/* Numeros de Panama */}

            <Flex
              gap="10px"
              textAlign="center"
              justifyContent="center"
              direction={{ base: "column", lg: "row" }}
            >
              {numerosPanama.map(({ country, phone, id }) => {
                return (
                  <React.Fragment key={id}>
                    <Box textAlign="center">
                      <Text fontSize={"15px"} fontWeight="700">
                        {country}
                      </Text>
                    </Box>

                    <Box textAlign="center">
                      <Link
                        href={`tel:${phone}`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={"14px"}
                        gap={1}
                        _hover={{ textDecoration: "none", color: "#23BBB3" }}
                      >
                        <FaPhoneAlt /> {phone}
                      </Link>
                    </Box>
                  </React.Fragment>
                );
              })}
            </Flex>
          </Flex>
        </Box>

        <Divider
          orientation="horizontal"
          w={"90%"}
          m="15px auto"
          opacity={0.2}
          borderColor={colorMode === "light" ? "inherit" : ""}
        />

        <Flex
          textAlign="center"
          direction="column"
          alignItems="center"
          justifyContent="center"
          w="90%"
          m="10px auto 0"
        >
          <Text>{privacyPolicy.copyright}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
