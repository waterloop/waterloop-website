import React, { createRef } from 'react';
import styled from 'styled-components';
import {Button} from 'components/button/';

interface ContactFormProps {
  title: string;
  desc: string;
};

interface ContactFormStates {
  formKey: FormKey,   
  serverResponse: ServerResponse,
  formResponseError: boolean
}

interface FormKey{
  email: string,
  name: string,
  message: string,
}

interface ServerResponse {
  error: boolean,
  msg: string
}

const InputBlockLeft = styled.div`
  width: 48%;
  float: left;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

const InputBlockRight = styled.div`
  width: 48%;
  float: right;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

class ContactUsForm extends React.Component<ContactFormProps,ContactFormStates> {

  constructor(props: ContactFormProps) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderServerError = this.renderServerError.bind(this);
    this.state = {
      formKey: {
        email: '',
        name: '',
        message: ''
      },
      serverResponse: {
        error: false,
        msg:''
      },
      formResponseError: false,
    }
    this.formRef = React.createRef();
  }
  
  private formRef: React.RefObject<HTMLFormElement>;

  private labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: "bold",
    paddingRight: "1%"
  };
  private inputStyle: React.CSSProperties = {
    backgroundColor: "WhiteSmoke",
    width: "100%",
    border: "none",
    fontSize: "15pt"
  };
  private formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px'
  };

  private errorStyle: React.CSSProperties = {
    width: '100%',
    wordWrap: 'break-word',
    color: 'red'
  }

  private regex: RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  private validationRules: any = {
    name: (nameValue: string) => nameValue.length > 0 ? true : false,
    email: (emailValue:string) => this.regex.test(emailValue),
    message: (messageValue:string) => messageValue.length>0 ? true: false
  }

  public handleChange(event: any) {
    event.preventDefault();
    this.setState({formKey: {...this.state.formKey, [event.target.name]: event.target.value}});
  }

  private handleServerReponse(error: boolean, message: string){
    var response: ServerResponse = {
      error: error,
      msg: message
    }
    this.setState({serverResponse: response});
  }

  public renderError(){
    if(this.state.formResponseError) {
      return <p style={this.errorStyle}>
      Please fill out all fields with valid information.
       </p>;
    }
  }

  public renderServerError() {
    if(this.state.serverResponse && this.state.serverResponse.error) {
      return <p style={this.errorStyle}>{this.state.serverResponse.msg}</p>;
    }
    return;
  }

  private validate(): boolean{
    // Will need to check if everything is ok.
    // Go through name and ensure that it is a size > 0
    // Regex the email
    // Message > 0;
    const stateValue = this.state.formKey! as any as Record<string,string>;
    for(let key of Object.keys(stateValue)) {
       if(!this.validationRules[key](stateValue[key])){
        this.setState({formResponseError:true});
        return false;
      }
    }
    if(this.state.formResponseError) {
      this.setState({formResponseError:false});
    }
    return true;
  }

  public onFormSubmit(event:any) {
    event.preventDefault();
    if(!this.validate()) {
      return;
    }
    fetch(
      // 'https://formspree.io/xoqkdrzb' //Prod form
      'https://formspree.io/mgenkdbb' // Dev form
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(this.state.formKey),
      }
    ).then(response => {
      return response.json();
    }).then(response => {
      if(response.error){
        this.handleServerReponse(true,response.error);
      } else{
        this.handleServerReponse(false,'Sent');
        this.setState({
          formKey: {
            email: '',
            name: '',
            message: ''
          }
        });
      }
    })
  }

  render() {
    return (
      <form
        autoComplete="off"
        style={this.formStyle}
        onSubmit={this.onFormSubmit}
      >
        <h3 style={{ fontStyle: "italic" }}>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        {this.renderError()}
        {this.renderServerError()}
        <div>
          <InputBlockLeft>
            <label style={this.labelStyle} htmlFor="name">
              Name
            </label>
            <input
              name="name"
              id="name"
              style={this.inputStyle}
              value={this.state.formKey.name}
              onChange={this.handleChange}
            ></input>
          </InputBlockLeft>
          <InputBlockRight>
            <label htmlFor="email" style={this.labelStyle}>
              Email
            </label>
            <input
              id="email"
              name="email"
              style={this.inputStyle}
              value={this.state.formKey.email}
              onChange={this.handleChange}
            ></input>
          </InputBlockRight>
        </div>
        <div style={{ width: "100%", paddingTop: "10px" }}>
          <label htmlFor="message" style={this.labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            style = {this.inputStyle}
            rows={3}
            value={this.state.formKey.message}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <Button
          backgroundColor="yellow"
          textColor="black"
          text="Send"
          onClick={() => console.log('am I submitting')}
          variant={null}
        ></Button>
      </form>
    );
  }
}

export default ContactUsForm;
