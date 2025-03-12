import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} /> {/* 404 or default page */}
          <Route path="product" element={<Product/>} /> {/* 404 or default page */}
        </Route>
      </Routes>
   
  );
}

export default App;
