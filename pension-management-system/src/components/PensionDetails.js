import { getPensionByIdService } from "./services/PensionService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPensionById } from '../redux/PensionSlice';

import { Store } from "redux";
import { Provider } from "react";

const Pension = () => {

    const [pensioner_id, setPensioner_id] = useState('');
    const dispatch = useDispatch();
    const pensionDataFromStore = useSelector((state) => state.pension.pensionState);
    const pensionList = useSelector((state) => state.pension.pensionList);

    const handlePension = (e) => {
        console.log('handlePension');
        setPensioner_id(e.target.value);
    }

    const submitGetPensionById = (evt) => {
        evt.preventDefault();
        console.log('submitGetPensionById');
        getPensionByIdService(pensioner_id)
            .then((response) => { dispatch(getPensionById(response.data)) })
            .catch(() => {
                alert(`Pension with ${pensioner_id} not found.`);
            });
        console.log(Object.keys(pensionList));
        setPensioner_id('');
    }

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Pension Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find pension by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetPensionById}>
                    <input className="form-control mt-3" type="number" id="pensioner_id" name="pensioner_id" value={pensioner_id} onChange={handlePension} placeholder="Enter pensioner_id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Pension" />
                </form>
                <p>Data from store: {pensionDataFromStore.pensioner_id} {pensionDataFromStore.amount} {pensionDataFromStore.charges} {pensionDataFromStore.bankType} {pensionDataFromStore.statusCode}</p>
            </div>

           
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default Pension.js;





