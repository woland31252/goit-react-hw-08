import { createSlice } from "@reduxjs/toolkit";

const autSlice = createSlice({
    name: "auth",
    initialState: {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    },
});

export default autSlice.reducer;