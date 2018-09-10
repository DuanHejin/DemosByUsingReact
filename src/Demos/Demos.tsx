import * as React from 'react';
import './Demos.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

interface Props {
  id?: string;
  name: string;
  desc?: string[];
  to: string;
}

interface State {

}

class Demos extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      desc2: '',
    }
  }

  render() {
    const {
      name,
      desc,
      to,
    } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <div className="desc">
          <textarea value={desc ? desc.reduce((result, val) => result += val, '') : ''} readOnly={true}/>
        </div>
        <div className='jump-link'>
          <Link className='link' to={to} target='_blank'>See the demo ⇨</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Demos);