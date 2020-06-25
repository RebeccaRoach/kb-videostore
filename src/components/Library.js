import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import { SessionContext } from "../App";

const Library = () => {

  const [library, setLibrary] = useState([]);
  const sessionContext = useContext(SessionContext);

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then((response) => {
        setLibrary(response.data);
      })
      .catch(()=> {
        alert("Failed to fetch movies")
      })
  },[])

  return (
    <div>
      <h3 className="library-title">KB Videos Library</h3>
      <div className="movie-cards-container">
        {library.map(movie =>
          <div>
            <div class="card promoting-card card-style">
              <div class="card-body d-flex flex-row">
                <div>
                  <div class="view overlay">
                    <img src={movie.image_url} class="movie-img" alt="movie cover image"></img>
                  </div>
                  <h4 class="card-title font-weight-bold mb-2">{movie.title}</h4>
                  <p class="card-text">Release: {movie.release_date}</p>
                </div>
              </div>
              <button className="add-btn" onClick={()=> sessionContext.setSelectedMovie(movie)}>Select</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;
