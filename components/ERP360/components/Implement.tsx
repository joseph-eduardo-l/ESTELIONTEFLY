import { useRouter } from "next/router";
import { Box, Divider, Flex, Heading, Image, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { en, es } from '@/locale';

export const Implement = () => {
    const [displayCards] = useMediaQuery('(min-width: 992px)')
    const { colorMode } = useColorMode()
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { pages: { erp360: { manage: { cards, heading, headingSpan, subHeading } } } } = t;

    return (
        <Box as='section' maxW='1280px' width='90%' m={{ base: "0px auto", md: '80px auto' }}>
            <Box>
                <Heading as='h2' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight={400} maxW={{ base: '370px', md: '100%' }} m='0 auto'>
                    {heading}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>{headingSpan}</span>
                </Heading>

                <Divider m="15px auto 0px" w="120px" h="6px" opacity="0.7" borderStyle="none" bgColor={colorMode === 'light' ? "odoo" : '#fff'} borderRadius='10px' />

                <Text
                    // maxW={{ base: '370px', md: '500px', lg: '100%' }}
                    fontSize={{ base: "16px", md: "18px" }}
                    textAlign="center"
                    m="20px auto 0"
                >
                    {subHeading}
                </Text>
            </Box>
        </Box>
    )
}
