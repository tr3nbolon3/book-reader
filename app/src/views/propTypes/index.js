import PropTypes from 'prop-types';

export default {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  ...PropTypes,
};
