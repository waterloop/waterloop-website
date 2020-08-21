import React from "react";
import { Button } from "components/Button";
import "../../theme/styles.scss";
import Check from "../../static/img/assets/mdi_check_circle.svg";

interface ContactFormProps {
  title: string;
  desc: string;
}

interface ContactFormStates {
  formKey: FormKey;
  serverResponse: ServerResponse;
  formResponseError: boolean;
  submitted: boolean;
}

interface FormKey {
  email: string;
  name: string;
  message: string;
}

interface ServerResponse {
  error: boolean;
  msg: string;
}

const Success = () => {
  return (
    <div className={"success-message"}>
      <img src={Check} />
      <h3>Thanks for reaching out! </h3>
      <p>Your message was submitted successfully.</p>
    </div>
  );
};

class ContactUsForm extends React.Component<
  ContactFormProps,
  ContactFormStates
  > {
  constructor(props: ContactFormProps) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderServerError = this.renderServerError.bind(this);
    this.state = {
      submitted: false,
      formKey: {
        email: "",
        name: "",
        message: "",
      },
      serverResponse: {
        error: false,
        msg: "",
      },
      formResponseError: false,
    };
  }

  private inputStyle: React.CSSProperties = {
    backgroundColor: "WhiteSmoke",
    width: "100%",
    border: "none",
    fontSize: "15pt",
  };
  private formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  private errorStyle: React.CSSProperties = {
    width: "100%",
    wordWrap: "break-word",
    color: "red",
  };

  private regex: RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  private validationRules: any = {
    name: (nameValue: string) => (nameValue.length > 0 ? true : false),
    email: (emailValue: string) => this.regex.test(emailValue),
    message: (messageValue: string) => (messageValue.length > 0 ? true : false),
  };

  public handleChange(event: any) {
    event.preventDefault();
    this.setState({
      formKey: {
        ...this.state.formKey,
        [event.target.name]: event.target.value,
      },
    });
  }

  private handleServerReponse(error: boolean, message: string) {
    var response: ServerResponse = {
      error: error,
      msg: message,
    };
    this.setState({ serverResponse: response });
  }

  public renderError() {
    if (this.state.formResponseError) {
      return (
        <p style={this.errorStyle}>
          Please fill out all fields with valid information.
        </p>
      );
    }
  }

  public renderServerError() {
    if (this.state.serverResponse && this.state.serverResponse.error) {
      return <p style={this.errorStyle}>{this.state.serverResponse.msg}</p>;
    }
    return;
  }

  private validate(): boolean {
    const stateValue = (this.state.formKey! as any) as Record<string, string>;
    for (let key of Object.keys(stateValue)) {
      if (!this.validationRules[key](stateValue[key])) {
        this.setState({ formResponseError: true });
        return false;
      }
    }
    if (this.state.formResponseError) {
      this.setState({ formResponseError: false });
    }
    return true;
  }

  public onFormSubmit(event: any) {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    fetch(
      "https://formspree.io/xpzyedjr", //Prod form
      // "https://formspree.io/xzbjqraz", // Dev form
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.formKey),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.error) {
          this.handleServerReponse(true, response.error);
        } else {
          this.handleServerReponse(false, "Sent");
          this.setState({
            submitted: true,
            formKey: {
              email: "",
              name: "",
              message: "",
            },
          });
        }
      });
  }

  render() {
    if (this.state.submitted) return <Success />;
    return (
      <div className="contactForm-Container">
        <form
          autoComplete="off"
          style={this.formStyle}
          onSubmit={this.onFormSubmit}
        >
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          {this.renderError()}
          {this.renderServerError()}
          <div className="contact-form-row">
            <div className="contactForm-InputBlockLeft">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                value={this.state.formKey.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="contactForm-InputBlockRight">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={this.state.formKey.email}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div className="contact-form-message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={this.state.formKey.message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div style={{ alignSelf: "center" }}>
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="SEND"
              onClick={() => console.log("submitting form")}
              variant={null}
            ></Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;
