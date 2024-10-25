import styled from "styled-components";

export const StyledCard = styled.section`
  width: 18.75rem; // 300px / 16px: ('1rem') = 18,75
  height: 18.75rem;
  background-color: var(--soft-white);
  color: var(--gray);
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px #22222270;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
  }

  & p {
    color: #555;
    font-size: 1rem;
    color: var(--color-tertiary);
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;
export const StyledCardfooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  & .card_icones {
    display: flex;
    gap: 0.62rem;

    .icone {
      font-size: 1.5rem;
      color: var(--red);

      &:hover {
        color: var(--color-secondary);
        transition: all .3s ease-in-out
      }
    }
  }

  & .btn {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--white);
    border-radius: 15%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: var(--red);
      transition: all .5s ease-in-out
    }
  }
`;
