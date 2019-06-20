import React from 'react';
import './Graphs.css';

const graphs = () => {
    return (
        <div className="card-group">
            <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pie-chart.jpg/220px-Pie-chart.jpg" className="card-img-top" alt="Graph 1" />
                <div className="card-body">
                    <h5 className="card-title">60% </h5>
                    <p className="card-text">6 Months</p>
                </div>
            </div>
        </div>
      
    )
}

export default graphs;