import { createSlice } from "@reduxjs/toolkit";

import {fetchContacts, addContacts, deleteContacts} from './operations'

const contactsInitialState = {
    items: [], filter: '', 
    isLoading: false,
    error: null,
  };




const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

 const ContactsSlice = createSlice( {
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
      filterContact(state, action) {
        state.filter = action.payload
       
    }},

    extraReducers: {
        [fetchContacts.pending]:handlePending ,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]:handleRejected,
    
    [addContacts.pending]: handlePending, 
      [addContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addContacts.rejected]:handleRejected, 
      [deleteContacts.pending]:handlePending,
      [deleteContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
      [deleteContacts.rejected]:handleRejected
    },
    }
 )
  
    export const ContactsReducer = ContactsSlice.reducer;
    export const { filterContact} = ContactsSlice.actions








    // reducers: {
    //     addContact: 
    //     {
    //      reducer(state, action){  
    //         state.items.push(action.payload)
    //         localStorage.setItem('items', JSON.stringify(state.items))
    //     },
    //     prepare(name, number) {
    //         return {
    //             payload: 
    //                 { id: nanoid(8), name, number },
    //         };
    //       },
    //     },
    //     newInitialState(state, action) {
    //         state.items = action.payload;
    //     },
    //     filterContact(state, action) {
    //         state.filter = action.payload;
    //     },

    //     removeContact(state, action) {
    //       let newArray = state.items.filter(contact => contact.id !== action.payload)
    //          state.items = newArray
    //         localStorage.setItem('items', JSON.stringify(state.items))
    //         // state.splice(id, 1);
    //     },}