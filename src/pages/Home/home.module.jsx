//TODO: CSS DA PAGE HOME

import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Apresentacao = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start;
  text-align:left;

  & h2 {
    font-size: 3rem; /*48px*/
    font-weight: bold;
    margin-bottom: 2rem;
  }
  & span {
    color: var(--color-accent);
  }
  & button{
  width: 15.625rem; /* 250px */
  height: 3.125rem; /* 50px */
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: var(--color-accent);
  color: var(--white);
  
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  
  &:hover {
    background-color: var(--color-secondary);
  }
  }
`;

export const ImgHome = styled.img`
  height: 32.25rem; /* 500px / 1rem = 31.25 "1rem = 16px" */
  filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.25));
`;