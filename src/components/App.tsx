import React from "react";
import FileItem from "./FileItem";
import FolderItem from "./FolderItem";

import styled from "styled-components";

type MockDataType = {
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

const generateItemRecurively = (data: MockDataType) => {
  Object.keys(data).map((element) => {
    if (element === 'name'){
      return <FileItem />
    } else 
    // @ts-ignore
    <FolderItem/> && generateItemRecurively(data[element])
    // @ts-ignore
  })
  // let key: keyof MockDataType;
  // for (key in data) {
  //   if (typeof data[key] == "string") {
  //     console.log("a");
  //     return <FileItem />;
  //   } else {
  //     console.log("b");
  //     return <FolderItem />;
  //   }
  // }
};
const App = () => {
  return (
    <StyledContainer>
      <StyledExplorer>
        {/* @ts-ignore */}
        {generateItemRecurively(mockData)}
      </StyledExplorer>
      <StyledContentBox></StyledContentBox>
    </StyledContainer>
  );
};

export default App;
