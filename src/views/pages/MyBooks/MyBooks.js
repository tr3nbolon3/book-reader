import React from 'react';
import PropTypes from 'prop-types';
import * as $propTypes from '@prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';
import getMyBooks from '@ducks/firestore/selectors/getMyBooks';
import BooksSection from '@components/BooksSection';
import { Typography, Button } from '@material-ui/core';
import { history } from '@utils/';
import * as paths from '@routes/paths';

function MyBooks({ myBooks }) {
  const isEmpty = !myBooks.length;

  return (
    <MainLayout>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
        <BooksSection title="Мои книги" books={myBooks} />
        {isEmpty && (
          <div>
            <Typography paragraph>На вашей полке нет книг.</Typography>
            <Button onClick={() => history.push(paths.BOOKS)} variant="outlined">
              Выбрать книгу
            </Button>
          </div>
        )}
      </Container>
    </MainLayout>
  );
}

MyBooks.defaultProps = {
  myBooks: [],
};

MyBooks.propTypes = {
  myBooks: PropTypes.shape($propTypes.book),
};

const mapStateToProps = state => ({
  myBooks: getMyBooks(state),
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyBooks);
