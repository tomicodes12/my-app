

import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Newyork from './Newyork';
import Nigeria from './Nigeria';
import Califonia from './Califonia';
import Footer from '../inc/Footer';
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'

function Hotels() {
  return (
    <div>
      <Routes>
        <Route path="/hotels/Newyork" element={<Newyork />} />
        <Route path="/hotels/Califonia" element={<Califonia />} />
        <Route path="/hotels/Nigeria" element={<Nigeria />} />
      </Routes>
      <Outlet />
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-11 text-center">
              <h4>OUR HOTELS</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="main-heading">OUR BRANCH IN NEW YORK</h3>
              <div className="underline mx_auto"></div>
              <img src={image7} width="500px" height="300px" />
              <p>Located at .....</p>
            </div>
            <div className="col-md-6 border-start">
              <div className="underline"></div>
              <h3 className="main-heading">OUR BRANCH IN CALIFORNIA</h3>
              <div className="underline mx_auto"></div>
              <img src={image8} width="500px" height="300px" />
              <p>Located at California</p>
            </div>
            <div className="col-md-9 border-start">
              <div className="underline"></div>
              <h3 className="main-heading">OUR BRANCH IN NIGERIA</h3>
              <div className="underline mx_auto"></div>
              <img src={image9} width="500px" height="300px" />
              <p>Located at Chevron, Nigeria.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Hotels;

