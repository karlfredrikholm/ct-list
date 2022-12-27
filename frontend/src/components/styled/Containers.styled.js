import styled from 'styled-components';

export const SingleCocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;

  & h2 {
    border-bottom: .1rem solid var(--text-color);
  }

  & h4 {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: .4rem;
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
  margin: 1rem 2rem;
  width: fit-content;
  max-width: 32rem;
`;

export const Ingredients = styled.div`
  width: fit-content;
  padding: 1rem 0 1.5rem .5rem;
`;

export const Garnish = styled(Ingredients)`
`

export const Notes = styled(Garnish)`
`

export const Preparation = styled.div`
  width: fit-content;
  max-width: 32rem;
  
  @media (max-width: 700px) {
    max-width: 26rem;
  }
`;
