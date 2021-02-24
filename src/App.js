import React from 'react';

import { CardList } from './components/card-list/card-list.cmponent';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => ( response.json() ))
      .then((users) => ( this.setState({ monsters: users }) ));
  };

  handlechange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => (
      monster.name.toLowerCase().includes(searchField)
    ));

    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search monsters...'
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
