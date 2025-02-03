import {
    Box,
    Text,
    useColorMode,
    GridItem,
    Grid,
} from "@chakra-ui/react";


import { useRouter } from "next/router";
import { en, es } from "@/locale";


export const PaypalPayment = () => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const {
        global: { buttons },
        pages: {
            erp360: {
                PaypalPayment: { heading, subHeading, headingSpan },
            },
        },
    } = t;
    const { colorMode } = useColorMode();

    return (


        <Box
            as="section"
            maxW={{ base: "100%", md: "91%" }}
            w={"100%"}
            m="1px auto"
            px={{ base: "10px", md: "0" }}

         >

            <Box>
                {/* <Heading
              
                    textAlign="center"
                    fontSize={{ base: "24px", md: "32px" }}
                    fontWeight="bold"
                    display="flex" justifyContent="center"

                >

                    
                </Heading> 
                <Divider
                    m="15px auto 35px"
                    w="120px"
                    h="6px"
                    opacity=".8"
                    borderStyle="none"
                    bgColor={colorMode === "light" ? "odoo.200" : "#fff"}
                    borderRadius="10px"
                /> */}
                <Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" m="40px auto 0" >
                    {/* {subHeading} */}
                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        <GridItem>
                            <Text textAlign="center" mb={2}>{heading}</Text>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="H72F6Y5BUEB3L" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_cart_LG.gif" style={{ border: 0 }} name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Agregar al carrito" />
                            </form>
                        </GridItem>
                        <GridItem>
                            <Text textAlign="center" mb={2}>{heading}</Text>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="4HNPXJVVADGXN" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_cart_LG.gif" style={{ border: 0 }} name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Agregar al carrito" />
                            </form>
                        </GridItem>
                        <GridItem>
                            <Text textAlign="center" mb={2}>{heading}</Text>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="HK35J22SLAKV8" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_cart_LG.gif" style={{ border: 0 }} name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Agregar al carrito" />
                            </form>
                        </GridItem>
                    </Grid>
                    {/* <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', textAlign: "center", display: "inline" }}>{headingSpan}</span> */}
                </Text>
                <br></br>
                <br></br>


            </Box>
        </Box>
    )

}