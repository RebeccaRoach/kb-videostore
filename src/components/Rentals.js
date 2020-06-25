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

  const errorNotificationMessage = () => {
    store.addNotification({
      title: "Warning",
      message: "Could not create a rental. Not enough inventory.",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
       
      }

    });
  }


  const rentMovie = () => {
    if (sessionContext.selectedMovie !== undefined && sessionContext.selectedCustomer !== undefined) {
      const movie = sessionContext.selectedMovie;
      const customer = sessionContext.selectedCustomer;
      console.log("Movie=", movie);
      console.log("customer=", customer);
      console.log("customer.id=", customer.id);

      axios.post(`http://localhost:4000/rentals/${movie.title}/check-out`, {
        customer_id: customer.id,
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
        .then((response) => {
          notificationMessage();
        })
        .catch((error) => {
          console.error("error is: ", error);
          errorNotificationMessage();
        })
    }
  }

  const returnMovie = () => {
    if (sessionContext.selectedMovie !== undefined && sessionContext.selectedCustomer !== undefined) {
      const movie = sessionContext.selectedMovie;
      const customer = sessionContext.selectedCustomer;
      console.log("Movie=", movie);
      console.log("customer=", customer);
      console.log("customer.id=", customer.id);

      axios.post(`http://localhost:4000/rentals/${movie.title}/return`, {
        customer_id: customer.id,
      })
        .then((response) => {
          alert("Successfully returned movie!");
        })
        .catch((error) => {
          console.error("error is: ", error);
          alert("Count not return movie for some reason...?");
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
      <button onClick={() => returnMovie()}>
        Return a Movie
      </button>
    </div>
  );
}

export default Rentals;