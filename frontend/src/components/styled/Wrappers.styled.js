import styled from 'styled-components';

export const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 1rem 1rem 1.5rem 1rem;
  gap: 1rem 2.5rem;

  & h2 {
    grid-column: span 2;
    text-align: center;
  }

  & hr {
    grid-column: span 2;
  }
`;

export const Ingredients = styled.div``;
export const Garnish = styled.div``;
export const Notes = styled.div``;
export const Preparation = styled.div``;

export const AboutWrapper = styled(RecipeWrapper)`
  & p {
    margin-bottom: 1.5rem;
  }

  & a {
    font-size: 1rem;
    font-weight: 400;
  }
`