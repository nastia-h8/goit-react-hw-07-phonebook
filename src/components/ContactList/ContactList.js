import { useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Message } from 'components/Message/Message';

import { List } from './ContactList.styled';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return !visibleContacts.length && !isLoading ? (
    <Message>No contacts found</Message>
  ) : (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
}
