import React, { useState } from 'react';
import './App.css';
// import Button from './components/button/Button.js';

function Button(props){ 
  return(
  <button onClick={()=>props.onclickFunction(props.increament)}>+{props.increament}</button>
  )
}

function Display(props){
  return (
  <div>{props.message}</div>
  )
}

function App() {
  const [counter,setCounter] = useState(10);
  const increamentCounter = (increamentValue)=> setCounter(counter+increamentValue);
  return (
    <div className="App">
      <header className="App-header">
          <Button onclickFunction={increamentCounter} increament={5}/>
          <Button onclickFunction={increamentCounter} increament={25}/>
          <Button onclickFunction={increamentCounter} increament={35}/>
          <Button onclickFunction={increamentCounter} increament={45}/>
          <Display message={counter}/>
      </header>
      
    </div>
  );
}

export default App;
