import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import { SessionContext } from "../App";
import { store } from 'react-notifications-component';

function Rentals() {

  const [rental, setRental] = useState(undefined);
  const sessionContext = useContext(SessionContext);

  const notificationMessage = () => {
    store.addNotification({
      title: "Success!",
      message: "Rental has been created!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
       
      }

    });
  }

  // useEffect(() => {
  //   axios.get('http://localhost:4000/movies')
  //     .then((response) => {
  //       setLibrary(response.data);
  //     })
  //     .catch(()=> {
  //       alert("Failed to fetch movies")
  //     })
  // },[])

  const rentMovie = () => {
    if (sessionContext.selectedMovie !== undefined && sessionContext.selectedCustomer !== undefined) {
      const movie = sessionContext.selectedMovie;
      const customer = sessionContext.selectedCustomer;
      console.log("Movie=", movie);
      console.log("customer=", customer);
      console.log("customer.id=", customer.id);

      // console.log("INSIDE METHOD!!!")

      axios.post(`http://localhost:4000//rentals/${movie.title}/check-out`, {
        customer_id: customer.id,
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
        .then((response) => {
          notificationMessage();
        })
        .catch((error) => {
          console.error("error is: ", error);
          alert("Failed to create a rental")
        })
    }
  }

  return (
    <div className="App">
      <p>RENTALS!</p>
      <ul>
        <li>Selected Movie: {sessionContext.selectedMovie === undefined ? "no movie selected" : sessionContext.selectedMovie.title}</li>
        <li>Selected Customer: {sessionContext.selectedCustomer === undefined ? "no customer selected" : sessionContext.selectedCustomer.name}</li>
      </ul>
      <button onClick={() => rentMovie()}>
        Rent a Movie
      </button>
    </div>
  );
}

export default Rentals;