import React from 'react';
import { Link } from 'react-router-dom';

const SizeSelectPage = (props) => (
    <div>
        <div>
            <div>Select Size</div>
            <div>Fruit: {props.species}</div>
            <div>Variety: {props.variety}</div>
        </div>
        
        <ul>
            {props.sizes.map((size, idx) => (
                <li key={idx} >
                    <Link to={`/${props.species}/${props.variety}/${size}`}>{size}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default SizeSelectPage;
