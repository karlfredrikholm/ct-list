import styled from 'styled-components/macro';

const Nav = styled.nav`
  position: fixed;
  right: 0;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background: mediumpurple;
    list-style-type: none;
    margin-right: -10rem;
    min-height: 100vh;
    width: 10rem;
  }

  @keyframes menuInAnimation {
    0% {
      margin-right: -10rem;
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
      margin-right: -10rem;
    }
  }
`;

export default Nav;
