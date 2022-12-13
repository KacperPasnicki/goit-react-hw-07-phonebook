import { configureStore } from "@reduxjs/toolkit";
import { ContactsReducer } from 'redux/Slice'


  export const store = configureStore({
    
    reducer: {
        contacts: ContactsReducer,
    },

});