export interface ContainerProps {
    width?: number;
}
export interface TextInputContainerProps {
    error: boolean;
}

export interface TextAreaContainerProps {
    error: boolean;
    cols: number;
}
export interface TextInputProps {
    className: string;
    multiLine: boolean;
    value: string;
    rows: number;
    onChange: Function;
    placeholder: string;
    width?: number;
    required: boolean;
    requiredText?: string;
    isError: boolean;
  }