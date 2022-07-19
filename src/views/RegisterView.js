import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { Title } from 'components/AppStyled';
import {
  FormStyled,
  Input,
  LabelStyled,
  InputWrapper,
} from 'components/ContactForm/ContactFormStyled';
import { authOperations } from '../redux/auth/auth-operations';
import { Container, Section } from 'components/AppStyled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    const registerObj = { name, email, password };
    dispatch(authOperations.register(registerObj));
    resetForm();
  };

  return (
    <Section>
      <Container>
        <Title>Registration Page</Title>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormStyled autoComplete="off">
            <InputWrapper>
              <LabelStyled htmlFor="name">Name</LabelStyled>
              <div>
                <Input name="name" type="text" required />
              </div>
            </InputWrapper>
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
