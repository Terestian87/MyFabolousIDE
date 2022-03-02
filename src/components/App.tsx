import React from "react";
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

const StyledContainer = styled("div")``;
const StyledExplorer = styled("div")``;
const StyledContentBox = styled("div")``;

// const isFolder = !!mockData.files;

const generateItemRecursively = (data: MockDataType) => {
    if (data.files) {
      return (
        <FolderItem name={data.name}>
          {data.files.map((elm) => generateItemRecursively(elm))}
        </FolderItem>
      )
    } 
    return <FileItem name={data.name}/>;
  };

const App = () => {
  return (
    <StyledContainer>
      <StyledExplorer>
        {/* @ts-ignore */}
        {generateItemRecursively(mockData)}
      </StyledExplorer>
      <StyledContentBox></StyledContentBox>
    </StyledContainer>
  );
};

export default App;
