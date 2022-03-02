import React, { useState } from "react";
import styled from "styled-components";
import { StyledLabel } from "./App";

const FolderItemContainer = styled("div")`
  margin-left: 20px;
  margin: 1px;
  padding: 3px;
  cursor: pointer;
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
    <FolderItemContainer>
      <StyledLabel onClick={handleclick}>{props.name} (Folder)</StyledLabel>
      {isOpen &&<>
      {props.children}
      </>
    }
    </FolderItemContainer>
  );
};

export default FolderItem;
