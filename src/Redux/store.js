import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

const store = configureStore({
    reducer:{
        forms:formSlice,
    }
})
export default store