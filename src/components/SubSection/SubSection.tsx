import React from "react";
import { SubItems } from "./SubSectionStyles";

interface ProtectedProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export const SubSection = (props: ProtectedProps) => {
  return (
    <>
      <SubItems $size={"22px"} $marginBottom={"10px"}>
        {props.title}
      </SubItems>

      <SubItems $size={"16px"} $marginBottom={"50px"}>
        {props.description}
      </SubItems>
    </>
  );
};
