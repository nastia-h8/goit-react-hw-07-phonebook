import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';

import { Title } from './Contacts.styled';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Contacts</Title>
      <ContactFilter />
      {isLoading && <Loader />}
      {!contacts.length ? <Message>No contacts yet</Message> : <ContactList />}
      {error && <p>{error}</p>}
    </>
  );
}
