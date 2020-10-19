import React from 'react';
import PalletCard from '../../components/PalletCard/PalletCard';

const PalletListPage = (props) => (
    // props.pallets
    <div>
        <div>
            <div>Pallets</div>
            <div>Fruit: {props.species}</div>
            <div>Variety: {props.variety}</div>
            <div>Size: {props.size}</div>
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
