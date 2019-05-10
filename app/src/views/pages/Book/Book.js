import React from 'react';
import PropTypes from 'prop-types';

// class Book extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: Book,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Book(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

Book.defaultProps = {
  name: Book,
};

Book.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Book;
