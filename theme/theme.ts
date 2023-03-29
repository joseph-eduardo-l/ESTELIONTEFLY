import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Montserrat, Exo_2 } from 'next/font/google'

//fonts
const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat'
})
const exo2 = Exo_2({
    weight: ['700'],
    subsets: ['latin'],
})

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

//theme

const theme = extendTheme({
    config,

    fonts: {
        heading: exo2.style.fontFamily,
        body: montserrat.style.fontFamily,
    },

    colors: {
        green: {
            400: "#23BBB3",
            700: "#019B79",
        },
        blue: {
            cyan: "#5BFCF3",
            700: "#052743"
        },
        orange: "#F97C0B",
        gray: "#666C78",
        white: { 100: "#FCF7F2" },
    },
    styles: {
        global: (props: any) => ({
            "html, body": {
                color: props.colorMode === "dark" ? "#FCF7F2" : "#052743",
                bg: props.colorMode === "dark" ? "#192734" : "white",

            },
        }),

    },
});

export default theme
