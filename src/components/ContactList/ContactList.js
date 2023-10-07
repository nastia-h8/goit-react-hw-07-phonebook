import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Message } from 'components/Message/Message';

import { List } from './ContactList.styled';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <List>
          {visibleContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      ) : (
        <Message>No contacts found</Message>
      )}
    </>
  );
}
