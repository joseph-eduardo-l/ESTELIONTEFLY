// import { en, es } from "@/locale";
// import { CheckIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Flex,
//   ListItem,
//   Text,
//   UnorderedList,
//   useMediaQuery,
//   useColorMode,
//   Heading,
//   Divider,
// } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { CustomButton } from "../utils";
// import React from "react";

export const LearnMorePrices = () => {
}
//   const { locale } = useRouter();
//   const t = locale === "en" ? en : es;
//   const {
//     global: { buttons },
//     pages: {
//       erp360: {
//         pricesAndPlans: {
//           knowmore,
//           titles,
//           learnMoreList,
//           defaultFunctionalities: { heading, concept }, 
//         },
//       },
//     },
//   } = t;

//   const { colorMode } = useColorMode();

//   const [pixels1080] = useMediaQuery("(min-width: 1080px)");


//   return (
//     <Box display={{ base: "none", lg: "block" }} mb="40px">
//       <Flex
//         w="100%"
//         h="60px"
//         pt="10px"
//         justifyContent="space-around"
//         boxShadow="0px 10px 25px -15px rgba(0, 0, 0, 0.20)"
//         position={"sticky"}
//         top={"88px"}
//         transition="1s"
//         bgColor={colorMode === "light" ? "#fff" : "#121e2c"}
//         zIndex="10"
//         mb="20px"
//       >
//         <Text
//           color={colorMode === "light" ? "odoo.400" : "white.100"}
//           ml="5px"
//           mt="-3px"
//           // fontWeight="700"
//           fontSize={{ base: "20px", md: "22px" }}
//         >
//           {knowmore}
//         </Text>
//         <Flex
//           gap={"10px"}
//           maxW="480px"
//           w="100%"
//           justifyContent="space-between"
//           mr="3%"
//         >
//           {titles.map(({ id, heading }) => {
//             return (
//               <Flex
//                 key={id}
//                 ml={
//                   id === 1 ? { base: "0px", sm: "-20px", md: "-40px" } : "0px"
//                 }
//                 fontSize={{ base: "16px", md: "18px" }}
//                 textAlign={"center"}
//                 px="10px"
//               >
//                 {/* <span>Plan:</span> */}
//                 <Text
//                   color={colorMode === "light" ? "odoo.400" : "white.100"}
//                   ml="5px"
//                   mt="-3px"
//                   fontWeight="700"
//                   fontSize={{ base: "22px", md: "24px" }}
//                 >
//                   {heading}
//                 </Text>
//               </Flex>
//             );
//           })}
//         </Flex>
//       </Flex>
//       {learnMoreList.map(({ id, header, content }) => {
//         return (
//           <Box key={id} position="relative">
//             <Flex
//               w="100%"
//               justifyContent={"space-around"}
//               mt={id === 1 ? "40px" : "40px"}
//             >
//               <UnorderedList w={pixels1080 ? "360px" : "280px"} mb="10px">
//                 <Text fontSize={{ base: "18px", md: "20px" }}>
//                   <b>{header}</b>
//                 </Text>
//                 <br />
//                 {content.map((i) => {
//                   return (
//                     <ListItem
//                       key={i}
//                       fontSize={{ base: "16px", md: "18px" }}
//                       ml="40px"
//                     >
//                       {i}
//                     </ListItem>
//                   );
//                 })}
//               </UnorderedList>
//               <Flex
//                 w="644px"
//                 maxW="644px"
//                 justifyContent={"space-around"}
//                 ml={pixels1080 ? "-280px" : "-200px"}
//                 color={colorMode === "light" ? "odoo.400" : "white.100"}
//                 fontSize={"24px"}
//               >
//                 {id !== 26 ? (
//                   <>
//                     {/* <CheckIcon visibility={id <= 10 ? "visible" : "hidden"} /> */}
//                     <CheckIcon visibility={id <= 4 ? "visible" : "hidden"} />
//                     <CheckIcon />
//                   </>
//                 ) : (
//                   <>
//                     {Array.from({ length: 2 }).map((_, index) => (
//                       <React.Fragment key={index}>
//                         <CustomButton
//                           bgColor="green.400"
//                           bgHover="odoo.400"
//                           link="https://wa.me/message/EA3RA3DJC2NTA1"
//                           text={buttons.button01}
//                           margin="20px auto "
//                           padding={locale === "en" ? "28px" : "6px"}
//                         />
//                       </React.Fragment>
//                     ))}
//                   </>
//                 )}
//               </Flex>
//             </Flex>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// //   return (
// //     <Box display={{ base: "none", lg: "block" }} mb="40px">
// //       <Heading
// //         as="h1"
// //         textAlign="center"
// //         fontSize={{ base: "24px", md: "32px" }}
// //         fontWeight="bold"
// //       >
// //         {heading}
// //       </Heading>
// //       <Divider
// //         m="15px auto 35px"
// //         w="120px"
// //         h="6px"
// //         opacity=".8"
// //         borderStyle="none"
// //         bgColor={colorMode === "light" ? "odoo.400" : "#fff"}
// //         borderRadius="10px"
// //       />
// //       <Flex w="100%" flexDirection="column">
// //         <Text
// //           fontSize={{ base: "20px", md: "22px" }}
// //           textAlign="center"
// //           mb="20px"
// //         >
// //           {concept}
// //         </Text>
// //       </Flex>
// //       <Flex
// //         w="100%"
// //         h="60px"
// //         pt="10px"
// //         justifyContent="space-around"
// //         boxShadow="0px 10px 25px -15px rgba(0, 0, 0, 0.20)"
// //         position={"sticky"}
// //         top={"88px"}
// //         transition="1s"
// //         bgColor={colorMode === "light" ? "#fff" : "#121e2c"}
// //         zIndex="10"
// //         mb="20px"
// //       >
// //         <Text
// //           color={colorMode === "light" ? "odoo.400" : "white.100"}
// //           ml="5px"
// //           mt="-3px"
// //           // fontWeight="700"
// //           fontSize={{ base: "20px", md: "22px" }}
// //         >
// //           {knowmore}
// //         </Text>
// //         <Flex
// //           gap={"10px"}
// //           maxW="480px"
// //           w="100%"
// //           justifyContent="space-between"
// //           mr="3%"
// //         >
         
