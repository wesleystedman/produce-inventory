import React from 'react';
import { Link } from 'react-router-dom';

const FruitSelectPage = (props) => (
    <div>
        Select Fruit
        <ul>
            {props.species.map((spec, idx) => (
                <li key={idx} >
                    <Link to={`/${spec}`}>{spec}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FruitSelectPage;
