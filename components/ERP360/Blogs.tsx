import { useRouter } from "next/router";
import { Box, Text, VStack, Heading, useColorMode, Image, Divider } from "@chakra-ui/react";
import { ContactERP360, ContactERP360En } from "../Contact";
import { useFetch } from "../hooks/useFetch";
import { ApiResponse } from "../ERP360/interface.blog"; // Importa el tipo
import { en, es } from "@/locale";
import { Blog } from './interface.blog';

export const Blogs = () => {
    const { loading, error, data } = useFetch<ApiResponse>('http://localhost:1337/api/blogs?populate=*'); // Especifica el tipo aquí
    const { locale } = useRouter();
    const t = locale === "en" ? en : es;
    const {
        global: { buttons },
        pages: {
            erp360: {
                Blogs: { Blogtitle, blogcontent, coverimage, publishedDate, author,headingSpan, subHeading},
            },
        },
    } = t;
    const { colorMode } = useColorMode();

    // console.log('Erp360 component rendered');
    // console.log('Loading:', loading);
    // console.log('Error:', error);
    console.log('Data:', data);

    if (loading) {
        return <Text>Cargando datos...</Text>;
    }

    if (error) {
        return <Text>Error al cargar los datos: {error.message}</Text>;
    }

    return (
        <>
            {/* {locale === 'en' ? <ContactERP360En /> : <ContactERP360 />} */}

            {/* Mostrar los blogs */}
            <Box maxW='1280px' width='90%' m={{ base: "0px auto", md: '60px auto' }} pt='60px'>
            <Box>
                <Heading as='h2' textAlign='center' fontSize={{ base: '24px', md: '32px' }} fontWeight={400}  maxW={{ base: '370px', md: '100%' }} m='0 auto' >
                    {Blogtitle}
                    <span style={{ color: colorMode === 'light' ? '#23BBB3' : 'white.100', display: "inline" }}>{headingSpan}</span>
                </Heading>

                <Divider m="15px auto 0px" w="120px" h="6px" opacity={colorMode === 'dark' ? "0.7" : 0.9} borderStyle="none" bgColor='odoo.400' borderRadius='10px' />

                <Text fontSize={{ base: "16px", md: "18px" }} textAlign="center" m="20px auto 0" color='blue.700'>
                    {subHeading}
                </Text>
            </Box>
            <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} p={5}>
                {data?.data.map((blog) => (
                    <Box 
                        key={blog.id} 
                        p={5} 
                        shadow="md" 
                        borderWidth="1px" 
                        borderRadius="md" 
                        overflow="hidden" 
                        transition="transform 0.2s, box-shadow 0.2s" 
                        _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                        onClick={() => {
                            const contentElement = document.getElementById(`content-${blog.id}`);
                            if (contentElement) {
                                contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
                            }
                        }}
                    >
                        <Image 
                            src={`http://localhost:1337${blog.coverimage.url}`} 
                            alt={blog.Blogtitle} 
                            mb={4} 
                            borderRadius="md" 
                            objectFit="cover" 
                            height="200px" 
                            width="100%"
                        />
                        <Heading fontSize="xl" mb={2}>{blog.Blogtitle}</Heading>
                        <Text noOfLines={3} mb={4}>
                            {blog.blogcontent.map((content, index) => (
                                <Text key={index}>
                                    {content.children.map((child, childIndex) => (
                                        <Text key={childIndex} as={child.bold ? 'strong' : child.italic ? 'em' : 'span'}>
                                            {child.text}
                                        </Text>
                                    ))}
                                </Text>
                            ))}
                        </Text>
                        <Text id={`content-${blog.id}`} display="none">
                            {blog.blogcontent.map((content, index) => (
                                <Text key={index}>
                                    {content.children.map((child, childIndex) => (
                                        <Text key={childIndex} as={child.bold ? 'strong' : child.italic ? 'em' : 'span'}>
                                            {child.text}
                                        </Text>
                                    ))}
                                </Text>
                            ))}
                        </Text>
                        <Text fontSize="sm" color="gray.500" mb={1}>Publicado el: <strong>{blog.publishedDate}</strong></Text>
                        <Text fontSize="sm" color="gray.500">Autor: <strong>{blog.author}</strong></Text>
                    </Box>
                ))}
            </Box>
            </Box>
        </>
    );
}

export default Blogs;