import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useColorMode, useDisclosure, Divider, useMediaQuery } from "@chakra-ui/react";
import { en, es } from '../../locale';
import ActiveLink from "./ActiveLink";

/**
 * Component for code of navbar in small size or mobile 
 */

export const NavbarMobile = () => {
    const [logo] = useMediaQuery('(min-width: 480px)')
    const { colorMode, toggleColorMode } = useColorMode();
    const coloroscuro = "#052743";
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const { global: { header: { vinculos } } } = t;

    return (
        <>
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

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bgColor="odoo.400" color={colorMode === 'light' ? '#fff' : 'white.100'}>
                    <DrawerCloseButton />
                    <DrawerHeader boxShadow="0px 0.3px 0.5px gray">
                        <Image
                            width={129}
                            height={68}
                            src="/images/logo-erp.svg"
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
                            fontFamily="heading"
                            fontSize="xl"
                            pt="15px"
                        >
                            {vinculos.map(
                                ({ id, url, title, }) => {
                                    // if (id != 3) {
                                    return (
                                        <Box px="16px" py="8px" key={id}>
                                            <Link
                                                href={url}
                                            >
                                                <Box
                                                    _hover={{ textDecoration: "none", color: "cyan" }}
                                                    cursor="pointer"
                                                >
                                                    {title}
                                                </Box>
                                            </Link>
                                        </Box>
                                    );
                                    // } 
                                    // else {
                                    //     return (
                                    //         <Accordion defaultIndex={[0]} allowMultiple key={id}>
                                    //             <AccordionItem border="none">
                                    //                 <AccordionButton fontSize="xl">
                                    //                     <Box flex="1" textAlign="left">
                                    //                         {title}
                                    //                     </Box>
                                    //                     <AccordionIcon />
                                    //                 </AccordionButton>
                                    //                 <AccordionPanel
                                    //                     pb={4}
                                    //                     display="flex"
                                    //                     flexDirection="column"
                                    //                 >
                                    //                     <Accordion defaultIndex={[0]} allowMultiple key={id}>
                                    //                         <AccordionItem border="none">
                                    //                             <AccordionButton fontSize="xl">
                                    //                                 <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                    //                                     <ActiveLink url={consultoria?.url} title={consultoria?.title} darkcolor={"#D76D1D"} condition='2' />
                                    //                                 </Box>
                                    //                                 <AccordionIcon />
                                    //                             </AccordionButton>
                                    //                             {consultoria?.subtitles.map(({ id, subtitle, url }) => {
                                    //                                 return (
                                    //                                     <Box key={id}>

                                    //                                         <AccordionPanel
                                    //                                             display="flex"
                                    //                                             flexDirection="column"
                                    //                                             px='0px'
                                    //                                             py='4px'
                                    //                                             pl="15px"
                                    //                                         >
                                    //                                             <Link href={url}>
                                    //                                                 <Box
                                    //                                                     fontSize='16px'
                                    //                                                     _hover={{
                                    //                                                         textDecoration: "none",
                                    //                                                         color: "#1d9e97",
                                    //                                                     }}
                                    //                                                     cursor="pointer"
                                    //                                                     pl='15px'
                                    //                                                 >
                                    //                                                     {subtitle}
                                    //                                                 </Box>
                                    //                                             </Link>
                                    //                                         </AccordionPanel>
                                    //                                     </Box>
                                    //                                 )
                                    //                             })}
                                    //                         </AccordionItem>

                                    //                         <Divider height='1px' w='100%' bgColor='#a7a7a7' />

                                    //                         <AccordionItem border="none">
                                    //                             <AccordionButton fontSize="xl">
                                    //                                 <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                    //                                     <ActiveLink url={empresariales?.url} title={empresariales?.title} darkcolor={"#D76D1D"} condition='2' />
                                    //                                 </Box>
                                    //                                 <AccordionIcon />
                                    //                             </AccordionButton>
                                    //                             {empresariales?.subtitles.map(({ id, subtitle, url }) => {
                                    //                                 return (
                                    //                                     <Box key={id}>

                                    //                                         <AccordionPanel
                                    //                                             display="flex"
                                    //                                             flexDirection="column"
                                    //                                             px='0px'
                                    //                                             py='4px'
                                    //                                             pl="15px"
                                    //                                         >
                                    //                                             <Link href={url}>
                                    //                                                 <Box
                                    //                                                     fontSize='16px'
                                    //                                                     _hover={{
                                    //                                                         textDecoration: "none",
                                    //                                                         color: "#1d9e97",
                                    //                                                     }}
                                    //                                                     cursor="pointer"
                                    //                                                     pl='15px'
                                    //                                                 >
                                    //                                                     {subtitle}
                                    //                                                 </Box>
                                    //                                             </Link>
                                    //                                         </AccordionPanel>
                                    //                                     </Box>
                                    //                                 )
                                    //                             })}
                                    //                         </AccordionItem>

                                    //                         <Divider height='1px' w='100%' bgColor='#a7a7a7' />

                                    //                         <AccordionItem border="none">
                                    //                             <AccordionButton fontSize="xl">
                                    //                                 <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                    //                                     <ActiveLink url={sistit?.url} title={sistit?.title} darkcolor={"#D76D1D"} condition='2' />
                                    //                                 </Box>
                                    //                                 {/* <AccordionIcon /> */}
                                    //                             </AccordionButton>
                                    //                             {sistit?.subtitles.map(({ id, subtitle, url }) => {
                                    //                                 return (
                                    //                                     <Box key={id}>

                                    //                                         <AccordionPanel
                                    //                                             display="flex"
                                    //                                             flexDirection="column"
                                    //                                             px='0px'
                                    //                                             py='4px'
                                    //                                             pl="15px"
                                    //                                         >
                                    //                                             <Link href={url}>
                                    //                                                 <Box
                                    //                                                     fontSize='16px'
                                    //                                                     _hover={{
                                    //                                                         textDecoration: "none",
                                    //                                                         color: "#1d9e97",
                                    //                                                     }}
                                    //                                                     cursor="pointer"
                                    //                                                     pl='15px'
                                    //                                                 >
                                    //                                                     {subtitle}
                                    //                                                 </Box>
                                    //                                             </Link>
                                    //                                         </AccordionPanel>
                                    //                                     </Box>
                                    //                                 )
                                    //                             })}
                                    //                         </AccordionItem>

                                    //                         <Divider height='1px' w='100%' bgColor='#a7a7a7' />

                                    //                         <AccordionItem border="none">
                                    //                             <AccordionButton fontSize="xl">
                                    //                                 <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                    //                                     <ActiveLink url={sistiot?.url} title={sistiot?.title} darkcolor={"#D76D1D"} condition='2' />
                                    //                                 </Box>
                                    //                                 <AccordionIcon />
                                    //                             </AccordionButton>
                                    //                             {sistiot?.subtitles.map(({ id, subtitle, url }) => {
                                    //                                 return (
                                    //                                     <Box key={id}>

                                    //                                         <AccordionPanel
                                    //                                             display="flex"
                                    //                                             flexDirection="column"
                                    //                                             px='0px'
                                    //                                             py='4px'
                                    //                                             pl="15px"
                                    //                                         >
                                    //                                             <Link href={url}>
                                    //                                                 <Box
                                    //                                                     fontSize='16px'
                                    //                                                     _hover={{
                                    //                                                         textDecoration: "none",
                                    //                                                         color: "#1d9e97",
                                    //                                                     }}
                                    //                                                     cursor="pointer"
                                    //                                                     pl='15px'
                                    //                                                 >
                                    //                                                     {subtitle}
                                    //                                                 </Box>
                                    //                                             </Link>
                                    //                                         </AccordionPanel>
                                    //                                     </Box>
                                    //                                 )
                                    //                             })}
                                    //                         </AccordionItem>

                                    //                         <Divider height='1px' w='100%' bgColor='#a7a7a7' />

                                    //                         <AccordionItem border="none">
                                    //                             <AccordionButton fontSize="18px">
                                    //                                 <Box flex="1" textAlign="left" _hover={{ color: "#1d9e97" }}>
                                    //                                     <ActiveLink url={learning?.url} title={learning?.title} darkcolor={"#D76D1D"} condition='2' />
                                    //                                 </Box>
                                    //                                 <AccordionIcon />
                                    //                             </AccordionButton>
                                    //                             {learning?.subtitles.map(({ id, subtitle, url }) => {
                                    //                                 return (
                                    //                                     <Box key={id}>

                                    //                                         <AccordionPanel
                                    //                                             display="flex"
                                    //                                             flexDirection="column"
                                    //                                             px='0px'
                                    //                                             py='4px'
                                    //                                             pl="15px"
                                    //                                         >
                                    //                                             <Link href={url}>
                                    //                                                 <Box
                                    //                                                     fontSize='16px'
                                    //                                                     _hover={{
                                    //                                                         textDecoration: "none",
                                    //                                                         color: "#1d9e97",
                                    //                                                     }}
                                    //                                                     cursor="pointer"
                                    //                                                     pl='15px'
                                    //                                                 >
                                    //                                                     {subtitle}
                                    //                                                 </Box>
                                    //                                             </Link>
                                    //                                         </AccordionPanel>
                                    //                                     </Box>
                                    //                                 )
                                    //                             })}
                                    //                         </AccordionItem>
                                    //                     </Accordion>
                                    //                 </AccordionPanel>
                                    //             </AccordionItem>
                                    //         </Accordion>
                                    //     );
                                    // }
                                })}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}