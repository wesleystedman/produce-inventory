import React from 'react';
import PalletCard from '../../components/PalletCard/PalletCard';

const PalletListPage = (props) => (
    // props.pallets
    <div>
        <div>
            <h3>Pallets</h3>
            <div className="row justify-content-center">
                <h5 className="col-2">Fruit: {props.species}</h5>
                <h5 className="col-2">Variety: {props.variety}</h5>
                <h5 className="col-2">Size: {props.size}</h5>
            </div>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Pallet ID</th>
                    <th>Status</th>
                    <th>Arrival Date</th>
                    <th>Warehouse ID</th>
                    <th>Grower ID</th>
                    <th>Label Name</th>
                    <th>Box Count</th>
                    <th>Pack Date</th>
                    <th>Packaging</th>
                    <th>Repack</th>
                    <th>Fumigated</th>
                    <th>Boat #</th>
                    <th>Load #</th>
                    <th>Returned</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.pallets.map((pallet, idx) => (
                    <PalletCard
                        key={idx}
                        pallet={pallet}
                        parentLink={`/${props.species}/${props.variety}/${props.size}`}
                    />
                ))}
            </tbody>
        </table>
    </div>
);

export default PalletListPage;
