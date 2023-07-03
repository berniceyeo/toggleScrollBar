import { ReactNode } from "react";

interface ProtectedProps {
  children: ReactNode;
}

export const Button = (props: ProtectedProps) => {
  return <button>{props.children}</button>;
};
