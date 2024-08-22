import React, { useEffect, useState } from "react";
import Phasguide from "../components/phasmo/phasguide";
import PProducts from "../components/perproducts/pproducts";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";
import axiosclient from "../utils/axiosclient";
import { AssetImages } from "../utils/imageurl";

const Phasmo = () => {
  const [pproduct, setPproduct] = useState([]);
  useEffect(() => {
    axiosclient
      .get("/product/filter?categoryName=Phasmophobia")
      .then((response) => {
        setPproduct(response.data);
      })
      .catch((error) => console.log(error));
      pproduct.map(
        (product) =>
          (product.image = AssetImages.PhasmoImage + product.image)
      );
  }, []);

  return (
    <div>
      <Phasguide />
      <PProducts filteredProducts={pproduct} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Phasmo;
