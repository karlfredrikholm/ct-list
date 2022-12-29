import styled from 'styled-components';

export const P = styled.p`
  font-family: var(--main-font);
  font-size: ${(props) => (props.small ? '.8rem' : '1rem')}; 
`