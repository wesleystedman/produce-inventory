import React from 'react';
import { Link } from 'react-router-dom';

const VarietySelectPage = (props) => (
    <div>
        <div>
            <h3>Select Variety</h3>
            <div className="row justify-content-center">
                <h5 className="col-2">Fruit: {props.species}</h5>
            </div>
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
