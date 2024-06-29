
import React from 'react';
import { NavLink } from 'react-router-dom';
import Newyork from './Newyork';
import Califonia from './Califonia';
function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-18">
          <nav className="navbar navbar-expand-lg navbar-dark bg-grey">
            <div className="container-fluid">
              <li className="nav-item col-md-8">
                <NavLink to="/" className="navbar-brand"><b> ANDERSON HOTEL</b> </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </li>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link active">Home</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="/hotels" className="nav-link active dropdown-toggle" id="hotels-dropdown" data-bs-toggle="dropdown" aria-expanded="false">Hotels</NavLink>
                    <ul className="dropdown-menu" aria-labelledby="hotels-dropdown">
                      <li><NavLink to="/hotels/Newyork" className="dropdown-item">New York</NavLink></li>
                      <li><NavLink to="/hotels/califonia" className="dropdown-item">California</NavLink></li>
                      <li><NavLink to="/hotels/nigeria" className="dropdown-item">Nigeria</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link active">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link active">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/generalledger" className="nav-link active">General </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/ledger" className="nav-link active">Ledger</NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

