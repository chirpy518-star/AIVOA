import { configureStore } from "@reduxjs/toolkit";
import complaintReducer from "../features/complaint/complaintSlice";

export const store = configureStore({
    reducer:{
        complaint: complaintReducer
    }
});
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    complaintSource:"",
    customerName:"",
    productName:"",
    productStrength:"",
    batchLotNumber:"",
    manufacturingDate:"",
    expiryDate:"",
    quantityAffected:"",
    complaintType:"",
    complaintDate:"",
    description:"",
    initialSeverity:"",
    priority:"",
    progress:10,
    status:"Pending Triage"

};

const complaintSlice=createSlice({

    name:"complaint",

    initialState,

    reducers:{

        updateField:(state,action)=>{

            const {field,value}=action.payload;
            state[field]=value;

        },

        resetForm:()=>initialState,

        setProgress:(state,action)=>{
            state.progress=action.payload;
        }

    }

});

export const {updateField,resetForm,setProgress}=complaintSlice.actions;

export default complaintSlice.reducer;
