import styled from 'styled-components/macro';

export const FilledBtn = styled.button`
  background: var(--text-color);
  border: 1px solid var(--text-color);
  color: var(--main-color);
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  width: fit-content;
  letter-spacing: 0.02rem;
  padding: 0 1rem;
  transition: 0.2s ease;
  
  @media (max-width: 750px) {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0;
  }

  @media (min-width: 850px) {
    &:hover {
      background: var(--main-color);
      border: 1px solid var(--text-color);
      color: var(--text-color);
    }
  }
`;

export const BorderBtn = styled(FilledBtn)`
  background: var(--main-color);
  color: var(--text-color);
  width: fit-content;
  padding: 0 0.8rem;
`;
