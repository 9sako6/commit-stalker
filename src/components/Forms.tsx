import React from "react";
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "./form.scss";

interface FuncChange {
  (arg: React.ChangeEvent<HTMLInputElement>): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type FormProps = TextFieldProps & {
  handleChange: FuncChange;
  handleKeyDown: FuncKeyDown;
  value: string;
};

const useStyles = makeStyles({
  root: {
    fontSize: "1.5em",
    marginRight: '10px',
    '& label': {
      color: '#ddf',
      fontWeight: "700"
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  input: {
    color: 'white',
  }
});

export function UserForm(props: FormProps) {
  const classes = useStyles();
  return (
    <TextField
      color="primary"
      className={classes.root}
      value={props.value}
      label="User"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      InputProps={{
        className: classes.input
      }}
    />
  );
}
export function RepoForm(props: FormProps) {
  const classes = useStyles();
  return (
    <TextField
      color="primary"
      className={classes.root}
      type="text"
      value={props.value}
      label="Repository"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      InputProps={{
        className: classes.input
      }}
    />
  );
}
export function PageForm(props: FormProps) {
  const classes = useStyles();
  return (
    <TextField
      color="primary"
      className={classes.root}
      type="text"
      value={props.value}
      label="Page Number"
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      InputProps={{
        className: classes.input
      }}
    />
  );
}
