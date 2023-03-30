import { en, es } from '@/locale';
import { Box, Flex, Heading } from '@chakra-ui/react'
import styles from "@/theme/styles/Global.module.css"
import { useRouter } from "next/router";

export const Banner = () => {
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { pages: { erp360: { banner: { heading01, heading02 } } } } = t;
    return (
        <Box as='section' position='relative' h='100%' w='100%'  >
            <video height='100%' width="100%" autoPlay playsInline loop muted preload='auto' poster='/images/banners/posters/bannerMonitor360Smart-Retail0.webp' className={styles.video__Banners} >
                <source src='/images/banners/bannerMonitor360Smart-Retail.webm' type="video/webm" />
                {/* <source src='/images/banners/mp4/bannerMonitor360Smart-Retail.mp4' type="video/mp4" /> */}
            </video>
            {/* <Box position='absolute' w='100%' h='100%' top='0' bgColor='#000' opacity='0'></Box> */}
            <Flex m='0 auto' justifyContent='center' alignItems='center' position='absolute' w='100%' h='100%' top='0' overflow={{ base: 'hidden', sm: 'unset' }}>
                <Heading
                    as='h3'
                    w='90%'
                    maxW={{ sm: '500px', md: '780px', xl: '100%' }}
                    m="0px auto"
                    fontSize={{ base: '26px', md: "36px" }}
                    fontWeight='bold'
                    textAlign='center'
                    textShadow='2px 2px 2px rgba(0, 0, 0, 1)'
                    color="#fff"
                >
                    {heading01}
                    <span style={{ display: 'block' }}>{heading02}</span>
                </Heading>
            </Flex>
        </Box>
    )
}

export default Banner