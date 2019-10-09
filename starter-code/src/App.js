import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';
import Table from './components/Table';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomHandler = () => {
    let radnomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contacts: this.state.contacts.concat([radnomContact])
    })
  }
  
  sortByNameHandler = () => {
    this.setState({
      contacts: this.state.contacts.slice().sort((a,b) => a.name < b.name)
    })
  }

  sortByPopularityHandler = () => {
    this.setState({
      contacts:  this.state.contacts.slice().sort((a,b) => b.popularity - a.popularity)
    })
  }

  deleteHandler = ( index ) => {
    console.log(index)
    this.setState({
      contacts: this.state.contacts.slice().filter((contact, i) => index !== i )
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomHandler}>Add random contacts</button>
        <button onClick={this.sortByNameHandler}>Sort by name</button>
        <button onClick={this.sortByPopularityHandler}>Sort by popularity</button>
        <Table data={this.state.contacts} clicked={this.deleteHandler} />
      </div>
    );
  }
}

export default App;
