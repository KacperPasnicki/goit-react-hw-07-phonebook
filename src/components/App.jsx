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


//    useEffect(() => {


//     const storage = JSON.parse(localStorage.getItem('items'))
//     if (storage  === null) {
//       dispatch(newInitialState(
//         [
//           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//           { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//           { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ]))}
//       else
//    { dispatch(newInitialState(storage))
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])

    
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

