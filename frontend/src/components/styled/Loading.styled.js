import styled from 'styled-components';
import { MenuToggler } from './Nav.styled';

export const LoadingAnimation = styled(MenuToggler)`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 10rem;
 animation: load .5s linear infinite alternate;

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
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  }
`