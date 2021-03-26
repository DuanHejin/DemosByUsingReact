import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommonCom from './CommonCom';

class Child extends PureComponent {
// class Child extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { item } = this.props;
  //   console.log(`${item.label} Child shouldComponentUpdate`, nextProps, nextState);
  //   return true;
  // }

  render() {
    const { item } = this.props;
    // console.log(`${item.label} render`);
    return (
      <div>
        <CommonCom item={item}></CommonCom>
      </div>
    );
  }
}

Child.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Child;