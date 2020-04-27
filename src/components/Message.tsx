import React from "react";
import Collapse from '@material-ui/core/Collapse';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const Alert = (props: any) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapse in={open}>
      <MuiAlert
        elevation={6}
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        {...props}
      />
    </Collapse>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    '& a': {
      color: "#fff"
    }
  },
});

export default () => {
  const classes = useStyles();
  const message = "The GitHub API's rate limit allows for up to 60 requests per hour";
  return (
    <Alert
      severity="info"
      className={classes.root}
    >
      <a
        href="https://developer.github.com/v3/#rate-limiting"
        target="_blank"
        rel="noopener noreferrer"
      >
        {message}
      </a>
    </Alert>
  );
}
