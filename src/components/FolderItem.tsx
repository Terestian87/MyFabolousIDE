import React, { useState } from "react";
import styled from "styled-components";
import { StyledWrapper } from './App'
import { StyledLabel } from "./App";
import { FaFolder, FaFolderOpen } from 'react-icons/fa'


const FolderItemContainer = styled("div")`
  margin: 5px 0 0 20px;
  cursor: pointer;
  padding-left:5px;
`;

type Props = {
  isOpen: boolean;
  name: string;
  children: React.ReactNode;
};

const FolderItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleclick = (e: any) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <FolderItemContainer >
      <StyledWrapper  onClick={handleclick}>
      {isOpen ? <FaFolderOpen /> : <FaFolder />}
      <StyledLabel>{props.name}</StyledLabel>
      </StyledWrapper>
      {isOpen && 
        <>{props.children}</>}
    </FolderItemContainer>
  );
};

export default FolderItem;
