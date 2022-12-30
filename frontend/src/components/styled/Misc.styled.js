import styled from 'styled-components';

export const A = styled.a`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: underline;
  width: fit-content;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

/* Divider */
export const HR = styled.hr`
  border-top: 1px solid var(--text-color);
  border-bottom: 1px solid var(--text-color);
  border-radius: 1px;
`;

export const P = styled.p`
  font-family: var(--main-font);
  font-size: 1rem;
  letter-spacing: 0.05rem;
  line-height: 1.5rem;

  @media (max-width: 750px) {
    font-size: 0.85rem;
    line-height: 1.25rem;
  }
`;

/* Cocktail Name in List */
export const NameP = styled.p`
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

/* Category in List */
export const CatP = styled.p`
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

/* Login/add success/error messages */
export const Mess = styled.p`
  color: var(--text-color);
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;
