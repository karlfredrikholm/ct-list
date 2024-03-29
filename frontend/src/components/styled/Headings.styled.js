import styled from 'styled-components';

/* App heading */
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

/* Recipe Name Heading */
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

/* Recipe Headings */
export const H3 = styled.h3`
  color: var(--text-color); //RosyBrown;
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  padding-bottom: .25rem;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;