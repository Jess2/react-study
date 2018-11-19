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
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    });
  }
  phoneRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  phoneUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
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
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
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
              value={keyword}
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
