import Axios from 'axios';
import React from 'react';

class Form extends React.Component{

    state={username:''};
    
    handleSubmit = async (event)=> {
      event.preventDefault();
      const resp = await 
      Axios.get(`https://api.github.com/users/${this.state.username}`);
      this.props.onSubmit(resp.data);
      this.setState({username:''});
    };
    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter github username" value={this.state.username} 
            onChange={event=> this.setState({username:event.target.value})} required/>
            <button>Add Card</button>
          </form>
        </div>
      )
    }
  
  }
  export default Form;