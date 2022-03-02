import React, { useState } from "react";
import styled from "styled-components";
import { StyledLabel } from "./App";

const FolderItemContainer = styled("div")`
  margin-left: 20px;
  border: 1px solid grey;
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
  return (
    <FolderItemContainer>
      <StyledLabel>{props.name} (Folder)</StyledLabel>
      {props.children}
    </FolderItemContainer>
  );
};

export default FolderItem;
