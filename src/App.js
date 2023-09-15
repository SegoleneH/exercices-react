import React, { Component } from 'react';
import {MyVoitures} from './component/MyVoitures';
// import Voiture from './component/Voitures';
// import Component from 'first';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon catalogue de vroum vroum',
    color: 'brown'
  }

  render() {
    return (
      <div className="App">
        <MyVoitures title={this.state.titre} color={this.state.color} />
      </div>
    );
  }
}

export default App;
