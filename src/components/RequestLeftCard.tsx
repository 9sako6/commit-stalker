import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

export const REQUEST_LEFT_CARD_ID = "request-left-card";

const useStyles = makeStyles({
  root: {
    zIndex: 900,
    position: 'fixed',
    right: '10px',
    bottom: '60px',
    width: '160px',
    backgroundColor: '#f9f7f5',
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
    padding: '10px',
    '& a': {
      textDecoration: 'none'
    }
  },
});

export default function RequestLeftCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a
        href="https://developer.github.com/v3/#rate-limiting"
        target="_blank"
        rel="noopener noreferrer"
      >
        The GitHub API's rate limit allows for up to 60 requests per hour
      </a>
    </Card>
  );
}
