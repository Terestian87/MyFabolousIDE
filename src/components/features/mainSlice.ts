import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

type MockDataType = {
    name: string;
    files?: MockDataType[]
  };

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

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: mockData,
    reducers: {
    },
})

export default mainSlice.reducer

