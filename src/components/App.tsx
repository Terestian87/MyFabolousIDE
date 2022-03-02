import React from "react";
import styled from "styled-components";

import FileItem from "./FileItem";
import FolderItem from "./FolderItem";
import mockData from '../mockData.json'

export type MockDataType = {
  name: string;
  files?: MockDataType[];
};

// #region Styled components
export const StyledLabel = styled("div")`
margin-left: 5px;
`;

const StyledContainer = styled("div")`
  border: 1px solid black;
  display: flex;
  margin-left:10px;
`;

const StyledExplorer = styled("div")`
  margin: 10px;
  padding: 5px;
  border: 2px solid purple;
  width: 30%;
`;

const StyledContentBox = styled("div")`
  margin: 10px;
  padding: 5px;
  border: 2px solid purple;
  width: 75%;
`;

export const StyledWrapper = styled('div')`
display:flex;

`
// #endregion

const generateItemRecursively = (data: MockDataType, key?: string) => {
  if (data.files) {
    return (
      <FolderItem name={data.name} isOpen={true} key={data.name}>
        {data.files.map((elm) => generateItemRecursively(elm, key))}
      </FolderItem>
    );
  }
  return <FileItem name={data.name} key={data.name}/>;
};

const App = () => {
  return (
    <StyledContainer>
      <StyledExplorer>{generateItemRecursively(mockData)}</StyledExplorer>
      <StyledContentBox></StyledContentBox>
    </StyledContainer>
  );
};

export default App;
