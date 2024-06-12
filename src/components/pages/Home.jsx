
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx_auto"></div>
              <p>Some text here</p>
              <Link to="/about" className="btn btn-warning shadow">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Vision Mission and Values</h3>
              <div className="underline mx_auto"></div>
              <div></div>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Vision</h6>
              <p>Some text here</p>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Mission</h6>
              <p>Some text here</p>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Core Values</h6>
              <p>Some text here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

