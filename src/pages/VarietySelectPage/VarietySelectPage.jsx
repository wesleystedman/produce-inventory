import React from 'react';
import { Link } from 'react-router-dom';

const VarietySelectPage = (props) => (
    <div>
        <div>
            <div>Select Variety</div>
            <div>Fruit: {props.species}</div>
        </div>
        <ul>
            {props.varieties.map((variety, idx) => (
                <li key={idx} >
                    <Link to={`/${props.species}/${variety}`}>{variety}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default VarietySelectPage;
