import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import router from './router.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }

  }

  render() {
    return (
      <div className="App">

        <Header />
        {router}

      </div>
    );
  }
}

export default App;
