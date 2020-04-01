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

type MyProps = {role: string, technicalQ: string, termList: [string, string, string, string, string], ourEmail: string};
type MyState =  {
      fullName:  string,
      email: string,
      program: string,
      term: string,
      applicationTerm: string,
      termType: string,
      whyJoin: string,
      technicalAns: string,
      termCheckedArray: [boolean, boolean, boolean, boolean, boolean]
      termTypeCheckedArray: [boolean, boolean, boolean]
  }

class Form extends React.Component<MyProps, MyState> {
  constructor(props: MyProps){
    super(props);
    this.state = {
      fullName: "",
      email: "",
      program: "",
      term: "",
      applicationTerm: "",
      termType: "",
      whyJoin: "",
      technicalAns: "",
      termCheckedArray: [false, false, false, false, false],
      termTypeCheckedArray: [false, false, false]
    };

  }

  handleChange(event: React.FormEvent<HTMLInputElement>){
    if (event.currentTarget.name == "fullName"){
      this.setState({fullName: event.currentTarget.value});
    }
    else if (event.currentTarget.name =="email"){
      this.setState({email: event.currentTarget.value});
    }
    else if (event.currentTarget.name =="program"){
      this.setState({program: event.currentTarget.value});
    }
    else if (event.currentTarget.name =="term"){
      this.setState({term: event.currentTarget.value});
    }
    else if (event.currentTarget.name =="applicationTerm" && event.currentTarget.id == "0"){
      this.setState({termCheckedArray: [true, false, false, false, false]});
      this.setState({applicationTerm: this.props.termList[0]});
    }
    else if (event.currentTarget.name =="applicationTerm" && event.currentTarget.id == "1"){
      this.setState({termCheckedArray: [false, true, false, false, false]});
      this.setState({applicationTerm: this.props.termList[1]});
    }
    else if (event.currentTarget.name =="applicationTerm" && event.currentTarget.id == "2"){
      this.setState({termCheckedArray: [false, false, true, false, false]});
      this.setState({applicationTerm: this.props.termList[2]});
    }
    else if (event.currentTarget.name =="applicationTerm" && event.currentTarget.id == "3"){
      this.setState({termCheckedArray: [false, false, false, true, false]});
      this.setState({applicationTerm: this.props.termList[3]});
    }
    else if (event.currentTarget.name =="applicationTerm" && event.currentTarget.id == "4"){
      this.setState({termCheckedArray: [false, false, false, false, true]});
      this.setState({applicationTerm: this.props.termList[4]});
    }
    else if (event.currentTarget.name =="termType" && event.currentTarget.id == "a"){
      this.setState({termTypeCheckedArray: [true, false, false]});
      this.setState({termType: "School Term"});
    }
    else if (event.currentTarget.name =="termType" && event.currentTarget.id == "b"){
      this.setState({termTypeCheckedArray: [false, true, false]});
      this.setState({termType: "Work/Off Term in Waterloo"});
    }
    else if (event.currentTarget.name =="termType" && event.currentTarget.id == "c"){
      this.setState({termTypeCheckedArray: [false, false, true]});
      this.setState({termType: "Not in Waterloo"});
    }
    return;
  }

  handleTextAreaChange(event: React.FormEvent<HTMLTextAreaElement>){
    if (event.currentTarget.name =="whyJoin"){
            this.setState({whyJoin: event.currentTarget.value});
    }
    else if (event.currentTarget.name =="technicalAns"){
            this.setState({technicalAns: event.currentTarget.value});
    }
    return;
  }

  //submits form
  handleSubmit(event: React.FormEvent<HTMLFormElement>){
    alert(this.state.fullName);
    alert(this.state.email);
    alert(this.state.program);
    alert(this.state.term);
    alert(this.state.applicationTerm);
    alert(this.state.termType);
    alert(this.state.whyJoin);
    alert(this.state.technicalAns);

    return;
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <Block>
          <InputForm onSubmit = {this.handleSubmit.bind(this)}>
            <Header>Applying for {this.props.role.toUpperCase()}</Header>
            <ShortInput type="text" name = "fullName" placeholder="Full Name" onChange = {this.handleChange.bind(this)} required/>
            <ShortInput type="text" name = "email" placeholder="Email" onChange = {this.handleChange.bind(this)} required/>
            <ShortInput type="text" name = "program" placeholder="Program" onChange = {this.handleChange.bind(this)} required/>
            <ShortInput type="text" name = "term" placeholder="Term (ex. 2A)" onChange = {this.handleChange.bind(this)} required/>

            <label style = {radioStyle}>
              <input type = "radio" checked = {this.state.termCheckedArray[0]} id = "0" onChange = {this.handleChange.bind(this)} name = "applicationTerm" required/>
            {this.props.termList[0]}</label>
            <label style = {radioStyle} >
              <input type = "radio" checked = {this.state.termCheckedArray[1]} id = "1" onChange = {this.handleChange.bind(this)} name = "applicationTerm" required/>
              {this.props.termList[1]}</label>
            <label style = {radioStyle} >
              <input type = "radio" checked = {this.state.termCheckedArray[2]} id = "2" onChange = {this.handleChange.bind(this)} name = "applicationTerm" required/>
            {this.props.termList[2]}</label>
            <label style = {radioStyle} >
              <input type = "radio" checked = {this.state.termCheckedArray[3]} id = "3" onChange = {this.handleChange.bind(this)} name = "applicationTerm" required/>
            {this.props.termList[3]}</label>
            <label style = {radioStyle} >
              <input type = "radio" checked = {this.state.termCheckedArray[4]} id = "4" onChange = {this.handleChange.bind(this)} name = "applicationTerm" required/>
            {this.props.termList[4]}</label>

            <hr/>

            <label style = {radioStyle}>
              <input type = "radio" checked = {this.state.termTypeCheckedArray[0]} id = "a" onChange = {this.handleChange.bind(this)} name = "termType" required/>
            School Term</label>
            <label style = {radioStyle}>
              <input type = "radio" checked = {this.state.termTypeCheckedArray[1]} id = "b" onChange = {this.handleChange.bind(this)} name = "termType" required/>
            Work/Off Term in Waterloo</label>
            <label style = {radioStyle}>
              <input type = "radio" checked = {this.state.termTypeCheckedArray[2]} id = "c" onChange = {this.handleChange.bind(this)} name = "termType" required/>
            Not in Waterloo</label>

            <LongInput placeholder="Why do you want to join the team?" onChange = {this.handleTextAreaChange.bind(this)} name = "whyJoin" required/>
            <LongInput placeholder={this.props.technicalQ} onChange = {this.handleTextAreaChange.bind(this)} name = "technicalAns" required/>
            <button type="submit" style = {SubmitBtnStyle}><b>Submit</b></button>
          </InputForm>
        </Block>
      </div>
    );
  }
}

export default Form;
