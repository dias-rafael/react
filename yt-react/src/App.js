import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { throwStatement } from '@babel/types';

class MyButton extends Component {
  render() {
    return <button onClick={() => { this.props.handleclick (this.props.label); }}>{this.props.label}</button>
  }
} 

class MyLabel extends Component {
  render() {
    return <p>Cliquei no {this.props.text}</p>     
  }
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      labelText: '', //chave do state
    };
    
    this.setLabelText = this.setLabelText.bind(this);
  }

  //exemplo com bind (ver ultima linha acima no constructor)
  setLabelText(labelText){
    this.setState({labelText}); //como é o mesmo nome da chave do state, não precisa ser labelText: labelText
  }

  /* //exemplo com arrow function
  setLabelText = (labelText) =>  {
    this.setState({labelText}); //como é o mesmo nome da chave do state, não precisa ser labelText: labelText
  }
  */

  render() {
    return ( 
      <div className="App">
        <MyButton handleclick={this.setLabelText} label="Botao1"/>
        <MyButton handleclick={this.setLabelText} label="Botao2"/>
        <MyButton handleclick={this.setLabelText} label="Botao3"/>
        <MyButton handleclick={this.setLabelText} label="Botao4"/>
        <MyLabel text={this.state.labelText}/>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
