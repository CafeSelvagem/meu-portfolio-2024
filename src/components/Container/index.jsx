import { StyledContainer } from "./container.module.jsx";

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;