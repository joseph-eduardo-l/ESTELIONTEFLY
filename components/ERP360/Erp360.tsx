import { Box } from "@chakra-ui/react"
import { Banner, Implement, Manage, Questions, Solution } from "./components"

export const Erp360 = () => {
    return (
        <>
            <Banner />
            <Solution />
            <Box bgImage={'/images/erp360/background-odoo-saas.webp'} bgSize='cover' bgPosition='center' bgAttachment='fixed' h={{ base: '2360px', md: '1800px', xl: '1280px' }}>
                <Manage />
                <Implement />
            </Box>
            <Questions />
        </>
    )
}
