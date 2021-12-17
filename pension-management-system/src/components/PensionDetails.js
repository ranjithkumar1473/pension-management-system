
import React from 'react'
import { getPensionByIdService, addPensionService, updatePensionService, deletePensionService } from "./services/PensionService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPensionById,postAddPension, putUpdatePension ,deleteDeletePension } from '../redux/PensionSlice';
import axios from 'axios';

    const PensionDetails = props => {
    const [pensioner_id, setPensioner_id] = useState('');
    const [pension_id, setPension_id] = useState('');
    const dispatch = useDispatch();
    const [deletePension , setDeletePension] = useState('');
    const pensionDataFromStore = useSelector((state) => state.pension.pensionState);
    const [newPensionObj, setNewPensionObj] = useState('');
    const [displayPensionObj, setDisplayPensionObj] = useState('');
    const [updatePensionDetails, setUpdatePensionDetails] = useState({ pensioner_id: '', amount: '', charges:"", bankType:"", statusCode:"" });
    const [displayUpdatePensionDetails, setDisplayUpdatePensionDetails] = useState('');
    const pensionList = useSelector((state) => state.pension.pensionList);

    const handlePension = (e) => {
        console.log('handlePension');
        setPensioner_id(e.target.value);
    }

    const handleDisplayPension = (ev) => {
       setDisplayPensionObj(ev.target.value);
     
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
    }

const updatePension = (event) => {
updatePensionService(updatePensionDetails)
    .then((response) => {
        alert('Updated')
        console.log(response.data);
    }).catch(() => {
        alert("Not updated")
        console.log('Error')
    });
event.preventDefault();
}


    
    const submitDeletePension = (evt) => {
        evt.preventDefault();
        console.log('submitDeletePension');
        deletePensionService(pensioner_id)

            .then((response) => {
                setDeletePension(response.data)
                alert('Pension Deleted ');
            })

            .catch(() => {
                alert(`Pension with pensioner_id: ${pensioner_id} not found.`);
            });
        setPensioner_id('');
    }

    const submitDisplayPension = (evt) => {
        evt.preventDefault();
        console.log('submitDisplay Pension');
        getPensionByIdService(displayPensionObj)

            .then((response) => {
                setDisplayPensionObj(response.data)
                alert('Pension Details available ');
            })

            .catch(() => {
                alert(`Pension with pensioner_id: ${displayPensionObj} not found.`);
            });
       setDisplayPensionObj('');
    }
    

    const addPension = (evt) => {
        evt.preventDefault();
        
        addPensionService( newPensionObj)
            .then((response) => {
                setDisplayPensionObj(response.data);
                alert('Pension Details  added successfully.');
                setNewPensionObj({ pensioner_id:'', amount: '', charges: '', bankType:"", statusCode:"" })
            })
            .catch(() => {
                alert("Pension Details Could Not Be Added.");
            });
            
    }
    
        
    

  return (
    <div className="container-fluid">
    <h1 className="display-4 text-warning mt-3 mb-3" >Pension Details Component</h1>
 
    <p>Fetch data from backend, store it in redux store and get it to component</p>
   
                            
                       
             <p>----------------------------------</p>
            <br></br>
            <div className="container">

                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p><h3>Display Pension Details</h3></p>

                    <form className="form form-group form-primary" onSubmit={submitDisplayPension }>
                        <input className="form-control mt-4" type="number" id="displayPensionObj" name="displayPensionObj" value={displayPensionObj} onChange={handleDisplayPension} placeholder="Enter Pensioner Id to display the details" />
                        <input  className="form-control mt-4 btn btn-primary" type="submit" name="Find Pension" onClick={submitDisplayPension} />
                    </form>
                   
                    <table className="table w-auto small table table-light table-striped " >
                             <thead>
                                 <tr>
                                 <th>Pensioner_id</th>    
                                 <th>Amount</th>
                                 <th>Charges</th>
                                 <th>BankType</th>
                                 <th>StatusCode</th>
    
                               </tr>
                           </thead>
                             <tbody>
                                 <tr>
                                    <td>{displayPensionObj.pensioner_id}</td>
                                     <td>{displayPensionObj.amount}</td>
                                     <td>{displayPensionObj.charges}</td>
                                     <td>{displayPensionObj.bankType}</td>
                                     <td>{displayPensionObj.statusCode}</td>
                                  


                                 </tr>
                             </tbody>
                         </table>

                </div>
             

            <p>----------------------------------</p>
            <br></br>
            <div className="container">

                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p><h3>Delete Pension Details</h3></p>

                    <form className="form form-group form-primary" onSubmit={submitDeletePension }>
                        <input className="form-control mt-4" type="number" id="pensioner_id" name="pensioner_id" value={pensioner_id} onChange={handlePension} placeholder="Enter Pensioner Id to delete the details" />
                        <input className="form-control mt-4 btn btn-danger" type="submit" value="Remove Pension Details" />
                    </form>


                </div>
             

                <p>-----------------------------------------------------------------------------------------------------</p>
                <div className="container-fluid">
                    <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                        <p><h3>Add Pension Details</h3></p>

                     <input className="form-control mt-3" type="text" id="pensioner_id" name="pensioner_id" value={newPensionObj.setPensioner_id} onChange={handleAddPension} placeholder="Enter Pensioner_id" />
                     <input className="form-control mt-3" type="number" id="amount" name="amount" value={newPensionObj.amount} onChange={handleAddPension} placeholder="Enter amount" />
                     <input className="form-control mt-3" type="number" id="charges" name="charges" value={newPensionObj.charges} onChange={handleAddPension} placeholder="Enter bank charges" />
                     <input className="form-control mt-3" type="text" id="pan" name="pan" value={newPensionObj.bankType} onChange={handleAddPension} placeholder="Enter bank type" />
                     <input className="form-control mt-3" type="number" id="salary" name="salary" value={newPensionObj.statusCode} onChange={handleAddPension} placeholder="Enter Status code" />
                     <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Pension" onClick={addPension} />
                         
                    </div>

                </div>



        </div>
     
        <p>--------------------------------------------------</p>
<div className="container">
                     <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                         <p><h3>Update Pension Details</h3></p>

                         <input className="form-control mt-3" type="number" id="pensioner_id" name="pensioner_id" value={updatePensionDetails.pensioner_id} onChange={handleUpdatePension} placeholder="Enter Pensioner_id"/>
                         <input className="form-control mt-3" type="number" id="amount" name="amount" value={updatePensionDetails.amount} onChange={handleUpdatePension} placeholder="Enter amount" />

                         <input className="form-control mt-3" type="number" id="charges" name="charges" value={updatePensionDetails.charges} onChange={handleUpdatePension} placeholder="Enter Charges"/>
                         <input className="form-control mt-3" type="text" id="bankType" name="bankType" value={updatePensionDetails.bankType} onChange={handleUpdatePension} placeholder="Enter bank type"/>
                         <input className="form-control mt-3" type="number" id="statusCode" name="statusCode" value={updatePensionDetails.statusCode} onChange={handleUpdatePension} placeholder="Enter statuscode"/>
                        
                         <input className="form-control mt-3 btn btn-warning" type="submit" value="UpdatePension" onClick={updatePension} />
                         <table className="table w-auto small table table-light table-striped ">
                             <thead>
                                 <tr>
                                 <th>Pensioner_id</th>    
                                 <th>Amount</th>
                                 <th>Charges</th>
                                 <th>BankType</th>
                                 <th>StatusCode</th>
    
                               </tr>
                           </thead>
                             <tbody>
                                 <tr>
                                    <td>{updatePensionDetails.pensioner_id}</td>
                                     <td>{updatePensionDetails.amount}</td>
                                     <td>{updatePensionDetails.charges}</td>
                                     <td>{updatePensionDetails.bankType}</td>
                                     <td>{updatePensionDetails.statusCode}</td>
                                  


                                 </tr>
                             </tbody>
                         </table>
                    </div>
                    </div>
         {/* </div> */}

        </div>

         </div>
    
  );

                    }
export default PensionDetails;
