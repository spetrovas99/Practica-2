import React,{Component} from 'react';
import './App.css';
import Display from './componentes/Display';
import Botonera from './componentes/Botonera';
import {evaluate} from "mathjs";

class App extends Component {
  state ={
    display : [],
    historial : [],
    visible: false,
  };

  clickBottonHandler = (numero) =>{
    let display = this.state.display.slice();
    let historial = this.state.historial.slice();

    if(numero === "<="){
      display.splice(display.length - 1, 1);
    }else if(numero === "="){
      let operation = "";
      display.forEach(elem => {
        operation += elem;
      });
      try{
        historial.push(display);    
        display = evaluate(operation);
        display = display.toString().split("");
        
        this.setState({historial});
      } catch {
        display = [];
      }
    } else {
     
      display.push(numero);
    }
    this.setState({display});
  }

clickModeHandler = ()=>{
  let visible = this.state.visible;
  
  visible = !visible;
  
  this.setState({visible})
}

  render(){
    return(
      <div className="App">
        <Display display={this.state.display} historial={this.state.historial} visible ={this.state.visible}></Display>
        <Botonera clickBoton = {this.clickBottonHandler} clickMode ={this.clickModeHandler} visible={this.state.visible}></Botonera>
    </div>
    );
  }
}

export default App;
