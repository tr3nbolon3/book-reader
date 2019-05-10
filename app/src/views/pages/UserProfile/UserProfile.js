import React from 'react';
import PropTypes from 'prop-types';

// class UserProfile extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: UserProfile,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function UserProfile(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

UserProfile.defaultProps = {
  name: UserProfile,
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserProfile;
