import { Formik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsAdding } from 'redux/selectors';
import { regex } from 'utils/regex';
import {
  checkContactName,
  checkContactNumber,
} from 'helpers/checkExistingContact';

import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import {
  FormField,
  Label,
  LabelName,
  InputWrapper,
  Button,
  Input,
  Message,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

const Schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Enter at least 3 characters')
    .max(25, 'Too Long')
    .trim()
    .matches(regex.name.regex, regex.name.errorMessage)
    .required('Required'),
  number: yup
    .string()
    .min(6, 'Enter at least 6 characters')
    .max(20, 'Too Long')
    .trim()
    .matches(regex.number.regex, regex.number.errorMessage)
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isAdding = useSelector(selectIsAdding);

  const handleSubmit = (contact, { resetForm }) => {
    const isNameInContactList = checkContactName(contacts, contact.name);
    const isNumberInContactList = checkContactNumber(contacts, contact.number);

    if (isNameInContactList) {
      toast.error(`${contact.name} is already in contacts`);
    } else if (isNumberInContactList) {
      toast.error(
        `This number is already saved in contacts as ${isNumberInContactList.name}`
      );
    } else {
      dispatch(addContact(contact));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <FormField autoComplete="off">
        <Label>
          <LabelName>Name</LabelName>
          <InputWrapper>
            <AiOutlineUser size={20} />
            <Input type="text" name="name" />
          </InputWrapper>
        </Label>
        <Message name="name" component="p" />

        <Label>
          <LabelName>Number</LabelName>
          <InputWrapper>
            <AiOutlinePhone size={20} />
            <Input type="tel" name="number" />
          </InputWrapper>
        </Label>
        <Message name="number" component="p" />

        <Button type="submit">{isAdding ? 'Adding...' : 'Add contact'}</Button>
      </FormField>
    </Formik>
  );
};
