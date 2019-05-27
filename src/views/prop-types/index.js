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

const comment = {
  text: PropTypes.string.isRequired,
  author: PropTypes.shape(user).isRequired,
};

const bookAuthor = {
  id: numberOrString.isRequired,
  name: PropTypes.string.isRequired,
};

const book = {
  id: numberOrString.isRequired,
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape(bookAuthor)).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // comments: ,
};

export default {
  icon,
  user,
  comment,
  book,
  bookAuthor,
};
