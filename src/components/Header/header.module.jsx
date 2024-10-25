import styled from "styled-components";

export const StylesHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  /* position: fixed; */

  & span {
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      color: var(--color-accent);
      transition: all .5s ease-in-out
    }
  }

  & a {
    padding: 1rem;
    text-decoration: none;
    font-size: 1.125rem;
    color: var(--white);
    transition: color 0.3s ease;
    &:hover {
      color: var(--color-accent);
      transition: all .5s ease-in-out
    }
  }
`;
