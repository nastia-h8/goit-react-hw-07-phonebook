import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;
export const Button = styled.button`
  min-width: 30px;
  padding: ${p => p.theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bgc};
  }
`;
