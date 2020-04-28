import React from "react";

const FlexDiv: React.FC<{ style: object }> = ({ children, style }) => (
  <div style={{ ...style, display: "flex" }}>{children}</div>
)

export default FlexDiv;
