import styled from 'styled-components';
import { MenuToggler } from './Nav.styled';

export const LoadingAnimation = styled(MenuToggler)`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 15rem;
 animation: load 1s linear infinite alternate;

  & svg {
    background: RosyBrown;
  }

  & p {
    color: RosyBrown; // var(--text-color);
    font-weight: 700;
    letter-spacing: .1rem;
    text-transform: uppercase;
    padding: .08rem 0 0 .17rem;
  }
  
  @keyframes load {
    from {
      transform: rotate(360deg);
      margin-right: 18rem;
    }
    to {
      transform: rotate(0deg);
      margin-left: 15rem;
    }
  }
`