import styled from "styled-components";

export const Projeto = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  & h2 {
    text-align: center;
  }
  & .list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-block: 1rem;
  }
`;