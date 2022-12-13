import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL= 'https://6397641477359127a036323c.mockapi.io'

const fetchContacts =  createAsyncThunk ('contacts/fetchAll', 
async(name, phone, thunkAPI) => {
try 
{
   const response =await axios.get('/contacts', {name, phone})
   return response.data
}
catch(e) {
    return thunkAPI.rejectWithValue(e.message)
}}
)



const addContacts = createAsyncThunk ('contacts/addContacts', 
async({name, phone}, thunkAPI) => {
try 
{
   const response = await axios.post('/contacts', {name, phone})
   return response.data
}
catch(e) {
    return thunkAPI.rejectWithValue(e.message)
}}
)



const deleteContacts = createAsyncThunk ('contacts/deleteContacts', 
async(contactId, thunkAPI) => {
try 
{
   const response =await axios.delete(`/contacts/${contactId}`)
   return response.data
}
catch(e) {
    return thunkAPI.rejectWithValue(e.message)
}}
)

export {fetchContacts, addContacts, deleteContacts}