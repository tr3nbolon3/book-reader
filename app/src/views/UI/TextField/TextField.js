import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextFieldMaterial from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
    marginBottom: 5
  }
});

class TextField extends React.Component {
  render() {
    const { classes, label, onChange, value, ...rest } = this.props;

    return (
      <TextFieldMaterial
        id="outlined-name"
        label={label}
        value={value}
        className={classes.textField}
        onChange={onChange}
        margin="none"
        variant="outlined"
        {...rest}
      />
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextField);
