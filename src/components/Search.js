import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {

  const [searchFieldQuery, setSearchFieldQuery] = useState("");

  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchFieldQuery !== "" && searchFieldQuery !== undefined && searchFieldQuery !== null) {
      // const url = "https://api.themoviedb.org/3/search/movie"
      // const apiKey = "50842a094f1c20954b593a156adc4fdc"
      //await axios.get(`${url}?api_key=${apiKey}&query=${searchFieldQuery}`)
      await axios.get(`http://localhost:4000/movies?query=${searchFieldQuery}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch(() => {
          alert("Requested movie was not found")
        })
    }
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
        {result.map(d => <p>{d.title}</p>)}
      </div>
    </div>
  );
}

export default Search;
