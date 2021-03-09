import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child2 extends Component {
  render() {
    console.log('Child2 render');
    const { b } = this.props;

    return (
      <div>
        Child2 Component
        b: {b}
      </div>
    );
  }
}

Child2.propTypes = {
  b: PropTypes.number.isRequired,
};

export default Child2;