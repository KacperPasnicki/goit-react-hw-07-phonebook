import React from 'react';
import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';
import { getContact,  } from 'redux/selectors';

import {addContacts} from 'redux/operations'

export const Form =() => {
  const items = useSelector(getContact);
  const dispatch = useDispatch()
  let Id = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
   
    const form = e.currentTarget;
    const name = form.elements.name.value
    const number = form.elements.number.value;
    //  const newContact = { id: nanoid(8), name: name, number: number };
    // dispatch(addContacts(Event.target.elements.text.value))
    const nameArray = items.map(({name}) =>name)
   
    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts !`)
    }else {
      dispatch(addContacts({name, number}))
     
    form.reset();
  }};



    
      return (
        <form className='nameForm' onSubmit={handleSubmit}
        htmlFor={Id}>
          <label className='label'><span className='formName'>Name: </span>
          <input 
          id={Id}
          
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='text your name'
            // onChange={handleChange}
          />
          </label>
          <label className='label'><span className='formName'>Number: </span>
          <input 
          id={Id}
      
          // onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required 
          placeholder='text your phone number' 
          
          />
          </label>
          <button className='addButton' type="submit">Add Contact</button>
      
          
        </form>
      );
    }
  
  


    // Form.propTypes = {
    //   handleSubmit: PropTypes.func.isRequired,
     
    //     }