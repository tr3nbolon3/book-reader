import Book from '@pages/Book';
import Home from '@pages/Home';
import Books from '@pages/Books';
import Reader from '@pages/Reader';
import Subscribe from '@pages/Subscribe';
import UserProfile from '@pages/UserProfile';
import NotFound from '@pages/NotFound';
import MyBooks from '@pages/MyBooks';

import withLogin from '@enhancers/with-login';
import * as paths from './paths';

export default [
  {
    name: 'Home',
    path: paths.HOME,
    exact: true,
    component: Home,
  },
  {
    name: 'Book',
    path: paths.BOOK,
    component: Book,
  },
  {
    name: 'Books',
    path: paths.BOOKS,
    component: Books,
  },
  {
    name: 'Subscribe',
    path: paths.SUBSCRIBE,
    component: Subscribe,
  },
  {
    name: 'Reader',
    path: paths.READER,
    component: Reader,
  },
  {
    name: 'UserProfile',
    path: paths.USER_PROFILE,
    component: withLogin(UserProfile),
  },
  {
    name: 'UserProfile',
    path: paths.MY_BOOKS,
    component: MyBooks,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];
