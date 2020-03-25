import * as React from "react";
import styled from "styled-components";
import Button from "../button/button.component";

type ContactFormProps = {
  title: string;
  desc: string;
};

export const ContactUsForm: React.FunctionComponent<ContactFormProps> = (
  props: ContactFormProps
) => {
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: "bold"
  };
  const inputStyle: React.CSSProperties = {
    backgroundColor: "WhiteSmoke",
    width: "100%"
  };
  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
  };
  const btnStyle: React.CSSProperties = {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  };
  return (
    <form
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScdkZ6LFnsW6oVMePd_MVk_3bmP3OWwPhJ1xSJca1bPiU7MKg/formResponse"
      method="POST"
      autoComplete="off"
      target="hiddenFrame"
      style={formStyle}
    >
      <h4 style={{ fontStyle: "italic" }}>{props.title}</h4>
      <p>{props.desc}</p>
      <div>
        <div style={{ width: "50%", float: "left" }}>
          <label style={labelStyle} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="entry.1516902334"
            required
            id="name"
            style={inputStyle}
          ></input>
        </div>
        <div style={{ width: "50%", float: "right" }}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="entry.1862553807"
            required
            style={inputStyle}
          ></input>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <label htmlFor="message" style={labelStyle}>
          Message:
        </label>
        <textarea
          id="message"
          name="entry.538933900"
          required
          style={Object.assign(inputStyle, { resize: "none" })}
        ></textarea>
      </div>
      <Button
        backgroundColor="yellow"
        textColor="white"
        text="Send"
        onClick={() => {document.getElementById("submitBtn")?.click()}}
      ></Button>
      <button id="submitBtn" type="submit" style={{display: "none"}}></button>
      <iframe name="hiddenFrame" style={{ display: "none" }}></iframe>
    </form>
  );
};
