import React from "react";
import { StyledButton } from "./styled";

function Button({ children, link, minWidth, className, onClick, ...props }) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
