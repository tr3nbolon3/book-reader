import PropTypes from 'prop-types';

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const icon = {
  width: numberOrString,
  height: numberOrString,
  fill: PropTypes.string,
  style: PropTypes.object,
  margin: PropTypes.string,
  marginTop: numberOrString,
  marginLeft: numberOrString,
  marginRight: numberOrString,
  marginBottom: numberOrString,
};

const user = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  fullName: PropTypes.string,
  initials: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default {
  icon,
  user,
};
