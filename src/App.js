import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing the pages to add path
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Logup from "./Pages/RegJoin";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Phasmo from "./Pages/Phasmo";
import Valo from "./Pages/Valo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valo" element={<Valo />} />
          <Route path="/phasmo" element={<Phasmo />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Logup />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
