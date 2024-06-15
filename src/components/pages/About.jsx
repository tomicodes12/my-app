import React from 'react';
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import Footer from '../inc/Footer';

function About() {
  return (
    <div>
      <section className=" py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-11 text-center">
              <h4>ABOUT US</h4>
            </div>

          </div>
        </div>
      </section>
      < section className="bg-light border-bottom">
        <p> </p>
        <div container>
          <h3 className="main-heading"> OUR HOTEL</h3>
          <div className="underline mx_auto"></div>
          <p>We are a luxurious hotel with a team of individuals who will ensure your comfort
            and safety with your best need in mind in order to take you to your dream land.
            with world class facilities ranging from an highly equipped gym to a swimming center, yoga classes and world class  dinnig at our restaurant with a variety of flavours all over the world sure to leave you and your apetite satisfied </p>


          <p></p>
          <div container>
            <div className="col-md-6 ">
              <h3 className="main-heading"> Our Swimming Area</h3>
              <div className="underline mx_auto"></div>
              <div className="container">
                <img src={image3} width="500px" height="300px" />
              </div>
            </div>
            <div className="col-md-6 border-start">
              <div className="underline"> </div>
              <p> Our swimming area ensures to give you maximum satisfaction and reflief .
                We ensure you get all access to your swimming essentials and lifeguards available so you don't have to worry about safety.
              </p>
            </div>
            <p> </p>
            <div container>
              <h3 className="main-heading"> Our Gym Area</h3>
              <div className="underline mx_auto"></div>
              <div className="container">
                <img src={image4} width="500px" height="300px" />
                <div container>
                  <div className="col-md-6 border-start">
                    <div className="underline"> </div>
                    <p> With our gym do not have to worry about staying fit and ensuring an healthy lifestyle with us as we have all the facilities and essential to ensure that you keep fit.
                    </p>
                  </div>
                  <h3 className="main-heading"> Our Spa Area</h3>
                  <div className="underline mx_auto"></div>
                  <div className="container">
                    <img src={image5} width="500px" height="300px" />
                    <div className="col-md-6 border-start">
                      <div className="underline"> </div>
                      <p> We know there is nothing you want more than 100% relaxation and relief from stress and we have made that available for you here at Anderson's hotel. You can get the best massages from the hands of extremeky skilled professionals and who will spoil your skin and muscles.
                      </p>
                    </div>

                    <h3 className="main-heading"> Our Intercontinental Restaurant</h3>
                    <div className="underline mx_auto"></div>
                    <div className="container">
                      <img src={image6} width="500px" height="300px" />
                      <div className="col-md-6 border-start">
                        <div className="underline"> </div>
                        <p>Be prepared to be blown away with the delicious taste of our dishes from all over the world, with meals that allow you to time travel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

<Footer />
export default About;

