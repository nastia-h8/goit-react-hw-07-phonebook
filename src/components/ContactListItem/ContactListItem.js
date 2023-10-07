import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Item, Name, NumberWrapper } from './ContactListItem.styled';

export function ContactListItem({ id, number, name }) {
  const dispatch = useDispatch();
  return (
    <Item>
      <Name>{name}</Name>
      <NumberWrapper>
        <span>Number: </span>
        {number}
      </NumberWrapper>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <AiOutlineDelete size={20} />
      </Button>
    </Item>
  );
}
