import React from "react";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";
import VProducts from "../components/perproducts/vproducts";
import Valoguide from "../components/val/valoguide/valoguide";
import Homeval from "../components/val/homeval/homeval";
import Weapons from "../components/val/weapons/weapons";

const Valo = () => {
  return (
    <div>
      <Homeval />
      <Valoguide />
      <Weapons />
      <VProducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Valo;
