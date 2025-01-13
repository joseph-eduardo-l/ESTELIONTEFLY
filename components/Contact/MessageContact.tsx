import { useRouter } from "next/router";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { en, es } from "@/locale";

export const MessageContact = () => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { pages: { contact: { message: { maxW, heading, headingSpan } } } } = t;
    return (
        <Flex direction='column' justifyContent='center' alignItems='center' w='90%' maxW='1280px' m='50px auto' position='relative' zIndex='5'>
            <Box>
                <Heading
                    maxW={{ base: '333px', md: maxW }}
                    m='100px auto 50px'
                    textAlign="center"
                    fontSize={{ base: '24px', md: "32px" }}
                >
                    <span style={{ display: 'block', color: '#23BBB3' }}>{heading}</span>
                    {headingSpan}
                </Heading>
            </Box>
            <Image h='160px' src='/images/nova.webp' alt='nova' mb='80px' className="nova" />
        </Flex>
    )
}

export default MessageContact

