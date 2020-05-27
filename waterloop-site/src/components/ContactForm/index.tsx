import React from 'react';
import styled from 'styled-components';
import {Button} from '../button';
import {TextWithImage} from '../';

type ContactFormProps = {
  title: string;
  desc: string;
};

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

class ContactUsForm extends React.Component<ContactFormProps> {
  labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: "bold",
    paddingRight: "1%"
  };
  inputStyle: React.CSSProperties = {
    backgroundColor: "WhiteSmoke",
    width: "100%",
    border: "none",
    fontSize: "15pt"
  };
  formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "12px"
  };
  render() {
    return (
      <form
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScdkZ6LFnsW6oVMePd_MVk_3bmP3OWwPhJ1xSJca1bPiU7MKg/formResponse"
        method="POST"
        autoComplete="off"
        target="hiddenFrame"
        style={this.formStyle}
      >
        <h3 style={{ fontStyle: "italic" }}>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        <div>
          <InputBlockLeft>
            <label style={this.labelStyle} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="entry.1516902334"
              required
              id="name"
              style={this.inputStyle}
            ></input>
          </InputBlockLeft>
          <InputBlockRight>
            <label htmlFor="email" style={this.labelStyle}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="entry.1862553807"
              required
              style={this.inputStyle}
            ></input>
          </InputBlockRight>
        </div>
        <div style={{ width: "100%", paddingTop: "10px" }}>
          <label htmlFor="message" style={this.labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="entry.538933900"
            required
            style={Object.assign(this.inputStyle, { resize: "none" })}
            rows={3}
          ></textarea>
        </div>
        <Button
          backgroundColor="yellow"
          textColor="black"
          text="Send"
          onClick={() => {
            document.getElementById("submitBtn")?.click();
          }}
          variant={null}
        ></Button>
         <TextWithImage
         title="WHat" 
         text= "Happened"
         image= "HERE" 
         link= "NANI"
         ></TextWithImage>
        <button
          id="submitBtn"
          type="submit"
          style={{ display: "none" }}
        ></button>
        <iframe name="hiddenFrame" style={{ display: "none" }}></iframe>
      </form>
    );
  }
}

export default ContactUsForm;
