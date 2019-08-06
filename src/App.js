import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/CardList.jsx"
import SearchBox from "./components/SearchBox/SearchBox.jsx"


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      monsters:[],
      searchFiled:""
    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( response => response.json() )
      .then( users => this.setState( () => {return {monsters:users}}) )
  }

  // due to lexical scoping, the arrow functions automatically bind this
  handleChange = (e) => {
    this.setState({searchFiled:e.target.value})
  }

  render(){
    console.log("main ", this.props)
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()) )
    
    var element = (
      <div className="App"> 
        <h1> Monster Rolodex </h1>
        <SearchBox placeholder = "Search" handleChange = {this.handleChange} />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )

    return element;
  }
}

export default App;
