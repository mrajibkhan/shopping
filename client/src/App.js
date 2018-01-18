import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import CatalogList from "./CatalogList";

import { addCatalogs } from "./js/actions/catalogActions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        addCatalogs: catalogs => dispatch(addCatalogs(catalogs))
    };
};

const mapStateToProps = state => {
    return { catalogs: state.catalogs }
};

class ConnectedApp extends Component {

  componentDidMount() {
    fetch('/catalogs')
      .then(res => res.json())
      .then(catalogs => this.props.addCatalogs(catalogs));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Online Shopping Portal (React, Redux, gRPC example)</h1>
        </header>
        <h2>Catalogs</h2>
          <CatalogList />
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
