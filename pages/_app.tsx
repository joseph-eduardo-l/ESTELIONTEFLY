import { useState, useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme';
import { IpApiContextProvider } from '../context/IpApiContext';
import "@/styles/main.css"
import Script from 'next/script';

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
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" ></meta>
          <link rel="Icon" href="https://website-estelio.s3.amazonaws.com/images/estelio/icono.ico" />
        </Head>
        <ChakraProvider theme={theme}>
          <IpApiContextProvider>
            <div className='progressbar'></div>
            <div className='scrollPath'></div>
            <Component {...pageProps} />
          </IpApiContextProvider>
        </ChakraProvider>

        {/* Google tag (gtag.js)  */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-05K3Q4MH5B" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`<script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-05K3Q4MH5B');
            </script>`}
        </Script>
      </>
    )
  }
}
