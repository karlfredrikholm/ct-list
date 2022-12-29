import styled from 'styled-components/macro';

export const MenuBtn = styled.button`
  position: absolute;
  top: 2.7rem;
  right: 1rem;

  background: none;
  border: none;
  width: 3rem;
  height: 3rem;

  & svg {
    color: var(--main-color);
    width: 2.8rem;
    height: 2.8rem;
    background: var(--text-color);
    border-radius: 50%;
    padding: 0.4rem;
    transition: .3s ease;

    &:hover {
      background: var(--main-color);
      border: 1px solid var(--text-color);
      color: var(--text-color);
    }
  }
`;

/* Add Form */
export const SubmitBtn = styled.button`
  border: none;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  width: 5rem;
`;

/* Search Form */
export const SearchBtn = styled.button`
  background: var(--text-color);
  border: 1px solid var(--text-color);
  color: var(--main-color);
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  width: fit-content;
  padding: 0 1rem;
  transition: 0.2s ease;
  
  @media (max-width: 750px) {
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  @media (min-width: 850px) {
    &:hover {
      background: var(--main-color);
      border: 1px solid var(--text-color);
      color: var(--text-color);
    }
  }
`;

export const FilterBtn = styled(SearchBtn)`

`;

export const ShowCategoriesBtn = styled(SearchBtn)`
  background: var(--main-color);
  color: var(--text-color);
  width: fit-content;
  padding: 0 .8rem;
`;

export const BackBtn = styled(SearchBtn)``;