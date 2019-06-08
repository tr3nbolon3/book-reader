import PropTypes from 'prop-types';

import accessRestrictions from '@src/constants/accessRestrictions';
import subscribes from '@src/constants/subscribes';
import gender from '@src/constants/gender';

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const icon = {
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

export const user = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  fullName: PropTypes.string,
  initials: PropTypes.string,
  avatarUrl: PropTypes.string,
  currentSubscribeId: PropTypes.oneOf([subscribes.BRONZE, subscribes.GOLD, subscribes.SILVER, subscribes.STANDARD]),
  birthday: PropTypes.string,
  gender: PropTypes.oneOf([gender.FEMALE, gender.MALE]),
  subscribeAt: PropTypes.string,
};

export const comment = {
  text: PropTypes.string.isRequired,
  user: PropTypes.shape(user).isRequired,
};

export const bookAuthor = {
  name: PropTypes.string.isRequired,
};

export const bookMeta = {
  name: PropTypes.string.isRequired,
  readPercent: PropTypes.number,
};

export const genre = {
  name: PropTypes.string.isRequired,
};

export const subscribe = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  durationType: PropTypes.string,
  duration: numberOrString,
  cost: PropTypes.number.isRequired,
};

export const book = {
  id: numberOrString.isRequired,
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape(bookAuthor)).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape(genre)),
  accessRestrictionId: PropTypes.oneOf([accessRestrictions.FREE, accessRestrictions.SUBSCRIBE]),
  comments: PropTypes.arrayOf(PropTypes.shape(comment)).isRequired,
};

export default {
  icon,
  user,
  book,
  comment,
  bookAuthor,
  genre,
  subscribe,
};
