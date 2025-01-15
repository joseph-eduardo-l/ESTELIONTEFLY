// import { en, es } from "@/locale";
// import { CheckIcon } from "@chakra-ui/icons";
// import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { CustomButton } from "../utils";
// import React from "react";

export const LearnMorePricesMobile = () => {
}
//   const colormode = useColorMode();
//   const { locale } = useRouter();
//   const t = locale === "en" ? en : es;
//   const {
//     global: { buttons },
//     pages: {
//       erp360: {
//         pricesAndPlans: { learnMoreList, titles  }, 
//       },
//     },
//   } = t;

//   const { colorMode } = useColorMode();


//   return (
//     <Box display={{ base: "block", lg: "none" }} mb="60px">
//       <Flex
//         w="100%"
//         h="75px"
//         pt="10px"
//         justifyContent="space-around"
//         boxShadow="0px 10px 25px -15px rgba(0, 0, 0, 0.20)"
//         position={"sticky"}
//         top={"88px"}
//         transition="1s"
//         bgColor={colorMode === "light" ? "#fff" : "#121e2c"}
//         zIndex="10"
//       >
//         <Flex
//           w="100%"
//           maxW={{ base: "300px", sm: "65%", md: "500px" }}
//           m="0 auto"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           {titles.map(({ id, heading }) => {
//             return (
//               <Flex
//                 key={id}
//                 ml={
//                   id === 1 ? { base: "0px", sm: "-20px", md: "-40px" } : "0px"
//                 }
//                 fontSize={{ base: "14px", sm: "16px", md: "18px" }}
//                 flexDirection="column"
//                 textAlign={"center"}
//                 px={{ base: "12px", sm: "24px", md: "34px" }}
//               >
//                 <span>Plan</span>
//                 <Text
//                   color={colorMode === "light" ? "odoo.400" : "white.100"}
//                   mt="-3px"
//                   fontWeight="700"
//                   fontSize={{ base: "14px", sm: "17px", md: "20px" }}
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
//           <Flex
//             w="90%"
//             m="0 auto"
//             key={id}
//             justifyContent={"center"}
//             alignItems="center"
//             mt={id === 1 ? "20px" : "0px"}
//             flexDirection="column"
//             mb="20px"
//           >
//             <Text
//               fontSize={{ base: "14px", md: "16px" }}
//               w="100%"
//               maxW="644px"
//               ml="16px"
//               mb="10px"
//             >
//               {header}
//             </Text>
//             <Flex
//               maxW="644px"
//               w="100%"
//               justifyContent="space-between"
//               color={colorMode === "light" ? "odoo.400" : "white.100"}
//               fontSize={{ base: "20px", md: "24px" }}
//             >
//               {id !== 26 ? (
//                 <>
//                   {/* <Box w="33.33%">
//                     <CheckIcon
//                       m="0 auto"
//                       display="block"
//                       visibility={id <= 10 ? "visible" : "hidden"}
//                     />
//                   </Box> */}
//                   <Box w="50%">
//                     <CheckIcon
//                       m="0 auto"
//                       display="block"
//                       visibility={id <= 18 ? "visible" : "hidden"}
//                     />
//                   </Box>
//                   <Box w="50%">
//                     <CheckIcon m="0 auto" display="block" />
//                   </Box>
//                 </>
//               ) : (
//                 <Flex justifyContent={"space-around"} w="100%">
//                   {Array.from({ length: 3 }).map((_, index) => (
//                     <React.Fragment key={index}>
//                       <CustomButton
//                         bgColor="green.400"
//                         bgHover="odoo.400"
//                         link="https://wa.me/message/EA3RA3DJC2NTA1"
//                         text={buttons.button01}
//                         margin="0px auto"
//                         padding={locale === "en" ? "28px" : "6px"}
//                       />
//                     </React.Fragment>
//                   ))}
//                 </Flex>
//               )}
//             </Flex>
//           </Flex>
//         );
//       })}
//     </Box>
//   );
// };

