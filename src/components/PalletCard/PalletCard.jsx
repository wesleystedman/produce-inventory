import React from 'react';
import { Link } from 'react-router-dom';
import palletService from '../../utils/palletService';

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

        <td><Link to={`/${props.pallet._id}/edit`}>Edit</Link></td>
        <td><Link to={props.parentLink} onClick={() => palletService.deleteOne(props.pallet._id)}>Delete</Link></td>
        {/* FIXME: the Delete onClick doesn't update the client's state */}
    </tr>
);

export default PalletCard;