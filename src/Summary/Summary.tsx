import * as React from 'react';
import { Link } from 'react-router-dom';
import { DemoSummary } from '../Models/DemoSummary';

class Summary extends React.Component {

  constructor(props: any) {
    super(props);
  }

  getSummaryList = (): DemoSummary[] => {
    const list: DemoSummary[] = [];
    list.push(new DemoSummary({name: 'Home', toUrl: '/'}));
    list.push(new DemoSummary({name: 'About', toUrl: '/about'}));
    list.push(new DemoSummary({name: 'Topics', toUrl: '/topics'}));
    list.push(new DemoSummary({name: '页面footer部固定', toUrl: '/absoluteFooter'}));

    return list;
  }

  render() {
    return (
      <div>
        <p>Summary of demos.</p>
        <ul>
          {
            this.getSummaryList().map((value, index) => <li key={index}>{<Link to={value.toUrl}>{value.name}</Link>}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Summary;