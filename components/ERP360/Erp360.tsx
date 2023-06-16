import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react"
import { Banner, Implement, Manage, Questions, Solution, Prices, LearnMorePrices, LearnMorePricesMobile, Testimonials } from "./"
import { ContactERP360, ContactERP360En } from "../Contact";

export const Erp360 = () => {
    const { locale } = useRouter();
    return (
        <>
            <Banner />
            <Solution />
            <Box bgImage={'/images/erp360/background-odoo-saas.webp'} bgSize='cover' bgPosition='center' className="" h={{ base: '2360px', md: '1800px', xl: '1280px' }}>
                <Manage />
                <Implement />
            </Box>
            <Prices />
            <LearnMorePrices />
            <LearnMorePricesMobile />
            <Testimonials />
            <Questions />
            {locale === 'en' ? <ContactERP360En /> : <ContactERP360 />}
        </>
    )
}

export default Erp360;