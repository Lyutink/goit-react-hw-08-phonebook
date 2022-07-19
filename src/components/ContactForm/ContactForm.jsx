import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';

import { Button } from 'components/Button/Button';
import { FormStyled, LabelStyled, Input, InputWrapper, Message } from "./ContactFormStyled";


import 'yup-phone';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(20),
  number: Yup.string().phone().required('A phone number is required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <Message>{message}</Message>}
    />
  );
}; 
const initialValues = {
  name: '',
  number: '',
  filter: '',
};
export const ContactForm = () => {
 
  // const adding = false;
//const [addContact, { isAddin: isAdding }] = useCreateContactMutation();
  const [addContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  

  // const checkContact = name => {
  //   const normilizedName = name.toLowerCase();
  //   const nameChecked = contact =>
  //     normilizedName === contact.name.toLowerCase();

  //   return !nameChecked;
  // };

  const formSubmitHandler = async ({ name, number }, { resetForm }) => {
    const contactObj = { name, number };

    const isNameInContacts = contacts?.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    await addContact(contactObj);
    resetForm();
  };

  // const getContactList = () => {
  //   const normilizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normilizedFilter)
  //   );
  // };

  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };
  /////////////////////////////////////////////////////
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={formSubmitHandler}
      // onSubmit={(values,{ resetForm}) => {
      //   onSubmit(values);
      //   resetForm(); 
      // }}
    >
      <FormStyled autoComplete="off">
        <InputWrapper>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <div>
            <Input name="name" type="text" />
            <FormError name="name" />
          </div>
        </InputWrapper>
        <InputWrapper>
          <LabelStyled htmlFor="number">Phone</LabelStyled>
          <div>
            <Input name="number" type="tel" />
            <FormError name="number" />
          </div>
        </InputWrapper>
        <Button type="submit" text={'Add contact'} />
      </FormStyled>
    </Formik>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
