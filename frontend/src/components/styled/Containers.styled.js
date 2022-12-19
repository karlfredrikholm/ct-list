import styled from 'styled-components';

export const CocktailContainer = styled.div`
  border: 2px solid white;
  padding: 2rem;
  width: 35rem;
  text-align: center;

  & td {
    color: white;
    padding: 0 1rem 0 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
`;

export const Ingredients = styled.div`
  font-size: 1.2rem;
  width: fit-content;
  padding: 0 1rem 0.5rem 0.5rem;

  & div {
    display: flex;
    flex-direction: column;
    border: 3px solid white;
  }
`;

export const Garnish = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Preparation = styled.div`
  width: fit-content;
`;
