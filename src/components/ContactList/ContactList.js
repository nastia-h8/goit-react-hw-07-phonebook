import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { sortAscName, sortDescName } from 'redux/contactsSlice';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Message } from 'components/Message/Message';

import { Button, List, Wrapper } from './ContactList.styled';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return visibleContacts.length < 0 && !isLoading ? (
    <Message>No contacts found</Message>
  ) : (
    <>
      <Wrapper>
        Sort by name
        <Button onClick={() => dispatch(sortAscName())}>
          <AiOutlineSortAscending size={20} />
        </Button>
        <Button onClick={() => dispatch(sortDescName())}>
          <AiOutlineSortDescending size={20} />
        </Button>
      </Wrapper>
      <List>
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </List>
    </>
  );
}
