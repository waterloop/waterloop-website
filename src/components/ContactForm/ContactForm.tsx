import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';
import '../../theme/styles.scss';
import { ReactComponent as CheckSVG } from '../../static/img/assets/mdi_check_circle.svg';
import hasKey from '../../utils/hasKey';

const Label = styled.label`
  font-family: IBM Plex Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: #010101;
`;

const Input = styled.input`
  background: #f4f4f4;
  width: calc(100% - 15px);
  height: 30px;
  border: none;
`;

const Header = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-style: italic;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  color: #010101;
`;

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

class ContactUsForm extends React.Component<
  ContactFormProps,
  ContactFormStates
> {
  constructor(props: ContactFormProps) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderServerError = this.renderServerError.bind(this);
    this.state = {
      submitted: false,
      formKey: {
        email: '',
        name: '',
        message: '',
      },
      serverResponse: {
        error: false,
        msg: '',
      },
      formResponseError: false,
    };
  }

  private formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  private errorStyle: React.CSSProperties = {
    width: '100%',
    wordWrap: 'break-word',
    color: 'red',
  };

  private regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  private validationRules = {
    name: (nameValue: string): boolean => nameValue.length > 0,
    email: (emailValue: string): boolean => this.regex.test(emailValue),
    message: (messageValue: string): boolean => messageValue.length > 0,
  };

  public handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    event.preventDefault();
    this.setState({
      formKey: {
        ...this.state.formKey,
        [event.target.name]: event.target.value,
      },
    });
  }

  private handleServerResponse(error: boolean, message: string): void {
    const response: ServerResponse = {
      error,
      msg: message,
    };
    this.setState({ serverResponse: response });
  }

  public renderError(): React.ReactElement {
    if (this.state.formResponseError) {
      return (
        <p style={this.errorStyle}>
          Please fill out all fields with valid information.
        </p>
      );
    }
    return <></>;
  }

  public showForm(): void {
    this.setState({
      submitted: false,
    });
  }

  public renderServerError(): React.ReactElement {
    if (this.state.serverResponse && this.state.serverResponse.error) {
      return <p style={this.errorStyle}>{this.state.serverResponse.msg}</p>;
    }
    return <></>;
  }

  private validate(): boolean {
    const stateValue = this.state.formKey;
    let valid = true;
    Object.keys(stateValue).forEach((key) => {
      if (
        hasKey(this.validationRules, key) &&
        !this.validationRules[key](stateValue[key])
      ) {
        this.setState({ formResponseError: true });
        valid = false;
      }
    });
    if (this.state.formResponseError) {
      this.setState({ formResponseError: !valid });
    }
    return valid;
  }

  public onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    fetch(
      process.env.NODE_ENV === 'development'
        ? 'https://formspree.io/xzbjqraz' // Dev form
        : 'https://formspree.io/xpzyedjr', // Prod form
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.formKey),
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.error) {
          this.handleServerResponse(true, response.error);
        } else {
          this.handleServerResponse(false, 'Sent');
          this.setState({
            submitted: true,
            formKey: {
              email: '',
              name: '',
              message: '',
            },
          });
        }
      });
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className="success-modal-container">
          <div className={'success-message'}>
            <CheckSVG />
            <h2 className="center-text">Thanks for reaching out! </h2>
            <p className="center-text">
              Your message was submitted successfully.
            </p>
            <button
              className="center-text submit-again"
              onClick={(): void => this.setState({ submitted: false })}
            >
              Submit another message
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="contactForm-Container">
        <form
          autoComplete="off"
          style={this.formStyle}
          onSubmit={this.onFormSubmit}
        >
          <Header>{this.props.title}</Header>
          <div>
            <p>{this.props.desc}</p>
          </div>
          {this.renderError()}
          {this.renderServerError()}
          <div className="contact-form-row">
            <div className="contactForm-InputBlockLeft">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                value={this.state.formKey.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="contactForm-InputBlockRight">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.state.formKey.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="contact-form-message">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={this.state.formKey.message}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Button
              backgroundColor="yellow"
              textColor="black"
              text="SEND"
              onClick={(): void => console.log('submitting form')}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUsForm;
