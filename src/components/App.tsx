import React, { useState } from "react";
import FileItem from "./FileItem";
import FolderItem from "./FolderItem";

import styled from "styled-components";

export type MockDataType = {
  name: string;
  files?: MockDataType[];
};

// #region mockData
const mockData: MockDataType = {
  name: "my-project",
  files: [
    {
      name: "public",
      files: [
        {
          name: "index.html",
        },
      ],
    },
    {
      name: "src",
      files: [
        {
          name: "components",
          files: [
            {
              name: "Button",
              files: [
                {
                  name: "index.jsx",
                },
                {
                  name: "directory.module.scss",
                },
              ],
            },
            {
              name: "Badge",
              files: [
                {
                  name: "index.jsx",
                },
                {
                  name: "file.module.scss",
                },
              ],
            },
            {
              name: "Header",
              files: [
                {
                  name: "index.jsx",
                },
              ],
            },
          ],
        },
        {
          name: "utils",
          files: [
            {
              name: "dateUtil.js",
            },
            {
              name: "numberUtil.js",
            },
          ],
        },
      ],
    },
    {
      name: "index.js",
    },
    {
      name: "App.js",
    },
    {
      name: "styles.css",
    },
    {
      name: "package.json",
    },
  ],
};
// #endregion

export const StyledLabel = styled("div")``;
const StyledContainer = styled("div")`
  border: 1px solid black;
  display: flex;
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

const generateItemRecursively = (data: MockDataType) => {
  if (data.files) {
    return (
      <FolderItem name={data.name} isOpen={true}>
        {data.files.map((elm) => generateItemRecursively(elm))}
      </FolderItem>
    );
  }
  return <FileItem name={data.name} />;
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
