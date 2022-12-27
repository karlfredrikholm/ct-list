import styled from 'styled-components/macro';

export const MenuBtn = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 1.7rem;

  background: none;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  & svg {
    color: mediumpurple;
    width: 2.8rem;
    height: 2.8rem;
    background: white;
    border-radius: 50%;
    padding: 0.3rem;
  }
`;

/* Add Form */
export const SubmitBtn = styled.button`
  border: none;
  margin-top: 2rem;
  padding: .5rem 1rem;
  width: 5rem;
`;

export const ListItemBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-color);
  border: none;
  border-top: 1px solid var(--text-color);
  color: var(--text-color);
  cursor: pointer;
  padding: .5rem 1rem;
  width: 100%;
`

export const FilterBtn = styled.button`
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  cursor: pointer;
  padding: 0 .4rem;
  height: 2rem;
  width: fit-content;
  
`

export const SearchBtn = styled.button`
  border: 1px solid var(--text-color);
  background: none;
  color: var(--text-color);
  cursor: pointer;
  height: 2rem;
  width: 5rem;
`