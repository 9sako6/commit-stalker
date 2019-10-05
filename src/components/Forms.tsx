import React from "react";
import "./form.scss";

interface FuncChange {
  (arg: React.ChangeEvent<HTMLInputElement>): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type FormProps = { handleChange: FuncChange; handleKeyDown: FuncKeyDown; value: string };
export function UserForm(props: FormProps) {
  return (
    <input
      className="request-form"
      type="text"
      value={props.value}
      placeholder="User"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
export function RepoForm(props: FormProps) {
  return (
    <input
      className="request-form"
      type="text"
      value={props.value}
      placeholder="Repository"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
export function PageForm(props: FormProps) {
  return (
    <input
      className="request-form"
      type="text"
      value={props.value}
      placeholder="Page Number (Option)"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
    />
  );
}
