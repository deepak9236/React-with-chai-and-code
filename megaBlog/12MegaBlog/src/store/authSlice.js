// ya store track karega humare sabhi authentication ko
// ya slice authentication ko track karega(store se har bar puchage user authanticated hai ya nahi hai)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, // by default user authenticated nahi hai
    userData: null // user ke bare me koi detail
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// Reducer ke action export ho rahe hai--> login, logout--> action hai
export const {login, logout} = authSlice.actions;

// authSlice ke andar reducer export ho raha hai  
export default authSlice.reducer;