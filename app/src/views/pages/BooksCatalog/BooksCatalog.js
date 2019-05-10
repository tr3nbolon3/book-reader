import React from 'react';
import PropTypes from 'prop-types';

// class BooksCatalog extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: BooksCatalog,
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function BooksCatalog(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

BooksCatalog.defaultProps = {
  name: BooksCatalog,
};

BooksCatalog.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BooksCatalog;
