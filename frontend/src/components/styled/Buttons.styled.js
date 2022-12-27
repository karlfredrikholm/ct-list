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
  padding: .6rem 1rem;
  width: 100%;

  &:hover {
    background: var(--text-color);
    color: var(--main-color);
  }

  & p {

  }
  `

export const SearchBtn = styled.button`
    border: 1px solid var(--text-color);
    background: none;
    color: var(--text-color);
    cursor: pointer;
    font-size: .9rem;
    font-weight: 600;
    height: 2rem;
    width: 5rem;
    transition: .2s ease;
   
    @media (max-width: 700px) {
      font-size: .8rem;
      font-weight: 500;
    }

    &:hover {
    background: var(--text-color);
    color: var(--main-color);

  }
  `
export const FilterBtn = styled(SearchBtn)`
  background: var(--text-color);
  color: var(--main-color);
  padding: 0 .5rem;
  height: 2rem;
  width: fit-content;

  &:hover {
    background: var(--main-color);
    color: var(--text-color);
  }
`

export const BackBtn = styled(SearchBtn)`
`