import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';

// class Book extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Book',
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
    <MainLayout>
      <p>
        {props.name} {props.id}
      </p>
    </MainLayout>
  );
}

Book.defaultProps = {
  name: 'Book',
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    ...state,
    id: Number(id),
  };
};

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
