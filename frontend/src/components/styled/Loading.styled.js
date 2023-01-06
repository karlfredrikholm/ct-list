import styled from 'styled-components';
import { MenuToggler } from './Nav.styled';

export const LoadingAnimation = styled(MenuToggler)`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 10rem;
 animation: load .5s linear infinite alternate;
  
  @keyframes load {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`