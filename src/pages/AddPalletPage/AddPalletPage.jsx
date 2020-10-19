import React from 'react';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import palletService from '../../utils/palletService';

const AddPalletPage = (props) => {
    const [message, setMessage] = useState('');

    const state = {
        palletID: useInput(''),
        species: useInput(''),
        variety: useInput(''),
        varietyDesc: useInput(''),
        size: useInput(''),
        packaging: useInput(''),
        repack: useInput(''),
        growerID: useInput(''),
        labelName: useInput(''),
        boxCount: useInput(0),
        fumigated: useInput(''),
        packDate: useInput(''), // DATE
        boat: useInput(''),
        arrivalDate: useInput(''), // DATE
        warehouseID: useInput(''),
        load: useInput(''),
        isReturned: useInput(false),
        status: useInput('pending'),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await palletService.create(state);
            for (const palletField of Object.values(state)) {
                palletField.reset();
            }
        } catch (err) {
            console.log(err);
            setMessage('Form submission failed.  See the console for details.');
        }
    }

    // TODO: validator
    const isFormInvalid = () => {
        return false;
    }

    return (
        <div>
            <h2>Add Pallet</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Pallet ID</label>
                                <input className="form-control col-sm" type="text" name="palletID" {...state.palletID.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fruit</label>
                                <input className="form-control col-sm" type="text" name="species" {...state.species.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety</label>
                                <input className="form-control col-sm" type="text" name="variety" {...state.variety.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety Name</label>
                                <input className="form-control col-sm" type="text" name="varietyDesc" {...state.varietyDesc.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Size</label>
                                <input className="form-control col-sm" type="text" name="size" {...state.size.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Packaging</label>
                                <input className="form-control col-sm" type="text" name="packaging" {...state.packaging.formAttrs} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Repack</label>
                                <input className="form-control col-sm" type="text" name="repack" {...state.repack.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Grower ID</label>
                                <input className="form-control col-sm" type="text" name="growerID" {...state.growerID.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Label Name</label>
                                <input className="form-control col-sm" type="text" name="labelName" {...state.labelName.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Box Count</label>
                                <input className="form-control col-sm" type="number" name="boxCount" {...state.boxCount.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fumigated</label>
                                <input className="form-control col-sm" type="text" name="fumigated" {...state.fumigated.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Pack Date</label>
                                <input className="form-control col-sm" type="date" name="packDate" {...state.packDate.formAttrs} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Boat #</label>
                                <input className="form-control col-sm" type="text" name="boat" {...state.boat.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Arrival Date</label>
                                <input className="form-control col-sm" type="date" name="arrivalDate" {...state.arrivalDate.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Warehouse ID</label>
                                <input className="form-control col-sm" type="text" name="warehouseID" {...state.warehouseID.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Load #</label>
                                <input className="form-control col-sm" type="text" name="load" {...state.load.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Returned</label>
                                <input className="form-control col-sm" type="checkbox" name="isReturned" {...state.isReturned.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Status</label>
                                <input className="form-control col-sm" type="text" name="status" {...state.status.formAttrs} />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-default border" disabled={isFormInvalid()}>Submit Pallet</button>
                </form><br/>
                <div className="row justify-content-center">
                    <div className={`col-3 alert ${message ? 'alert-danger' : ''}`}>{message}</div>
                </div>
            </div>
        </div>
    );
};

export default AddPalletPage;
