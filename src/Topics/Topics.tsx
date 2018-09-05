import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import Topic from './Topic/Topic';

interface TopicsProps {
  match: any;
}

class Topics extends React.Component<TopicsProps> {

  constructor(props: any) {
    super(props);
  }

  tip = () => (
    <h3>Please select a topic.</h3>
  )

  render() {
    const {
      match,
    } = this.props;
    return (
      <div>
        <h2>Topics</h2>
        <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
          Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
          Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
          Props v. State
          </Link>
        </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact={true} path={match.path} render={this.tip}/>
      </div>
    );
  }
}

export default Topics;