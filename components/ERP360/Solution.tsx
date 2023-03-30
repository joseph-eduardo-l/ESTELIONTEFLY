import { useRouter } from "next/router";
import { en, es } from '@/locale';
import { Box, Divider, Grid, GridItem, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import { CustomButton } from "@/components/utils";
import { motion } from "framer-motion";

export const Solution = () => {
    const { colorMode } = useColorMode()
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { solution } } } = t;

    return (
        <Box as='section' maxW='1280px' width='90%' m='50px auto'>
            <Box>
                <Heading as='h1' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight='bold' color='odoo'>
                    {solution.heading}
                </Heading>

                <Heading
                    maxW={{ base: '370px', md: '500px', lg: '100%' }}
                    textAlign="center"
                    fontSize={{ base: '24px', md: "32px" }}
                    fontWeight="400"
                    m="10px auto 0"
                >
                    {solution.subHeading01}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>
                        {solution.subHeading02}
                    </span>
                </Heading>

                <Divider m="15px auto 0px" w="120px" h="6px" opacity="0.7" borderStyle="none" bgColor={colorMode === 'light' ? "odoo" : '#fff'} borderRadius='10px' />
            </Box>

            <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="20px" m='40px auto' maxW="1000px">
                <GridItem
                    as={motion.div}
                    initial={{ opacity: 0, scale: 1, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition='.9s linear'
                    viewport={{ once: false }}

                >
                    <Image src="/images/erp360/odoo-saas.webp" alt="odoo" w={{ base: '320px', sm: '380px' }} m='0 auto' />
                </GridItem>

                <GridItem display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Text textAlign='center' lineHeight='1.8' maxW='500px'>
                        {solution.text}
                    </Text>

                    <CustomButton bgColor="green.400" bgHover="oddo" color="white" text={buttons.button02} />
                </GridItem>
            </Grid>
        </Box>

    )
}