import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as appSelectors from '@ducks/app/appSelectors';
import * as appActions from '@ducks/app/appActions';

import MainLayout from '@layouts/MainLayout';
import Container from '@UI/Container';
import BookCard from '@components/BookCard';
import BooksSection from '@components/BooksSection';
import history from '@utils/history';

import * as paths from '@routes/paths';

// class Library extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Library',
//   };

//   render() {
//     return (
//       <MainLayout>
//         <p>{this.props.name}</p>
//       </MainLayout>
//     );
//   }
// }

const books = [
  {
    id: 1,
    name: 'Principles: Life and Work',
    author: 'Ray Dalio',
    image: 'https://imgv2-1-f.scribdassets.com/img/word_document/357813054/149x198/d1d2a4e180/1556982951?v=1',
  },
  {
    id: 2,
    name: 'Альфа и его маленький запрет.',
    author: 'ShennonKiss',
    image: 'https://a.wattpad.com/cover/165002790-288-k993073.jpg',
  },
  {
    id: 3,
    name: 'Судьба. Демоны. Рай или Ад.',
    author: 'Ted Chiang',
    image: 'https://a.wattpad.com/cover/185705587-288-k256439.jpg',
  },
  {
    id: 4,
    name: "Mueller's War",
    author: 'Casey Cep',
    image: 'https://a.wattpad.com/cover/111274960-288-k6422.jpg',
  },
  {
    id: 5,
    name: 'The Devil and Harper Lee',
    author: 'Garrett M. Graff',
    image: 'https://a.wattpad.com/cover/132850976-288-k80352.jpg',
  },
  {
    id: 6,
    name: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
    author: 'Mark Seal',
    image: 'https://a.wattpad.com/cover/187636548-288-k804795.jpg',
  },
  {
    id: 7,
    name: 'The Silent Patient',
    author: 'Julia Phillips',
    image: 'https://imgv2-2-f.scribdassets.com/img/word_document/410349246/149x198/75fac783ad/1558540658?v=1',
  },
  {
    id: 8,
    name: 'The Uninhabitable Earth: Life After Warming',
    author: 'Mark Manson',
    image: 'https://imgv2-1-f.scribdassets.com/img/word_document/406893397/298x396/3f3fd433f4/1558540272?v=1 2x',
  },
  {
    id: 9,
    name: 'Daisy Jones & The Six: A Novel',
    author: 'George R. R. Martin',
    image: 'https://imgv2-2-f.scribdassets.com/img/word_document/403216596/149x198/02eb41e66d/1558540284?v=1',
  },
  {
    id: 10,
    name: 'Entrepreneur',
    author: 'The Washington Post',
    image: 'https://imgv2-1-f.scribdassets.com/img/word_document/405946870/149x198/67380b8226/1558540879?v=1',
  },
];

function Library() {
  return (
    <MainLayout>
      <Container style={{ padding: '40px 0' }}>
        <BooksSection>
          {books.map(book => (
            <BookCard key={book.id} {...book} onClick={() => history.push(`${paths.BOOKS}/${book.id}`)} />
          ))}
        </BooksSection>
      </Container>
    </MainLayout>
  );
}

Library.defaultProps = {
  name: 'Library',
};

Library.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = { ...appActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library);
