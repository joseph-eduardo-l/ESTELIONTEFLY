import { Box, Button, Flex, Heading, List, ListIcon, ListItem, Text, UnorderedList, useColorMode, Divider, Link, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image from "next/image";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from 'next/router';
import { en, es } from '@/locale';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface typesPlansAndPrices {
    id2: number
    option_users1: string,
    option_users2: string,
    option_users3: string,
    option_users4: string,
    option_users5?: string
}

const plans_pricesProfessional: typesPlansAndPrices[] = [
    { id2: 1, option_users1: '$50', option_users2: '$75', option_users3: '$100', option_users4: '$125' },
]

const plans_pricesBusiness: typesPlansAndPrices[] = [
    { id2: 1, option_users1: '$150', option_users2: '$175', option_users3: '$200', option_users4: '$225', option_users5: '$250' }
]
/**
 * Component for Prices and Plans from Section in ERP360 page  
 */
export const Prices = () => {

    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { buttons }, pages: { erp360: { pricesAndPlans: { heading, cards } } } } = t;

    const { colorMode } = useColorMode();

    const [sliderValue, setSliderValue] = useState(0)
    const [sliderValue2, setSliderValue2] = useState(0)

    return (
        <Box as='section' maxW='1380px' w={{ base: '90%', lg: '80%', xl: '70%', '2xl': '90%' }} h='1840px' m='80px auto' mb={'40px'}>
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
                {cards.map(({ id, title, advantagesList, selection, price, plan, learMoreText, learnMoreList, iconCard, iconCardDarkMode, iconCardHover }) => {
                    return (
                        <SwiperSlide className="swiper-slide" key={id}>
                            <Flex alignItems='center' flexDirection='column' w={{ base: '300px', sm: '420px' }} h={{base: '1830px', sm:'1790px'}} position='relative' boxShadow='0px 0px 3px -2px black' borderRadius={'15px'} m={'30px auto'} p='35px' bgColor={'#f4fbfc40'}
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

                                <Flex flexDirection={'column'} alignItems='center' w='100%' maxH={{base: '320px', sm: '280px'}} h={{base: '320px', sm: '280px'}} position={'relative'} >
                                    <Text mb='20px' opacity={id === 1 ? '0' : '1'}>
                                        {selection}
                                    </Text>

                                    <Heading fontFamily='heading' fontSize={{ base: '24px', md: '32px' }} textAlign='center' display={'flex'}>
                                        <Text>
                                            {price}
                                        </Text>
                                        {id === 2
                                            ?
                                            plans_pricesProfessional.map(({ id2, option_users1, option_users2, option_users3, option_users4 }) => {
                                                return (
                                                    <Text key={id2} ml='5px'>
                                                        {sliderValue === 0 ? option_users1
                                                            : sliderValue === 20 ? option_users2
                                                                : sliderValue === 40 ? option_users3
                                                                    : option_users4
                                                        }
                                                    </Text>
                                                )
                                            })
                                            : id === 3 ?
                                                plans_pricesBusiness.map(({ id2, option_users1, option_users2, option_users3, option_users4, option_users5 }) => {
                                                    return (
                                                        <Text key={id2} ml='5px'>
                                                            {sliderValue2 === 0 ? option_users1
                                                                : sliderValue2 === 20 ? option_users2
                                                                    : sliderValue2 === 40 ? option_users3
                                                                        : sliderValue2 === 60 ? option_users4
                                                                            : option_users5
                                                            }
                                                        </Text>
                                                    )
                                                })
                                                :
                                                null
                                        }
                                    </Heading>
                                    <Text opacity={id === 1 ? '0' : '1'} mb='20px'>
                                        {plan}
                                    </Text>

                                    <Slider defaultValue={0} step={20} max={id === 2 ? 60 : 80} min={0} onChangeEnd={(val) => console.log(val)} w='95%' opacity={id === 1 ? '0' : '1'}
                                        onChange={id === 2 ? (val => setSliderValue(val)) : (val => setSliderValue2(val))}>

                                        <SliderMark value={0} mt='3' ml={id === 2 ? '-1' : '-2'} fontSize='sm'>
                                            {id === 2 ? 3 : 20}
                                        </SliderMark>

                                        <SliderMark value={20} mt='3' ml={id === 2 ? '-1' : '-2'} fontSize='sm'>
                                            {id === 2 ? 5 : 25}
                                        </SliderMark>

                                        <SliderMark value={40} mt='3' ml={id === 2 ? '-7px' : '-2'} fontSize='sm'>
                                            {id === 2 ? 10 : 30}
                                        </SliderMark>

                                        <SliderMark value={60} mt='3' ml={id === 2 ? '-1.5' : '-2'} fontSize='sm'>
                                            {id === 2 ? 15 : 35}
                                        </SliderMark>

                                        <SliderMark value={80} mt='3' ml={'-1.5'} fontSize='sm' display={id === 3 ? 'block' : 'none'}>
                                            40
                                        </SliderMark>

                                        <SliderTrack bg={colorMode === 'light' ? '#F0F0F0' : 'white.100'} sx={{
                                            '.cardPrice:hover &': {
                                                transitionDuration: '300ms',
                                                bg: '#E1E1E1'
                                            }
                                        }}>
                                            <Box position='relative' right={10} />
                                            <SliderFilledTrack bg='green.400' />
                                        </SliderTrack>
                                        
                                        <SliderThumb boxSize={6} _focusVisible={{ boxShadow: 'none' }}>
                                            <Image src={'/images/icono-usuario.svg'} width={100} height={100} alt='iconUsers' />
                                        </SliderThumb>
                                    </Slider>
                                    {/* {sliderValue} */}
                                    <Link href={'https://wa.me/message/EA3RA3DJC2NTA1'} position='absolute' bottom={'30px'} _hover={{ textDecoration: 'none' }}>
                                        <Button size='lg' bgColor='green.400' color={colorMode === 'light' ? '#fff' : 'white.100'} _hover={{ bgColor: 'green.500' }}>
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
