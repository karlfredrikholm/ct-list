import styled from 'styled-components';

export const UL = styled.ul`
  list-style-type: none;
`
export const LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-color);
  border: none;
  border-top: .1rem dashed var(--text-color);
  color: var(--text-color);
  cursor: pointer;
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
