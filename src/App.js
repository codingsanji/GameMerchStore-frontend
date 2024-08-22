import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from 'react'
import axios from "axios";

//importing the pages to add path
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Logup from "./pages/RegJoin";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Phasmo from "./pages/Phasmo";
import Valo from "./pages/Valo";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    axios.get('http://localhost:3001/product').then((response) => console.log(response.data))
  }, [])
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valo" element={<Valo />} />
          <Route path="/phasmo" element={<Phasmo />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Logup />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
