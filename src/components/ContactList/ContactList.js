import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import { Message } from 'components/Message/Message';

import { AiOutlineDelete } from 'react-icons/ai';
import { List, Item, Name, Button, NumberWrapper } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}</Name>
            <NumberWrapper>
              <span>Number: </span>
              {number}
            </NumberWrapper>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              <AiOutlineDelete size={20} />
            </Button>
          </Item>
        ))
      ) : (
        <Message>No contacts found</Message>
      )}
    </List>
  );
}
