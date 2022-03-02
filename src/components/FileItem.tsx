import React from "react";
import styled from "styled-components";
import { StyledWrapper } from './App'
import { StyledLabel } from "./App";
import { FaFileAlt } from 'react-icons/fa'


const FileItemcontainer = styled("div")`
  margin: 5px 0 0 10px;
`;
type Props = {
  name: string;
};

const FileItem = (props: Props) => {
  return (
    <FileItemcontainer>
      <StyledWrapper>
        <FaFileAlt />
        <StyledLabel>{props.name}</StyledLabel>
      </StyledWrapper>
    </FileItemcontainer>
  );
};

export default FileItem;
