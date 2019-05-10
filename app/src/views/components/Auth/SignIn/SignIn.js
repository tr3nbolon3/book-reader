import React from 'react';
import PropTypes from 'prop-types';

// class SignIn extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: SignIn,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function SignIn(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

SignIn.defaultProps = {
  name: SignIn,
};

SignIn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SignIn;
