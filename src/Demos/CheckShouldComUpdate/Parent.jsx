import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './Child';

class Parent extends Component {

  state = {
    list: [{
      label: 'Child1',
      value: 'Child1-value',
      updated: false,
    }, {
      label: 'Child2',
      value: 'Child2-value',
      updated: false,
    }],
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  changeLocalStateOnly = (operator) => () => {
    const { list } = this.state;
    if (operator === 1) {
      const nextIndex = list.length + 1;
      this.setState({
        list: list.concat({ label: `Child${nextIndex}`, vlaue: `Child${nextIndex}-value`, updated: false, }),
      });
    } else {
      list.pop()
      this.setState({
        list,
      });
    }
    this.asynUpdateState();
  };

  asynUpdateState = () => {
    setTimeout(() => {
      const { list } = this.state;
      // const newList = list.map(item => ({ ...item, updated: true }));
      // this.setState({
      //   list: newList,
      // });
      list[list.length - 1] = { ...list[list.length - 1], updated: true };
      this.setState({
        list,
      });
    }, 500)
  };


  render() {
    // console.log('Parent render');

    const { count, list } = this.state;
    return (
      <div className="container">
        <h1></h1>

        <div className="form-group">
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.changeLocalStateOnly(1)}>增加item</button>
            <button className="btn btn-default" onClick={this.changeLocalStateOnly(2)}>删除item</button>
          </div>
        </div>

        {
          list.map((item, index) => (
            <div className="form-group" key={index}>
              <Child item={item}></Child>
            </div>
          ))
        }


        <hr />


      </div>
    );
  }
}

Parent.propTypes = {

};

export default Parent;