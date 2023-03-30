import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme/theme'
import { IpApiContextProvider } from '../context/IpApiContext';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {

  return (
    <ChakraProvider theme={theme}>
      <IpApiContextProvider>
      <Component {...pageProps} />
      </IpApiContextProvider>
    </ChakraProvider>
  )
  }
}
