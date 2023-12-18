import { Banner } from "../ERP360";
import { LearnMorePrices } from "./LearnMorePrices";
import { ExtraFeatures } from "./ExtraFeatures";
import { LearnMorePricesMobile } from "./LearnMorePricesMobile";
import { Prices } from "./Prices";

export const Plans = () => {
  return (
    <>
      <Banner />
      <Prices />
      <LearnMorePrices />
      <ExtraFeatures />
      <LearnMorePricesMobile />
    </>
  );
};

export default Plans;
