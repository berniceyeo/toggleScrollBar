import styled from "styled-components";

export const Header = styled.div`
  font-weight: 100;
  font-size: 30px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SubItemsProps {
  $size: string;
  $marginBottom: string;
}

export const SubItems = styled.div<SubItemsProps>`
  font-size: ${(props) => props.$size};
  margin-bottom: ${(props) => props.$marginBottom};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  font-weight: 100;
  margin: auto;
  margin-top: 80px;
  width: 60%;
  flex-direction: column;
  color: white;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const TableSection = styled.div<{ $span: number }>`
  grid-column: ${(props) => `span ${props.$span}`};
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  row-gap: 5px;
`;
