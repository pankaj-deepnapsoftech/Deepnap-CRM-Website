import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    name: undefined,
    email: undefined,
    company: undefined,
    city: undefined,
    phone: undefined,
    employeeCount: undefined,
    id: undefined,
    verified: false,
    subscribed: false,
    subscription: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userExists: (state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.company = action.payload.company;
            state.city = action.payload.city;
            state.phone = action.payload.phone;
            state.employeeCount = action.payload.employeeCount;
            state.id = action.payload._id;
            state.verified = action.payload.verified;
            state.subscribed = action.payload?.account?.subscription ? true : false;
            state.subscription = action.payload?.account?.subscription || null;
        },
        userNotExists: (state)=>{
            state.name = undefined;
            state.email = undefined;
            state.company = undefined;
            state.city = undefined;
            state.phone = undefined;
            state.employeeCount = undefined;
            state.id = undefined;
            state.verified = false;
            state.subscribed = false;
            state.subscription = null;
        }
    }
});

export default authSlice;
export const {userExists, userNotExists} = authSlice.actions;