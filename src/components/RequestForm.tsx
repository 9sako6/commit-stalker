import React, { Component } from 'react';
// utils
import CSModel, { RequestNameType } from '../CSModel';
import { renderCommitHistory } from '../helper';
// css
import './request_form.scss';

type RequestFormProps = { name: RequestNameType, model: CSModel, value?: string, placeHolder?: string };
type RequestFormState = { value: string };
export default class RequestForm extends Component<RequestFormProps, RequestFormState> {
  constructor(props: RequestFormProps) {
    super(props);
    this.state = { value: this.props.value === undefined ? "" : this.props.value };
  }
  handleChange = (e: any) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
    switch (this.props.name) {
      case 'user':
        this.props.model.request.user = newValue;
        break;
      case 'repo':
        this.props.model.request.repo = newValue;
        break;
      case 'page':
        this.props.model.request.page = Number(newValue);
        break;
      default:
        break;
    }
  }
  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      // when the enter key is pressed
      renderCommitHistory(this.props.model);
    }
  }
  render() {
    return (
      <input
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        className="request-form"
        type="text"
        id={`${this.props.name}-form`}
        placeholder={this.props.placeHolder}
        value={this.state.value}
      />
    );
  }
}