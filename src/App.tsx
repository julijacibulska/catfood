import React, { Component } from 'react';
import catfood from './catfood.json'
import Header from './components/Header';
import { Products } from './components/Products';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products items={catfood} />
      </div>
    );
  }
}

export default App;
