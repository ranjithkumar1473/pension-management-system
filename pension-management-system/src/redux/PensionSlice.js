
import { createSlice } from "@reduxjs/toolkit";
import Pension from "../components/models/Pension";

// step 3 for redux - create slices for each components 
const PensionSlice = createSlice({

    name: 'pension',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        pensionState: new Pension(),
        pensionList: []


    },

    reducers: {

        getPensionById: (state, action) => {
            console.log('pensionSlice reducers getPensionById');
            state.empState = action.payload;
        },
        postAddPension: (state, action) => {
            console.log('PensionSlice reducers addPension ');
            state.pensionState = action.payload;
        },

        putUpdatePension: (state, action) => {
            console.log('PensionSlice reducers updatePension');
            state.pensionState = action.payload;
        },

        deleteDeletePension: (state, action) => {
            console.log('PensionSlice reducers deletePension ');
            state.pensionState = action.payload;
        },
        // getAllEmps: (state, action) => {
        //     console.log('EmpSlice reducers getAllEmps');
        //     state.empList = action.payload;
        // }

        // more methods will be added 
    }
});

export const { getPensionById ,postAddPension,putUpdatePension,deleteDeletePension} = PensionSlice.actions;

export default PensionSlice.reducer;