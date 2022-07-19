import { List } from './ContactListStyled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi'
import { TextContent } from 'components/AppStyled';

export const ContactList = () => {
  const { currentData: contacts, error } = useFetchContactsQuery();

  console.log(contacts, 'data contacts in Contactslist');
  const filter = useSelector(state => state.filter.value);
  const getFiltredContacts = () => {
    return filter
      ? contacts?.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <>
      <List>
        {contacts?.length > 0 &&
          !error &&
          filtredContacts.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
      </List>

      {contacts?.length === 0 && (
        <TextContent>Your phonebook is empty</TextContent>
      )}
    </>
  );
};