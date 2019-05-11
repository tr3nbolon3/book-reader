import PropTypes from 'prop-types';

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const icon = PropTypes.shape({
  width: numberOrString,
  height: numberOrString,
  fill: PropTypes.string,
  style: PropTypes.object,
  margin: PropTypes.string,
  marginTop: numberOrString,
  marginLeft: numberOrString,
  marginRight: numberOrString,
  marginBottom: numberOrString,
});

export default {
  icon,
};
