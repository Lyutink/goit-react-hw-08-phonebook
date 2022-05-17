//import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ContainerForm, LabelForm, BtnForm } from "./ContactForm.styled";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required("Please enter your name, it is required"),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits (at least 5 symbols long), it can contain spaces, dashes, parentheses and can start with +"
    )
    .required("Please enter your phone number, it is required"),
});
///////////////////////////////////
export default function ContactForm({ onSubmit, adding }) {
  return (
    <Formik
      enableReinitialize
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values,{ resetForm}) => {
        onSubmit(values);
        resetForm(); 
      }}
    >
      <Form autoComplete="off" >
        <ContainerForm>
          <LabelForm htmlFor="name">Name</LabelForm>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />

          <LabelForm htmlFor="phone">Phone</LabelForm>
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" />

          <BtnForm type="submit">
            {adding ? "Adding..." : "Add contact"}
          </BtnForm>
        </ContainerForm>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
