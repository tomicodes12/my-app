
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../inc/Footer';
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image15 from '../images/image15.jpg'

function Home() {
  return (

    <div>

      <section className="section">
        <div className="container">

          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> OUR HOTEL</h3>
              <div className="underline mx_auto"></div>
              <p>We are a luxurious hotel with a team of individuals who will ensure your comfort
                and safety with your best need in mind in order to take you to your dream land.
                With World class facilities ranging from an highly equipped gym to a swimming center, yoga classes and world class  Dinnig at our restaurant with a variety of flavours all over the world  </p>
              <Link to={`/about`} className="btn btn-warning shadow">Read More</Link>
            </div>
          </div>
        </div>



      </section>
      <section className="section bg-white border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Vision Mission and Values</h3>
              <div className="underline mx_auto"></div>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Vision</h6>
              <p>To provide quality service and ensure our customers leave with a smile.</p>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Mission</h6>
              <p>To ensure maximum comfort and offer the best facilities to our customers</p>
            </div>
            <div className="col-md-4 text-center">
              <h6>Our Core Values</h6>
              <p> Kindness, Quality service and Honesty</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
<Footer />


export default Home;

