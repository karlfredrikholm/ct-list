import styled from 'styled-components';

export const A = styled.a`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: underline;
  width: fit-content;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`