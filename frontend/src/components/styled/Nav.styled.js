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
  top: 2.7rem;
  right: 1rem;

  background: none;
  border: none;
  width: 3rem;
  height: 3rem;

  & svg {
    color: var(--main-color);
    width: 2.8rem;
    height: 2.8rem;
    background: var(--text-color);
    border-radius: 50%;
    padding: 0.4rem;
    transition: .3s ease;

    &:hover {
      background: var(--main-color);
      border: 1px solid var(--text-color);
      color: var(--text-color);
    }
  }
`;

export default Nav;
