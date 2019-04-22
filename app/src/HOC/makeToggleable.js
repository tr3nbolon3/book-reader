import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function makeToggleable(Component) {
  return class extends React.Component {
    static displayName = `Toggle(${getDisplayName(Component)})`;

    state = {
      isOpen: false,
    };

    toggle = () => {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    }

    render() {
      const { isOpen } = this.state;
      const { toggle } = this;

      return (
        <Component
          isOpen={isOpen}
          toggle={toggle}
          {...this.props}
        />
      );
    }
  };
}

export default makeToggleable;
