import { useDispatch } from 'react-redux';
import { changeNameFilter } from 'redux/filterSlice';

import {
  Wrapper,
  LabelName,
  InputWrapper,
  Input,
} from './ContactFilter.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export function ContactFilter() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <label>
        <LabelName>Find contacts by name</LabelName>
        <InputWrapper>
          <Input
            name="filter"
            placeholder="Enter name..."
            type="text"
            onChange={e => {
              dispatch(changeNameFilter(e.target.value));
            }}
          />
          <AiOutlineSearch size={20} />
        </InputWrapper>
      </label>
    </Wrapper>
  );
}
