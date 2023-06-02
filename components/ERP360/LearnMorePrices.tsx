import { en, es } from "@/locale";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, ListItem, Text, UnorderedList, useMediaQuery, useColorMode } from '@chakra-ui/react';
import { useRouter } from "next/router";

export const LearnMorePrices = () => {

    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { pricesAndPlans: { titles, learnMoreList } } } } = t;

    const { colorMode } = useColorMode();

    const [pixels1080] = useMediaQuery('(min-width: 1080px)');

    return (
        <Box display={{ base: 'none', lg: 'block' }}>
            <Flex w='100%' h='60px' pt='10px' justifyContent='space-around' boxShadow='0px 10px 25px -15px rgba(0, 0, 0, 0.20)' position={'sticky'} top={'68px'} transition='1s' bgColor={ colorMode === 'light' ? '#fff' : '#a1a1a1'} zIndex='10'>
                <Text>Conoce mas</Text>
                <Flex gap={6} maxW='644px'>

                    {titles.map(({ id, heading }) => {
                        return (
                            <Flex key={id} ml={id === 1 ? { base: '0px', sm: '-20px', md: '-40px' } : '0px'} fontSize={{ base: '16px', md: '18px' }} textAlign={'center'} px='10px'>
                                <span>Plan:</span>
                                <Text color='odoo' ml='5px' mt='-3px' fontWeight='700' fontSize={{ base: '18px', md: '20px' }}>
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
                        <Flex w='100%' key={id} justifyContent={'space-around'} mt={id === 1 ? '10px' : '0px'}>
                            <UnorderedList w={pixels1080 ? '360px' : '280px'} mb='10px'>
                                <ListItem fontSize={{ base: '14px', md: '16px' }}>{text}</ListItem>
                            </UnorderedList>
                            <Flex w='644px' maxW='644px' justifyContent={'space-around'} ml={pixels1080 ? '-280px' : '-200px'} color='odoo' fontSize={'24px'}>
                                <CheckIcon visibility={id <= 10 ? 'visible' : 'hidden'} />
                                <CheckIcon visibility={id <= 18 ? 'visible' : 'hidden'} />
                                <CheckIcon />
                                
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Box>
    )
}
