import React from "react";
import Latest from "../components/latest/latest";
// import Item from "../components/items/items";
import ContactUs from "../components/Newsletter/Newsletter"
import Footer from "../components/footer/footer";


const Home = () => {
  return (
    <div>
      {/* keep the bg that color and try to put the hero part in a box above the bg  */}
      <Latest />
      {/* <Item /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
