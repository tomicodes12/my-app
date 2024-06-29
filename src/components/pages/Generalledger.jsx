import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Generalledger() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [subLedgerType, setSubLedgerType] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [subLedgerList, setSubLedgerList] = useState([]);

  useEffect(() => {
    axios.get("https://emis-server.onrender.com/sub-ledger-type").then((res) => { setSubLedgerList(res.data); })

  }, [])

  const handleAdd = (e) => {
    e.preventDefault();
    console.log({ name, description, status, subLedgerType, contact });
    // Handle form submission logic here
    const formData = { name, description, isActive: status, subLedgerType, contact };
    fetch("https://emis-server.onrender.com/general-ledger", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => { console.log('Form submitted successfully:', data); navigate('/ledger') })
      .catch((error) => console.error('Error submitting form:', error));
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
    setStatus(false);
    setSubLedgerType('');
    setContact('');
  };

  return (
    <div>
      <section className=" py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-14 text-center">
              <h4>General Ledger</h4>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <div className="container">

                    <form onSubmit={handleAdd}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                          type="text"
                          id="description"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <input
                          type="checkbox"
                          id="status"
                          checked={status}
                          onChange={(e) => setStatus(e.target.checked)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sub-ledger-type">Sub Ledger Type</label>
                        <select
                          id="sub-ledger-type"
                          value={subLedgerType}
                          onChange={(e) => setSubLedgerType(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          {subLedgerList.map((value, index) => {
                            return (
                              <option value={value.id} key={index} >
                                {value.value}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <div className="form-actions">
                        <button type="submit" className="btn-add">
                          Add
                        </button>
                        <button type="reset" className="btn-cancel" onClick={handleCancel}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Generalledger;
