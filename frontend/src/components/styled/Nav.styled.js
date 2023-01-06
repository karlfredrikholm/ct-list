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
    min-height: 100vh;
    width: 15rem;

    @media (max-width: 700px) {
      width: 100vw;
    }

    & a {
      color: var(--main-color);
      font-family: var(--main-font);
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 0.05rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.3s ease;
    }

    @media (min-width: 850px) {
      & a:hover {
        letter-spacing: 0.2rem;
        font-weight: 900;
      }
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
  top: 2.75rem;
  right: 4.8rem;

  background: none;
  border: none;

  @media (max-width: 800px) {
    top: 38rem;
    right: 1.5rem;
  }

  & svg {
    background: var(--text-color);
    color: var(--main-color);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    padding: 0.5rem;
    transition: .3s ease;

    @media (min-width: 850px) {
      &:hover {
        transform: rotate(-25deg);
      }
    }

  }
`;

export default Nav;
