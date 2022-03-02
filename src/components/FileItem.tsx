import React from "react";
import styled from "styled-components";

const FileItemcontainer = styled("div")`
  margin-left: 5px;
`;
type Props = {
  name: string;
};

const FileItem = (props: Props) => {
  return (
    <FileItemcontainer>
      <div>{props.name}</div>
    </FileItemcontainer>
  );
};

export default FileItem;
