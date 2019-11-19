import React from "react";
import "./footer.scss";
export const FOOTER_ID = "site-footer";
export default function Footer() {
  return (
    <div className="site-footer">
      Copyright 2019, <a href="https://github.com/9sako6">9sako6</a>.{" "}
      <a href="https://github.com/9sako6/commit-stalker">
        9sako6/commit-stalker
      </a>
    </div>
  );
}
