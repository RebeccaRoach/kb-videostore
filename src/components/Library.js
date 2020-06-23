import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import { SessionContext } from "../App";

function Library() {

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
    <div className="App">
      <p>Here is the library!</p>
      <ul>
        {library.map((movie) => {
          return (
            <li>
              <span>
               {movie.title}
            </span>
            <button onClick={()=> sessionContext.setSelectedMovie(movie)}>Select</button>
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
}

export default Library;
