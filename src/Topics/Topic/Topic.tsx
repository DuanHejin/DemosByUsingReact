import * as React from 'react';

const Topic = ({ match } : {match: any}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Topic;