import { useRouter } from "next/router";
import { Box, Divider, Flex, Heading, Image, Text, useColorMode, useMediaQuery, Grid, GridItem } from '@chakra-ui/react'
import { en, es } from '@/locale';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

export const Manage = () => {
    const [displayCards] = useMediaQuery('(min-width: 992px)')
    const { colorMode } = useColorMode()
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { pages: { erp360: { manage: { cards, heading, headingSpan, subHeading } } } } = t;

    return (
        <Box as='section' maxW='1280px' width='90%' m={{ base: "0px auto", md: '60px auto' }} pt='60px'>
            <Box>
                <Heading as='h2' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight={400} color='blue.700' maxW={{ base: '370px', md: '100%' }} m='0 auto' >
                    {heading}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>{headingSpan}</span>
                </Heading>

                <Divider m="15px auto 0px" w="120px" h="6px" opacity={colorMode === 'dark' ? "0.7" : 0.9} borderStyle="none" bgColor='odoo' borderRadius='10px' />

                <Text
                    // maxW={{ base: '370px', md: '500px', lg: '100%' }}
                    fontSize={{ base: "16px", md: "18px" }}
                    textAlign="center"
                    m="20px auto 0"
                    color='blue.700'
                >
                    {subHeading}
                </Text>
            </Box>

            {displayCards ?

                <Grid templateColumns='repeat(3, 1fr)' gap={{ lg: '20px', xl: '50px' }} m='80px auto'>
                    {cards.map(({ id, text, icon, iconHover }) => {
                        return (
                            <Flex key={id} direction='column' justifyContent='center' alignItems='center' m='0 auto' maxW='430px' h='315px' bgColor={colorMode === 'light' ? "white" : "white.100"} boxShadow='base' borderRadius='15px' position='relative' transition='0.3s' _hover={{ transform: 'scale(1.01)', boxShadow: 'xl' }} className="manageCards">
                                <Image src={icon} w='80px' h='80px' m='0 auto' position='absolute' top='-40px'
                                    sx={{
                                        ".manageCards:hover &": {
                                            display: 'none'
                                        },
                                    }}
                                />
                                <Image src={iconHover} w='80px' h='80px' m='0 auto' position='absolute' top='-40px' display='none'
                                    sx={{
                                        ".manageCards:hover &": {
                                            display: 'block'
                                        },
                                    }}
                                />

                                <Text color='blue.700' textAlign='center' fontSize='18px' p='50px 40px 40px'>{text}</Text>
                            </Flex>
                        )
                    })}
                </Grid>

                :
                <Swiper
                    className="swiper-wrapper carouselManage"
                    modules={[Pagination, Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    {cards.map(({ id, text, iconHover }) => {
                        return (
                            <SwiperSlide key={id} className="swiper-slide" id="catalogSlide">
                                <Flex direction='column' justifyContent='center' alignItems='center' m='60px auto' maxW='430px' h='315px' bgColor={colorMode === 'light' ? "white" : "white.100"} boxShadow='base' borderRadius='15px' border='1.5px solid #F0F0F0' position='relative'>
                                    <Image src={iconHover} w='80px' h='80px' m='0 auto' position='absolute' top='-40px' />

                                    <Text color='blue.700' textAlign='center' fontSize='18px' p='50px 40px 40px'>{text}</Text>

                                </Flex>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            }
        </Box>
    )
}
