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
`

export const AddForm = styled(Form)`
  textarea {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    font-size: 1rem;
    height: 5rem;
    padding: .5rem .65rem;
    width: 20rem;
    resize: none;
    box-shadow: 3px 3px var(--text-color);

    &::placeholder {
      color: var(--text-color);
      font-family: var(--main-font);
      font-size: .9rem;
    }
  }

  & select {
    background: var(--main-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
    height: 2rem;
    padding-left: .25rem;
    width: 20rem;
    box-shadow: 3px 3px var(--text-color);
  }
`;