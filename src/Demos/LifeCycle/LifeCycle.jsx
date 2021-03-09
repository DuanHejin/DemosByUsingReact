import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './Child1';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
    }

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    console.log('-----  LifeCycle componentWillMount');
  }

  componentDidMount() {
    console.log('-----  LifeCycle componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('-----  LifeCycle componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('-----  LifeCycle shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('-----  LifeCycle componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('-----  LifeCycle componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('-----  LifeCycle componentWillUnmount');

  }

  onClick() {
    const { a } = this.state;
    this.setState({ a: a + 1 });
  }

  render() {
    console.log('-----  LifeCycle render');

    const { a } = this.state;
    return (
      <div>
        <div className="container">
          <div className="form">
            <div className="form-group">
              <button className="btn btn-default" onClick={this.onClick}>点我</button>
            </div>
          </div>
          {
            a < 5 && <Child1 a={a}></Child1>
          }
        </div>
      </div>
    );
  }
}

LifeCycle.propTypes = {

};

export default LifeCycle;