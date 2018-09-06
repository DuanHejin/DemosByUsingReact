import * as React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Topics from '../Topics/Topics';
import AbsoluteFooter from './AbsoluteFooter/AbsoluteFooter';

class Demos extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/absoluteFooter" component={AbsoluteFooter}/>
      </Switch>
    );
  }
}

export default withRouter(Demos);