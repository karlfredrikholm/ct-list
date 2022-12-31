import styled from 'styled-components';

export const LoadingAnimation = styled.div`
  background: var(--text-color);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  animation: load .5s linear infinite alternate;
  
  & svg {
    color: var(--main-color);
    width: 4.3rem;
    height: 4.3rem;
    padding: .6rem 0 0 .6rem;
  }

  & p {
    margin-top: .25rem;
    text-transform: uppercase;
  }

  @keyframes load {
    from {
      transform: rotate(-30deg);
    }
    to {
      transform: rotate(30deg);
    }
  }
`