import React, { useState } from 'react';
import Footer from '../inc/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append('firstName', formData.firstName);
    formDataObject.append('lastName', formData.lastName);
    formDataObject.append('phone', formData.phone);
    formDataObject.append('email', formData.email);
    formDataObject.append('message', formData.message);
  
    fetch('https://formspree.io/f/xjvnnppl', {
      method: "POST",
      body: formDataObject,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        // Optionally reset the form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle errors or display a message to the user
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <div className="container">
        <section className="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-11 text-center">
                <h4>CONTACT US</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="mb-1">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Message</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Type your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group py-3">
                    <button type="submit" className="btn btn-primary shadow w-100"> Send </button>

                    </div>
                  </form>
                </div>
                <div className="col-md-6 border-start">
                  <p> </p>
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>Address: </p>
                  <p>Phone: 08104919209</p>
                  <p>Email: info@andersonhotel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
