import styled from 'styled-components';

export const SingleCocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;

  & h2 {
    border-bottom: .3rem dotted var(--text-color);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 2rem 0;
`;

export const Ingredients = styled.div`
  font-size: 3rem;
  width: fit-content;
  padding: 1rem 0 1.5rem .5rem;
`;

export const Garnish = styled(Ingredients)`
  border-left: 1px solid var(--text-color);
  padding-left: 2.5rem;
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
