import { en, es } from "@/locale";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, ListItem, Text, UnorderedList, useMediaQuery, useColorMode } from '@chakra-ui/react';
import { useRouter } from "next/router";

export const LearnMorePricesMobile = () => {

    const colormode = useColorMode();
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { pricesAndPlans: { learnMoreList, titles } } } } = t;

    const { colorMode } = useColorMode();

    return (
        <Box display={{base: 'block', lg: 'none'}}>
            <Flex w='100%' h='75px' pt='10px' justifyContent='space-around' boxShadow='0px 10px 25px -15px rgba(0, 0, 0, 0.20)' position={'sticky'} top={'68px'} transition='1s' bgColor={ colorMode === 'light' ? '#fff' : '#a1a1a1'} zIndex='10'>
                <Flex w="80%" justifyContent='center'>
                        {titles.map(({ id, heading }) => {
                            return (
                                <Flex key={id} ml={id === 1 ? {base: '0px', sm: '-20px', md: '-40px'} : '0px'} fontSize={{ base: '14px', sm: '16px', md: '18px' }} flexDirection='column' textAlign={'center'} px={{base: '12px',sm: '24px', md: '34px'}}>
                                    <span>Plan</span>
                                    <Text color='odoo' mt='-3px' fontWeight='700' fontSize={{ base: '14px', sm: '17px', md: '20px' }}>
                                        {heading}
                                    </Text>
                                </Flex>
                            )
                        })}
                </Flex>
            </Flex>
            {
                learnMoreList.map(({ id, text }) => {
                    return (
                        <Flex w='90%' m='0 auto' key={id} justifyContent={'center'} alignItems='center' mt={id === 1 ? '20px' : '0px'} flexDirection='column' mb='20px'>
                            <Text fontSize={{ base: '14px', md: '16px' }} w='100%' maxW='644px' ml='16px' mb='10px'>{text}</Text>
                            <Flex maxW='644px' w='100%' justifyContent="space-between" color='odoo' fontSize={{base: '20px', md: '24px'}}>
                                <Box w='33.33%' >
                                    <CheckIcon m='0 auto' display='block' visibility={id <= 10 ? 'visible' : 'hidden'} />
                                </Box>
                                <Box w='33.33%'>
                                    <CheckIcon m='0 auto' display='block' visibility={id <= 18 ? 'visible' : 'hidden'} />
                                </Box>
                                <Box w='33.33%'>
                                    <CheckIcon m='0 auto' display='block' />
                                </Box>
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Box>
    )
}
