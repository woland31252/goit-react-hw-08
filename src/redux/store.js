import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "../redux/contactsSlice";
// import filtersReducer from "../redux/filtersSlice";
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from '../redux/filters/slice';
import authReducer from '../redux/auth/slice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

