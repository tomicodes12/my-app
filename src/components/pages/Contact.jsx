import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://emis-server.onrender.com/contact-lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
                        required
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
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        required
                      />
                    </div>
                    <div className="form-group py-3">
                      <button type="submit" className="btn btn-primary shadow w-100">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 border-start">
                  <p> </p>
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>

                  <p>Address: Chevron, Nigeria</p>
                  <p>Phone: 08104919209</p>
                  <p>Email: info@andersonhotel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
