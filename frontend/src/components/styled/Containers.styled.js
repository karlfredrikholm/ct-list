import styled from 'styled-components';

export const SingleCocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 3rem;

  & h4 {
    font-family: 'Playfair Display';
    font-style: italic;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem 0 .2rem 0;
  }

  & p {
    font-size: 1.2rem;

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }

  & a {
    color: var(--text-color);
    padding: 1rem 0;
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 32rem;
  text-align: left;
`;

export const Ingredients = styled.div`
`;

export const Garnish = styled(Ingredients)`
`

export const Notes = styled(Garnish)`
`

export const Preparation = styled.div`
  width: fit-content;
  max-width: 32rem;
  text-align: left;
  
  @media (max-width: 700px) {
    max-width: 26rem;
  }
`;
