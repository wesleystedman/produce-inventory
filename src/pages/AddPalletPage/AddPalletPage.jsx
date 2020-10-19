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
            const newPallet = {};
            for (const key of Object.keys(state)) {
                newPallet[key] = state[key].value;
                state[key].reset();
            }
            console.log(newPallet);
            await palletService.create(newPallet);
        } catch (err) {
            console.log(err);
            setMessage('Form submission failed.  See the console for details.');
        }
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
                                <input className="form-control col-sm" type="text" required name="palletID" {...state.palletID.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fruit</label>
                                <input className="form-control col-sm" type="text" required minLength="2" maxLength="2" name="species" {...state.species.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety</label>
                                <input className="form-control col-sm" type="text" required minLength="2" maxLength="2" name="variety" {...state.variety.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Variety Name</label>
                                <input className="form-control col-sm" type="text" name="varietyDesc" {...state.varietyDesc.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Size</label>
                                <input className="form-control col-sm" type="text" required name="size" {...state.size.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Packaging</label>
                                <input className="form-control col-sm" type="text" required name="packaging" {...state.packaging.formAttrs} />
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
                                <input className="form-control col-sm" type="number" required min="0" name="boxCount" {...state.boxCount.formAttrs} />
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Fumigated</label>
                                <select className="form-control col-sm" type="text" name="fumigated" {...state.fumigated.formAttrs}>
                                    <option value=""></option>
                                    <option value="I">Inspected</option>
                                    <option value="N">Not Necessary</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Pack Date</label>
                                <input className="form-control col-sm" type="date" name="packDate" {...state.packDate.formAttrs} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group row">
                                <label className="col-form-label col-sm-4">Boat #</label>
                                <input className="form-control col-sm" type="text" required name="boat" {...state.boat.formAttrs} />
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
                                <select className="form-control col-sm" type="text" required name="status" {...state.status.formAttrs}>
                                    <option value="pending">Pending</option>
                                    <option value="warehouse">Warehouse</option>
                                    <option value="staging">Staging</option>
                                    <option value="loading">Loading</option>
                                    <option value="shipped">Shipped</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-default border">Submit Pallet</button>
                </form><br/>
                <div className="row justify-content-center">
                    <div className={`col-3 alert ${message ? 'alert-danger' : ''}`}>{message}</div>
                </div>
            </div>
        </div>
    );
};

export default AddPalletPage;
