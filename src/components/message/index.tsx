import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { maxWidth, fontFamily } from 'src/utils/common';

// prettier-ignore

const Alert = (props: any) => {
  const [open, setOpen] = React.useState(true);
  return (<Collapse in={open}>
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
    </Collapse>);
};

const useStyles = makeStyles({
  root: {
    maxWidth,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'fixed',
    '& a': {
      color: '#fff',
      fontFamily,
      borderBottom: 'none',
      textDecoration: 'none',
      fontWeight: '600',
    },
  },
});

export const Message: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Alert severity="info" className={classes.root}>
      {children}
    </Alert>
  );
};
