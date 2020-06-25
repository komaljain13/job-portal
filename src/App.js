import React from 'react';
import './App.css';
import profiles from './mockData/profile.js'

const CardList = (props) => {
  <div>
    <card/>
  </div>
};
class Card extends React.Component{
  render(){
    const profile = profiles[0];
    return (
      <div className="github-profile" style={{margin:'1rem'}}> 
      <img src={profile.avatar_url} alt={profile.avatar_url} />
      <div className="info" style={{marginLeft:'10px', display:'inline-block'}}> 
        <div className="name" style={{fontSize:'125%'}}>{profile.name}...</div>
        <div className="company-name"> {profile.company}...</div>
      </div>
      </div>
    )
  }

}

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <cardList />
      </div>
    );
  } 
}

export default App;