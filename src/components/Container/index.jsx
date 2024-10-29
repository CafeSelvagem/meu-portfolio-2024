import { StyledContainer } from "./container.module.jsx";
import { Analytics } from "@vercel/analytics/react"
// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <StyledContainer>
      {children}
      <Analytics/>
    </StyledContainer>

  );
}

export default Container;