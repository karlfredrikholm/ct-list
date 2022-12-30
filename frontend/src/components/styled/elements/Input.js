import styled from 'styled-components';

export const Input = styled.input`
  background: var(--main-color);
  border: 1px solid var(--text-color);
  color: var(--text-color);
  font-size: 1rem;
  height: 2rem;
  width: 15.5rem;
  margin-right: 1rem;
  padding-left: 0.5rem;

  &::placeholder {
    color: var(--text-color);
    font-family: var(--main-font);
    font-size: 0.9rem;
  }

  &:active {
    color: var(--main-color);
  }

  &:focus {
    outline: none;
  }
`;
