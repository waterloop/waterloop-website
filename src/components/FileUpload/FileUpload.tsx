import React, { useState } from 'react';
import styled from 'styled-components';

const FileUpload = ({
  name,
  multiple,
  handleFileUpload,
}: {
  name: string;
  multiple: boolean;
  handleFileUpload: (value:File) => void;
}) => {
  const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
  `;

  const Label = styled.label`
    display: grid;
    padding: 20px 10px;
    cursor: pointer;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    width: 100%;
    border: 1.2px dashed #c4c4c4;
    box-sizing: border-box;
    border-radius: 6px;
    background: #ffffff;
  `;
  let [fileName, setFileName] = useState("")

  return (
    <div>
      <Label htmlFor="file">
        <span>
          <svg
            width="24"
            height="33"
            viewBox="0 0 24 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.08325 32.75H14.9166V15.25H23.6666L11.9999 0.666687L0.333252 15.25H9.08325V32.75Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
        </span>
        <span>
          <svg
            width="60"
            height="27"
            viewBox="0 0 60 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.3333 20.5H6.66659V0.083313H0.833252V20.5C0.833252 23.7171 3.4495 26.3333 6.66659 26.3333H53.3333C56.5503 26.3333 59.1666 23.7171 59.1666 20.5V0.083313H53.3333V20.5Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
        </span>
        <p style={{ margin: 0 }}>
          <strong>Choose a file</strong> or drag it here.
        </p>
      </Label>
      <FileInput
        id="file"
        type="file"
        name={name}
        accept={'application/pdf'}
        onChange={(e) => {
            if(e.target.files != null){
              // update file in state
              handleFileUpload(e.target.files[0])
              setFileName(e.target.files[0].name)
            }
          }
        }

        multiple={multiple}
      />
      {fileName && <p>{fileName}</p>}
    </div>
  );
};

export default FileUpload;
