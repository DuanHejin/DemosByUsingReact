import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './Child1';
import Child2 from './Child2';
import PureChild1 from './PureChild1';
import PureChild2 from './PureChild2';

class Parent extends Component {

  state = {
    count: 0,
    b: 0,
    pb1: 0,
    pb2: {
      name: 'pb2',
      child: {
        name: 'pb2-child',
        child: {
          name: 'pb2-child-child'
        }
      }
    },
  }

  shouldComponentUpdate(...args) {
    console.log('shouldComponentUpdate', args);
    return true;
  }

  changeLocalStateOnly = () => {
    const { count, b, pb1 } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  changeChild2StateOnly = () => {
    const { count, b, pb1 } = this.state;
    this.setState({
      b: b + 1,
    });
  };

  changePureChild1StateOnly = () => {
    const { count, b, pb1 } = this.state;
    this.setState({
      pb1: pb1 + 1,
    });
  };

  changePureChild2ShallowStateOnly = () => {
    let { count, b, pb1, pb2 } = this.state;
    pb2.name = 'new';
    this.setState({
      pb2,
    });
  };

  changePureChild2DeepStateOnly = () => {
    const { count, b, pb1, pb2 } = this.state;
    this.setState({
      pb2: { ...pb2 },
    });
  };


  render() {
    console.log('Parent render');

    const { count, b, pb1, pb2 } = this.state;
    return (
      <div className="container">
        <h1></h1>

        <div className="form-group">
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.changeLocalStateOnly}>只修改父组件state</button>
            <button className="btn btn-default" onClick={this.changeChild2StateOnly}>只修改传递给Child2的props</button>
          </div>
        </div>
        <div className="form-group">
          <label>count: {count}</label>
        </div>

        <div className="form-group">
          <p>
            使用普通<b>React.Component</b>对象<br />
            1.只修改父组件的state，父组件render时，子组件都会再渲染<br />
            2.修改其中一个子组件的props时，另一个子组件也会再渲染
          </p>
          <Child1></Child1>
          <Child2 b={b}></Child2>
        </div>

        <hr />

        <div className="form-group">
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.changePureChild1StateOnly}>只修改传递给PureChild1的props</button>
            <button className="btn btn-default" onClick={this.changePureChild2ShallowStateOnly}>只修改传递给PureChild2的props(地址不变，只修改属性，不会再渲染)</button>
            <button className="btn btn-default" onClick={this.changePureChild2DeepStateOnly}>只修改传递给PureChild2的props(地址改变，会再渲染)</button>
          </div>
        </div>

        <div className="form-group">
          <p>
            使用普通<b>React.PureComponent</b>对象<br />
            1.只修改父组件的state，父组件render时，子组件不会渲染<br />
            2.修改其中一个子组件的props时，另一个子组件不会渲染<br />
            3.PureChild2的props是obejct类型，如果新props的地址不变，只修改内部属性，那么PureChild2不会再渲染。因为PureComponent内部是利用了shouldComponentUpdate生命周期钩子进行了shallow比较<br />
            4.PureChild2的props是obejct类型，如果新props的地址改变了，无论内部属性有没有变，都会再渲染。
          </p>
          <PureChild1 pb1={pb1}></PureChild1>
          <PureChild2 pb2={pb2}></PureChild2>
        </div>

      </div>
    );
  }
}

Parent.propTypes = {

};

export default Parent;