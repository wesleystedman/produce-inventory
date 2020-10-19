import React from 'react';
import { Link } from 'react-router-dom';

const SizeSelectPage = (props) => (
    <div>
        SizeSelectPage
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
