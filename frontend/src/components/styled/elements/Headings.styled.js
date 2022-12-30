import styled from 'styled-components';

/* List heading */
export const H1 = styled.h1`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;

/* Recipe Cocktail Name */
export const H2 = styled.h2`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  @media (max-width: 750px) {
    font-size: 1.75rem;
  }
`;

/* List Cocktail Name */
export const H3 = styled.h3`
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: ${(props) => (props.recipe ? '800' : '600')};
  letter-spacing: 0.05rem;
  text-transform: ${(props) => props.recipe && 'uppercase'};
  padding-bottom: ${(props) => props.padd && '.25rem'};

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

/* List Category Name */
export const H4 = styled.h4`
  font-family: var(--sub-font);
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0.05rem;
  text-transform: capitalize;

  @media (max-width: 750px) {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;

/* Login heading & About heading */
export const H5 = styled.h5`
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: .05rem;
  text-transform: capitalize;

  @media (max-width: 750px) {
    font-size: 1.25rem;
  }
`;

/* Login error */
export const H6 = styled.h6`
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;