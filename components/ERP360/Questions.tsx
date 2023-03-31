import { useRouter } from "next/router";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Heading, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { en, es } from "@/locale";


export const Questions = () => {

    const { colorMode } = useColorMode()
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { questions: { heading, accordion } } } } = t;
    return (
        <Box as='section' m="100px auto 80px" width="90%" position='relative' zIndex='5'>
            <Heading
                as='h2'
                textAlign="center"
                fontSize={{ base: "24px", md: "32px" }}
                mt="-10px"
            >
                {heading}
            </Heading>
            <Divider m="15px auto 50px" w="120px" h="6px" bgColor={colorMode === 'light' ? "odoo" : '#fff'} opacity={colorMode === 'dark' ? "0.7" : 0.9} borderStyle='none' borderRadius='10px' />

            <Box maxW="1024px" m="0 auto">
                {accordion.map(({ id, heading, text }) => {
                    return (
                        <Accordion key={id} allowMultiple>
                            <AccordionItem borderBlock={`1px solid ${colorMode === 'light' ? '#EDF2F7' : 'gray.100'}`}>
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton position='relative' p={4} mb={'2px'} _expanded={{ bg: '#23BBB3', color: 'white' }} borderRadius='10px' _focus={{ boxShadow: 'none' }} >
                                            <Box flex='1' textAlign='left' fontSize='18px'>
                                                {heading}
                                            </Box>
                                            {isExpanded ? (
                                                <MinusIcon fontSize='14px' />
                                            ) : (
                                                <AddIcon fontSize='14px' color='#029B79' />
                                            )}
                                        </AccordionButton>

                                        <AccordionPanel py={4} fontSize="16px" lineHeight={1.8} whiteSpace='pre-wrap'>
                                            {text}
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem >
                        </Accordion >
                    );
                })}
            </Box >
        </Box >
    )
}
