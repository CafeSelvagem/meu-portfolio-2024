import styled from "styled-components";

export const StylesHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 100%;
  background-color: var(--color-primary);
  color: #f1f1f1;

  & span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & a {
    padding: 1rem;
    text-decoration: none;
    font-size: 1.125rem;
    color: #f1f1f1;
    transition: color 0.3s ease;
    &:hover {
      color: var(--color-accent);
    }
  }
`;
