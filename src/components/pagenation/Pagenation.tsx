import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(_ =>
  createStyles({
    root: {
      margin: '1rem auto',
      display: 'flex',
      outline: 0,
      position: 'relative',
      justifyContent: 'center',
    },
  }),
);

type PagenationProps = {
  totalCommitNum: number;
  nowPage: number;
  callback?: (arg?: any) => any;
};

export default (props: PagenationProps) => {
  const classes = useStyles();
  const { totalCommitNum, nowPage, callback } = props;
  const oldestPage = ((totalCommitNum / 100) | 0) + 1;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    callback && callback(value);
  };

  return (
    <div className={classes.root}>
      <MuiPagination
        count={oldestPage}
        page={nowPage}
        onChange={handleChange}
        size="small"
        showFirstButton
        showLastButton
      />
    </div>
  );
};
