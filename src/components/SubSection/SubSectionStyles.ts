import styled from "styled-components";

interface SubItemsProps {
  $size: string;
  $marginBottom: string;
}

export const SubItems = styled.div<SubItemsProps>`
  font-size: ${(props) => props.$size};
  margin-bottom: ${(props) => props.$marginBottom};
`;

export const TableSection = styled.div<{ $span: number }>`
  grid-column: ${(props) => `span ${props.$span}`};
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  row-gap: 5px;
`;
