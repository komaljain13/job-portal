import React from 'react';
import './App.css';
import CardList from './components/card/Card.js';
import Form from './components/form/Form.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {profiles:[]};
  }

  addNewProfile = (newProfile) => {
    console.log('New Profile',newProfile);
    this.setState(preState => ({
      profiles:[...preState.profiles,newProfile]
    }));
  }

  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  } 
}

export default App;
