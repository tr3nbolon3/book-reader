import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TextFiled from "../../../../components/UI/TextField";
import Button from "../../../../components/UI/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit * 0.5
  },
  icon: {
    // margin: theme.spacing.unit * 2
  },
  iconHover: {
    // margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
});

class SignUp extends Component {
  validate = values => {
    const errors = {};

    if (false) {
      errors.email = "Введите корректный E-Mail";
    }

    return errors;
  };

  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { onSubmit } = this;
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography
          variant="h4"
          style={{
            marginBottom: "10px",
            textAlign: "center"
          }}
        >
          Регистрация
        </Typography>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <TextFiled name="email" label="E-Mail" type="email" />
              <TextFiled name="password" label="Пароль" type="password" />
              <TextFiled
                name="confirmPassword"
                label="Подтверждение пароля"
                type="password"
              />
              <Button color="primary" type="submit">
                Зарегистрироваться
              </Button>
              <Divider variant="middle" />
              <Typography
                variant="p"
                style={{
                  marginTop: "10px",
                  textAlign: "center"
                }}
              >
                Либо авторизируйтесь через соц.сети
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Button className={classes.button}>
                  <Icon
                    className={classNames(classes.icon, "fab fa-vk")}
                    color="primary"
                  />
                </Button>
                <Button className={classes.button}>
                  <Icon
                    className={classNames(classes.icon, "fab fa-google")}
                    color="primary"
                  />
                </Button>
                <Button className={classes.button}>
                  <Icon
                    className={classNames(classes.icon, "fab fa-facebook-f")}
                    color="primary"
                  />
                </Button>
              </div>
            </form>
          )}
        </Form>
      </Paper>
    );
  }
}

SignUp.propTypes = {};

export default withStyles(styles)(SignUp);
