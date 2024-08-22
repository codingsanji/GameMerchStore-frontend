import React from "react";
import Phasguide from "../components/phasmo/phasguide";
import PProducts from "../components/perproducts/pproducts";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Phasmo = () => {
  return (
    <div>
      <Phasguide />
      <PProducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Phasmo;