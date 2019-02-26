import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonMaterial from "@material-ui/core/Button";

const styles = theme => ({});

class Button extends React.Component {
  render() {
    const { classes, children, ...rest } = this.props;

    return (
      <ButtonMaterial
        id="outlined-name"
        // className={classes.Button}
        margin="normal"
        variant="contained"
        {...rest}
      >
        {children}
      </ButtonMaterial>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Button);
