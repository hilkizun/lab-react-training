import React from 'react';
import './index.css';

function Random({min, max})  {
    let randomnum = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div className="Random">
            <p>Random Value between {min} and {max} =&gt; {randomnum}</p>
        </div>
    );
};

export default Random;