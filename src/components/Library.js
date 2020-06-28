import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SessionContext } from "../App";

const Library = () => {

  const [library, setLibrary] = useState([]);
  const sessionContext = useContext(SessionContext);

  const [searchFieldQuery, setSearchFieldQuery] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then((response) => {
        setLibrary(response.data);
      })
      .catch(() => {
        alert("Failed to fetch movies")
      })
  }, [])

  // Filter library if a user has input any search parameters
  const results = searchFieldQuery ?
    library.filter(movie => movie.title.toLowerCase().includes(searchFieldQuery.toLowerCase())) :
    library

  return (
    <div className="jumbotron">
      <h1 class="display-3">LIBRARY</h1>
      <p class="lead">KB Videos Library</p>

      <input
        className="search-input"
        placeholder="Enter a movie title"
        name="search"
        onChange={(e) => setSearchFieldQuery(e.target.value)}
      />

      <hr class="my-2"></hr>
      <div className="movie-cards-container">
        {results.map(movie =>
          <div>
            <div className="card promoting-card card-style">
              <div className="card-body d-flex flex-row"
                data-toggle="tooltip"
                data-placement="bottom"
                title={movie.overview}
              >
                <div>
                  <div className="view overlay">
                    <img src={movie.image_url} className="movie-img" alt="movie cover image"></img>
                  </div>
                  <h4 className="card-title font-weight-bold mb-2">{movie.title}</h4>
                  <p className="card-text">Release: {movie.release_date}</p>
                </div>
              </div>
              <button className="add-btn" onClick={() => sessionContext.setSelectedMovie(movie)}>Select</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;
