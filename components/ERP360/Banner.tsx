import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { en, es } from "@/locale";
import Link from "next/link";
import styles from "@/theme/styles/Global.module.css";

export const Banner = () => {
  const [viewport] = useMediaQuery("(min-width: 768px)");
  const { locale } = useRouter();
  const { colorMode } = useColorMode();
  const t = locale === "en" ? en : es;
  const {
    global: { buttons },
    pages: {
      erp360: {
        banner: { heading01, heading02 },
      },
    },
  } = t;
  return (
    <Box as="section" position="relative" h="100%" w="100%">
      {viewport ? (
        <video
          height="100%"
          width="100%"
          autoPlay
          playsInline
          loop
          muted
          preload="auto"
          poster="/images/banners/posters/BannerERP360.webp"
          className={styles.video__Banners}
        >
          <source src="/images/banners/BannerERP360.webm" type="video/webm" />
          <source src="/images/banners/mp4/BannerERP360.mp4" type="video/mp4" />
        </video>
      ) : (
        <Box
          bgImage="/images/banners/mobile/BannerERP360.webp"
          w="100%"
          h="calc(100vh - 110px)"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
        />
      )}

      <Flex
        m="0 auto"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        flexDirection="column"
        w="100%"
        h="100%"
        top="0"
        overflow={{ base: "hidden", sm: "unset" }}
      >
        <Heading
          as="h3"
          w="90%"
          maxW={{ sm: "500px", md: "780px", xl: "100%" }}
          m="0px auto"
          fontSize={{ base: "26px", md: "36px" }}
          fontWeight="bold"
          textAlign="center"
          textShadow="2px 2px 2px rgba(0, 0, 0, 1)"
          color="#fff"
        >
          {heading01}
          <span style={{ display: "block" }}>{heading02}</span>
        </Heading>
        <Stack mt="10" direction="row" align="center">
          <Link href="#vinculoContact">
            <Button
              size="lg"
              bgColor="green.400"
              color={colorMode === "light" ? "#fff" : "white.100"}
              _hover={{ bgColor: "odoo.400" }}
            >
              {buttons.button05}
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Banner;
