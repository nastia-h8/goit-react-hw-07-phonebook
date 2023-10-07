import { Toaster } from 'react-hot-toast';

import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';

import { MainTitle } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Contacts />
      <Toaster />
      <GlobalStyle />
    </Layout>
  );
};
