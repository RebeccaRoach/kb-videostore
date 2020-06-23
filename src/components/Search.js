import React, { useState, useEffect }  from 'react';
import axios from 'axios';

const Search = (props) => {

  // let base_url = "http://localhost:4000/movies"
  // const [search, setSearch] = useState(undefined);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/movies", {
  //     params: {
  //       query: 'Shrek'
  //     }
  //   })
  //   .then((response) => {
  //     setSearch(response.data);
  //     console.log(response.data);
  //   })
  //   .catch(()=> {
  //     alert("Requested moview was not found")
  //   })

  // },[])

  // return (
  //   <div className="App">
  //     <p>Here is the search page!</p>
  //     <p>{search.title}</p>
  //   </div>
  // );

  const [searchField, setSearchField] = useState({
    title: ''
  });

  const onSearchChange = (event) => {
    setSearchField({
      title: event.target.value
    });
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.searchCallback(searchField);

    setSearchField({
      title: ''
    });
  }

  return (
    <form className="search-form" onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="search">Search for title:</label>
        <input 
          name="search" 
          onChange={onSearchChange} 
          value={searchField.title}
        />
      </div>


      <input type="submit" value="Go" />
    </form>
  );
}

export default Search;
