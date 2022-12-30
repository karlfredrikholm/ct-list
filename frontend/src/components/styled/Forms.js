import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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
`

export const AddForm = styled(Form)`
  textarea {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    height: 6rem;
    padding: .5rem .65rem;
    width: 15.5rem;
    resize: none;

    &::placeholder {
      color: var(--text-color);
      font-family: var(--main-font);
    }
  }

  & select {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
    height: 2rem;
    padding-left: .25rem;
    width: 15.5rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  border: .1rem solid var(--text-color);
  width: fit-content;

  & button {
    margin-top: 1rem;
  }
`