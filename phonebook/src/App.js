import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PhoneForm/>
        <PhoneInfoList/>
      </div>
    );
  }
}

export default App;
