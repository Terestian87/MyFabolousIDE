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

const StyledContainer = styled("div")`
  border: 1px solid black;
  display: flex;
  margin-left:10px;
  align-items: stretch;
  background-color: rgb(40, 44, 52);
  color:white;
  height:95vh;
  `;

const StyledExplorer = styled("div")`
  padding: 15px;
  width: 30%;
  height:100%;
  border-right: 1px solid black;
  overflow-x: auto;
  `;

export const StyledLabel = styled("div")`
  margin-left: 5px;
  `;

const StyledContentBox = styled("div")`
  padding: 15px;
  width: 75%;
  height:100%;
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
