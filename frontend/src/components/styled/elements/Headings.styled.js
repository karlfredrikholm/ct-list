import styled from 'styled-components';

export const H1 = styled.h1`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: .1rem;
  text-transform: uppercase;

  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: .1rem;
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: ${(props) => props.upper && 'uppercase'};
  
  @media (max-width: 750px) {
    font-size: 1rem;
  }
  `;

export const H4 = styled.h4`
  font-family: ${(props) => (props.recipe ? 'var(--main-font)' : 'var(--sub-font)')};
  font-size: 1rem;
  font-style: ${(props) => (props.recipe ? '' : 'italic')};
  font-weight: 500;
  letter-spacing: .05rem;
  margin-left: ${(props) => (props.recipe ? '' : '1rem')};
  text-transform: capitalize;
  text-transform: ${(props) => props.upper && 'uppercase'};

  @media (max-width: 750px) {
    font-size: .85rem;
    font-weight: 400;
  }
`;

export const H5 = styled.h5`
  font-size: .8rem;
`;

export const H6 = styled.h6``;
