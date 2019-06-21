import React from 'react';
import './Welcome.css';

const welcome = () => {
    return (
        <div>
            <h3> Welcome, User!</h3>
            <h3 className="totalGoal">$400 / $5,000</h3>
            <br/><br/>
        </div>
    )
}

export default welcome;