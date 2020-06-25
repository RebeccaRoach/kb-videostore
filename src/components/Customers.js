import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {SessionContext} from "../App"

function Customers() {

  const [customers, setCustomers] = useState([]);
  const sessionContext = useContext(SessionContext)

  useEffect(() => {
    axios.get('http://localhost:4000/customers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch(()=> {
        alert("Failed to fectch customers")
      })
      // pass in vars as props to empty array => e.g. props.id
  }, [])

  return (
    <div className="App">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Movies checked out</th>
            <th>Select a Customer</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr>
                <td>
                  {customer.id}
                </td>
                <td>
                  {customer.name}
                </td>
                <td>
                  {customer.movies_checked_out_count}
                </td>
                <td>
                <button onClick={()=> sessionContext.setSelectedCustomer(customer)} className="add-btn">Select</button>
                </td>
              </tr>
            )
          }
          )}

        </tbody>
      </table>
    </div>
  );
}

export default Customers;
