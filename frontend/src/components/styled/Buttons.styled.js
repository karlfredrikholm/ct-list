import styled from 'styled-components/macro';

export const MenuBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.7rem;

  background: none;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  & svg {
    color: mediumpurple;
    width: 2.8rem;
    height: 2.8rem;
    background: white;
    border-radius: 50%;
    padding: 0.3rem;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  margin-top: 2rem;
  padding: .5rem 1rem;
  width: 5rem;
`;
