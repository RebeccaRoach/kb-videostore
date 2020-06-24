import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

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
          // THIS WAS TRIGGERING WHEN STYLE TAG IN MOVIE CARD WASNT RIGHT??
          alert("Requested movie was not found")
        })
    }
  }

  const addMovie = (movieData) => {
    axios.post('http://localhost:4000/movies', movieData)
      .then((response) => {
        console.log(response);
      })
      .catch()
  }

  const movieStyle = {
    width: "18rem"
  }

  return (
    <div>
      <input
        className="search-input"
        placeholder="Enter a movie title"
        name="search"
        onChange={(e) => setSearchFieldQuery(e.target.value)}
        value={searchFieldQuery}
      />

      <button
        className="search-button"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="movie-cards-container">
        {result.map(movieData =>
          <div>
            <div class="card" style={movieStyle}>
              <img src={movieData.image_url} class="card-img-top" alt="movie cover image"></img>
              <div class="card-body">
                <h5 class="card-title">{movieData.title}</h5>
                <p class="card-text">{movieData.overview}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Release Date: {movieData.release_date}</li>
              </ul>
              <div class="card-body">
                <button className="add-btn" onClick={() => addMovie(movieData)}>Add to Library</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
