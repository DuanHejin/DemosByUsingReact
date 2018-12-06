import * as React from 'react';
import './AbsoluteFooter.css';

class AbsoluteFooter extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className='absolute-footer-wrap text-center'>
        <div className="header">
          header
        </div>
        <div className="body">
          body
        </div>
        <div className="footer">
          AbsoluteFooter
        </div>
      </div>
    );
  }
}

export default AbsoluteFooter;