import React from 'react';

class Card extends React.Component{
    render(){
      const profile = this.props;
      console.log('profile...',profile);
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

  const CardList = (props) => (
    <div>
      {props.profiles.map((profile,index)=> <Card key={index} {...profile}/>)}
    </div>
  )

  export default CardList;