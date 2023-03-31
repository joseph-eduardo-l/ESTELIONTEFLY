import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react"
import { Banner, Implement, Manage, Questions, Solution, Prices } from "./"
import { ContactERP360, ContactERP360En } from "../Contact";

export const Erp360 = () => {
    const { locale } = useRouter();
    return (
        <>
            <Banner />
            <Solution />
            <Box as='section' bgImage={'/images/erp360/background-odoo-saas.webp'} bgSize='cover' bgPosition='center' bgAttachment='fixed' h={{ base: '2360px', md: '1800px', xl: '1280px' }}>
                <Manage />
                <Implement />
            </Box>
            <Prices />
            <Questions />
            {locale === 'en' ? <ContactERP360En /> : <ContactERP360 />}
        </>
    )
}

export default Erp360;