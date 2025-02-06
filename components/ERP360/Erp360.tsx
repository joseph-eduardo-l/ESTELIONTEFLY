// components/Erp360.tsx
import { useRouter } from "next/router";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import { Banner, Implement, Manage, PricesERP, Questions, Solution ,Testimonials } from "./";
import { ContactERP360, ContactERP360En } from "../Contact";
import { useFetch } from "../hooks/useFetch";
import { ApiResponse } from "../ERP360/interface.blog"; // Importa el tipo
import Blogs from "./Blogs";

export const Erp360 = () => {
    const { locale } = useRouter();

    return (
        <>
            <Banner />
            <Solution />
            <Box bgImage={'/images/erp360/background-odoo-saas.webp'} id="" bgSize='cover' bgPosition='center' className="" h={{ base: '2360px', md: '1800px', xl: '1280px' }}>
                <Manage />
                <Implement />
            </Box>
            
            <PricesERP />
            <Testimonials />
            <Questions />
            {locale === 'en' ? <ContactERP360En /> : <ContactERP360 />}
             <Blogs/>
            
        </>
    );
}

export default Erp360;