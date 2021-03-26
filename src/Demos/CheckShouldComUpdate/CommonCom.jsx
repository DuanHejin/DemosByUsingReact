import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommonCom extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { item } = this.props;
    console.log(`${item.label} CommonCom shouldComponentUpdate`, nextProps, nextState);
    return true;
  }

  render() {
    const { item } = this.props;
    // console.log(`${item.label} CommonCom render`);
    return (
      <div>
        {JSON.stringify(item)}
      </div>
    );
  }
}

CommonCom.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CommonCom;