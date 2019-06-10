import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import { connect } from 'react-redux';

import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';

import BooksSection from '@components/BooksSection';
import { getOrderedBooksWithMeta } from '@ducks/firestore/firestoreSelectors';

function Books({ books }) {
  return (
    <MainLayout>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
        <BooksSection title="Каталог книг" books={books} />
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
  books: getOrderedBooksWithMeta(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Books);
