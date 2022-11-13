import { Component } from 'react';
import './App.css';
import Keys from './Keys';

class App extends Component {
  state = {
    numbers:[],
    operator:String
  }
  
  render() {

    const {numbers,operator} = this.state

    return (
      <div>
{/*         <Input/>
        <Output/> */}
        <Keys numbers={numbers} operator={operator} 
              selectedNumbers={this.selectedNumbers} selectedOperator={this.selectedOperator}/>
      </div>
    );
  }

  selectedNumbers = (number) => {
    const { numbers } = this.state
    this.setState({
      numbers:[...this.state.numbers,number]
    });
  }

  selectedOperator = (operators) => {
    this.setState({
      operator:operators
    });
  }

}

export default App;
