import React from "react";
import { EMAIL, NAME, URL } from "../../utils/constants";
import { SubItems, Table, TableSection } from "./SubSectionStyles";
import { ApiContact } from "../../models";

interface ProtectedProps {
  children?: React.ReactNode;
  title?: string;
  contact?: ApiContact;
}

export const SubSectionTable = (props: ProtectedProps) => {
  const { contact } = props;

  return (
    <>
      <SubItems $size={"22px"} $marginBottom={"10px"}>
        {props.title}
      </SubItems>
      <Table className="table">
        {contact ? (
          <>
            {contact.email && (
              <>
                <TableSection $span={1}>{EMAIL}</TableSection>
                <TableSection $span={7}>{contact?.email}</TableSection>
              </>
            )}
            {contact.name && (
              <>
                <TableSection $span={1}>{NAME}</TableSection>
                <TableSection $span={7}>{contact?.name ?? " "}</TableSection>
              </>
            )}

            {contact.url && (
              <>
                <TableSection $span={1}>{URL}</TableSection>
                <TableSection $span={7}>{contact?.url}</TableSection>
              </>
            )}
          </>
        ) : (
          "Nil"
        )}
      </Table>
    </>
  );
};
