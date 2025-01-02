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
    Accordion,
    Grid,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRouter } from "next/router";
  import { en, es } from "@/locale";
  import { CheckIcon } from "@chakra-ui/icons";
  
  
  /**
   * Component for payment mode
   */
  
  export const FeaturesPremium = () => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const {
      global: { buttons },
      pages: {
        erp360: {
          featuresPremium: { heading, cards1, cards, subHeading, headingSpan, headingSpan1 }, 
        },
      },
    } = t;
  
    const { colorMode } = useColorMode();
  
    return (
        <Box
            as="section"
            maxW={{ base: "100%", md: "80%" }}
            w={"100%"}
            m="10px auto"
            px={{ base: "10px", md: "0" }}


        >
            {/* Heading of Component */}
            <Box>
                <Heading
                    as="h1"
                    textAlign="center"
                    fontSize={{ base: "24px", md: "32px" }}
                    fontWeight="bold"
                    display="flex" justifyContent="center"

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
                <Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" m="20px auto 0" >
                    {subHeading}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>{headingSpan}</span>
                </Text>
                
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

                                    <List spacing={1} mt="1px">
                                        {advantagesList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} display="flex" alignItems="center" justifyContent="space-between">
                                                    <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                                                        {/* <ListIcon fontSize={"14px"} mt="8px">
                                <CheckIcon boxSize={3} />
                              </ListIcon> */}
                                                        <Box
                                                            // border="1px solid"
                                                            // borderColor="blue.200"
                                                            // borderRadius="md"
                                                            p={2}
                                                            // _hover={{ backgroundColor: "blue.100" }}
                                                            // transitionDuration="400ms"
                                                            width="300px"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Text fontSize={{ base: "14px", lg: "16px" }} textAlign="justify">
                                                                {text}
                                                            </Text>
                                                        </Box>
                                                    </Box>
                                                    {/* <Accordion allowToggle width="30%" ml={2}>
                              <AccordionItem  width="100%">
                                <AccordionButton justifyContent="space-between">
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} textAlign="left">
                                    {details}
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion> */}
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Box>

                                {/* Card Button  */}
                                {/* <Link
                                    // href={"https://wa.me/message/EA3RA3DJC2NTA1"}
                                    href={"https://wa.me/584123172765?text=Hola%20quisiera%20mas%20informacion%20sobre%20los%20tipos%20de%20pago"}
                                    target="_blank"
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
                                </Link> */}
                                
                            </GridItem>
                                            

                        );
                    }
                )}
            </Grid>



            <Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" m="100px auto 0" >
                    {subHeading}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>{headingSpan1}</span>
                </Text>

            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                gap={{ base: 12, md: 3, lg: 4 }}
            >
                {cards1.map(
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

                                    <List spacing={1} mt="1px">
                                        {advantagesList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} display="flex" alignItems="center" justifyContent="space-between">
                                                    <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                                                        {/* <ListIcon fontSize={"14px"} mt="8px">
                                <CheckIcon boxSize={3} />
                              </ListIcon> */}
                                                        <Box
                                                            // border="1px solid"
                                                            // borderColor="blue.200"
                                                            // borderRadius="md"
                                                            p={2}
                                                            // _hover={{ backgroundColor: "blue.100" }}
                                                            // transitionDuration="400ms"
                                                            width="300px"
                                                            display="flex"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Text fontSize={{ base: "14px", lg: "16px" }} textAlign="justify">
                                                                {text}
                                                            </Text>
                                                        </Box>
                                                    </Box>
                                                    {/* <Accordion allowToggle width="30%" ml={2}>
                              <AccordionItem  width="100%">
                                <AccordionButton justifyContent="space-between">
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} textAlign="left">
                                    {details}
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion> */}
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Box>

                                {/* Card Button  */}
                                {/* <Link
                                    // href={"https://wa.me/message/EA3RA3DJC2NTA1"}
                                    href={"https://wa.me/584123172765?text=Hola%20quisiera%20mas%20informacion%20sobre%20los%20tipos%20de%20pago"}
                                    target="_blank"
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
                                </Link> */}
                                
                            </GridItem>
                                            

                        );
                    }
                )}
            </Grid>




                
            
        </Box>

    );
};
