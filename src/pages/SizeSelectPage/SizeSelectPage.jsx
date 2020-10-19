import React from 'react';
import { Link } from 'react-router-dom';

const SizeSelectPage = (props) => (
    <div>
        <div>
            <h3>Select Size</h3>
            <div className="row justify-content-center">
                <h5 className="col-2">Fruit: {props.species}</h5>
                <h5 className="col-2">Variety: {props.variety}</h5>
            </div>
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
