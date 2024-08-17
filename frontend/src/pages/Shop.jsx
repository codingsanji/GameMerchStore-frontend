import React from "react";
import Head from "../components/shopheader/header";
import Products from "../components/perproducts/products";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";

const Shop = () => {
  return (
    <div>
      <Head />
      <Products />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Shop;
