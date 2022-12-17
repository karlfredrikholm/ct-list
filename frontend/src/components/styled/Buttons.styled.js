import styled from 'styled-components/macro';

export const MenuBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;

    background: none;
    border: none;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    & div {
        background: black;
        width: 2rem;
        height: .3rem;
        border-radius: 5px;
    }
`