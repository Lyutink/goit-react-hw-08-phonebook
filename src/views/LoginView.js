//import { useState } from 'react';
//import { ViewContainer } from '../components/styles/ComponentsStyles';

import { authOperations } from '../redux/auth/auth-operations';
// import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
////////////////////
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { Container, Section, Title } from 'components/AppStyled';
import {
  FormStyled,
  Input,
  LabelStyled,
  InputWrapper,
} from 'components/ContactForm/ContactFormStyled';

const initialValues = {
  email: '',
  password: '',
};
//////////////////////////
export const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const loginObj = { email, password };
    dispatch(authOperations.logIn(loginObj));
    resetForm();
  };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   reset();
  // };

  return (
    <Section>
      <Container>
        <Title>Login Page</Title>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormStyled autoComplete="off">
            <InputWrapper>
              <LabelStyled htmlFor="email">Email</LabelStyled>
              <div>
                <Input name="email" type="email" required />
              </div>
            </InputWrapper>
            <InputWrapper>
              <LabelStyled htmlFor="password">Password</LabelStyled>
              <div>
                <Input name="password" type="password" required />
              </div>
            </InputWrapper>
            <Button type="submit" text={'Confirm'} />
          </FormStyled>
        </Formik>
      </Container>
    </Section>
  );
};
