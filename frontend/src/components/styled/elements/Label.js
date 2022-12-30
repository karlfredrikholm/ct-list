import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 600;
  gap: .25rem;
  padding: 1rem 0 .5rem;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`