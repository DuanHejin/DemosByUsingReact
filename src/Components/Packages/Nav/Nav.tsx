import * as React from 'react';
import { NavModel } from 'src/Models/NavModel';

import './Nav.css';
import { NavService } from 'src/Services/NavService';

interface Props {
  onClick: Function;
}

class Nav extends React.Component<Props> {

  constructor(props: any) {
    super(props);
  }

  navService: NavService = new NavService();

  getNavList = (): NavModel[] => {
    return this.navService.getNavList();
  }

  render() {
    const {
      onClick,
    } = this.props;
    return (
      <div className='nav-panel-wrap'>
        <p>List of demos</p>
        <ul>
          {
            this.getNavList().map((nav, index) =>
             <li key={index}><a href="javascript:void 0" onClick={onClick(nav)}>{index+1}.{nav.name}</a></li>)
          }
        </ul>
      </div>
    );
  }
}

export default Nav;