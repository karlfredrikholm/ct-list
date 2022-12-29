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
  border: 1px solid var(--text-color);
  background: none;
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 0.9rem;
  font-weight: 600;
  height: 2rem;
  width: 5rem;
  transition: 0.2s ease;

  @media (max-width: 700px) {
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (min-width: 850px) {
    &:hover {
      background: var(--text-color);
      color: var(--main-color);
    }
  }
`;

export const FilterBtn = styled(SearchBtn)`
  background: var(--text-color);
  color: var(--main-color);
  padding: 0 .8rem;
  height: 2rem;
  width: fit-content;

  @media (min-width: 850px) {
    &:hover {
      background: var(--main-color);
      color: var(--text-color);
    }
  }

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export const ShowCategoriesBtn = styled(SearchBtn)`
  width: fit-content;
  padding: 0 .8rem;
`;

export const BackBtn = styled(SearchBtn)``;