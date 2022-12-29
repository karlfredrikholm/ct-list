import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: .7rem 1rem 1.5rem;

  & input {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    color: var(--main-color);
    font-size: 1rem;
    height: 2rem;
    width: 15.5rem;
    margin-right: 1rem;
    padding-left: .5rem;
  }

  & input::placeholder {
    color: var(--text-color);
  }

  & input:active {
    color: var(--main-color);
  }

  & input:focus {
    outline: none;
  }

  & fieldset {
    border: none;
    margin: .2rem 0 1rem 0;
  }

  & div {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text-color);
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
