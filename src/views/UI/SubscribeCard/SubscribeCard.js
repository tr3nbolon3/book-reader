import React from 'react';
import PropTypes from 'prop-types';

// class SubscribeCard extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'SubscribeCard',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function SubscribeCard(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

SubscribeCard.defaultProps = {
  name: 'SubscribeCard',
};

SubscribeCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubscribeCard;
