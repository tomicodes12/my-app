import React from 'react'
import Footer from '../inc/Footer';

function Contact() {
  return (
    <div>
      <div className='container'>
        <section className=" py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-11 text-center">
                <h4 >CONTACT US</h4>
              </div>

            </div>
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card body">
              <div className="row">
                <div className="col-md-6">
                  <h6> Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <p> </p>
                    <p> </p>
                    <label className="mb-1">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea rows="3" className="form-control" placeholder="Type your message" />
                  </div>
                  <div className="form-group py-3">

                    <button type="button" className="btn btn-primary shadow w-100" > Send </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <p> </p>
                  <h5 className="main-heading"> Address Infomation</h5>
                  <div className="underline"> </div>
                  <p>Address: </p>
                  <p>Phone: 08104919209</p>
                  <p>Email: [info@andersonhotel.com]</p>



                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>


  )
}
<Footer />
export default Contact;