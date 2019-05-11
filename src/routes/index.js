import Book from '@pages/Book';
import Home from '@pages/Home';
import Library from '@pages/Library';
import Reader from '@pages/Reader';
import Subscribe from '@pages/Subscribe';
import UserProfile from '@pages/UserProfile';

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
    name: 'Library',
    path: paths.LIBRARY,
    component: Library,
  },
  {
    name: 'Book',
    path: paths.BOOK,
    component: Book,
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
];
