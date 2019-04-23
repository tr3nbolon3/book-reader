import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function makeToggleable(Component) {
  return class extends React.Component {
    static displayName = `Toggle(${getDisplayName(Component)})`;

    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };

      this.rootRef = React.createRef();
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
      if (this.rootRef.current && !this.rootRef.current.contains(event.target)) {
        if (this.state.isOpen) {
          this.toggle();
        }
      }
    };

    toggle = () => {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    };

    open = () => {
      this.setState({ isOpen: true });
    };

    close = () => {
      this.setState({ isOpen: false });
    };

    render() {
      const { isOpen } = this.state;
      const { toggle, open, close, rootRef } = this;

      return <Component {...this.props} {...{ isOpen, open, close, toggle, rootRef }} />;
    }
  };
}

export default makeToggleable;
