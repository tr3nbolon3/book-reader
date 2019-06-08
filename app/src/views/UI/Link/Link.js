import React from 'react';
// import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';

function Link(props) {
  return <MaterialLink color="inherit" component={RouterLink} {...props} />;
}

Link.propTypes = MaterialLink.propTypes;

export default Link;
