import { Banner } from "../ERP360";
import { LearnMorePrices } from "./LearnMorePrices";
import { LearnMorePricesMobile } from "./LearnMorePricesMobile";
import { Prices } from "./Prices";

export const Plans = () => {
  return (
    <>
      <Banner />
      <Prices />
      <LearnMorePrices />
      <LearnMorePricesMobile />
    </>
  );
};

export default Plans;