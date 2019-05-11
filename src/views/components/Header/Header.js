import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '@routes';
import * as paths from '@routes/paths';
import { Button } from '@material-ui/core';

// class Header extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//   };

//   static defaultProps = {
//     name: 'Header',
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

function Header() {
  return (
    <div>
      {routes.map(({ name, path }) => (
        <Button key={name}>
          {path === paths.BOOK ? <Link to="/books/1">{name}</Link> : <Link to={path}>{name}</Link>}
        </Button>
      ))}
    </div>
  );
}

Header.defaultProps = {
  name: 'Header',
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
