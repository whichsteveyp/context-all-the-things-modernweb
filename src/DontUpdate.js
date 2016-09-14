import React from 'react';

class DontUpdate extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !!nextProps.update;
  }

  render() {
    return this.props.children;
  }
}

export default DontUpdate;
