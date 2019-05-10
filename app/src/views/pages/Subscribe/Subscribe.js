import React from 'react';
import PropTypes from 'prop-types';

// class Subscribe extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: Subscribe,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Subscribe(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Subscribe.defaultProps = {
  name: Subscribe,
};

Subscribe.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Subscribe;
