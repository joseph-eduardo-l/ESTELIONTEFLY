import { en, es } from "@/locale";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Component for Testimonials from Erp 360, using Swiper Js
 */

export const Testimonials = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const {
    pages: {
      erp360: {
        testimonials: { heading, testimonialsMap },
      },
    },
  } = t;
  const { colorMode } = useColorMode();
  return (
    <Flex
      maxW="1280px"
      w="95%"
      m="20px auto"
      p="10px"
      flexDirection={"column"}
      mt="100px"
    >
      <Box w="100%">
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "24px", md: "32px" }}
          mt="-10px"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "30px", md: "36px" }}
          fontFamily='"Exo 2"'
          fontWeight="700"
          mb="20px"
          textAlign="center"
          color={colorMode === "light" ? "#fff" : "#FCF7F2"}
        >
          {}
        </Text>
        <Divider
          m="auto"
          w="100px"
          h="5px"
          bgColor={colorMode === "light" ? "odoo.400" : "#fff"}
          mb="60px"
          borderStyle="none"
          borderRadius="10px"
          opacity={colorMode === "dark" ? "0.7" : 0.9}
        />
      </Box>
      <Grid templateColumns={{ base: "repeat(1, 1fr)" }} gap={8}>
        {testimonialsMap.map(
          ({ id, testimony, nameAuthor, image, imageDark }) => {
            return (
              <GridItem
                key={id}
                maxW="800px"
                // w='100%'
                m="0 auto"
                boxShadow="6px 6px 20px 0px rgba(0, 0, 0, 0.08)"
                borderRadius="16px"
              >
                <Flex
                  p="18px"
                  bg={colorMode === "light" ? "#fff" : "#f4fbfc20"}
                  borderRadius={"10px"}
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="center"
                  alignItems={"center"}
                  h="100%"
                >
                  <Img
                    w="100px"
                    h="100px"
                    src={colorMode === "light" ? image : imageDark}
                  />
                  <Flex ml="20px" flexDirection="column" mt="20px">
                    <Text
                      fontSize={{ base: "13px", md: "14px" }}
                      fontStyle={"italic"}
                    >
                      {`"${testimony}"`}
                    </Text>
                    <Heading
                      mt="10px"
                      fontWeight={"400"}
                      fontSize={{ base: "18px", md: "20px" }}
                    >
                      {nameAuthor}
                    </Heading>
                  </Flex>
                </Flex>
              </GridItem>
            );
          }
        )}
      </Grid>
    </Flex>
  );
};
