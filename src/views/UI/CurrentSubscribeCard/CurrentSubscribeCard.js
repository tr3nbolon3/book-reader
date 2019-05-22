import React from 'react';
import PropTypes from 'prop-types';
import Link from '@UI/Link';
import * as paths from '@routes/paths';

function CurrentSubscribeCard({ name }) {
  return (
    <div
      style={{
        margin: 10,
        borderRadius: 3,
        border: '1px solid black',
      }}
    >
      <p>{name}</p>
      <Link to={paths.SUBSCRIBE}>Cменить тариф</Link>
    </div>
  );
}

CurrentSubscribeCard.defaultProps = {
  name: 'Стандарт',
};

CurrentSubscribeCard.propTypes = {
  name: PropTypes.string,
};

export default CurrentSubscribeCard;
