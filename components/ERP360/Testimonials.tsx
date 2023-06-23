import { en, es } from "@/locale";
import { Avatar, Box, Divider, Flex, Grid, GridItem, Heading, Img, Text, useColorMode } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';


/**
 * Component for Testimonials from Erp 360, using Swiper Js 
 */

export const Testimonials = () => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : es;
    const { pages: { erp360: { testimonials: { heading, testimonialsMap } } } } = t;
    const { colorMode } = useColorMode();
    return (
        <Flex maxW='1280px' w='95%' m='20px auto' p='10px' flexDirection={'column'} mt='100px'>
            {/* <Swiper
                className="swiper-wrapper"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={-70}
                navigation={true}
                // autoplay={{
                //      delay: 8000,
                //      disableOnInteraction: false,
                // }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1280: {
                        slidesPerView: 2,
                    }
                }}
            >
                {testimonials.map(({ id, testimony, nameAuthor, image, imageDark }) => {
                    return (
                        <SwiperSlide key={id} className="slide">
                            <Flex w='90%' h='100%' p='18px' bg={colorMode === 'light' ? '#fff' : 'gray'} borderRadius={'10px'} flexDirection={{ base: 'column', md: 'row' }} justifyContent='center' alignItems={'center'}>
                                <Avatar size='xl' src={colorMode === 'light' ? image : imageDark} />
                                <Flex ml='20px' flexDirection='column' mt='20px'>
                                    <Text fontSize={{ base: '13px', md: '14px' }} fontStyle={'italic'}>
                                        {`"${testimony}"`}
                                    </Text>
                                    <Heading mt='10px' fontWeight={'400'} fontSize={{ base: '18px', md: '20px' }}>
                                        {nameAuthor}
                                    </Heading>
                                </Flex>
                            </Flex>
                        </SwiperSlide>
                    )
                })}
            </Swiper> */}
            <Box w='100%'>
                <Heading
                    as='h2'
                    textAlign="center"
                    fontSize={{ base: "24px", md: "32px" }}
                    mt="-10px"
                >
                    {heading}
                </Heading>
                <Text fontSize={{ base: '30px', md: '36px' }} fontFamily='"Exo 2"' fontWeight='700' mb='20px' textAlign='center' color={colorMode === 'light' ? '#fff' : '#FCF7F2'}>{ }</Text>
                <Divider m='auto' w='100px' h='5px' bgColor="#03a096" mb='60px' borderStyle='none' opacity={1} />
            </Box>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={8}>
                {testimonialsMap.map(({ id, testimony, nameAuthor, image, imageDark }) => {
                    return (
                        <GridItem key={id} w='100%' boxShadow='6px 6px 20px 0px rgba(0, 0, 0, 0.08)' borderRadius='16px'>
                            <Flex p='18px' bg={colorMode === 'light' ? '#fff' : 'gray'} borderRadius={'10px'} flexDirection={{ base: 'column', md: 'row' }} justifyContent='center' alignItems={'center'} h='100%'>
                                <Img w='100px' h='100px' src={colorMode === 'light' ? image : imageDark} />
                                <Flex ml='20px' flexDirection='column' mt='20px'>
                                    <Text fontSize={{ base: '13px', md: '14px' }} fontStyle={'italic'}>
                                        {`"${testimony}"`}
                                    </Text>
                                    <Heading mt='10px' fontWeight={'400'} fontSize={{ base: '18px', md: '20px' }}>
                                        {nameAuthor}
                                    </Heading>
                                </Flex>
                            </Flex>
                        </GridItem>
                    )
                })}
            </Grid>
        </Flex>
    )
}
