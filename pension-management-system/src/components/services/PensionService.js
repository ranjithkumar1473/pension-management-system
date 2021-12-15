import axios from 'axios';

// Create services for other components in this way. 

const getPensionByIdService = (pensioner_id) => {
    console.log(`getPensionByIdService`);
    return axios.get(`/getpensiondetailsbyid/${pensioner_id}`);
}


const addPensionService = (pension) => {
    console.log(`addpensionByIdService`);
    return axios.post(`/addpension`, pension);
}

const updatePensionService = (pension) => {
    console.log(`updatepensionByIdService`);
    return axios.put(`/updatepension`, pension);
}

const deletePensionService = (pensioner_id) => {
    console.log(`deletePensionByIdService`);
    return axios.delete(`/deletepensionbyid/${pensioner_id}`);
}

export { getPensionByIdService,addPensionService,updatePensionService,deletePensionService};