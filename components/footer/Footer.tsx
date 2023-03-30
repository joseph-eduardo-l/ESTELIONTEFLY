import { Box, Flex, Grid, GridItem, Heading, Image, Text, Link, UnorderedList, Divider, useColorMode } from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { HiOutlineMail } from 'react-icons/hi';
import { en, es } from "@/locale";
const ActiveLink = dynamic(() => import('../navbar/ActiveLink'))

const itemColor = "#23BBB3"; //colorMode === "light" ? "#012643" : "#FFFFFFEB";

const icons = [
  {
    id: 1,
    icon: <FaFacebookF fontSize="18px" />,
    link: "https://www.facebook.com/corporacionestelio"
    , text: "facebook"
  },
  { id: 3, icon: <FaTwitter fontSize="18px" />, link: "https://twitter.com/esteliocorp", text: "twitter" },
  {
    id: 2,
    icon: <GrInstagram fontSize="18px" />,
    link: "https://www.instagram.com/estelio_corp"
    , text: "instagram"
  },
  {
    id: 4,
    icon: <FaLinkedinIn fontSize="18px" />,
    link: "https://www.linkedin.com/company/estelio"
    , text: "linkedin"
  },
];
interface FooterProps {
  titleBlogOne?: string
  titleBlogTwo?: string
  dateBlogOne?: string
  dateBlogTwo?: string
  urlOne?: string
  urlTwo?: string
}
const Footer = ({ titleBlogOne, titleBlogTwo, dateBlogOne, dateBlogTwo, urlOne, urlTwo }: FooterProps) => {
  const { colorMode } = useColorMode();
  const { locale, asPath } = useRouter();

  const t = locale === "en" ? en : es;
  const { global: { footer: { headings: { access }, countryPhone, linksFooter, privacyPolicy } } } = t;

  const numerosVenezuela = countryPhone.filter(phone => phone.phone.includes('+58'));
  const numerosPanama = countryPhone.filter(phone => phone.phone.includes('+507'));

  return (
    <>
      <Box p="30px 0 20px" bg="#052743" color={colorMode === 'light' ? '#fff' : 'white.100'}>
        <Grid
          maxW="1200px"
          w="95%"
          m="0 auto"
          templateColumns={{ lg: "repeat(3, 1fr)" }}
          gap={{ base: 3, lg: 4 }}
          alignItems="start"
        >
          <GridItem>
            <Box
              display={{ base: "block", md: "flex" }}
              flexDirection="column"
              justifyContent="space-between"
              height="full"
            >
              <Box>
                <Image m="0 auto" src={"/images/logo-2.webp"} w='199px' h='68px' alt="Logo EstelioFooter" loading="lazy" />
              </Box>

              <Divider orientation='horizontal' w={'90%'} m='15px auto' display={{ base: 'block', lg: 'none' }} opacity={.2} borderColor={colorMode === 'light' ? 'inherit' : ''} />

              {/* Phones */}

              {/* Numeros de Venezuela */}

              <Grid templateColumns={'1'} templateRows='repeat(2, 1fr)' >
                <GridItem textAlign="center" mt='5px'>
                  {numerosVenezuela.map(({ country, phone, id }) => {
                    return (
                      <Box key={id} display={{ base: 'block', sm: 'inline-block', lg: 'block' }}>
                        <Text ml={{ base: '0%', sm: '50%', lg: '0%' }} w='100%' fontSize={'18px'} fontWeight='700' mb={'5px'} color={itemColor}>
                          {country}
                        </Text>
                        <Link
                          href={`tel:${phone}`}

                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          gap={1}
                          _hover={{ textDecoration: "none", color: "#23BBB3" }}
                        >
                          <FaPhoneAlt /> {phone}
                        </Link>
                      </Box>
                    );
                  })}
                </GridItem>

                {/* Numeros de Panama */}

                <GridItem textAlign="center" >
                  {numerosPanama.map(({ country, phone, id }) => {
                    return (
                      <Box key={id}>
                        <Text fontSize={'18px'} fontWeight='700' mt={{ base: "26px", sm: '10px' }} color={itemColor}>
                          {country}
                        </Text>
                        <Link
                          href={`tel:${phone}`}

                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          gap={1}
                          _hover={{ textDecoration: "none", color: "#23BBB3" }}
                        >
                          <FaPhoneAlt /> {phone}
                        </Link>
                      </Box>
                    );
                  })}
                </GridItem>
              </Grid>
            </Box>
          </GridItem>

          <Divider orientation='horizontal' w={'90%'} m='15px auto' display={{ base: 'block', lg: 'none' }} opacity={.2} borderColor={colorMode === 'light' ? 'inherit' : ''} />

          {/* Blog en el footer*/}

          <GridItem>
            <Box
              display={{ base: "block", md: "flex" }}
              flexDirection="column"
              justifyContent="space-between"
              height="full"
            >
              <Link href={locale === 'en' ? `https://www.estelio.com/en/blog` : 'https://www.estelio.com/blog'} _hover={{ textDecoration: 'none' }}>
                <Heading
                  mt={{ base: "-5px", lg: '9px' }}
                  textAlign="center"
                  fontSize={{ base: '26px', md: '36px' }}
                  color={itemColor}
                  ml='20px'
                >
                  Blog
                </Heading>
              </Link>
              <Flex flexDirection='column'>
                <Link
                  my='15px'
                  display={{ base: "none", lg: 'flex' }}
                  alignItems="center"
                  justifyContent={'center'}
                  flexDirection='column'
                  textAlign='center'
                  fontWeight='400'
                  fontSize='17px'
                  href={locale === "en" ? `https://www.estelio.com/en/blog/${urlOne}` : `https://www.estelio.com/blog/${urlOne}`}
                  _hover={{ textDecoration: "none" }}
                >
                  {titleBlogOne}
                  <Text color='#F47C20'>
                    {dateBlogOne}
                  </Text>
                </Link>

                <Link
                  mb='15px'

                  display={{ base: "none", lg: 'flex' }}
                  alignItems="center"
                  justifyContent="center"
                  flexDirection='column'
                  fontWeight='400'
                  fontSize='17px'
                  textAlign='center'
                  href={locale === "en" ? `https://www.estelio.com/en/blog/${urlTwo}` : `https://www.estelio.com/blog/${urlTwo}`}
                  _hover={{ textDecoration: "none" }}
                >
                  {titleBlogTwo}
                  <Text color='#F47C20'>
                    {dateBlogTwo}
                  </Text>
                </Link>

              </Flex>

              <Divider orientation='horizontal' w={'90%'} m='15px auto' display={{ base: 'block', lg: 'none' }} opacity={.2} borderColor={colorMode === 'light' ? 'inherit' : ''} />
            </Box>
          </GridItem>

          <GridItem>
            <Box
              display={{ base: "block", md: "flex" }}
              flexDirection="column"
              justifyContent="center"
              height="full"
            >
              <Box>
                <Heading
                  ml="5%"
                  textAlign="center"
                  fontSize="3xl"
                  color={itemColor}
                >
                  {access}
                </Heading>
                <UnorderedList
                  h='170px'
                  fontSize="17px"
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  {linksFooter.map(({ url, title, id }) => {
                    return (
                      <ActiveLink key={id} url={url} title={title} color={colorMode === 'light' ? '#fff' : 'white.100'} darkcolor={"#23bbb3"} condition='3' />
                    )
                  })}
                </UnorderedList>

                {/*  Icons */}

                <Box mt="20px">
                  <Flex ml='-6px' justifyContent="center" gap={5}>
                    {icons.map(({ icon, link, id, text }) => {
                      return (
                        <Link
                          title={text}
                          id={`footer_${text}`}
                          aria-label={text}
                          color="fff"
                          _hover={{ color: "#23BBB3" }}
                          key={id}
                          href={link}
                          target='_blank'
                        >
                          {icon}
                        </Link>
                      );
                    })}
                  </Flex>
                </Box>

                {/* Email */}
                <Box
                  mt="15px"
                  display="flex"
                  gap={1}
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ textDecoration: "none", color: "#23BBB3" }}
                >
                  <HiOutlineMail fontSize="20px" />

                  <Text ml='0px' fontSize="md" fontWeight="400">
                    <Link href='mailto:info@estelio.com'>
                      info@estelio.com
                    </Link>
                    {/* info@estelio.com */}
                  </Text>
                </Box>

              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Divider orientation='horizontal' w={'90%'} m='15px auto' display={{ base: 'block', lg: 'none' }} opacity={.2} borderColor={colorMode === 'light' ? 'inherit' : ''} />

        <Flex textAlign='center' direction='column' alignItems='center' justifyContent='center' w='90%' m='30px auto 0'>
          <Link href={privacyPolicy.link}>{privacyPolicy.privacy}</Link>
          <Text>{privacyPolicy.copyright}</Text>
        </Flex>
      </Box >
    </>
  );
};

export default Footer;
