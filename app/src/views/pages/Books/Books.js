import React from 'react';
import PropTypes from 'prop-types';
import $propTypes from '@prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';
// import BookCard from '@components/BookCard';
import BooksSection from '@components/BooksSection';
import { getOrderedBooks } from '@ducks/firestore/firestoreSelectors';
// import history from '@utils/history';

// import * as paths from '@routes/paths';

function Books({ books }) {
  return (
    <MainLayout>
      <Container style={{ padding: '40px 0' }}>
        <BooksSection title="Бестселлеры" books={books} />
      </Container>
    </MainLayout>
  );
}

Books.defaultProps = {
  books: [],
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape($propTypes.book)),
};

const mapStateToProps = state => ({
  books: getOrderedBooks(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Books);
