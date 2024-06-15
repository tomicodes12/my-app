import React from 'react'
import Footer from '../inc/Footer';
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'

function Califonia() {
  return (

    <div>
      <section className=" py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-11 text-center">
              <h4>OUR HOTELS</h4>
            </div>

          </div>
        </div>
      </section>

      < section className="bg-light border-bottom">
        <p></p>
        <div container>
          <div className="col-md-9 ">
            <p> </p>
            <h3 className="main-heading">OUR BRANCH IN CALIFORNIA </h3>
            <div className="underline mx_auto"></div>
            <div className="container">
              <img src={image8} width="500px" height="300px" />
            </div>
            <div className="col-md-6 border-start">
              <div className="underline"> </div>
              <p> Located at California.
              </p>
              <p> </p>
              <button type="button" className="btn btn-primary w-50" > Make a reservation today</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Califonia;