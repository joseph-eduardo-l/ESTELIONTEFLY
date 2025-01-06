import { useRouter } from "next/router";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorMode,
  useColorModeValue,
  UnorderedList,
  ListItem,
  } from "@chakra-ui/react";
import { en, es } from "@/locale";

export const Questions = () => {
  const { colorMode } = useColorMode();
  const { locale } = useRouter();
  const t = locale === "en" ? en : es;
  const {
    global: { buttons },
    pages: {
      erp360: {
        questions: { heading, accordion },
      },
    },
  } = t;
  return (
    <Box as="section" id="FAQ" m="80px auto" width="90%" position="relative" zIndex="5" >
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "24px", md: "32px" }}
        mt="-10px"
      >
        {heading}
      </Heading>
      <Divider
        m="15px auto 50px"
        w="120px"
        h="6px"
        bgColor={colorMode === "light" ? "odoo.400" : "#fff"}
        opacity={colorMode === "dark" ? "0.7" : 0.9}
        borderStyle="none"
        borderRadius="10px"
      />

      <Box maxW="1024px" m="0 auto" >
        {accordion.map(({ id, heading, content }) => {
          return (
            <Accordion key={id} allowMultiple>
              <AccordionItem
                borderBlock={`1px solid ${
                  colorMode === "light" ? "#EDF2F7" : "gray.100"
                }`}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      position="relative"
                      p={4}
                      mb={"2px"}
                      _expanded={{ bg: "#23BBB3", color: "white" }}
                      borderRadius="10px"
                      _focus={{ boxShadow: "none" }}
                    >
                      <Box flex="1" textAlign="left" fontSize="18px">
                        {heading}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="14px" />
                      ) : (
                        <AddIcon fontSize="14px" color="#029B79" />
                      )}
                    </AccordionButton>



                    <AccordionPanel
                      py={4}
                      fontSize="16px"
                      lineHeight={1.8}
                      whiteSpace="pre-wrap"
                     >
                      {content?.title01 === "ERP 360" &&
                      content.title02 === "Odoo Enterprise" ? (
                        <UnorderedList>
                          <h1>
                            <b>{content.title01} :</b>
                          </h1>
                          <ListItem>{content.text01erp}</ListItem>
                          <ListItem>{content.text02erp}</ListItem>
                          <ListItem>{content.text03erp}</ListItem>
                          <br />
                          <h1>
                            <b>{content.title02} :</b>
                          </h1>
                          <ListItem>{content.text01odooEnterprise}</ListItem>
                          <ListItem>{content.text02odooEnterprise}</ListItem>
                          <ListItem>{content.text03odooEnterprise}</ListItem>
                          {/* <ListItem>{content.text04odooEnterprise}</ListItem> */}
                          {/* <ListItem>{content.summary}</ListItem> */}
                          <br />
                          <h1>
                            <b>{content.title03} :</b>
                          </h1>
                          <h1>{content.text04odooEnterprise}</h1>
                        </UnorderedList>
                      ) : (
                        ""
                      )}
                      {content.isTitle === true ? (
                        <UnorderedList>
                          <h1>{content.title}</h1>
                          <ListItem>{content.text01}</ListItem>
                          <ListItem>{content.text02}</ListItem>
                          <ListItem>{content.text03}</ListItem>
                          <ListItem>{content.text04}</ListItem>
                          <ListItem>{content.text05}</ListItem>
                          {/* <ListItem>{content.text06}</ListItem> */}
                          <ListItem>{content.text07}</ListItem>                     
                        </UnorderedList>
                      ) : (
                        content.text
                      )}
                      {content.ModuleTitle === true ? (
                        <UnorderedList>
                           <h1><b>{content.title2}</b></h1><br></br>
                           <ListItem>{content.Module1}</ListItem>
                           <ListItem>{content.Module2}</ListItem>
                           <ListItem>{content.Module3}</ListItem>
                           <ListItem>{content.Module4}</ListItem>
                           <ListItem>{content.Module5}</ListItem>
                           <ListItem>{content.Module6}</ListItem>
                           <ListItem>{content.Module7}</ListItem>
                           <ListItem>{content.Module8}</ListItem>
                        </UnorderedList>
                       
                      ): null }
                      
                    </AccordionPanel>



                  </>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};
