import React from "react";
import SearchNav from "../Components/Nav/SearchNav";
import Search from "../Components/Searchbar/Search";
import Table from '../Components/Table/PopulateTable'

function SearchPage(props) {
  console.log(props)
  return (
      <div>
        <SearchNav  /> 
        <Table/>
    </div>

  );
}

export default SearchPage;