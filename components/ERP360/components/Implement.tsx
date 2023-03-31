import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Divider, Grid, GridItem, Heading, Text, useColorMode } from '@chakra-ui/react'
import { en, es } from '@/locale';
import { CustomButton } from "@/components/utils";
import { motion } from "framer-motion";

export const Implement = () => {
    const { colorMode } = useColorMode()
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { WhyimplementERP360: { cards, heading, headingSpan, subHeading } } } } = t;

    return (
        <Box as='section' maxW='1280px' width='90%' m={{ base: "40px auto", md: '80px auto' }}>
            <Box>
                <Heading as='h2' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight={400} color='blue.700' maxW={{ base: '370px', md: '100%' }} m='0 auto'>
                    {heading}
                    <span style={{ fontWeight: 700, color: '#714B67', display: "inline" }}>{headingSpan}</span>
                    ?
                </Heading>

                <Divider m="15px auto 0px" w="120px" h="6px" opacity={colorMode === 'dark' ? "0.7" : 0.9} borderStyle="none" bgColor='odoo' borderRadius='10px' />

                <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    textAlign="center"
                    m="20px auto 0"
                    color='blue.700'
                >
                    {subHeading}
                </Text>
            </Box>

            <Grid templateColumns={{ base: 'repeat(1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(5,1fr)' }} gap="30px" m='30px auto' maxW={{ md: '750px', xl: '100%' }}
                as={motion.div}
                initial={{ opacity: 0, scale: 1, y: -110 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition='.6s linear'
                viewport={{ once: false }}
            >
                {cards.map(({ id, icon, heading, text }) => {
                    return (
                        <GridItem key={id} colSpan={{ md: id === 4 ? 2 : 1, xl: 1 }} display="flex" flexDirection='column' justifyContent='center' alignItems='center'>
                            <Image src={icon} alt={heading} width={140} height={140} />

                            <Heading as="h3" fontWeight='400' fontSize='24px' textAlign='center' color='blue.700'>
                                {heading}
                            </Heading>

                            <Text maxW='330px' textAlign='center' color='blue.700'>
                                {text}
                            </Text>
                        </GridItem>
                    )
                })}

            </Grid>

            <CustomButton bgColor="green.400" bgHover="odoo" color="#fff" text={buttons.button03} margin={{ base: "30px auto", sm: '50px auto' }} />

        </Box>
    )
}
