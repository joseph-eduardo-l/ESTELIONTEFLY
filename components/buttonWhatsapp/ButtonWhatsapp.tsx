import { Flex } from "@chakra-ui/react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

const ButtonWhatsapp = () => {
    return (
        <Link target="_blank" href='https://wa.me/584123172765'>
            <Flex
                alignItems='center'
                bottom='120px'
                bgColor='#029B79'
                boxShadow='0px 1px 10px rgba(0,0,0,0.3)'
                borderRadius={{ base: '60px', md: '100px' }}
                color="#fff"
                cursor='pointer'
                fontSize={{ base: '35px', md: '40px' }}
                justifyContent='center'
                lineHeight='55px'
                right='30px'
                position='fixed'
                w={{ base: '60px', lg: '70px' }}
                h={{ base: '60px', lg: '70px' }}
                transition='.3s'
                zIndex='100'
                _hover={{ color: '#029B79', bgColor: '#fff' }}>
                <FaWhatsapp />
            </Flex>
        </Link>
    )
}

export default ButtonWhatsapp