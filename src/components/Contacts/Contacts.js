import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { sortAscName, sortDescName } from 'redux/contactsSlice';

import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';

import { Button, Title, ContactSort } from './Contacts.styled';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';

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
      <ContactSort>
        Sort by name
        <Button onClick={() => dispatch(sortAscName())}>
          <AiOutlineSortAscending size={20} />
        </Button>
        <Button onClick={() => dispatch(sortDescName())}>
          <AiOutlineSortDescending size={20} />
        </Button>
      </ContactSort>

      {isLoading && <Loader />}

      {!contacts.length && !isLoading ? (
        <Message>No contacts yet</Message>
      ) : (
        <ContactList />
      )}
      {error && <p>{error}</p>}
    </>
  );
}
