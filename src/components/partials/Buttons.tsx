import React from "react";
import "./button.scss";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles({
  root: {
    display: "inline-block",
    '& svg': {
      color: 'white'
    },
  },
});

interface FuncClick {
  (): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type ButtonProps = { handleClick: FuncClick; handleKeyDown: FuncKeyDown };
export function SearchButton(props: ButtonProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      id="request"
      onKeyDown={props.handleKeyDown}
    >
      <IconButton aria-label="delete" onClick={props.handleClick} >
        <SearchIcon fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}

export function LatestButton(props: ButtonProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      // onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <IconButton aria-label="delete" onClick={props.handleClick} >
        <SkipPreviousIcon fontSize="inherit" color="primary" />
      </IconButton>

      {/* <i tabIndex={0} className="fas fa-angle-double-left"></i> */}
    </div>
  );
}

export function BackButton(props: ButtonProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      // onClick={props.handleClick}
      onKeyDown={props.handleKeyDown}
    >
      <IconButton aria-label="delete" onClick={props.handleClick} >
        <ArrowBackIcon fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}
export function NextButton(props: ButtonProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onKeyDown={props.handleKeyDown}
    >
      <IconButton aria-label="delete" onClick={props.handleClick} >
        <ArrowForwardIcon fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}
export function OldestButton(props: ButtonProps): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onKeyDown={props.handleKeyDown}
    >
      <IconButton aria-label="delete" onClick={props.handleClick} >
        <SkipNextIcon fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
}
