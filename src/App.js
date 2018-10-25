import React, { Component } from 'react';
import Mychart from './components/charts/chart_component';
import './App.css';
import $ from 'jquery';
import * as jqui from 'jquery-ui';
import { findDOMNode } from 'react-dom';
import AlphVantage from './components/AlphVantage/AlphVantage';
import Person from './Person/Person';
import AlphaVantage from './components/AlphVantage/AlphVantage';

class App extends Component {

  // Alpha Vantage Api Consts
  
  constructor(props) {
    super(props);
  
    this.state = {
      /*
      items: {},
      isLoaded: false,
      k_from_currency_code: '1. From_Currency Code',
      k_from_currency_name: '2. From_Currency Name',
      k_to_currency_code:'3. To_Currency Code',
      k_to_currency_name:'4. To_Currency Name',
      k_ex_rate: '5. Exchange Rate',
      k_last_refresh: '6. Last Refreshed',
      k_time_zone: '7. Time Zone',
      */
    }
  }

state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Whore', age: 26 }

  ],
  otherState: 'some other value',
  showPersons: false
}

switchNameHandler = (newName) => {
  //console.log('Was clicked!');
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Movafuka', age: 1 },
      { name: 'Stupid Whore', age: 28 }
    ] 
      
  });
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stupid Whore', age: 26 }

    ]
  })
}

apiJsonToArray = (data, topKey) => {
  let propArray = [];
  data.forEach(element => {
    propArray[element] = data[topKey][element]
  });
  console.log(propArray);
  
}

togglePersonsHandler = () => {
  const doesShow= this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render() {
    return(
        <div className="App">
          
          <span>
            <AlphaVantage />
          </span>
          
          
          <button 
            
            onClick={this.togglePersonsHandler}>Switch Name</button>
          
            { this.state.showPersons ?
              <div>
              <Person 
                name={this.state.persons[0].name}
                
                age={this.state.persons[0].age} />
               <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'FAG')} changed={this.nameChangeHandler}>My hobbies: Butts </Person>

              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
          }

            
       
        </div>
    );
  };
      
}

export default App
