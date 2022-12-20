import { useSelector } from 'react-redux';

import { getFindContact } from 'redux/selectors';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = () => {
  const findContact = useSelector(getFindContact);

  return (
    <ul>
      {findContact.map(contact => (
        <li key={contact.id}>
          <ContactsItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
