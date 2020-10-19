import React from 'react';
import { Link } from 'react-router-dom';

const PalletCard = (props) => (
    <tr>
        <td>{props.pallet.palletID}</td>
        <td>{props.pallet.status}</td>
        <td>{new Date(props.pallet.arrivalDate).toLocaleDateString()}</td>
        <td>{props.pallet.warehouseID}</td>
        <td>{props.pallet.growerID}</td>
        <td>{props.pallet.labelName}</td>
        <td>{props.pallet.boxCount}</td>
        <td>{new Date(props.pallet.packDate).toLocaleDateString()}</td>
        <td>{props.pallet.packaging}</td>
        <td>{props.pallet.repack && 'No'}</td>
        <td>{props.pallet.fumigated}</td>
        <td>{props.pallet.boat}</td>
        <td>{props.pallet.load}</td>
        <td>{props.pallet.isReturned ? 'Yes' : 'No'}</td>

        <td><Link to={`/${props.pallet.species}/${props.pallet.variety}/${props.pallet.size}/${props.pallet._id}`}>Edit</Link></td>
        <td><Link>Delete</Link></td>
    </tr>
);

export default PalletCard;