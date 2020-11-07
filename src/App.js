import React, {Component} from 'react';

import Form from './components/Form';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="form-container">
        <h2>Dane użytkownika</h2>
        <Form />
      </div>
    );
  }

}

export default App;
