import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";

function Link({ children, ...rest }) {
  return (
    <MaterialLink component={RouterLink} {...rest}>
      {children}
    </MaterialLink>
  );
}

export default Link;
