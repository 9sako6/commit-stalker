import React from "react";
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

type FuncKeyDown = {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type FormProps = TextFieldProps & {
  handleChange: (arg: string) => void;
  handleKeyDown: FuncKeyDown;
  value: string;
};

const useStyles = makeStyles({
  root: {
    // fontSize: "1.5em",
    margin: '0.3rem',
    // '& label': {
    //   color: '#ddf',
    //   fontWeight: "700"
    // },
    // '& label.Mui-focused': {
    //   color: 'white',
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'white',
    // },
    '.MuiOutlinedInput-root MuiInputBase-input': {
    //   '& fieldset': {
    //     borderColor: 'white',
    //   },
    //   '&:hover fieldset': {
    //     borderColor: 'white',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: 'white',
    //   },
    },
  },
  input: {
    // color: 'white',
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
      onChange={(e) => props.handleChange(e.currentTarget.value)}
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
      onChange={(e) => props.handleChange(e.currentTarget.value)}
      onKeyDown={props.handleKeyDown}
      InputProps={{
        className: classes.input
      }}
    />
  );
}
type PageFormProps = TextFieldProps & {
  handleChange: (arg: number) => void;
  handleKeyDown: FuncKeyDown;
  value: number;
};

export function PageForm(props: PageFormProps) {
  const classes = useStyles();
  return (
    <TextField
      color="primary"
      className={classes.root}
      type="text"
      value={props.value}
      label="Page Number"
      onChange={(e) => props.handleChange(Number(e.currentTarget.value))}
      onKeyDown={props.handleKeyDown}
      InputProps={{
        className: classes.input
      }}
    />
  );
}
