import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Layout } from 'components/Layout';
import { MainTitle, Title } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyles';
import { Message } from 'components/Message/Message';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactFilter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {items.length > 0 && <ContactList />}
      {items.length < 0 && !isLoading && <Message>No contacts found</Message>}
      <Toaster />
      <GlobalStyle />
    </Layout>
  );
};
