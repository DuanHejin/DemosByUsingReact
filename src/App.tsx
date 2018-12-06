import * as React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

class App extends React.Component {
  
  public render() {
    return (
      <React.Fragment>
        <AppRoutes/>
      </React.Fragment>
    );
  }
}

export default App;
