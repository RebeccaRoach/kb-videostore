import React, { useState } from 'react';
import axios from 'axios';

import { store } from 'react-notifications-component';

const Search = () => {

  const notificationMessage = () => {
    store.addNotification({
      title: "Success!",
      message: "Selected movie has been added to your library",
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

  const [searchFieldQuery, setSearchFieldQuery] = useState("");

  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchFieldQuery !== "" && searchFieldQuery !== undefined && searchFieldQuery !== null) {
      await axios.get(`http://localhost:4000/movies?query=${searchFieldQuery}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch(() => {
          alert("Requested movie was not found")
        })
    }
  }

  const addMovie = (movieData) => {
    axios.post('http://localhost:4000/movies', movieData)
      .then((response) => {
        console.log(response);
        notificationMessage();
      })
      .catch(() => {
        alert("Requested movie was not added to library")
      })
  }

  return (
    <div>
      <input
        name="search"
        onChange={(e) => setSearchFieldQuery(e.target.value)}
        value={searchFieldQuery}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <div>
        {result.map(movieData => 
          <div>
            <p>{movieData.title}</p>
            <button onClick={() => addMovie(movieData)}>Add to Library</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
