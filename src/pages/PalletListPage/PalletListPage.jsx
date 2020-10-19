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
        <div>
            {props.pallets.map((pallet, idx) => (
                <PalletCard
                    key={idx}
                    pallet={pallet}
                />
            ))}
        </div>
    </div>
);

export default PalletListPage;
