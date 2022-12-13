import { useDispatch } from "react-redux"

import PropTypes from 'prop-types';
import {deleteContacts} from 'redux/operations'

export const ContactsItem = ({contact}) => {
const dispatch = useDispatch()
    const removeContacts = () =>dispatch(deleteContacts(contact.id))

return (
    <>
    <span className='contact'>{contact.name} : {contact.phone}</span>
    <button type="button" className='btn'
             onClick={removeContacts}>
              Remove Contact

             </button>
    </>
)

}

ContactsItem.propTypes = {
    contact: PropTypes.object.isRequired,
    
      }