import React from "react";
import Style from "./container.scss";

export default ({ children }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>{children}</div>
);