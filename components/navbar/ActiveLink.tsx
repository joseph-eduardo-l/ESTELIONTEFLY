import Link from 'next/link';
import { ListItem, Text, Button, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const ActiveLink = ({ url, title, color, darkcolor, locale2, condition }: any) => {
    const { asPath, locale } = useRouter();
    const { colorMode } = useColorMode();
    return (
        <Link href={url} locale={locale2}>
            {condition == '1' ?
                (<Text fontWeight='700' color={asPath == url ? color : '##FCF7F2'} _hover={{ color: color }} cursor='pointer'>
                    {title}
                </Text>)
                : condition == "2" ?
                    (<Text
                        display='inline-flex'
                        fontSize="2xl"
                        className={exo2.className}
                        fontWeight="bold"
                        color={asPath == url ? darkcolor : color}
                        cursor='pointer'
                        _hover={{ color: darkcolor }}
                    >
                        {title}
                    </Text>) : ((condition == "3") && (asPath != '/construccion')) ?
                        (<ListItem color={color}>
                            <Text cursor='pointer' w='275px' color={asPath == url ? color : '#FCF7F2'} transitionDuration='.2s' _hover={{ fontWeight: '700', color: darkcolor }}>{title}</Text>
                        </ListItem>) : ((condition == "3") && (asPath == '/construccion')) ?
                            (<ListItem color={color}>
                                <Text cursor='pointer' w='245px' transitionDuration='.2s' _hover={{ fontWeight: '700', color: darkcolor }}>{title}</Text>
                            </ListItem>) : locale == locale2 ?
                                (<Button
                                    position={"relative"}
                                    zIndex={10}
                                    color="#5BFCF3"
                                    className={exo2.className}
                                    fontWeight={700}
                                    variant='outline'
                                    mr="10px"
                                    w="31px"
                                    border='none'
                                    _hover={{ bgColor: '#052f52', }}
                                    _active={{ bgColor: '#053863' }}
                                    fontSize='18px'
                                >{title}</Button>) :
                                (<Button
                                    position={"relative"}
                                    zIndex={10}
                                    color={colorMode === 'light' ? '#fff' : '#FCF7F2'}
                                    className={exo2.className}
                                    fontWeight={400}
                                    variant='outline'
                                    mr="10px"
                                    w="31px"
                                    border='none'
                                    _hover={{ bgColor: '#052f52', }}
                                    _active={{ bgColor: '#053863' }}
                                    fontSize='18px'
                                >{title}</Button>)

            }
            {/* <Text fontWeight='700' color={asPath == url ? color : '#fff'} _hover={{ color: color }} cursor='pointer'>
                {title}
            </Text> */}
        </Link>
    )
}

export default ActiveLink