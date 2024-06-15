import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="underline"> </div>
            <h3>Contact Us</h3>
            <p>Address: </p>
            <p>Phone: 08104919209</p>
            <p>Email: [info@andersonhotel.com]</p>
          </div>
          <div className="col-md-4">
            <div className="underline"> </div>
            <h3>Quick Links</h3>
            <ul>
              <NavLink to="/" className="nav-link active">Home</NavLink>
              <NavLink to="/hotels" className="nav-link active">Hotels</NavLink>
              <NavLink to="/contact" className="nav-link active">Contact</NavLink>
              <NavLink to="/about" className="nav-link active">About</NavLink>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="underline"> </div>
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="copyright">Copyright © 2023 Hotel Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>


  )
}
export default Footer;
