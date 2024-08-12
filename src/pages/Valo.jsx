import React from "react";
import Valoguide from "../components/val/valoguide/valoguide";
import VProducts from "../components/perproducts/vproducts";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Valo = () => {
  return (
    <div>
      <Valoguide />
      <VProducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Valo;
