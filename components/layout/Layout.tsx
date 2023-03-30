import Navbar from "../navbar/Navbar";
import dynamic from "next/dynamic";
import { PhoneBar } from "../navbar";
// const ButtonWhatsapp = dynamic(() => import('../buttonWhatsapp/ButtonWhatsapp'))
const Footer = dynamic(() => import("../footer/Footer"));

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PhoneBar />
      <Navbar />
      <div>
        {/* <ButtonWhatsapp /> */}
        {children}
      </div>
      <Footer />
    </>
  );
};
