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

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  & div {
    width: 100%;
  }

  & p {
    text-align: center;
    width: 100%;
    max-width: 27rem;

    &:nth-child(6) {
      padding-bottom: .25rem;
    }
  }

  & a {
    font-size: 1rem;

    @media (max-width: 750px) {
    font-size: .85rem;
  }
  }
`

export const LoginWrapper = styled(AboutWrapper)`
  & form {
    align-items: flex-end;
  }
`

export const AddWrapper = styled(LoginWrapper)`
`