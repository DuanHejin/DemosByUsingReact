import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child1 extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps, nextProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate, nextProps, nextState', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate, nextProps, nextState', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate, prevProps, prevState', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }


  render() {
    console.log('render Child1');
    const { a } = this.props;
    return (
      <div>
        a: {a}
      </div>
    );
  }
}

Child1.propTypes = {
  a: PropTypes.number.isRequired,
};

export default Child1;