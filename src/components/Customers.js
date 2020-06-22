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
      <p>Here are customers!</p>
      <ul>
        {customers.map((customer) => {
          return (
            <li>
              <span>
                {customer.name}
              </span>
              <button onClick={()=> sessionContext.setSelectedCustomer(customer)}>Select</button>
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
}

export default Customers;
