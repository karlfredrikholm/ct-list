import styled from 'styled-components';

export const H1 = styled.h1`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: .1rem;
  text-transform: uppercase;
`;

export const H2 = styled.h2`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: .02rem;
`;

export const H3 = styled.h3`
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }
`;

export const H4 = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  letter-spacing: .05rem;
  text-transform: capitalize;
`;

export const H5 = styled.h5``;

export const H6 = styled.h6``;
