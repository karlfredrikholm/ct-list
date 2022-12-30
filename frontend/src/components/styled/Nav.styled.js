import styled from 'styled-components/macro';

export const Nav = styled.nav`
  position: fixed;
  right: 0;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background: var(--text-color);
    list-style-type: none;
    margin-right: -15rem;
    min-height: 100vh;
    width: 15rem;

    /* @media (max-width: 700px) {
      width: 100vw;
    } */

    & a {
    color: var(--main-color);
    font-family: var(--main-font);
    font-size: 1.25rem;
    font-weight: 900;
    letter-spacing: .04rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  }

  @keyframes menuInAnimation {
    0% {
      margin-right: -15rem;
    }
    100% {
      margin-right: 0;
    }
  }

  @keyframes menuOutAnimation {
    0% {
      margin-right: 0;
    }
    100% {
      margin-right: -15rem;
    }
  }
`;

export const MenuToggler = styled.button`
  position: absolute;
  top: 1.30rem;
  right: 2rem;

  background: none;
  border: none;

  @media (max-width: 750px) {
    top: 40rem;
  }

  & svg {
    color: var(--main-color);
    width: 4rem;
    height: 4rem;
    background: var(--text-color);
    border-radius: 50%;
    padding: 0.4rem;

    @media (min-width: 850px) {
      &:hover {
        background: var(--main-color);
        border: 0.13rem solid var(--text-color);
        color: var(--text-color);
      }
    }
  }
`;

export default Nav;
