import React from 'react';
import { Link } from 'react-router-dom';

const VarietySelectPage = (props) => (
    <div>
        <div>
            <div>Select Variety</div>
            <div>Fruit: {props.species}</div>
        </div>
        <div>
            {props.varieties.map((variety, idx) => (
                <div key={idx} >
                    <Link to={`/${props.species}/${variety}`}>{variety}</Link>
                </div>
            ))}
        </div>
    </div>
);

export default VarietySelectPage;
