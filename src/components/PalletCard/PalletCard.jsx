import React from 'react';
import { Link } from 'react-router-dom';

const PalletCard = (props) => (
    <div className="shadow">
        <div>
            <div>Pallet ID: {props.pallet.palletID}</div>
            <div>Status: {props.pallet.status}</div>
            <div>Arrival Date: {new Date(props.pallet.arrivalDate).toLocaleDateString()}</div>
            <div>Warehouse ID: {props.pallet.warehouseID}</div>
            <div>Grower ID: {props.pallet.growerID}</div>
            <div>Label Name: {props.pallet.labelName}</div>
            <div>Box Count: {props.pallet.boxCount}</div>
            <div>-----</div>
            <div>Pack Date: {new Date(props.pallet.packDate).toLocaleDateString()}</div>
            <div>Packaging: {props.pallet.packaging}</div>
            <div>Repack: {props.pallet.repack}</div>
            <div>Fumigated: {props.pallet.fumigated}</div>
            <div>Boat: {props.pallet.boat}</div>
            <div>Load: {props.pallet.load}</div>
            <div>Returned: {props.pallet.isReturned}</div>
        </div>
        <div>
            <Link>Edit</Link>
            <Link>Delete</Link>
        </div>
    </div>
);

export default PalletCard;