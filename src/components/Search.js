import React, { useState } from "react";

function Search({ searchPlants }) {
  const [searched, setSearched] = useState("");
  function searchIng(e){
    e.preventDefault()
    searchPlants(searched)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <form onSubmit={searchIng}>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={(e)=>setSearched(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
