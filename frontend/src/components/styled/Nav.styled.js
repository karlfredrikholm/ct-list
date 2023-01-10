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
    padding-bottom: 2rem;

    background: var(--text-color);
    list-style-type: none;
    min-height: 100vh;
    width: 15rem;

    @media (max-width: 800px) {
      width: 100vw;
      gap: 2.5rem;
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

    @media (min-width: 800px) {
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
`;

export const MenuToggler = styled.button`
  position: absolute;
  top: 2.75rem;
  right: 4.8rem;

  background: none;
  border: none;

  @media (max-width: 800px) {
    top: 33rem;
    right: 2rem;
  }

  & svg {
    background: RosyBrown; //var(--text-color);
    color: var(--main-color);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    padding: 0.5rem;
    transition: .3s ease;

    @media (min-width: 850px) {
      &:hover {
        transform: rotate(15deg);
      }
    }

  }
`;

export default Nav;
