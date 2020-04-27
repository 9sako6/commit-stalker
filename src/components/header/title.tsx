import React from 'react';
import Link from '@material-ui/core/Link';

const containerStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "900px"
};

const titleStyle = {
  color: "#fff",
  fontSize: "2rem",
};
export default () => (
  <div style={containerStyle}>
    <Link
      href="https://github.com/9sako6/commit-stalker"
      target="_blank"
      rel="noopener noreferrer"
      style={titleStyle}
      underline="none"
    >
      Commit Stalker
  </Link>
  </div>
)