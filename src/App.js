import React from 'react'; // Import React
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      name:"Prasad",
      count:0
    }
  }

  componentDidUpdate() {
    console.warn("componentDidUpdate");
    
  }

  render() {

    return (
      <div className="App">
        <h1>Component Did Update {this.state.name}{this.state.count}</h1>
        <button onClick={()=>{this.setState({name:"Raider Pratik"})}}>Update Name</button>
      </div>
    );
  }
}

export default App;
