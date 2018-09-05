import * as React from 'react';
import './App.css';


import About from './About/About';
import Home from './Home/Home';
import logo from './logo.svg';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Topics from './Topics/Topics';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <hr/>

              <Route exact={true} path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
