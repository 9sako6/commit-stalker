import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { maxWidth } from 'src/utils/common';
const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      maxWidth,
    },
  }),
);

export default (props: { message: string }) => (
  <Alert severity="error" className={useStyles().root}>
    Error: {props.message}
  </Alert>
);
