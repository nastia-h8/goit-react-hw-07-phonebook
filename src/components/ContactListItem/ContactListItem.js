import { Button, Item, Name, NumberWrapper } from './ContactListItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export function ContactListItem({ id, number, name }) {
  const dispatch = useDispatch();
  return (
    <Item>
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
  );
}
