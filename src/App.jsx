
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Generalledger from "./components/pages/Generalledger";
import Ledger from "./components/pages/Ledger";
import Hotels from "./components/pages/Hotels";
import Newyork from "./components/pages/Newyork";
import Califonia from "./components/pages/Califonia";
import Nigeria from "./components/pages/Nigeria";
import Footer from "./components/inc/Footer";
import Slider from "./components/inc/Slider";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/contact" exact={true} element={<Contact />} />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/hotels" exact={true} element={<Hotels />} />
          <Route path="/hotels/Nigeria" exact={true} element={<Nigeria />} />
          <Route path="/hotels/Newyork" exact={true} element={<Newyork />} />
          <Route path="/hotels/Califonia" exact={true} element={<Califonia />} />
          <Route path="/generalledger" exact={true} element={<Generalledger />} />
          <Route path="/ledger" exact={true} element={<Ledger />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
