import React from "react"
import styled from "styled-components"

const Block = styled.div`
  padding: 1%;
  width: 35%;
  height: 100%;
  border-style: solid;
  display: inline-block;
  border-width: 0.15vw;
  margin-left: 9.1%;
  margin-right: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  @media (max-width: 750px){
    display: inline;
    border-style: none;
    border-width: none;

  }
`;

const InputForm = styled.form`

`;

type MyProps = {role: string, technicalQ: string};

class Form extends React.Component<MyProps> {

  render() {
    return (
      <Block>
        <InputForm>
        </InputForm>
      </Block>
    );
  }
}

export default Form;
