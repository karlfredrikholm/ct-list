import styled from 'styled-components';

export const Input = styled.input`
  background: var(--main-color);
  border: 1px solid var(--text-color);
  color: var(--text-color);
  font-size: 1rem;
  height: 2rem;
  margin-right: ${(props) => (props.mr && '1rem')};
  padding-left: 0.5rem;
  width: ${(props) => (props.add ? '20rem' : '15.5rem')};

  &::placeholder {
    color: var(--text-color);
    font-family: var(--main-font);
    font-size: .9rem;
  }

  &:active {
    color: var(--main-color);
  }

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 500;
  gap: .25rem;
  letter-spacing: .03rem;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`