import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  Divider,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  GridItem,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { en, es } from "@/locale";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface typesPlansAndPrices {
  id2: number;
  option_users1: string;
  option_users2?: string;
  option_users3?: string;
  option_users4?: string;
  option_users5?: string;
}

interface typeLite {
  id2: number;
  option_user: string;
}

const plans_pricesLite: typeLite[] = [
  {
    id2: 1,
    option_user: "$39",
  },
];

const plans_pricesProfessional: typesPlansAndPrices[] = [
  {
    id2: 1,
    option_users1: "$150",
    // option_users2: "$150",
    // option_users3: "$150",
    // option_users4: "$150",
  },
];

const plans_pricesBusiness: typesPlansAndPrices[] = [
  {
    id2: 1,
    option_users1: "$215",
    // option_users2: "$215",
    // option_users3: "$215",
    // option_users4: "$215",
    // option_users5: "$215",
  },
];

/**
 * Component for Prices and Plans from Section in  Plans page
 */

export const Prices = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const {
    global: { buttons },
    pages: {
      erp360: {
        pricesAndPlans: { heading, cards }, 
      },
    },
  } = t;

  const { colorMode } = useColorMode();

  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);

  return (
    <Box
      as="section"
      maxW={{ base: "auto", md: "1720px" }}
      w={"90%"}
      m="80px auto"
    >
      {/* Heading of Component */}
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight="bold"
        >
          {heading}
        </Heading>
        <Divider
          m="15px auto 35px"
          w="120px"
          h="6px"
          opacity=".8"
          borderStyle="none"
          bgColor={colorMode === "light" ? "odoo.400" : "#fff"}
          borderRadius="10px"
        />
      </Box>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 0, md: 3, lg: 8 }}
      >
        {cards.map(
          ({
            id,
            title,
            advantagesList,
            // selection,
            price,
            plan,
            iconCard,
            iconCardDarkMode,
            iconCardHover,
          }) => {
            return (
              // <SwiperSlide className="swiper-slide" key={id}>
              <GridItem
                key={id}
                alignItems="center"
                flexDirection="column"
                w={"100%"}
                position="relative"
                boxShadow="0px 0px 3px -2px black"
                borderRadius={"15px"}
                m={"30px auto"}
                p={{ base: "35px", md: "25px", lg: "40px" }}
                bgColor={"#f4fbfc20"}
                h={"95%"}
                transitionDuration="400ms"
                display="flex"
                _hover={
                  colorMode === "light"
                    ? { boxShadow: "0px 0px 20px -8px #a1a1a1" }
                    : { bgColor: "white.100", color: "#052743" }
                }
                className="cardPrice"
              >
                {/* Icons Cards */}

                {/* Image Light Mode */}
                <Box
                  display={colorMode === "light" ? "block" : "none"}
                  transitionDuration="400ms"
                  mt="-65px"
                  opacity="1"
                  sx={{
                    ".cardPrice:hover &": {
                      transitionDuration: "400ms",
                      opacity: "0",
                    },
                  }}
                >
                  <Image
                    src={iconCard}
                    alt="iconoCardPrices"
                    width={85}
                    height={85}
                  />
                </Box>

                {/* Image Dark Mode */}
                <Box
                  display={colorMode === "light" ? "none" : "block"}
                  transitionDuration="400ms"
                  mt="-65px"
                  opacity="1"
                  sx={{
                    ".cardPrice:hover &": {
                      transitionDuration: "400ms",
                      opacity: "0",
                    },
                  }}
                >
                  <Image
                    src={iconCardDarkMode}
                    alt="iconoCardPrices-Darmode"
                    width={85}
                    height={85}
                  />
                </Box>

                {/* Image Hover */}
                <Box
                  transitionDuration="400ms"
                  mt="-85px"
                  opacity="0"
                  sx={{
                    ".cardPrice:hover &": {
                      transitionDuration: "400ms",
                      opacity: "1",
                    },
                  }}
                >
                  <Image
                    src={iconCardHover}
                    alt="iconoCardPricesHover"
                    width={85}
                    height={85}
                  />
                </Box>

                {/* Advantages of each plan */}
                <Box w="100%" mt="30px" h={"65%"}>
                  <Text
                    textAlign="center"
                    fontSize={{ base: "24px", md: "28px", lg: "32px" }}
                    fontFamily="heading"
                    sx={{
                      ".cardPrice:hover &": {
                        color: "odoo.400",
                      },
                    }}
                  >
                    {title}
                  </Text>

                  <List spacing={2} mt="14px">
                    {advantagesList.map(({ id, text }) => {
                      return (
                        <ListItem key={id} display="flex">
                          <ListIcon fontSize={"14px"} mt="8px">
                            <CheckIcon boxSize={3} />
                          </ListIcon>
                          <Text fontSize={{ base: "18px", lg: "20px" }}>
                            {text}
                          </Text>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                {/* Plans and Prices */}
                <Flex
                  flexDirection={"column"}
                  alignItems="center"
                  w="100%"
                  position={"relative"}
                >
                  <Text
                    mb="20px"
                    opacity={id === 1 ? "0" : "1"}
                    mt={{ base: "10px", md: "0px" }}
                  >
                    {/* {selection} */}
                  </Text>

                  {/* <Slider
                    defaultValue={0}
                    step={20}
                    max={id === 2 ? 60 : 80}
                    min={0}
                    onChangeEnd={(val) => val}
                    w={{ base: "80%", md: "95%" }}
                    opacity={id === 1 ? "0" : "1"}
                    onChange={
                      id === 2
                        ? (val) => setSliderValue(val)
                        : (val) => setSliderValue2(val)
                    }
                  >
                    <SliderMark
                      value={0}
                      mt="3"
                      ml={id === 2 ? "-1" : "-2"}
                      fontSize="sm"
                    >
                      {id === 2 ? 3 : 20}
                    </SliderMark>

                    <SliderMark
                      value={20}
                      mt="3"
                      ml={id === 2 ? "-1" : "-2"}
                      fontSize="sm"
                    >
                      {id === 2 ? 5 : 25}
                    </SliderMark>

                    <SliderMark
                      value={40}
                      mt="3"
                      ml={id === 2 ? "-7px" : "-2"}
                      fontSize="sm"
                    >
                      {id === 2 ? 10 : 30}
                    </SliderMark>

                    <SliderMark
                      value={60}
                      mt="3"
                      ml={id === 2 ? "-1.5" : "-2"}
                      fontSize="sm"
                    >
                      {id === 2 ? 15 : 35}
                    </SliderMark>

                    <SliderMark
                      value={80}
                      mt="3"
                      ml={"-1.5"}
                      fontSize="sm"
                      display={id === 3 ? "block" : "none"}
                    >
                      40
                    </SliderMark>

                    <SliderTrack
                      bg={colorMode === "light" ? "#F0F0F0" : "white.100"}
                      sx={{
                        ".cardPrice:hover &": {
                          transitionDuration: "300ms",
                          bg: "#E1E1E1",
                        },
                      }}
                    >
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="green.400" />
                    </SliderTrack>

                    <SliderThumb
                      boxSize={6}
                      _focusVisible={{ boxShadow: "none" }}
                    >
                      <Image
                        src={"/images/icono-usuario.svg"}
                        width={100}
                        height={100}
                        alt="iconUsers"
                      />
                    </SliderThumb>
                  </Slider> */}

                  <Heading
                    fontFamily="heading"
                    // fontSize={
                    //   id === 1
                    //     ? { base: "34px", md: "38px" }
                    //     : { base: "24px", md: "30px", lg: "32px" }
                    // }
                    textAlign="center"
                    display={"flex"}
                    mt="40px"
                  >
                    <Text
                      // mt={id === 1 ? { base: "-50px", md: "-120px" } : "0"}
                      // mb={id === 1 ? "50px" : "0"}
                      sx={{
                        ".cardPrice:hover &": {
                          transformScale: "1.1",
                        },
                      }}
                    >
                      {price}
                    </Text>
                    {id === 2
                      ? plans_pricesProfessional.map(
                          ({
                            id2,
                            option_users1,
                            option_users2,
                            option_users3,
                            option_users4,
                          }) => {
                            return (
                              <Text key={id2} ml="5px">
                                {sliderValue === 0
                                  ? option_users1
                                  : sliderValue === 20
                                  ? option_users2
                                  : sliderValue === 40
                                  ? option_users3
                                  : option_users4}
                              </Text>
                            );
                          }
                        )
                      : id === 3
                      ? plans_pricesBusiness.map(
                          ({
                            id2,
                            option_users1,
                            option_users2,
                            option_users3,
                            option_users4,
                            option_users5,
                          }) => {
                            return (
                              <Text key={id2} ml="5px">
                                {sliderValue2 === 0
                                  ? option_users1
                                  : sliderValue2 === 20
                                  ? option_users2
                                  : sliderValue2 === 40
                                  ? option_users3
                                  : sliderValue2 === 60
                                  ? option_users4
                                  : option_users5}
                              </Text>
                            );
                          }
                        )
                      : id === 1
                      ? plans_pricesLite.map(({ id2, option_user }) => {
                          return (
                            <Text key={id2} ml="5px">
                              {option_user}
                            </Text>
                          );
                        })
                      : null}
                  </Heading>
                  <Text mb="20px">{plan}</Text>

                  <Link
                    target="blank" href={"https://wa.me/584123172765"}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      size="lg"
                      bgColor="green.400"
                      color={colorMode === "light" ? "#fff" : "white.100"}
                      _hover={{ bgColor: "odoo.400" }}
                    >
                      {buttons.button01}
                    </Button>
                  </Link>
                </Flex>
              </GridItem>
            );
          }
        )}
      </Grid>
    </Box>
  );
};
