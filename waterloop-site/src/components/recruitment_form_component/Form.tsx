import React from "react"
import styled from "styled-components"

const Block = styled.div`
  padding: 1%;
  height: 100%;
  width: 50%;
  border-style: solid;
  display: inline-block;
  margin-bottom: 2%;
  @media (max-width: 750px){

  }
`;

const Header = styled.h2`
  font-size: 170%;
  margin-bottom: 0px !important;
  text-align: center;
`;

const ShortInput = styled.input`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 42%;
`;

const LongInput = styled.textarea`
  text-align: left;
  display: inline-block;
  margin: 3%;
  width: 90.7%;
  overflow: scroll;
`;

const SubmitBtnStyle = {
  backgroundColor: '#FED138',
  fontSize: 'large',
  fontFamily: 'IBM Plex Sans',
}

const radioStyle = {
  marginLeft: '5%',
  marginRight: '5%',
}

const InputForm = styled.form`
`;

type MyProps = {role: string, technicalQ: string};

class Form extends React.Component<MyProps> {

  //submits form
  onClick(){
    return;
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <Block>
          <InputForm>
            <Header>Applying for {this.props.role.toUpperCase()}</Header>
            <ShortInput type="text" placeholder="Full Name"/>
            <ShortInput type="text" placeholder="Email"/>
            <ShortInput type="text" placeholder="Program"/>
            <ShortInput type="text" placeholder="Term (ex. 2A)"/>

            <label style = {radioStyle}>
              <input type = "radio" name = "ApplicationTerm"/>
            F19</label>
            <label style = {radioStyle} >
              <input type = "radio" name = "ApplicationTerm"/>
            W20</label>
            <label style = {radioStyle} >
              <input type = "radio" name = "ApplicationTerm"/>
            S20</label>
            <label style = {radioStyle} >
              <input type = "radio" name = "ApplicationTerm"/>
            F20</label>
            <label style = {radioStyle} >
              <input type = "radio" name = "ApplicationTerm"/>
            W21</label>

            <hr/>

            <label style = {radioStyle}>
              <input type = "radio" name = "TermType"/>
            School Term</label>
            <label style = {radioStyle}>
              <input type = "radio" name = "TermType"/>
            Work/Off Term in Waterloo</label>
            <label style = {radioStyle}>
              <input type = "radio" name = "TermType"/>
            Not in Waterloo</label>

            <LongInput placeholder="Why do you want to join the team?"/>
            <LongInput placeholder={this.props.technicalQ}/>
            <button type="submit" style = {SubmitBtnStyle}><b>Submit</b></button>
          </InputForm>
        </Block>
      </div>
    );
  }
}

export default Form;
