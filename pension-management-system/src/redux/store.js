import pensionReducer from './PensionSlice';
import bankReducer from './BankSlice';
import { configureStore } from "@reduxjs/toolkit";

 
console.log('store');
const store = configureStore(
    {
        reducer: {
            pension: pensionReducer,
            bank: bankReducer
        }
    }
);

export default store;