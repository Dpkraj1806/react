import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      username:"",
      age:""
    };
  }
usernameChange=(event)=>{
  // console.log(event.target.value);
  this.setState({username:event.target.value})
}
ageChange=(event)=>{
  // console.log(event.target.value);
  this.setState({age:event.target.value})
}
submit=(event)=>{
  event.preventDefault();
  console.log("Username",this.state.username);
  console.log("Age",this.state.age);
}
  render(){
    // console.log("this".this)
    return(
      <>
      <form onSubmit={this.submit}>
        <input name='username' onInput={this.usernameChange}></input>
        <input name='age' onInput={this.ageChange}></input>
        <input type="submit"/>
      </form>
      </>
    )
  }
}