// //  {/* /*agregar titles.map del word  */ }

// //  {titles.map(({ id, heading }) => {
// //             return (
// //               <Flex
// //                 key={id}
// //                 // ml={
// //                 //   id === 1 ? { base: "0px", sm: "-20px", md: "-40px" } : "0px"
// //                 // }
// //                 fontSize={{ base: "16px", md: "18px" }}
// //                 textAlign={"center"}
// //                 px="5px"
// //               >
// //                 {/* <span>Plan:</span> */}
// //                 <Text
// //                   color={colorMode === "light" ? "odoo.400" : "white.100"}
// //                   ml={id === 1 ? "30px" : id === 2 ? "100px" : "80px"}
// //                   mt="-3px"
// //                   fontWeight="700"
// //                   fontSize={{ base: "22px", md: "24px" }}
// //                 >
// //                   {heading}
// //                 </Text>
// //               </Flex>
// //             );
// //           })}
// //         </Flex>
// //       </Flex>

// //  {/* /*agregar learMorelist.map del word   */ }

// //      {learnMoreList.map(({ id, text }) => {
// //         return (
// //           <Box key={id} position="relative">
// //             <Flex
// //               w="100%"
// //               justifyContent={"space-around"}
// //               // mt={id === 1 ? "10px" : "0px"}
// //             >
// //               <UnorderedList w={pixels1080 ? "360px" : "280px"} mb="10px">
// //                 <ListItem fontSize={{ base: "18px", md: "20px" }}>
// //                   {text}
// //                 </ListItem>
// //               </UnorderedList>
// //               <Flex
// //                 w="630px"
// //                 maxW="644px"
// //                 justifyContent={"space-around"}
// //                 ml={pixels1080 ? "-150px" : "-200px"}
// //                 color={colorMode === "light" ? "odoo.400" : "white.100"}
// //                 fontSize={"20px"}
// //               >
// //                 {/* {id !== 8 ? (
// //                   <>
// //                     <CheckIcon visibility={id <= 10 ? "visible" : "hidden"} />
// //                     <CheckIcon visibility={id <= 4 ? "visible" : "hidden"} />
// //                     <CheckIcon />
// //                   </>
// //                 ) : (
// //                   <>
// //                     {Array.from({ length: 2 }).map((_, index) => (
// //                       <React.Fragment key={index}>
// //                         <CustomButton
// //                           bgColor="green.400"
// //                           bgHover="odoo.400"
// //                           link="https://wa.me/message/EA3RA3DJC2NTA1"
// //                           text={buttons.button01}
// //                           margin="20px auto "
// //                           padding={locale === "en" ? "28px" : "6px"}
// //                         />
// //                       </React.Fragment>
// //                     ))}
// //                   </>
// //                 )} */}
// //                 {[4, 5, 8].map((index) => (
// //                   <React.Fragment key={index}>
// //                     <CheckIcon
// //                       visibility={id <= index ? "visible" : "hidden"}
// //                     />
// //                   </React.Fragment>
// //                 ))}
// //               </Flex>
// //             </Flex>
// //           </Box>
// //         );
// //       })}
// //     </Box>
// //   );
// // };

