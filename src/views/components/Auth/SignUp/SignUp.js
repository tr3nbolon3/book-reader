import React from 'react';
import PropTypes from 'prop-types';

// class SignUp extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: SignUp,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function SignUp(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

SignUp.defaultProps = {
  name: SignUp,
};

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SignUp;
