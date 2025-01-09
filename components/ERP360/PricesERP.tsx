import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
  Divider,
  Link,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { en, es } from "@/locale";
import { CheckIcon } from "@chakra-ui/icons";

interface typesPlansAndPrices {
  id2: number;
  option_users1: string;
  option_users2: string;
  option_users3: string;
  option_users4: string;
  option_users5?: string;
}

const plans_pricesProfessional: typesPlansAndPrices[] = [
  {
    id2: 1,
    option_users1: "$50",
    option_users2: "$75",
    option_users3: "$100",
    option_users4: "$125",
  },
];

const plans_pricesBusiness: typesPlansAndPrices[] = [
  {
    id2: 1,
    option_users1: "$150",
    option_users2: "$175",
    option_users3: "$200",
    option_users4: "$225",
    option_users5: "$250",
  },
];

/**
 * Component for Prices and Plans from Section in ERP360 page
 */

export const PricesERP = () => {
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

  return (
    <Box
      as="section"
      maxW={{ base: "auto", md: "1380px" }}
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
          bgColor={colorMode === "light" ? "odoo.200" : "#fff"}
          borderRadius="10px"
        />
      </Box>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 12, md: 3, lg: 4 }}
      >
        {cards.map(
          ({
            id,
            title,
            advantagesList,
            iconCard,
            iconCardDarkMode,
            iconCardHover,
          }) => {
            return (
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
                h={"100%"}
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
                          <Text fontSize={{ base: "14px", lg: "16px" }}>
                            {text}
                          </Text>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                {/* Card Button  */}
                <Link
                  // href={"https://wa.me/message/EA3RA3DJC2NTA1"}
                  href={"/plans"}
                  _hover={{ textDecoration: "none" }}
                  position={"absolute"}
                  bottom={5}
                >
                  <Button
                    size="lg"
                    bgColor="green.400"
                    color={colorMode === "light" ? "#fff" : "white.100"}
                    _hover={{ bgColor: "odoo.400" }}
                  >
                    {buttons.button04}
                  </Button>
                </Link>
              </GridItem>
            );
          }
        )}
      </Grid>
    </Box>
  );
};
