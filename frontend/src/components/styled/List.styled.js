import styled from 'styled-components';

export const UL = styled.ul`
  list-style-type: none;
`
export const LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--main-color);
  border: none;
  border-top: .1rem solid var(--text-color);
  color: var(--text-color);
  padding: 1rem;
  width: 100%;

  @media (min-width: 850px) {
    &:hover {
      background: var(--text-color);
      color: var(--main-color);
    }
  }

  @media (max-width: 750px) {
    
  }
`
