import React from 'react';
import { Link } from 'react-router-dom';

const FruitSelectPage = (props) => (
    <div>
        <h3>Select Fruit</h3>
        <div>
            {props.species.map((spec, idx) => (
                <div key={idx} >
                    <Link to={`/${spec}`}>{spec}</Link>
                </div>
            ))}
        </div>
    </div>
);

export default FruitSelectPage;
