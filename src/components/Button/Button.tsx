import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface ProtectedProps {
  children: ReactNode;
  $color?: string;
  handleClick: React.MouseEventHandler;
  $disabled: boolean;
}

const StyledButton = styled.button<{ $color?: string }>`
  background: ${(props) => (props.$color ? props.$color : "gray")};
  padding: 8px 16px;
  color: white;
  border-radius: 5px;
  border-width: 0;
  font-family: "Open sans", sans-serif;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: rgba(4, 157, 210, 0.5);
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Button = (props: ProtectedProps) => {
  return (
    <StyledButton
      $color={props.$color}
      onClick={props.handleClick}
      disabled={props.$disabled}
    >
      {props.children}
    </StyledButton>
  );
};
