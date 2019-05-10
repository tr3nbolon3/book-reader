import React from 'react';
import PropTypes from 'prop-types';

// class Landing extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: Landing,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Landing(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Landing.defaultProps = {
  name: Landing,
};

Landing.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Landing;
