import React from 'react';
import { Link } from 'react-router-dom';

const SizeSelectPage = (props) => (
    <div>
        <div>
            <div>Select Size</div>
            <div>Fruit: {props.species}</div>
            <div>Variety: {props.variety}</div>
        </div>
        <div>
            {props.sizes.map((size, idx) => (
                <div key={idx} >
                    <Link to={`/${props.species}/${props.variety}/${size}`}>{size}</Link>
                </div>
            ))}
        </div>
    </div>
);

export default SizeSelectPage;
