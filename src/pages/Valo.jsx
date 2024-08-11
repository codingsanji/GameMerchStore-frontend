import React from "react";
import Vproducts from "../components/perproducts/vproducts";
// import Valoguide from "../components/valo/valoguide";
import ContactUs from "../components/Newsletter/Newsletter"
import Footer from "../components/footer/footer"

const Valo = () => {
  return (
    <div>
      {/* <Valoguide /> */}
      <Vproducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Valo;
