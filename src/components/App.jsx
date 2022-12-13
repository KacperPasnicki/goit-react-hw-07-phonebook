import React, { useEffect} from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from "./Form/Form";

import { Filter } from './Filter';

import { useDispatch, useSelector } from 'react-redux';

 import {getIsLoading, getError} from 'redux/selectors'
import { fetchContacts } from 'redux/operations';


export const App =() => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const {items, isLoading, filter, error} = useSelector(getContact)

useEffect(()=> {
dispatch(fetchContacts())
}, [dispatch]);

    
  return (
      <div className='phonebook'
      
      >
        <h1>Phonebook</h1>
        <Form />
       
        <h2>Contacts:</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList
        
      />
      </div>
    );
  
}

