import React from "react";
import "./button.scss";

interface FuncClick {
  (): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type ButtonProps = { handleClick: FuncClick; handleKeyDown: FuncKeyDown };
export function SearchButton(props: ButtonProps): JSX.Element {
  return (
    <div
      className="cs-button arrows"
      id="request"
      onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <i tabIndex={0} className="fas fa-search"></i>
    </div>
  );
}

export function LatestButton(props: ButtonProps): JSX.Element {
  return (
    <div
      className="cs-button arrows"
      onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <i tabIndex={0} className="fas fa-angle-double-left"></i>
    </div>
  );
}

export function BackButton(props: ButtonProps): JSX.Element {
  return (
    <div
      className="cs-button arrows"
      onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <i tabIndex={0} className="fas fa-angle-left"></i>
    </div>
  );
}
export function NextButton(props: ButtonProps): JSX.Element {
  return (
    <div
      className="cs-button arrows"
      onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <i tabIndex={0} className="fas fa-angle-right"></i>
    </div>
  );
}
export function OldestButton(props: ButtonProps): JSX.Element {
  return (
    <div
      className="cs-button arrows"
      onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <i tabIndex={0} className="fas fa-angle-double-right"></i>
    </div>
  );
}
