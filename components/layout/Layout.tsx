import Navbar from "../navbar/Navbar";
import dynamic from "next/dynamic";
import { PhoneBar } from "../navbar";
import Head from "next/head";
const ButtonWhatsapp = dynamic(() => import('../buttonWhatsapp/ButtonWhatsapp'))
const Footer = dynamic(() => import("../footer/Footer"));

import '../'

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string,
  titleBlogOne?: string
  titleBlogTwo?: string
  dateBlogOne?: string
  dateBlogTwo?: string
  urlOne?: string
  urlTwo?: string
};

export const Layout: React.FC<Props> = ({ children, title, description, titleBlogOne, titleBlogTwo, dateBlogOne, dateBlogTwo, urlOne, urlTwo  }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title || "Estelio"}</title>
        <meta name="description" content={description} />
        {/* <meta property="og:title" content="Estelio Corp" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${origin}/images/nova.webm`} />
        <meta property="og:image:type" content='image/webp' />
        <meta property="og:image:width" content='200' />
        <meta property="og:image:height" content='200' /> */}
      </Head>
      
      <PhoneBar />
      <Navbar />
      <div>
        <ButtonWhatsapp />
        {children}
      </div>
      <Footer titleBlogOne={titleBlogOne} titleBlogTwo={titleBlogTwo} dateBlogOne={dateBlogOne} dateBlogTwo={dateBlogTwo} urlOne={urlOne} urlTwo={urlTwo} />
    </>
  );
};
