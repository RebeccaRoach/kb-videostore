import React, { useContext }  from 'react';
import axios from 'axios';
import { SessionContext } from "../App";
import { store } from 'react-notifications-component';

function Rentals() {

  const sessionContext = useContext(SessionContext);

  const rentalSuccessMessage = () => {
    store.addNotification({
      title: "Success!",
      message: "Rental has been created!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1500,
      }
    });
  }

  const rentalErrorMessage = () => {
    store.addNotification({
      title: "Warning",
      message: "Could not create a rental. Not enough inventory.",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1500,
      }
    });
  }

  const returnSuccessMessage = () => {
    store.addNotification({
      title: "Success!",
      message: "Rental has been returned! Thank you!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1500,
      }
    });
  }

  const returnErrorMessage = () => {
    store.addNotification({
      title: "Warning",
      message: "Oh no! Could not return the movie for some reason!",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1500,
      }
    });
  }

  const rentMovie = () => {
    if (sessionContext.selectedMovie !== undefined && sessionContext.selectedCustomer !== undefined) {
      const movie = sessionContext.selectedMovie;
      const customer = sessionContext.selectedCustomer;

      axios.post(`http://localhost:4000/rentals/${movie.title}/check-out`, {
        customer_id: customer.id,
        // sets due date to be one week from time of rental
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })
        .then((response) => {
          rentalSuccessMessage();
          // clear sessionContext after rental made
          sessionContext.setSelectedCustomer(undefined);
          sessionContext.setSelectedMovie(undefined);
        })
        .catch((error) => {
          rentalErrorMessage();
        })
    }
  }

  const returnMovie = () => {
    if (sessionContext.selectedMovie !== undefined && sessionContext.selectedCustomer !== undefined) {
      const movie = sessionContext.selectedMovie;
      const customer = sessionContext.selectedCustomer;

      axios.post(`http://localhost:4000/rentals/${movie.title}/return`, {
        customer_id: customer.id,
      })
        .then(() => {
          returnSuccessMessage();
          // clear sessionContext after rental returned
          sessionContext.setSelectedCustomer(undefined);
          sessionContext.setSelectedMovie(undefined);
        })
        .catch(() => {
          returnErrorMessage();
        })
    }
  }

  return (
    <div className="jumbotron">
      <h1 class="display-3">RENTALS</h1>
      <p class="lead">Select a customer and a movie then do a checkout-out or check-in</p>
      <hr class="my-2"></hr>
      
      <p>Selected Movie: <strong>{sessionContext.selectedMovie === undefined ? "no movie selected" : sessionContext.selectedMovie.title}</strong></p>
      <p>Selected Customer: <strong>{sessionContext.selectedCustomer === undefined ? "no customer selected" : sessionContext.selectedCustomer.name}</strong></p>
     
      <div className="rental-buttons-container">
        <button onClick={() => rentMovie()} className="pizazz-btn">
          Rent a Movie
        </button>
        <button onClick={() => returnMovie()} className="pizazz-btn">
          Return a Movie
        </button>
      </div>
    </div>
  );
}

export default Rentals;
