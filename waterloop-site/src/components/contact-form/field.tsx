import * as React from "react";
import styled from "styled-components";
import { IErrors, IFormContext, FormContext, IValues } from "./form";

/* The available editors for the field */
type Editor = "textbox" | "textarea";

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The field value */
  value?: any;

  /* The field validator function and argument */
  validation?: IValidation;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
  id,
  label,
  editor,
  value
}) => {
  /**
   * Gets the validation error for the field
   * @param {IErrors} errors - All the errors from the form
   * @returns {string[]} - The validation error
   */
  const getError = (errors: IErrors): string => (errors ? errors[id] : "");

  /**
   * Gets the inline styles for editor
   * @param {IErrors} errors - All the errors from the form
   * @returns {any} - The style object
   */
  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};

  return (
    <FormContext.Consumer>
      {(context: IFormContext | undefined) => (
        <div className="form-group">
          {label && <label htmlFor={id}>{label}</label>}

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context?.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context?.validate(id)}
              className="form-control"
              style={getEditorStyle(context!.errors)}
            />
          )}

          {editor!.toLowerCase() === "textarea" && (
            <textarea
              id={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context?.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context?.validate(id)}
              className="form-control"
              style={getEditorStyle(context!.errors)}
            />
          )}

          {getError(context!.errors) && (
            <div style={{ color: "red", fontSize: "80%" }}>
              <p>{getError(context!.errors)}</p>
            </div>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};

Field.defaultProps = {
  editor: "textbox"
};
