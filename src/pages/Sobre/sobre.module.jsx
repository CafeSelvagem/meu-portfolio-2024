import styled from "styled-components";

export const StyledSobre = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .bio {
    display: flex;
    align-items: center;
    gap: 3rem;
    text-align: justify;
    margin-bottom: 1.5rem;

    .avatar{
      border-radius: 50%;
      filter: drop-shadow(0px 14px 28px rgba(0, 0, 0, 0.25));

    }
    span {
      color: var(--red);
      font-weight: bold;
    }

    & .texto {
      width: 60vw;
      h2 {
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
        width: 95%;
      }
      strong {
        color: var(--color-secondary);
        font-weight: bold;
      }
    }
  }

  & .techs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 70%;

    & .cardicones {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .icone {
        font-size: 3rem;
        color: var(--red);
        cursor: pointer;

        &:hover {
          color: var(--color-secondary);
          transition: all .5s ease-in-out;
        }
      }
    }
  }
`;
