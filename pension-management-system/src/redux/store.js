import pensionReducer from './PensionSlice';
import { configureStore } from "@reduxjs/toolkit"; 
const store = configureStore(
    {
        reducer: {
            pension: pensionReducer,
        }
    }
);
export default store;