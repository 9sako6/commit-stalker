import React from "react";
import TextField from '@material-ui/core/TextField';
import "./form.scss";

interface FuncChange {
  (arg: React.ChangeEvent<HTMLInputElement>): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type FormProps = {
  handleChange: FuncChange;
  handleKeyDown: FuncKeyDown;
  value: string;
};
export function UserForm(props: FormProps) {
  return (
    <TextField
      // className="request-form"
      // type="text"
      value={props.value}
      label="User"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
export function RepoForm(props: FormProps) {
  return (
    <TextField
      // className="request-form"
      type="text"
      value={props.value}
      label="Repository"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
export function PageForm(props: FormProps) {
  return (
    <TextField
      // className="request-form"
      type="text"
      value={props.value}
      label="Page Number (Option)"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
