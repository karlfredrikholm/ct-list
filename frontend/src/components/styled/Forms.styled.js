import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 1.5rem;

  & fieldset {
    display: flex;
    align-items: center;
    border: none;
    width: fit-content;
  }

  & div {
    display: flex;
    gap: 1rem;
  }
`;

export const AddForm = styled(Form)`
  textarea {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
    font-family: var(--main-font);
    font-size: 1rem;
    height: 5rem;
    padding: 0.5rem 0.65rem;
    width: 20rem;
    resize: none;

    &::placeholder {
      color: var(--text-color);
      font-family: var(--main-font);
      font-size: 0.9rem;
    }

    &:focus {
      outline: none;
    }
  }

  & select {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
    height: 2rem;
    padding-left: 0.25rem;
    width: 20rem;

    &:focus {
      outline: none;
    }
  }
`;
