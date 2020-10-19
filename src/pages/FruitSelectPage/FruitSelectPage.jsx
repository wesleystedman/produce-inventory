import React from 'react';
import { Link } from 'react-router-dom';

const FruitSelectPage = (props) => (
    <div>
        <div>Select Fruit</div>
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
