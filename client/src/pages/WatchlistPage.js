import React from "react";
import WatchlistNav from "../Components/Nav/WatchlistNav";
import Watchlist from "../Components/Watchlist/PopulateTable";


function WatchlistPage() {
  return (
      <div>
        <WatchlistNav />
        <Watchlist />
    </div>

  );
}

export default WatchlistPage;