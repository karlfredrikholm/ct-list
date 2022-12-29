import styled from 'styled-components';

export const RecipeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 1rem 1.5rem 0;
  column-gap: 0rem;
  justify-items: center;

  h2 {
    grid-column: span 2;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  & a {
    color: var(--text-color);
    text-decoration: underline;
    margin: 1.5rem 0 1rem;
  }
`;

export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid var(--text-color);
`;

export const Garnish = styled(Ingredients)``;

export const Notes = styled(Garnish)``;

export const Preparation = styled(Ingredients)`
`;

export const AboutContainer = styled(RecipeContainer)`
  & p {
    margin-bottom: 1.5rem;
  }

  & a {
    font-size: 1rem;
    font-weight: 400;
  }
`
