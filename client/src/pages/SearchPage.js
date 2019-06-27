import React from "react";
import SearchNav from "../Components/Nav/SearchNav";
import Search from "../Components/Searchbar/Search";
import { Table } from "../Components/Table";



function SearchPage(props) {
  return (
      <div>
        <SearchNav />
       <Table/>
    </div>

  );
}

export default SearchPage;