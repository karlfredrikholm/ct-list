import styled from 'styled-components';

export const SingleCocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;

  & h4 {
    background: var(--text-color);
    color: var(--main-color);
    font-size: 1.2rem;
    font-weight: 700;
    width: fit-content;
    padding: 0 .5rem;
    margin: 1.5rem 0 .5rem;

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }

  & a {
    color: var(--text-color);
    text-decoration: underline;
    margin: 1.5rem 0 1rem;
  }

  & p {
    padding: 0 2rem;
  }

  & hr {
    margin: 1.5rem 0 0;
    width: 100%;
  }
`;

export const Ingredients = styled.div``;

export const Garnish = styled(Ingredients)``;

export const Notes = styled(Garnish)``;

export const Preparation = styled.div`
`;
