import { ChevronDownIcon, HamburgerIcon, MoonIcon, SunIcon, } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, UnorderedList, useColorMode, useDisclosure, Divider, useMediaQuery } from "@chakra-ui/react";
import { Exo_2, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locale/en";
import es from "../../locale/es";
import { ActiveLink } from "./ActiveLink";
import Idiomas from "./Idiomas";

const exo2 = Exo_2({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})


export const Navbar = () => {
  const [logo] = useMediaQuery('(min-width: 480px)')
  const { colorMode, toggleColorMode } = useColorMode();
  const coloroscuro = "#052743";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const { global: { header: { vinculos } } } = t;

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
          h={{ base: '70px', sm: '75px' }}
          m="auto"
          alignItems="center"

        >
          <Box w={{ base: '70px', sm: '199px' }}>
            {logo ?
              <Box cursor='pointer'>
                <Link href='/'>
                  <Image width={199} height={68} src="/images/logo-2.webp" alt="LogoEstelio" priority />
                </Link>
              </Box>
              :
              <Box cursor='pointer' m='0 auto' display={{ base: "flex", sm: "none" }}>
                <Link href='/'>
                  <Image width={70} height={70} src="/images/icono-1.webp" style={{ padding: '10px' }} alt="IconoEstelio" />
                </Link>
              </Box>
            }

          </Box>
          <Box
            w="760px"
            display={{ base: "none", xl: "flex" }}
            justifyContent="space-between"
            // fontFamily="'Exo 2'"
            className={exo2.className}
            color={colorMode === 'light' ? '#fff' : 'white.100'}
          >
            {vinculos.map(
              ({ id, url, title, consultoria, empresariales, sistit, sistiot, learning, noticias }) => {
                if ((id != 3) && (id != 4)) {
                  return (
                    <Box px="16px" py="8px" key={id}>
                      <ActiveLink url={url} title={title} color='#5bfcf3' condition='1' />
                    </Box>
                  );
                } else if (id == 3) {
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
                        >
                          {title}
                        </MenuButton>
                        <MenuList
                          position="absolute"
                          bg='rgba(6,39,67,.9)'
                          border="none"
                          w="1180px"
                          left="-521px"
                          mt={3}
                          cursor='unset'
                        >
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            display="flex"
                            justifyContent="space-evenly"
                            cursor='unset'
                          // alignContent='center'
                          >
                            <UnorderedList
                              fontSize="17px"
                              spacing={2}
                              h='210px'
                            >
                              {consultoria?.map(
                                ({ id, subtitle, title, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <ActiveLink url={url} title={subtitle} color={"#F47C20"} darkcolor={"#D76D1D"} condition='2' />
                                      ) : (
                                        <ActiveLink url={url} title={title} color={"#F47C20"} darkcolor={"#D76D1D"} condition='3' />
                                      )}
                                    </Box>
                                  );
                                }
                              )}
                            </UnorderedList>

                            <UnorderedList fontSize="17px" spacing={2} h='210px'>
                              {empresariales?.map(
                                ({ id, subtitle, title, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <ActiveLink url={url} title={subtitle} color={"#F47C20"} darkcolor={"#D76D1D"} condition='2' />
                                      ) : (
                                        <ActiveLink url={url} title={title} color={"#F47C20"} darkcolor={"#D76D1D"} condition='3' />
                                      )}
                                    </Box>
                                  );
                                }
                              )}
                            </UnorderedList>
                            <UnorderedList fontSize="17px" spacing={2} h='210px'>
                              {sistit?.map(({ id, subtitle, title, url }) => {
                                return (
                                  <Box key={id}>
                                    {id == 0 ? (
                                      <ActiveLink url={url} title={subtitle} color={"#5bfcf3"} darkcolor={"#23bbb3"} condition='2' />
                                    ) : (
                                      <ActiveLink url={url} title={title} color={"#5bfcf3"} darkcolor={"#23bbb3"} condition='3' />
                                    )}
                                  </Box>
                                );
                              })}
                            </UnorderedList>
                          </MenuItem>
                          <MenuDivider color="#5bfcf3" mb='none' />
                          <MenuItem
                            _focus={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            display="flex"
                            justifyContent="space-evenly"
                            cursor='unset'
                          >
                            <UnorderedList
                              h='220px'
                              fontSize="17px"
                              spacing={3}
                            >
                              {sistiot?.map(({ id, subtitle, title, url }) => {
                                return (
                                  <Box key={id}>
                                    {id == 0 ? (
                                      <ActiveLink url={url} title={subtitle} color={"#5bfcf3"} darkcolor={"#23bbb3"} condition='2' />
                                    ) : (
                                      <ActiveLink url={url} title={title} color={"#5bfcf3"} darkcolor={"#23bbb3"} condition='3' />
                                    )}
                                  </Box>
                                );
                              })}
                            </UnorderedList>
                            <UnorderedList fontSize="17px" spacing={2}>
                              {learning?.map(({ id, subtitle, title, url }) => {
                                return (
                                  <Box key={id}>
                                    {id == 0 ? (
                                      <ActiveLink url={url} title={subtitle} color={"#F47C20"} darkcolor={"#D76D1D"} condition='2' />
                                    ) : (
                                      <ActiveLink url={url} title={title} color={"#F47C20"} darkcolor={"#D76D1D"} condition='3' />
                                    )}
                                  </Box>
                                );
                              })}
                            </UnorderedList>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  );
                }
                else if (id == 4) {
                  return (

                    <Menu autoSelect={false} key={id}>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon width='2em' height='2em' />}
                        bgColor={coloroscuro}
                        _hover={{ color: "#F47C20" }}
                        _active={{ bgColor: coloroscuro, color: "#F47C20" }}
                        fontWeight="700"
                      >
                        {title}
                      </MenuButton>
                      <MenuList
                        position="absolute"
                        bg='rgba(6,39,67,.9)'
                        border="none"
                        w="200px"
                        left="-55px"
                        p="10px"
                        mt={6}
                      >
                        {noticias?.map(({ id, title, url }) => {
                          return (
                            <Box key={id}>
                              <MenuItem
                                _focus={{ bgColor: "none" }}
                                _active={{ bgColor: "none" }}
                                display="flex"
                                justifyContent="space-evenly"
                              >
                                <Link href={url}>
                                  <Text fontWeight='700' color={colorMode === 'light' ? '#fff' : 'white.100'} _hover={{ color: '#F47C20' }} >{title}</Text>
                                </Link>
                              </MenuItem>
                              <MenuDivider display={id > 0 ? 'none' : 'block'} color="#5bfcf3" mb='none' />
                            </Box>
                          );
                        })}

                      </MenuList>
                    </Menu>
                  )
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
              variant="ghost"
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
            <Button
              onClick={onOpen}
              display={{ base: 'inline-flex', xl: "none" }}
              height='40px'
              variant="link"
              ml="5px"
              px="5px"
              _hover={{ bgColor: "" }}
              aria-label="menuButton"
            >

              <HamburgerIcon w='22px' h={10} color={colorMode === 'light' ? '#fff' : 'white.100'} />
            </Button>

          </Flex>
        </Flex>
      </Box>

      {/* Menu lateral */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#052743" color={colorMode === 'light' ? '#fff' : 'white.100'}>
          <DrawerCloseButton />
          <DrawerHeader boxShadow="0px 0.3px 0.5px gray">
            <Image
              width={199}
              height={68}
              src="/images/logo-1.webp"
              alt="LogoEstelio"
              priority
            ></Image>
          </DrawerHeader>
          <DrawerBody
            boxShadow="0px 0.3px 0.5px gray"
            maxH="100%"
            px="12px"
            key="a"
          >
            <Flex
              flexDirection="column"
              fontFamily="Montserrat"
              fontSize="xl"
              pt="15px"
            >
              {vinculos.map(
                ({ id, url, title, consultoria, empresariales, sistit, sistiot, learning, }) => {
                  if (id != 3) {
                    return (
                      <Box px="16px" py="8px" key={id}>
                        <Link
                          href={url}
                        >
                          <Box
                            _hover={{ textDecoration: "none", color: "#1d9e97" }}
                            cursor="pointer"
                          >
                            {title}
                          </Box>
                        </Link>
                      </Box>
                    );
                  } else {
                    return (
                      <Accordion defaultIndex={[0]} allowMultiple key={id}>
                        <AccordionItem border="none">
                          <AccordionButton fontSize="xl">
                            <Box flex="1" textAlign="left">
                              {title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel
                            pb={4}
                            display="flex"
                            flexDirection="column"
                          >
                            <Accordion defaultIndex={[0]} allowMultiple key={id}>
                              <AccordionItem border="none">
                                {consultoria?.map(({ id, title, subtitle, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <AccordionButton fontSize="xl">
                                          <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                            <Link href={url}>
                                              {subtitle}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      ) : (
                                        <AccordionPanel
                                          display="flex"
                                          flexDirection="column"
                                          px='0px'
                                          py='4px'
                                          pl="15px"
                                        >
                                          <Link href={url}>
                                            <Box
                                              fontSize='16px'
                                              _hover={{
                                                textDecoration: "none",
                                                color: "#1d9e97",
                                              }}
                                              cursor="pointer"
                                              pl='15px'
                                            >
                                              {title}
                                            </Box>
                                          </Link>
                                        </AccordionPanel>
                                      )}
                                    </Box>
                                  )
                                })}
                              </AccordionItem>
                              <Divider height='1px' w='100%' bgColor='#a7a7a7' />
                              <AccordionItem border="none">
                                {empresariales?.map(({ id, title, subtitle, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <AccordionButton fontSize="xl">
                                          <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                            <Link href={url}>
                                              {subtitle}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      ) : (
                                        <AccordionPanel
                                          display="flex"
                                          flexDirection="column"
                                          px='0px'
                                          py='4px'
                                          pl="15px"
                                        >
                                          <Link href={url}>
                                            <Box
                                              fontSize='16px'
                                              _hover={{
                                                textDecoration: "none",
                                                color: "#1d9e97",
                                              }}
                                              cursor="pointer"
                                              pl='15px'
                                            >
                                              {title}
                                            </Box>
                                          </Link>
                                        </AccordionPanel>
                                      )}
                                    </Box>
                                  )
                                })}
                              </AccordionItem>
                              <Divider height='1px' w='100%' bgColor='#a7a7a7' />
                              <AccordionItem border="none">
                                {sistit?.map(({ id, title, subtitle, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <AccordionButton fontSize="xl">
                                          <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                            <Link href={url}>
                                              {subtitle}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      ) : (
                                        <AccordionPanel
                                          display="flex"
                                          flexDirection="column"
                                          px='0px'
                                          py='4px'
                                          pl="15px"
                                        >
                                          <Link href={url}>
                                            <Box
                                              fontSize='16px'
                                              _hover={{
                                                textDecoration: "none",
                                                color: "#1d9e97",
                                              }}
                                              cursor="pointer"
                                              pl='15px'
                                            >
                                              {title}
                                            </Box>
                                          </Link>
                                        </AccordionPanel>
                                      )}
                                    </Box>
                                  )
                                })}
                              </AccordionItem>
                              <Divider height='1px' w='100%' bgColor='#a7a7a7' />
                              <AccordionItem border="none">
                                {sistiot?.map(({ id, title, subtitle, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <AccordionButton fontSize="xl">
                                          <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                            <Link href={url}>
                                              {subtitle}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      ) : (
                                        <AccordionPanel
                                          display="flex"
                                          flexDirection="column"
                                          px='0px'
                                          py='4px'
                                          pl="15px"
                                        >
                                          <Link href={url}>
                                            <Box
                                              fontSize='16px'
                                              _hover={{
                                                textDecoration: "none",
                                                color: "#1d9e97",
                                              }}
                                              cursor="pointer"
                                              pl='15px'
                                            >
                                              {title}
                                            </Box>
                                          </Link>
                                        </AccordionPanel>
                                      )}
                                    </Box>
                                  )
                                })}
                              </AccordionItem>
                              <Divider height='1px' w='100%' bgColor='#a7a7a7' />
                              <AccordionItem border="none">
                                {learning?.map(({ id, title, subtitle, url }) => {
                                  return (
                                    <Box key={id}>
                                      {id == 0 ? (
                                        <AccordionButton fontSize="xl">
                                          <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                            <Link href={url}>
                                              {subtitle}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      ) : (
                                        <AccordionPanel
                                          display="flex"
                                          flexDirection="column"
                                          px='0px'
                                          py='4px'
                                          pl="15px"
                                        >
                                          <Link href={url}>
                                            <Box
                                              fontSize='16px'
                                              _hover={{
                                                textDecoration: "none",
                                                color: "#1d9e97",
                                              }}
                                              cursor="pointer"
                                              pl='15px'
                                            >
                                              {title}
                                            </Box>
                                          </Link>
                                        </AccordionPanel>
                                      )}
                                    </Box>
                                  )
                                })}
                              </AccordionItem>
                            </Accordion>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  }
                })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
