import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk(
  "auth/login",
  async (User, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", User);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
      await axios.post("/users/logout");
      clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
      }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const reduxState = thunkAPI.getState();
  const saveToken = reduxState.auth.token;
  setAuthHeader(saveToken);

  const response = await axios.get('/users/current')
    return response.data;
},
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      const saveToken = reduxState.auth.token;
      return saveToken !== null;
  }}
)