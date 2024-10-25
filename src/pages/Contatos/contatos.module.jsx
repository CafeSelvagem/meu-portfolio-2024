import styled from "styled-components";

export const StyledContato = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem; 
  
  & h3 {
    color: var(--color-accent);
    font-weight: bold;
    font-size: 1.5rem;
  }

  & p {
    color: var(--color-tertiary);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  padding-block: 1.5rem;

  & .icone {
    font-size: 3rem;
    color: var(--red);
    cursor: pointer;

    &:hover {
      color: var(--color-secondary);
      transition: all .3s ease-in-out
    }
  }
`;