// //   return (
// //     <Box display={{ base: "block", lg: "none" }} mb="60px">
// //       <Flex
// //         w="100%"
// //         h="75px"
// //         pt="10px"
// //         justifyContent="space-around"
// //         boxShadow="0px 10px 25px -15px rgba(0, 0, 0, 0.20)"
// //         position={"sticky"}
// //         top={"88px"}
// //         transition="1s"
// //         bgColor={colorMode === "light" ? "#fff" : "#121e2c"}
// //         zIndex="10"
// //       >
// //         <Flex
// //           w="100%"
// //           maxW={{ base: "300px", sm: "65%", md: "500px" }}
// //           m="0 auto"
// //           justifyContent="space-between"
// //           alignItems="center"
// //         >

// //        {/* /*agregar titles.map del word  */}
// //        {titles.map(({ id, heading }) => {
// //             return (
// //               <Flex
// //                 key={id}
// //                 ml={
// //                   id === 1
// //                     ? { base: "0px", sm: "80px", md: "-40px" }
// //                     : id === 2
// //                     ? "20px"
// //                     : "20px"
// //                 }
// //                 fontSize={{ base: "14px", sm: "16px", md: "18px" }}
// //                 flexDirection="column"
// //                 textAlign={"center"}
// //                 px={{ base: "10px", sm: "22px", md: "32px" }}
// //               >
// //                 <span>Plan</span>
// //                 <Text
// //                   color={colorMode === "light" ? "odoo.400" : "white.100"}
// //                   mt="-3px"
// //                   fontWeight="700"
// //                   fontSize={{ base: "12px", sm: "15px", md: "18px" }}
// //                 >
// //                   {heading}
// //                 </Text>
// //               </Flex>
// //             );
// //           })}
// //         </Flex>
// //       </Flex>

// //        {/* /*agregar Learmorelist.map del word  */}
// //        {learnMoreList.map(({ id, text }) => {
// //         return (
// //           <Flex
// //             w="90%"
// //             m="0 auto"
// //             pr={id === 4 ? "370px" : "auto"}
// //             key={id}
// //             justifyContent={"center"}
// //             alignItems="center"
// //             mt={id === 1 ? "30px" : "0px"}
// //             flexDirection="column"
// //             mb="10px"
// //           >
// //             <Text
// //               fontSize={{ base: "15px", md: "16px" }}
// //               w="100%"
// //               maxW="644px"
// //               ml="1px"
// //               mb="10px"
// //             >
// //               {text}
// //             </Text>
// //             <Flex
// //               maxW="644px"
// //               w="100%"
// //               justifyContent="space-center"
// //               color={colorMode === "light" ? "odoo.400" : "white.100"}
// //               fontSize={{ base: "20px", md: "24px" }}
// //             >
// //               {/* {id !== 8 ? (
// //                 <>
// //                   <Box w="33.33%">
// //                     <CheckIcon
// //                       m="0 auto"
// //                       display="block"
// //                       visibility={id <= 10 ? "visible" : "hidden"}
// //                     />
// //                   </Box>
// //                   <Box w="50%">
// //                     <CheckIcon
// //                       m="0 auto"
// //                       display="block"
// //                       visibility={id <= 5 ? "visible" : "hidden"}
// //                     />
// //                   </Box>
// //                   <Box w="50%">
// //                     <CheckIcon m="0 auto" display="block" />
// //                   </Box>
// //                 </>
// //               ) : (
// //                 <Flex justifyContent={"space-around"} w="100%">
// //                   {Array.from({ length: 3 }).map((_, index) => (
// //                     <React.Fragment key={index}>
// //                       <CustomButton
// //                         bgColor="green.400"
// //                         bgHover="odoo.400"
// //                         link="https://wa.me/message/EA3RA3DJC2NTA1"
// //                         text={buttons.button01}
// //                         margin="0px auto"
// //                         padding={locale === "en" ? "28px" : "6px"}
// //                       />
// //                     </React.Fragment>
// //                   ))}
// //                 </Flex>
// //               )} */}
// //               {[4, 5, 8].map((index) => (
// //                 <React.Fragment key={index}>
// //                   <CheckIcon
// //                     visibility={id <= index ? "visible" : "hidden"}
// //                     ml={index === 4 ? "210px" : index === 5 ? "120px" : "135px"}
// //                     mt="-30px"
// //                     fontSize={15}
// //                   />
// //                 </React.Fragment>
// //               ))}
// //             </Flex>
// //           </Flex>
// //         );
// //       })}
// //     </Box>
// //   );
// // };

