import React from "react";
import SearchNav from "../Components/Nav/SearchNav";
import Search from "../Components/Searchbar/Search";
<<<<<<< Updated upstream
import { Table } from "../Components/Table";



function SearchPage(props) {
  return (
      <div>
        <SearchNav />
       <Table/>
=======


function SearchPage() {
  return (
      <div>
        <SearchNav />
        <Search />
>>>>>>> Stashed changes
    </div>

  );
}

export default SearchPage;