import React from 'react';
import useInput from '../../hooks/useInput';

const AddPalletPage = (props) => {
    // state var for every field
    const { reset: resetPalletID, formAttrs: palletIDAttrs } = useInput('');
    const { reset: resetSpecies, formAttrs: speciesAttrs } = useInput('');
    const { reset: resetVariety, formAttrs: varietyAttrs } = useInput('');
    const { reset: resetVarietyDesc, formAttrs: varietyDescAttrs } = useInput('');
    const { reset: resetSize, formAttrs: sizeAttrs } = useInput('');
    const { reset: resetPackaging, formAttrs: packagingAttrs } = useInput('');
    const { reset: resetRepack, formAttrs: repackAttrs } = useInput('');
    const { reset: resetGrowerID, formAttrs: growerIDAttrs } = useInput('');
    const { reset: resetLabelName, formAttrs: labelNameAttrs } = useInput('');
    const { reset: resetBoxCount, formAttrs: boxCountAttrs } = useInput(0);
    const { reset: resetFumigated, formAttrs: fumigatedAttrs } = useInput('');
    const { reset: resetPackDate, formAttrs: packDateAttrs } = useInput(''); // DATE
    const { reset: resetBoat, formAttrs: boatAttrs } = useInput('');
    const { reset: resetArrivalDate, formAttrs: arrivalDateAttrs } = useInput(''); // DATE
    const { reset: resetWarehouseID, formAttrs: warehouseIDAttrs } = useInput('');
    const { reset: resetLoad, formAttrs: loadAttrs } = useInput('');
    const { reset: resetIsReturned, formAttrs: isReturnedAttrs } = useInput(false);
    const { reset: resetStatus, formAttrs: statusAttrs } = useInput('pending');

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // validator

    return (
        <div>
            <div>Add Pallet</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Pallet ID</label>
                                <input className="form-control col-sm" type="text" name="palletID" {...palletIDAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fruit</label>
                                <input className="form-control col-sm" type="text" name="species" {...speciesAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety</label>
                                <input className="form-control col-sm" type="text" name="variety" {...varietyAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety Name</label>
                                <input className="form-control col-sm" type="text" name="varietyDesc" {...varietyDescAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Size</label>
                                <input className="form-control col-sm" type="text" name="size" {...sizeAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Packaging</label>
                                <input className="form-control col-sm" type="text" name="packaging" {...packagingAttrs} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Repack</label>
                                <input className="form-control col-sm" type="text" name="repack" {...repackAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Grower ID</label>
                                <input className="form-control col-sm" type="text" name="growerID" {...growerIDAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Label Name</label>
                                <input className="form-control col-sm" type="text" name="labelName" {...labelNameAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Box Count</label>
                                <input className="form-control col-sm" type="number" name="boxCount" {...boxCountAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fumigated</label>
                                <input className="form-control col-sm" type="text" name="fumigated" {...fumigatedAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Pack Date</label>
                                <input className="form-control col-sm" type="date" name="packDate" {...packDateAttrs} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Boat #</label>
                                <input className="form-control col-sm" type="text" name="boat" {...boatAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Arrival Date</label>
                                <input className="form-control col-sm" type="date" name="arrivalDate" {...arrivalDateAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Warehouse ID</label>
                                <input className="form-control col-sm" type="text" name="warehouseID" {...warehouseIDAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Load #</label>
                                <input className="form-control col-sm" type="text" name="load" {...loadAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Returned</label>
                                <input className="form-control col-sm" type="checkbox" name="isReturned" {...isReturnedAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Status</label>
                                <input className="form-control col-sm" type="text" name="status" {...statusAttrs} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPalletPage;
