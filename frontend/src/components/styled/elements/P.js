import styled from 'styled-components';

export const P = styled.p`
  font-family: ${(props) => (props.notes ? 'var(--sub-font)' : 'var(--main-font)')};
  font-size: ${(props) => (props.small ? '.85rem' : '1rem')}; 
  font-style: ${(props) => (props.notes && 'italic')};
  line-height: 1.5rem;
`