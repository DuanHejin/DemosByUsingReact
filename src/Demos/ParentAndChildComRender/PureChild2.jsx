import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureChild2 extends PureComponent {
  render() {
    console.log('PureChild2 render');

    const { pb2 } = this.props;
    return (
      <div>
        PureChild2 PureComponent
        pb2: {JSON.stringify(pb2)}
      </div>
    );
  }
}

PureChild2.propTypes = {
  pb2: PropTypes.object.isRequired,
};

export default PureChild2;