// import { useState } from 'react';
// import {
//   useFetchContactsQuery,
//   useCreateContactMutation,
// } from 'redux/contactsSlice';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

// import { TitleForm } from 'components/ContactForm/ContactForm.styled';
import {
  Section,
  Container,
  BoxWrapper,
  Title,
  SubTitle,
  SectionWrapper,
} from 'components/AppStyled';

export const ContactsView = () => {
  // const { data: contacts, isFetching, isError } = useFetchContactsQuery();
  //  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  // const [filter, setFilter] = useState('');

  // const checkContact = name => {
  //   const normilizedName = name.toLowerCase();
  //   const nameChecked = contact =>
  //     normilizedName === contact.name.toLowerCase();

  //   return !nameChecked;
  // };

  // const formSubmitHandler = ({ name, phone }) => {
  //   if (checkContact(name)) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     addContact({ name, phone });
  //     console.log('adding', { name, phone });
  //   }
  // };

  // const getContactList = () => {
  //   const normilizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normilizedFilter)
  //   );
  // };

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  return (
    <Section>
      <Container>
        <SectionWrapper>
          <BoxWrapper>
            <Title>Add Contact</Title>
            <ContactForm />
          </BoxWrapper>
          <BoxWrapper>
            <SubTitle>Contacts</SubTitle>
            <Filter />
            <ContactList />
          </BoxWrapper>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
