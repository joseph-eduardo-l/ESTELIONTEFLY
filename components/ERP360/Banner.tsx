import { Box, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router";
import en from "../../locale/en";
import es from "../../locale/es";

const Banner = () => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { } = t;
    console.log(useRouter())
    return (
        <Box mb='20rem'>
            {/* <h1>hola</h1> */}
            <Heading >Prueba</Heading>
            <Text>hola</Text>
        </Box>
    )
}

export default Banner