import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {catalogs: []}

  componentDidMount() {
    fetch('/catalogs')
      .then(res => res.json())
      .then(catalogs => this.setState({ catalogs }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">online shopping portal</h1>
        </header>
        <h2>Catalogs</h2>
        {this.state.catalogs.map(catalog =>
          <div key={catalog.catalogId}>{catalog.catalogName}</div>
        )}
      </div>
    );
  }
}

export default App;
