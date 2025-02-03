import { Banner } from "../ERP360";
// import { LearnMorePrices } from "./LearnMorePrices";
import { ExtraFeatures } from "./ExtraFeatures";
// import { LearnMorePricesMobile } from "./LearnMorePricesMobile";
import { Prices } from "./Prices";
import { FeaturesPremium } from "./FeaturesPremium";
import { PaypalPayment } from "./PaypalPayment";

export const Plans = () => {
  return (
    <>
      <Banner />
      <Prices />
      <PaypalPayment/>
      {/* <LearnMorePrices /> */}
      {/* <LearnMorePricesMobile /> */}
      <FeaturesPremium />  
      <ExtraFeatures />
      
      
    </>
  );
};

export default Plans;
