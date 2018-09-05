import * as React from 'react';

class Summary extends React.Component {

  constructor(props: any) {
    super(props);
  }

  getSummaryList = () => {
    const list = [];
    list.push('页面footer部固定');

    return list;
  }

  render() {
    return (
      <div>
        <p>Here is the summary of demos.</p>
        <ul>
          {
            this.getSummaryList().map((value, index) => <li key={index}>{value}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Summary;