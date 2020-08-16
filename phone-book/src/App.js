import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './App.scss';

class App extends Component {
  id = 1;
  state = {
    information: [
      {
        id: 0,
        name: '제시',
        phone: '010-1111-2222'
      }
    ],
    keyword: ''
  }
  phoneCreate = (data) => {
    this.setState({
      information: this.state.information.concat({id: this.id++, ...data})
    });
  }
  phoneRemove = (id) => {
    this.setState({
      information: this.state.information.filter(info => info.id !== id)
    });
  }
  phoneUpdate = (id, data) => {
    this.setState({
      information: this.state.information.map(
        info => id === info.id ? { ...info, ...data } : info
      )
    });
  }
  searchChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }
  render() {
    const filteredList = this.state.information.filter(
      info => info.name.indexOf(this.state.keyword) !== -1
    );
    return (
      <div className="AppWrapper">
        <div className="App">
          <h1>전화번호부</h1>
          <PhoneForm onCreate={this.phoneCreate}/>
          <div className="search">
            <hr/>
            <input
              placeholder="Search"
              onChange={this.searchChange}
              value={this.state.keyword}
            />
          </div>
          <PhoneInfoList
            data={filteredList}
            onRemove={this.phoneRemove}
            onUpdate={this.phoneUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
