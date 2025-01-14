import Navbar from "../navbar/Navbar";
import dynamic from "next/dynamic";
import { PhoneBar } from "../navbar";
import Head from "next/head";
const ButtonWhatsapp = dynamic(() => import('../buttonWhatsapp/ButtonWhatsapp'))
const Footer = dynamic(() => import("../footer/Footer"));


type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string,
};

export const Layout: React.FC<Props> = ({ children, title, description }) => {
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

      {/* <PhoneBar /> */}
      <Navbar />
      <div>
        <ButtonWhatsapp />
        {children}
      </div>
      <Footer />
    </>
  );
};
