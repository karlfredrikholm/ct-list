import styled from 'styled-components/macro';

export const MenuBtn = styled.button`
  position: absolute;
  bottom: 2rem;
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

/* Add Form */
export const SubmitBtn = styled.button`
  border: none;
  margin-top: 2rem;
  padding: .5rem 1rem;
  width: 5rem;
`;

export const ListItemBtn = styled.button`
  display: flex;
  justify-content: space-between;
  background: pink;
  border: none;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  padding: .5rem .7rem;
  width: 100%;
`

export const FilterBtn = styled.button`
  width: fit-content;
`