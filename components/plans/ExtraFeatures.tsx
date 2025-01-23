import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Link,
  useColorMode,
  Divider,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { en, es } from "@/locale";
import { CheckIcon } from "@chakra-ui/icons";

export const ExtraFeatures = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const {
    global: { buttons },
    pages: {
      erp360: {
        extraFeatures: { heading, concept, text, context },
      },
    },
  } = t;

  const { colorMode } = useColorMode();

  return (
    <Box
      as="section"
      maxW={{ base: "auto", md: "1380px" }}
      w={"90%"}
      m="80px auto"
    >
      <Box>
        <Heading
          as="h1"
          textAlign="center"
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight="bold"
        >
          {heading}
        </Heading>
        <Divider
          m="15px auto 35px"
          w="120px"
          h="6px"
          opacity=".8"
          borderStyle="none"
          bgColor={colorMode === "light" ? "odoo.400" : "#fff"}
          borderRadius="10px"
        />
        <Flex w="100%" flexDirection="column">
          <Text fontSize={{ base: "20px", md: "22px" }} textAlign="center">
            {concept}
          </Text>
        </Flex>
      </Box>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: 0, md: 3, lg: 8 }}
      >
        {context.map(
          ({
            // id,
            title,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            item8,         
                    
          }) => {
            return (
              <GridItem
                key={title}
                alignItems="center"
                flexDirection="column"
                w={"100%"}
                position="relative"
                boxShadow="0px 0px 3px -2px black"
                borderRadius={"15px"}
                m={"30px auto"}
                p={{ base: "35px", md: "25px", lg: "40px" }}
                bgColor={"#f4fbfc20"}
                h={"95%"}
                transitionDuration="400ms"
                display="flex"
                _hover={
                  colorMode === "light"
                    ? { boxShadow: "0px 0px 20px -8px #a1a1a1" }
                    : { bgColor: "white.100", color: "#052743" }
                }
                className="cardPrice"
              >
                <Box w="100%" h={"65%"}>
                  <Text
                    textAlign="center"
                    fontSize={{ base: "24px", md: "28px", lg: "32px" }}
                    fontFamily="heading"
                    sx={{
                      ".cardPrice:hover &": {
                        color: "odoo.400",
                      },
                    }}
                  >
                    {title}
                  </Text>

                  <List spacing={2} mt="14px">
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item1}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item2}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item3}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item4}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item5}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item6}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item7}
                      </Text>
                    </ListItem>
                    <ListItem key={title} display="flex">
                      <ListIcon fontSize={"14px"} mt="8px">
                        <CheckIcon boxSize={3} />
                      </ListIcon>
                      <Text fontSize={{ base: "16px", lg: "18px" }}>
                        {item8}
                      </Text>
                    </ListItem>
                  </List>
                </Box>
                <Flex
                  flexDirection={"column"}
                  alignItems="center"
                  w="100%"
                  position={"relative"}
                >
                  <Text mt={{ base: "80px", md: "80px" }} fontSize={"16px"}>
                    {text}
                  </Text>
                </Flex>
              </GridItem>
            );
          }
        )}
      </Grid>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        w="100%"
        mt="40px"
        position={"relative"}
      >
        <Link
          href={"https://wa.me/584120319468"}
          _hover={{ textDecoration: "none" }}
        >
          <Button
            size="lg"
            bgColor="green.400"
            color={colorMode === "light" ? "#fff" : "white.100"}
            _hover={{ bgColor: "odoo.400" }}
          >
            {buttons.button01}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
