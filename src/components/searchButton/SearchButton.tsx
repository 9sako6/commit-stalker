import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
});

interface FuncClick {
  (): void;
}
interface FuncKeyDown {
  (arg: React.KeyboardEvent<HTMLInputElement>): void;
}
type ButtonProps = { handleClick: FuncClick; handleKeyDown: FuncKeyDown };
export default (props: ButtonProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="request" onKeyDown={props.handleKeyDown} onClick={props.handleClick}>
      <Button variant="contained" color="primary" startIcon={<SearchIcon fontSize="inherit" />}>
        Search
      </Button>
    </div>
  );
};
