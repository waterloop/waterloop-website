import * as React from "react";
import styled from "styled-components";
import { Form, IFields, required, isEmail, maxLength } from "./form";
import { Field } from "./field";

type ContactFormProps = {
  action: string;
  title: string;
  desc: string;
};

export const ContactUsForm: React.FunctionComponent<ContactFormProps> = (
  props: ContactFormProps
) => {
  const fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required }
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail }
    },
    message: {
      id: "message",
      label: "Message",
      editor: "textarea",
      validation: { rule: maxLength, args: 1000 }
    }
  };

  return (
    <Form
      action={props.action}
      fields = {fields}
      render={() => (
        <React.Fragment>
          <h4>{props.title}</h4>

          <p>{props.desc}</p>

          <Field {...fields.name} />
          <Field {...fields.email}/>
          <Field {...fields.message}/>
        </React.Fragment>
      )}
    />
  );
};
