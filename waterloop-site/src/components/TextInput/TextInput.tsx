import React, { FC } from "react";
import styled from "styled-components";

import {
  ContainerProps,
  TextInputContainerProps,
  TextInputProps,
  TextAreaContainerProps,
} from "./interfaces";

const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : "500px")};
`;

// TODO: Only change to red when user clicks away from the text box.
const TextInputContainer = styled.input<TextInputContainerProps>`
  border: ${({ error }) => (error ? "1px solid #FF0000" : "1px solid #c4c4c4")};
  border-radius: 10px;
  height: 47px;
  width: 100%;
  background-color: #ffffff;
  font: "500 14px IBM Plex Sans";

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font: ${({ theme }) => theme.fonts.medium18};
    line-height: 47px;
    color: ${({ theme }) => theme.colours.greys.grey2};
  }
`;

const TextAreaContainer = styled.textarea`
  border: ${({ theme, error }) => error ? theme.borders.solidRed : theme.borders.solidGrey1};
  border-radius: 10px;
  width: 100%;
  min-width: 500px;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colours.white};
  font: ${({ theme }) => theme.fonts.medium14};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font: ${({ theme }) => theme.fonts.medium18};
    color: ${({ theme }) => theme.colours.greys.grey2};
  }
`;

// const TARichContainer = styled.div`
//   .wrapper-class {
//     width: 100%;
//     min-width: 550px;
//     max-width: 1200px;
//     font: ${({ theme }) => theme.fonts.medium14};

//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     ::placeholder,
//     ::-webkit-input-placeholder {
//       font: ${({ theme }) => theme.fonts.medium18};
//       color: ${({ theme }) => theme.colours.greys.grey2};
//     }
//   }

//   .editor-class {
//     border: ${({ theme }) => theme.borders.solidGrey1};
//     border-radius: 10px;
//     width: 100%;
//     min-width: 500px;
//     max-width: 1200px;
//     min-height: 200px;

//     padding-left: 1rem;
//     padding-right: 1rem;

//     background-color: ${({ theme }) => theme.colours.white};
//     font: ${({ theme }) => theme.fonts.medium14};

//   }

//   .toolbar-class {
//     max-width:500px;
//   }

//   .toolbar-class a {
//     color: #000;
//   }

// `

/* 
To implement the richText support in textinput:
- need to set richText to true for the textinput component,
- import getRichText and submitRichText (from rich text utils) into respective hook for first getting the info from database and saving it 
https://docs.google.com/document/d/1_C9twf66rjGkE7HPAsEid-_ZddWcbDoLNw9e2EEkAA8/edit?usp=sharing 
*/

const RequiredText = styled.p`
  color: ${({ theme }) => theme.colours.reds.red1};
  font: ${({ theme }) => theme.fonts.medium14};
`;

const TextInput = ({
  className /* Allows for external styles to be applied to the component
                using the styled components library
                className prop needs to be passed to the parent JSX element */,
  multiLine,
//   richText, 
  value /* The current value of the input */,
  rows=10,
  onChange /* Callback to be called each time that the user changes the input */,
  placeholder = 'Place Holder Text',
  width,
  required = false,  /* Marks the input as required from the user. */
  requiredText = "This field cannot be blank.",
  isError = false, /* Marks an error state for the component. Also marks the input 
                      as required from the user. */
}) => {
  return (
    <Container width={width} className={className}>
      {multiLine ?
          <TextAreaContainer
            error={isError}
            rows={rows}
            cols="60"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          : (
          <TextInputContainer
            error={isError}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
      )}
    </Container>
  )
};

export default TextInput;
