import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { maxWidth, fontFamily } from '../../common';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth,
      fontFamily,
      height: '50vh',
      position: 'relative',
      margin: 'auto',
    },
  }),
);

export default () => (
  <Container className={useStyles().root}>
    <h1 className="readme-title">Commit Stalker</h1>
    <p>
      This is a simple GitHub commits' history viewer. 100 commits are showed in a page. (35 commits in the official
      site.) In addition, you can search the oldest commit easily.
    </p>

    <h1 className="readme-title">More Details</h1>
    <p>
      <a
        href="https://dev.to/9sako6/i-built-the-web-app-to-search-commits-on-github-3l82"
        rel="noopener noreferrer"
        target="_blank"
      >
        I built the Web app to search commits on GitHub - Dev.to
      </a>
    </p>
  </Container>
);
