import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child1 extends Component {
  render() {
    console.log('Child1 render');
    return (
      <div>
        Child1 Component
        无props
      </div>
    );
  }
}

Child1.propTypes = {

};

export default Child1;