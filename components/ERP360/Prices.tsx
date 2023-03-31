import { Box, Button, Flex, Heading, List, ListIcon, ListItem, Text, UnorderedList, useColorMode, Divider, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image from "next/image";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from 'next/router';
import { en, es } from '@/locale';
import { CheckIcon } from '@chakra-ui/icons';

/**
 * Component for Prices and Plans from Section in ERP360 page  
 */

export const Prices = () => {

    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { pricesAndPlans: { heading, cards } } } } = t;

    const { colorMode } = useColorMode();

    return (
        <Box as='section' maxW='1380px' w={{ base: '90%', lg: '80%', xl: '70%', '2xl': '90%' }} h='1750px' m='80px auto' mb={'40px'}>
            {/* Heading of Component */}
            <Box>
                <Heading as='h1' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight='bold'>
                    {heading}
                </Heading>
                <Divider m="15px auto 35px" w="120px" h="6px" opacity=".8" borderStyle="none" bgColor={colorMode === 'light' ? "odoo" : '#fff'} borderRadius='10px' />
            </Box>

            <Swiper
                className="swiper-wrapper carouselManage"
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={40}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1120: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1536: {
                        slidesPerView: 3,
                    },
                }}
            >
                {cards.map(({ id, title, advantagesList, price, plan, learMoreText, learnMoreList, iconCard, iconCardDarkMode, iconCardHover }) => {
                    return (
                        <SwiperSlide className="swiper-slide" key={id}>
                            <Flex alignItems='center' flexDirection='column' w={{ base: '300px', sm: '420px' }} h={'1660px'} position='relative' boxShadow='0px 0px 3px -2px black' borderRadius={'15px'} m={'30px auto'} p='35px' bgColor={'#f4fbfc40'}
                                transitionDuration='400ms'
                                _hover={colorMode === 'light' ? { boxShadow: '0px 0px 20px -8px #a1a1a1' } : { bgColor: 'white.100', color: '#052743' }} className="cardPrice"
                            >

                                {/* Icons Cards */}

                                {/* Image Light Mode */}
                                <Box display={colorMode === 'light' ? 'block' : 'none'} transitionDuration='400ms' mt='-65px' opacity='1' sx={{
                                    '.cardPrice:hover &': {
                                        transitionDuration: '400ms',
                                        opacity: '0',
                                    }
                                }}>
                                    <Image src={iconCard} alt='iconoCardPrices' width={85} height={85} />
                                </Box>

                                {/* Image Dark Mode */}
                                <Box display={colorMode === 'light' ? 'none' : 'block'} transitionDuration='400ms' mt='-65px' opacity='1' sx={{
                                    '.cardPrice:hover &': {
                                        transitionDuration: '400ms',
                                        opacity: '0',
                                    }
                                }}>
                                    <Image src={iconCardDarkMode} alt='iconoCardPrices-Darmode' width={85} height={85} />
                                </Box>

                                {/* Image Hover */}
                                <Box transitionDuration='400ms' mt='-85px' opacity='0' sx={{
                                    '.cardPrice:hover &': {
                                        transitionDuration: '400ms',
                                        opacity: '1',
                                    }
                                }}>
                                    <Image src={iconCardHover} alt='iconoCardPricesHover' width={85} height={85} />
                                </Box>

                                {/* Advantages of each plan */}
                                {/* calc = size of content  - margins of icon  */}

                                <Box w='100%' h={{ base: 'calc(30% - 115px)', sm: 'calc(28% - 115px)', md: 'calc(28% - 115px)' }} mt='30px'>
                                    <Text textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontFamily='heading' sx={{
                                        '.cardPrice:hover &': {
                                            color: 'odoo',
                                        }
                                    }}>
                                        {title}
                                    </Text>

                                    <List spacing={2} mt='14px'>
                                        {advantagesList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} display='flex'>
                                                    <ListIcon fontSize={'14px'} mt='8px'>
                                                        <CheckIcon boxSize={3} />
                                                    </ListIcon>
                                                    <Text fontSize={{ base: '14px', sm: '16px' }}>
                                                        {text}
                                                    </Text>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Box>

                                {/* Plan and Price */}

                                <Flex flexDirection={'column'} alignItems='center' w='100%' maxH='150px' h='150px' position={'relative'} >
                                    <Heading fontFamily='heading' fontSize={{ base: '24px', md: '32px' }} textAlign='center'>
                                        {price}
                                    </Heading>
                                    <Text display={id === 1 ? 'none' : 'block'}>
                                        {plan}
                                    </Text>
                                    <Link href={'https://wa.me/message/EA3RA3DJC2NTA1'} position='absolute' bottom={'30px'} _hover={{ textDecoration: 'none' }}>
                                        <Button size='lg' bgColor='green.400' color='white.100' _hover={{ bgColor: 'green.500' }}>
                                            {buttons.button01}
                                        </Button>
                                    </Link>
                                </Flex>

                                {/* Content of card benefics */}
                                <Box w='100%' h='55%' my='60px'>
                                    <Text fontWeight={'bold'} mb='14px'>
                                        {learMoreText}
                                    </Text>
                                    <UnorderedList spacing={2}>
                                        {learnMoreList.map(({ id, text }) => {
                                            return (
                                                <ListItem key={id} fontSize={{ base: '14px', sm: '16px' }}>
                                                    {text}
                                                </ListItem>
                                            )
                                        })}
                                    </UnorderedList>
                                </Box>

                                {/* Start Button 2 */}
                                <Link href={'https://wa.me/message/EA3RA3DJC2NTA1'} position='absolute' bottom={'30px'} _hover={{ textDecoration: 'none' }}>
                                    <Button size='lg' bgColor='green.400' _hover={{ bgColor: 'green.500' }} color={colorMode === 'light' ? '#fff' : 'white.100'}>
                                        {buttons.button01}
                                    </Button>
                                </Link>


                            </Flex>
                        </SwiperSlide>
                    )
                })}



            </Swiper>
        </Box >
    )
}
