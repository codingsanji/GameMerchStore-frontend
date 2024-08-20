import React from "react";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";
import Homeval from "../components/val/homeval/homeval";
// import Valoguide from "../components/val/valoguide/valoguide";
// import Agent from "../components/val/agent/anAgent";
import AgentsList from "../components/val/agent/agentslist";
import Weapons from "../components/val/weapons/weapons";
import VProducts from "../components/perproducts/vproducts";

const Valo = () => {
  return (
    <div>
      <Homeval />
      {/* <Valoguide /> */}
      <AgentsList />
      <Weapons />
      <VProducts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Valo;
