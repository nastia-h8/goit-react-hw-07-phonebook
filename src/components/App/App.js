import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Layout } from 'components/Layout';
import { MainTitle, Title } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyles';
import { Message } from 'components/Message/Message';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <ContactFilter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message>No contacts found</Message>
      )}

      <Toaster />
      <GlobalStyle />
    </Layout>
  );
};
