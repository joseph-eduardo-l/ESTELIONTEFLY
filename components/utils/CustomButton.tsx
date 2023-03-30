import { Montserrat } from "next/font/google"
import { Button } from '@chakra-ui/react'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

type Custom = {
    bgColor?: string,
    bgHover?: string,
    color?: string,
    text?: string,
}

export const CustomButton = ({ bgColor, color, bgHover, text }: Custom) => {
    return (
        <Button
            className={montserrat.className}
            bgColor={bgColor}
            color={color}
            _hover={{ bg: bgHover }}
            size="lg"
            m="20px auto 40px"
            fontSize={{ base: "15px", md: "18px" }}
        >
            {text}
        </Button>
    )
}
