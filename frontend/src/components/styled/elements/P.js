import styled from 'styled-components';

export const P = styled.p`
  font-family: var(--main-font);
  font-size: ${(props) => (props.small ? '.85rem' : '1rem')}; 
  line-height: 1.5rem;
`