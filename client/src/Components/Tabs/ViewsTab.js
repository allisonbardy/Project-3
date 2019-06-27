import React from 'react';
import './ViewsTab.css';

const viewTabs = () => {
   return (
    <div className="tabs">
       <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</a>
            <a className="nav-item nav-link"  data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">6-Months</a>
            <a className="nav-item nav-link"  data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Yearly</a>
          </div>
        </nav>
  </div>  
   )
}

export default viewTabs;