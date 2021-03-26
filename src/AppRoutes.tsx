import * as React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Packages/Main/Main';

import About from './Demos/About/About';
import Topics from './Demos/Topics/Topics';
import AbsoluteFooter from './Demos/AbsoluteFooter/AbsoluteFooter';
import HttpPayload from './Demos/Http/HttpPayload/HttpPayload';
import HttpFormData from './Demos/Http/HttpFormData/HttpFormData';
import Parent from './Demos/ParentAndChildComRender/Parent';
import LifeCycle from './Demos/LifeCycle/LifeCycle';
import { Parent as ParentForCheck } from './Demos/CheckShouldComUpdate';
import { HooksParent } from './Demos/Hooks';


class AppRoutes extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/absoluteFooter" component={AbsoluteFooter} />
        <Route path="/http-payload" component={HttpPayload} />
        <Route path="/http-form-data" component={HttpFormData} />
        <Route path="/parent-and-child" component={Parent} />
        <Route path="/lifecycle" component={LifeCycle} />
        <Route path="/checkShouldComUpdate" component={ParentForCheck} />
        <Route path="/hooksUpdateState" component={HooksParent} />
      </Switch>
    );
  }
}

export default withRouter(AppRoutes);