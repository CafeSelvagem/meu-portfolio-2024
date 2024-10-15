import styled from "styled-components";


export  const StyledFooter = styled.footer`
    & p{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: var(--color-primary);
    color: var(--white);
    font-weight: bold;
    font-size: 1.125rem
    }
    & span{
        color: var(--color-accent);
    }
`