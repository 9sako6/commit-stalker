import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    button: {},
  }),
);

export default (props: { link: string }) => {
  const styles = useStyles();
  return (
    <Tooltip title="Browse the repository at this point in the history">
      <Link className={styles.button} href={props.link} target="_blank" rel="noopener noreferrer">
        <CodeIcon fontSize="small" />
      </Link>
    </Tooltip>
  );
};
