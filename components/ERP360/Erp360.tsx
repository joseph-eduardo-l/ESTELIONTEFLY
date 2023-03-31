import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react"
import { Banner, Implement, Manage, Questions, Solution } from "./components"
import { ContactERP360, ContactERP360En } from "../Contact";

export const Erp360 = () => {
    const { locale } = useRouter();
    return (
        <>
            <Banner />
            <Solution />
            <Box bgImage={'/images/erp360/background-odoo-saas.webp'} bgSize='cover' bgPosition='center' bgAttachment='fixed' h={{ base: '2360px', md: '1800px', xl: '1280px' }}>
                <Manage />
                <Implement />
            </Box>
            <Questions />
            {locale === 'en' ? <ContactERP360En /> : <ContactERP360 />}
        </>
    )
}
