import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureChild1 extends PureComponent {
  render() {
    console.log('PureChild1 render');

    const { pb1 } = this.props;
    return (
      <div>
        PureChild1 PureComponent
        pb1: {pb1}
      </div>
    );
  }
}

PureChild1.propTypes = {
  pb1: PropTypes.number.isRequired,
};

export default PureChild1;