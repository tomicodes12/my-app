
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Ledger() {
  const [ledgerData, setSubLedgerData] = useState([

  ]

  )
  useEffect(() => {
    axios.get("https://emis-server.onrender.com/general-ledger").then((res) => { setSubLedgerData(res.data); })

  }, [])

  return (
    <div>
      <section className=" py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
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
                <div className="col-md-8">
                  <div className="container">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th> Name</th>
                          <th>Sub Ledger Type </th>
                          <th>Description</th>
                          <th>Status</th>
                          <th>Created At</th>
                          <th>Updated At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ledgerData.map((entry, index) => (
                          <tr key={index}>
                            <td><input type="checkbox" /></td>
                            <td>{entry.name}</td>
                            <td>{entry.subLedgerType}</td>
                            <td>{entry.description}</td>
                            <td>{entry.isActive ? "active" : "inactive"}</td>

                            <td>{entry.createdAt}</td>
                            <td>{entry.updatedAt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Ledger;
