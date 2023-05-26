import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronDownIcon, MoonIcon, SunIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, List, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, UnorderedList, useColorMode, useMediaQuery, Image, ListItem } from '@chakra-ui/react';
import { ActiveLink } from "./ActiveLink";
import  Idiomas  from "./Idiomas";
import { en, es } from '../../locale';
import { NavbarMobile } from "./NavBarMobile";


export const Navbar = () => {
  const [logo] = useMediaQuery('(min-width: 480px)')
  const { colorMode, toggleColorMode } = useColorMode();
  const coloroscuro = "#052743";
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const { global: { header: { area, products, vinculos } } } = t;

  return (
    <>
      <Box
        as="header"
        w="full"
        bgColor="#052743"
        position="sticky"
        top="0px"
        zIndex="100"
      >
        <Flex
          justifyContent="space-between"
          maxW="1320px"
          w="95%"
          m="auto"
          alignItems="center"

        >
          <Box>
            {logo ?
              <Box cursor='pointer'>
                <Link href='/'>
                  <Image width='199px' height='68px' src="/images/logo-2.webp" alt="LogoEstelio" />
                </Link>
              </Box>
              :
              <Box cursor='pointer' m='0 auto' display={{ base: "flex", sm: "none" }}>
                <Link href='/'>
                  <Image width="70px" height='70px' src="/images/icono-1.webp" className="icono-Nabvar" alt="IconoEstelio" />
                </Link>
              </Box>
            }

          </Box>
          <Box
            w="760px"
            display={{ base: "none", xl: "flex" }}
            justifyContent="space-between"
            fontFamily="'Exo 2'"
            color={colorMode === 'light' ? '#fff' : 'white.100'}
          >
            {vinculos.map(
              ({ id, url, title, consultoria, empresariales, sistit, sistiot, learning }) => {
                if ((id != 3)) {
                  return (
                    <Box px="16px" py="8px" key={id} fontFamily='heading'>
                      <ActiveLink url={url} title={title} color='#5bfcf3' condition='1' />
                    </Box>
                  );
                } else if (id === 3) {
                  return (
                    <Box key={id}>
                      <Menu autoSelect={false} >
                        <MenuButton
                          as={Button}
                          rightIcon={<ChevronDownIcon width='2em' height='2em' />}
                          bgColor={coloroscuro}
                          _hover={{ color: "#5bfcf3" }}
                          _active={{ bgColor: coloroscuro, color: "#5bfcf3" }}
                          fontWeight="700"
                          fontFamily='heading'
                        >
                          {title}
                        </MenuButton>
                        <MenuList
                          position="absolute"
                          bg='rgba(6,39,67,.95)'
                          border="none"
                          w='530px'
                          h='380px'
                          transitionDuration='.3s'
                          transitionTimingFunction='ease-in'
                          left="-300px"
                          mt={3}
                          cursor='unset'
                          className="cajaPadre__Menu"
                          _hover={{ w: '820px', transitionDuration: '.5s', transitionTimingFunction: 'ease' }}
                        >
                          <Flex w='75%'
                            justifyContent={'space-between'}>
                            <Text fontSize='18px' ml='5.2rem' fontFamily='heading'>{area}</Text>
                            <Text fontSize='18px' opacity={'0'} fontFamily='heading'
                              sx={{
                                '.cajaPadre__Menu:hover &': {
                                  transitionDuration: '.5s',
                                  transitionTimingFunction: 'ease-in',
                                  opacity: '1'
                                }
                              }}
                            >
                              {products}
                            </Text>
                          </Flex>
                          <Divider w='90%' m='0 auto' color='#a1a1a1'/>

                          {/* Menu Areas */}

                          {/* List of Consultancy */}
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            cursor='unset'
                            p='10px'
                            display='flex'
                            bg='none'
                          >
                            <UnorderedList
                              fontSize="17px"
                              display={'flex'}
                              justifyContent='space-between'
                              className='consultancy-list'
                            >
                              <Flex key={id} w='100%' justifyContent={'flex-start'}>

                                {/* Icono del Area */}
                                <Flex h='35px' w='35px' justifyContent='center' alignItems='center' borderRadius='100%' transitionDuration={'.3s'} sx={{ '.consultancy-list:hover &': { transitionDuration: '.3s', bg: '#D76D1D' } }}>
                                  <Image w='16px' src='/images/navbarIcons/icon-consultoria.svg' sx={{ '.consultancy-list:hover &': { filter: "brightness(0) invert(1)" } }} alt='iconoArea'/>
                                </Flex>

                                {/* Vinculo del Area  */}
                                <Flex ml='20px' w='410px' justifyContent={'space-between'}>
                                  <ActiveLink url={consultoria?.url} title={consultoria?.title} darkcolor={"#D76D1D"} condition='2' />
                                  <Text fontSize='30px' mt='-10px'>
                                    <ChevronRightIcon />
                                  </Text>
                                </Flex>

                              </Flex>
                              <UnorderedList
                                fontSize="17px"
                                fontFamily='heading'
                                color={'#D76D1D'}
                                opacity='0'
                                transitionDuration={'.5s'}
                                w='100%'
                                sx={{
                                  '.consultancy-list:hover &': {
                                    transitionDuration: '.5s',
                                    opacity: '1'
                                  },
                                }}
                                ml='40px'
                              >
                                {consultoria?.subtitles?.map(
                                  ({ id, subtitle, url }) => {
                                    return (
                                      <Box key={id}>
                                        <ActiveLink url={url} title={subtitle} darkcolor={"#D76D1D"} condition='3' />
                                      </Box>
                                    );
                                  }
                                )}

                              </UnorderedList>

                            </UnorderedList>
                          </MenuItem>

                          {/* List of Business */}
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            cursor='unset'
                            p='10px'
                            display='flex'
                            bg='none'
                          >
                            <UnorderedList
                              fontSize="17px"
                              display={'flex'}
                              justifyContent='space-between'
                              className='business-list'
                            >
                              <Flex key={id} w='100%' justifyContent={'flex-start'}>

                                {/* Icono del Area */}
                                <Flex h='35px' w='35px' justifyContent='center' alignItems='center' borderRadius='100%' transitionDuration={'.3s'} sx={{ '.business-list:hover &': { transitionDuration: '.3s', bg: '#D76D1D' } }}>
                                  <Image w='16px' src='/images/navbarIcons/icon-sistemas-empresariales.svg' sx={{ '.business-list:hover &': { filter: "brightness(0) invert(1)" } }} alt='iconoArea'/>
                                </Flex>

                                {/* Vinculo del Area  */}
                                <Flex ml='20px' w='410px' justifyContent={'space-between'}>
                                  <ActiveLink url={empresariales?.url} title={empresariales?.title} darkcolor={"#D76D1D"} condition='2' />
                                  <Text fontSize='30px' mt='-10px'>
                                    <ChevronRightIcon />
                                  </Text>
                                </Flex>

                              </Flex>
                              <UnorderedList fontSize="17px"
                                fontFamily='heading'
                                w='100%'
                                color={'#D76D1D'}
                                opacity='0'
                                transitionDuration={'.5s'}
                                sx={{
                                  '.business-list:hover &': {
                                    transitionDuration: '.5s',
                                    opacity: '1'
                                  },
                                }}
                                ml='40px'
                              >
                                {empresariales?.subtitles?.map(
                                  ({ id, subtitle, url }) => {
                                    return (
                                      <Box key={id}>
                                        <ActiveLink url={url} title={subtitle} darkcolor={"#D76D1D"} condition='3' />
                                      </Box>
                                    );
                                  }
                                )}

                              </UnorderedList>

                            </UnorderedList>
                          </MenuItem>

                          {/* List of IT Systems */}
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            cursor='unset'
                            p='10px'
                            display='flex'
                            bg='none'
                          >
                            <UnorderedList
                              fontSize="17px"
                              display={'flex'}
                              justifyContent='space-between'
                              className='systemIT-list'
                            >
                              <Flex key={id} w='100%' justifyContent={'flex-start'}>

                                {/* Icono del Area */}
                                <Flex h='35px' w='35px' justifyContent='center' alignItems='center' borderRadius='100%' transitionDuration={'.3s'} sx={{ '.systemIT-list:hover &': { transitionDuration: '.3s', bg: 'green.400' } }}>
                                  <Image w='16px' src='/images/navbarIcons/icon-sistemas-it.svg' sx={{ '.systemIT-list:hover &': { filter: "brightness(0) invert(1)" } }} alt='iconoArea'/>
                                </Flex>

                                {/* Vinculo del Area  */}
                                <Flex ml='20px' w='410px' justifyContent={'space-between'}>
                                  <ActiveLink url={sistit?.url} title={sistit?.title} darkcolor={"green.400"} condition='2' />

                                </Flex>

                              </Flex>
                              <UnorderedList
                                fontSize="17px"
                                fontFamily='heading'
                                color={'#D76D1D'}
                                opacity='0'
                                w='100%'
                                transitionDuration={'.5s'}
                                sx={{
                                  '.systemIT-list:hover &': {
                                    transitionDuration: '.5s',
                                    opacity: '1'
                                  },
                                }}
                                ml='-6px'
                              >
                                {sistit?.subtitles?.map(
                                  ({ id, subtitle, url }) => {
                                    return (
                                      <Box key={id}>
                                        <ActiveLink url={url} title={subtitle} darkcolor={"#D76D1D"} condition='3' />
                                      </Box>
                                    );
                                  }
                                )}

                              </UnorderedList>

                            </UnorderedList>
                          </MenuItem>

                          {/* List of IoT Systems */}
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            cursor='unset'
                            p='10px'
                            display='flex'
                            bg={'none'}
                          >
                            <UnorderedList
                              fontSize="17px"
                              display={'flex'}
                              justifyContent='space-between'
                              className='systemIOT-list'
                            >
                              <Flex key={id} w='100%' justifyContent={'flex-start'}>

                                {/* Icono del Area */}
                                <Flex h='35px' w='35px' justifyContent='center' alignItems='center' borderRadius='100%' transitionDuration={'.3s'} sx={{ '.systemIOT-list:hover &': { transitionDuration: '.3s', bg: 'green.400' } }}>
                                  <Image w='16px' src='/images/navbarIcons/icon-sistemas-iot.svg' sx={{ '.systemIOT-list:hover &': { filter: "brightness(0) invert(1)" } }} alt='iconoArea'/>
                                </Flex>

                                {/* Vinculo del Area  */}
                                <Flex ml='20px' w='410px' justifyContent={'space-between'}>
                                  <ActiveLink url={sistiot?.url} title={sistiot?.title} darkcolor={"green.400"} condition='2' />
                                  <Text fontSize='30px' mt='-10px'>
                                    <ChevronRightIcon />
                                  </Text>
                                </Flex>

                              </Flex>
                              <UnorderedList fontSize="17px"
                                fontFamily='heading'
                                color={'green.400'}
                                transitionDuration={'.5s'}
                                opacity='0'
                                w='500px'
                                sx={{
                                  '.systemIOT-list:hover &': {
                                    transitionDuration: '.5s',
                                    opacity: '1'
                                  },
                                }}
                                ml='-105px'
                              >
                                {sistiot?.subtitles?.map(
                                  ({ id, subtitle, url }) => {
                                    return (
                                      <Box key={id}>
                                        <ActiveLink url={url} title={subtitle} darkcolor={"green.400"} condition='3' />
                                      </Box>
                                    );
                                  }
                                )}

                              </UnorderedList>

                            </UnorderedList>
                          </MenuItem>

                          {/* List of Learning */}
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            cursor='unset'
                            p='10px'
                            display='flex'
                            bg={'none'}
                          >
                            <UnorderedList
                              fontSize="17px"
                              display={'flex'}
                              justifyContent='space-between'
                              className='learning-list'
                            >
                              <Flex key={id} w='100%' justifyContent={'flex-start'}>

                                {/* Icono del Area */}
                                <Flex h='35px' w='35px' justifyContent='center' alignItems='center' borderRadius='100%' transitionDuration={'.3s'} sx={{ '.learning-list:hover &': { transitionDuration: '.3s', bg: '#D76D1D' } }}>
                                  <Image w='16px' src='/images/navbarIcons/icon-formacion.svg' sx={{ '.learning-list:hover &': { filter: "brightness(0) invert(1)" } }} alt='iconoArea'/>
                                </Flex>

                                {/* Vinculo del Area  */}
                                <Flex ml='20px' w='410px' justifyContent={'space-between'}>
                                  <ActiveLink url={learning?.url} title={learning?.title} darkcolor={"#D76D1D"} condition='2' />
                                  <Text fontSize='30px' mt='-10px'>
                                    <ChevronRightIcon />
                                  </Text>
                                </Flex>

                              </Flex>
                              <UnorderedList fontSize="17px"
                                fontFamily='heading'
                                color={'#D76D1D'}
                                opacity='0'
                                transitionDuration={'.3s'}
                                sx={{
                                  '.learning-list:hover &': {
                                    transitionDuration: '.5s',
                                    opacity: '1'
                                  },
                                }}
                                ml='40px'
                                w={'100%'}
                              >
                                {learning?.subtitles?.map(
                                  ({ id, subtitle, url }) => {
                                    return (
                                      <Box key={id}>
                                        <ActiveLink url={url} title={subtitle} darkcolor={"#D76D1D"} condition='3' />
                                      </Box>
                                    );
                                  }
                                )}

                              </UnorderedList>

                            </UnorderedList>
                          </MenuItem>


                        </MenuList>
                      </Menu>
                    </Box>
                  );
                }
              }
            )}
          </Box>
          <Flex
            justifyContent='center'
            alignItems="center"
            width="auto"
          >
            <Idiomas />
            <Button
              onClick={toggleColorMode}
              variant='ghost'
              px="5px"
              _hover={{ bgColor: "none" }}
              _active={{ bgColor: "none" }}
              aria-label="colorChange"
            >
              {colorMode === "light" ? (
                <MoonIcon w="18px" h={8} color={colorMode === 'light' ? '#fff' : 'white.100'} />
              ) : (
                <SunIcon w="18px" h={8} />
              )}
            </Button>

            <NavbarMobile />

          </Flex>
        </Flex>
      </Box >

    </>
  );
};

export default Navbar;
