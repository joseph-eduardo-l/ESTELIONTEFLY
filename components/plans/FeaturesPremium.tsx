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
                <Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" m="40px auto 0" >
                    {subHeading}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', textAlign: "center", display: "inline" }}>{headingSpan}</span>
                </Text>
                <br></br>
                <br></br>


            </Box>



            {/* templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} // Ajusta las columnas para pantallas medianas gap={{ base: 6, md: 4, lg: 4 }} // Ajusta el espacio entre los elementos > */}

            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                gap={{ base: 1, md: 3, lg: 1 }}
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
                                w={{ base: "90%", md: "90%", lg: "90%" }} //w={"100%"} //
                                position="relative"
                                boxShadow="0px 0px 3px -2px black"
                                borderRadius={"15px"}
                                m={"30px auto"} //m={"30px auto"} //
                                p={{ base: "20px", md: "auto", lg: "10px" }} // p={{ base: "35px", md: "25px", lg: "40px" }} //
                                bgColor={"#f4fbfc20"}
                                h={"auto"} //h={"100%"} //
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
                                {/* w="100%" mt="20px" h={"auto"}> */}
                                <Box w="100%" mt="30px" h={"105%"} >
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

                                    <List spacing={0} mt="1px">
                                        {advantagesList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} display="flex" alignItems="center"> {id !== 1 && id !== 9 && (// Agrega el ícono de check solo si el id no es 1 
                                                    <ListIcon fontSize={"14px"} mt="8px"> <CheckIcon boxSize={3} />
                                                    </ListIcon>)}
                                                    <Box  borderColor="gray.200" borderRadius="md" p={2} _hover={{ backgroundColor: "gray.100", color: "blue.700" }} width="100%" >
                                                        <Text fontSize={{ base: "14px", lg: "16px" }} fontWeight={id === 9 ? "bold" : "normal"} textAlign={id === 9 ? "center" : "left"}>
                                                            {text}
                                                        </Text>
                                                    </Box>
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
            <br></br>


            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                gap={{ base: 1, md: 3, lg: 1 }}
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
                                w={{ base: "90%", md: "90%", lg: "90%" }} //w={"100%"} //
                                position="relative"
                                boxShadow="0px 0px 3px -2px black"
                                borderRadius={"15px"}
                                m={"30px auto"} //m={"30px auto"} //
                                p={{ base: "20px", md: "auto", lg: "10px" }} // p={{ base: "35px", md: "25px", lg: "40px" }} //
                                bgColor={"#f4fbfc20"}
                                h={"auto"} //h={"100%"} //
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

                                    <List spacing={0} mt="1px">
                                        {advantagesList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} display="flex" alignItems="center"> {id !== 1 && id !== 9 && ( // Agrega el ícono de check solo si el id no es 1 
                                                    <ListIcon fontSize={"14px"} mt="8px"> <CheckIcon boxSize={3} />
                                                    </ListIcon>)}
                                                    <Box  borderColor="gray.200" borderRadius="md" p={2} _hover={{ backgroundColor: "gray.100", color: "blue.700" }} width="100%" >
                                                        <Text fontSize={{ base: "14px", lg: "16px" }}fontWeight={id === 9 ? "bold" : "normal"} textAlign={id === 9 ? "center" : "left"}>
                                                            {text}
                                                        </Text>
                                                    </Box>
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
