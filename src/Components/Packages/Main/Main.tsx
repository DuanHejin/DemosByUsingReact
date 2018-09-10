import * as React from 'react';
import Nav from '../Nav/Nav';
import Demos from '../../../Demos/Demos';

import './Main.css';
import Header from '../../Common/Header/Header';
import { NavModel } from 'src/Models/NavModel';

interface State {
  nav: NavModel;
}

class Main extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      nav: new NavModel({name: 'Home', to: '/', desc: ['This is Home component.']}),
    };
  }

  onClick = (selectedNav: NavModel) => () => {
    this.setState({
      nav: Object.assign({}, selectedNav),
    });
  }

  render() {
    const props = this.state.nav;
    return (
      <React.Fragment>
        <Header/>
        <div className="root-container">
          <div className="nav-panel">
            <Nav onClick={this.onClick}/>
          </div>
          <div className="main-container">
            <Demos {...props}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;