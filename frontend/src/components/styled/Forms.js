import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 100%;

  & input {
    width: 50%;
  }
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  padding: 2rem 4rem;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  width: 100%;

  & div {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  & label {
    padding: 2rem 0 0.4rem 0;
  }

  & input {
    border: none;
    height: 2rem;
  }

  textarea {
    border: none;
    height: 6rem;
    resize: none;
  }

  & textarea,
  input::placeholder {
    padding: 0.4rem 0 0 0.4rem;
  }

  & select {
    border: none;
    height: 2rem;
  }
`;
