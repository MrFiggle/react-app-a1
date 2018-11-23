import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
    state = {
        username: [
            { name: 'Atules'},
            { name: 'Abby'},
        ]
    };

    usernameChangedHandler = (event) => {
        this.setState({
            username: [
                { name: 'Atules!'},
                { name: event.target.value}
            ]
        })
    };

  render() {
    return (
      <div className="App">
          <h1>This is my first react app</h1>
          <UserInput changed={this.usernameChangedHandler}/>
          <UserOutput name={'Peter'} username={this.state.username[0].name}/>
          <UserOutput name={'Mandy'} username={this.state.username[1].name}/>
      </div>
    );
  }
}

export default App;
