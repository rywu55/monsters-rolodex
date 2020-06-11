import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list';
import './App.css';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        monsters: [],
        searchField: '',

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json()).then(monster => this.setState({monsters: monster}));
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox placeH = 'search here' handleChange = {this.handleChange} />
        <CardList monsters = {filterMonsters}>
          
        </CardList>
         
      </div>
    );
  }

}

export default App;
