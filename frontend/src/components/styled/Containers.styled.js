import styled from 'styled-components';

export const SingleCocktailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 3rem;
  text-align: center;

  & h4 {
    background: var(--text-color);
    color: var(--main-color);
    font-size: 1.2rem;
    font-weight: 700;
    width: fit-content;
    padding: 0 .5rem;
    margin: 2rem 0 1rem;

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
  max-width: 32rem;
  text-align: left;
  
  @media (max-width: 700px) {
    max-width: 26rem;
  }
`;

export const Ingredients = styled.div``;

export const Garnish = styled(Ingredients)``;

export const Notes = styled(Garnish)``;

export const Preparation = styled.div`
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    text-decoration: underline;
  }

  & h5 {
    font-size: .9rem;
    text-align: right;
    padding-top: .5rem;
  }
`;
