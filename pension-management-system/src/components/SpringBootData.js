import axios from "axios";
import { useEffect, useState } from "react";
import Pension from "./models/Pension";
import PensionDetails from "./PensionDetails";


const SpringBootData = () => {

    // state - for the component 
    const [pension, setPension] = useState(new Pension());
    const [deletePension, setDeletePension] = useState(new Pension());
    const [newPensionObj, setNewPensionObj] = useState(new Pension());
    const [displayPensionObj, setDisplayPensionObj] = useState(new Pension());
   // const [empList, setEmpList] = useState([]);

   //const [pensioner_id, setPensioner_id] = useState('');
   // const dispatch = useDispatch();
    //const pensionDataFromStore = useSelector((state) => state.pension.pensionerState);
    //const [newPensionObj, setNewPensionObj] = useState(new Pension());
  //  const [displayPensionObj, setDisplayPensionObj] = useState(new Pension());
    const [updatePensionDetails, setUpdatePensionDetails] = useState({ amount: '', charges: '', bankType: "", statusCode: "" });
   // const [displayUpdatePensionDetails, setDisplayUpdatePensionDetails] = useState(new Pension());
    //const pensionList = useSelector((state) => state.pension.pensionList);

    const handlePension = (e) => {
        setPension({
            ...pension,
            [e.target.name]: e.target.value
        });
    }

    const handleDeletePension = (e) => {
        setDeletePension({
           
            [e.target.name]: e.target.value
        });
    }

    const handleAddPension = (e) => {
        console.log(e.target.value);
        setNewPensionObj({
            ...newPensionObj,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdatePension = (e) => {
        console.log(e.target.value);
        setUpdatePensionDetails({
            ...updatePensionDetails,
            [e.target.name]: e.target.value
        });
    };

    const submitAddPension = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/addpension`, newPensionObj)
            .then((response) => {
                setDisplayPensionObj(response.data);
                alert('Pension Details  added successfully.');
                setNewPensionObj({ pensioner_id: '', amount: '', charges:"", bankType:"", statusCode:""})
            })
            .catch(() => {
                alert("Pensioner could not be added.");
            });
    }
   
    const submitGetPensionById = (evt) => {
        console.log(pension.pensioner_id);
        axios.get(`http://localhost:8082/getpensiondetailsbyid/${pension.pensioner_id}`)
            .then((response) => {
                setPension(response.data);
            })
            .catch(() => {
                setPension({});
                alert("Pension Details not found.");
            });
        evt.preventDefault();
    }

   const submitDeletePensionById=(evt) =>{
        console.log(deletePension.pensioner_id);
        axios.get(`http://localhost:8082/deletepensionbyid/${deletePension.pensioner_id}`)
            .then((response) => {
                setDeletePension(response.data);
                alert('pension details deleted successfully.');
            })
            .catch(() => {
                setDeletePension({});
                alert("Pension Details not found.");
            });
        evt.preventDefault();
    }

    const submitUpdatePension = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/updatepension`, updatePensionDetails)
            .then((response) => {
                setUpdatePensionDetails(response.data);
                alert('Pension Details  updated successfully.');
                setNewPensionObj({ pensioner_id: '', amount: '', charges:"", bankType:"", statusCode:""})
            })
            .catch(() => {
                alert("Pensioner could not be updated.");
            });
    };

    return (
        <div style={{
            textAlign:'center',
            backgroundImage: `url("")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'position',
            backgroundSize:'cover'
        }}>

            <div>
                <p>Add New Pension Details</p>
                {/* <form onSubmit={submitAddPensioner}> */}
                <div id="addNewPensionDiv" >
                    <input
                        type="number"
                        id="pensioner_id"
                        name="pensioner_id"
                        value={newPensionObj.pensioner_id}
                        onChange={handleAddPension}
                        placeholder="Enter Pensioner_id" />  <br/> <br/>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={newPensionObj.amount}
                        onChange={handleAddPension}
                        placeholder="Enter Amount" /> <br/>  <br/>
                    <input
                        type="number"
                        id="charges"
                        name="charges"
                        value={newPensionObj.charges}
                        onChange={handleAddPension}
                        placeholder="Enter Bank Charges" /> <br/> <br/>
                    <input
                        type="text"
                        id="banktype"
                        name="banktype"
                        value={newPensionObj.bankType}
                        onChange={handleAddPension}
                        placeholder="Enter Bank Type" /> <br/> <br/>
                     <input
                        type="number"
                        id="statusCode"
                        name="statusCode"
                        value={newPensionObj.statusCode}
                        onChange={handleAddPension}
                        placeholder="Enter statusCode" /> <br/>

                   <br/>
                    
                    <input
                        type="submit"
                        // type="button"
                        value="Add Pension"
                        onClick={submitAddPension}
                    />
                </div>
                {/* </form> */}
                <p>New Pensioner Data: {displayPensionObj.pensioner_id} {displayPensionObj.amount} {displayPensionObj.charges} {displayPensionObj.bankType} {displayPensionObj.statusCode}  </p>
            </div>
            <p>----------------</p>
            <p className="display-4 text-primary mt-3">Spring Boot Data</p>
            <p>Search Pension Details By Id</p>
            <input type="number" id="pensioner_id" name="pensioner_id" value={pension.pensioner_id} onChange={handlePension} placeholder="Enter pensioner_id to search" />
            <input type="submit" name="Find Pension" onClick={submitGetPensionById} />
            <p className="text-primary">{pension.pensioner_id} {pension.amount} {pension.charges} {pension.bankType} {pension.statusCode} </p>
            
            <p>----------------</p>
            <p className="display-4 text-primary mt-3">Spring Boot Data</p>
            <p>Delete Pension Details By Id</p>
            <input type="number" id="pensioner_id" name="pensioner_id" value={deletePension.pensioner_id} onChange={handleDeletePension} placeholder="Enter pensioner_id to delete" />
            <input type="submit" name="Delete Pension" onClick={submitDeletePensionById} />
            <p className="text-primary">{deletePension.pensioner_id} {deletePension.amount} {deletePension.charges} {deletePension.bankType} {deletePension.statusCode} </p>

        </div>
    );
}

export default SpringBootData;