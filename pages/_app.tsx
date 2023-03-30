import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { IpApiContextProvider } from '../context/IpApiContext';
import { useState, useEffect } from 'react';
import { theme } from '@/theme';
import "@/styles/main.css"

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
