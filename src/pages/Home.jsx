import React from "react";
import Latest from "../components/latest/latest";
// import Item from "../components/items/items";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Latest />
      {/* <Item /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
