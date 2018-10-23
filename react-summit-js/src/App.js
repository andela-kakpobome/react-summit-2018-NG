import React, { Component } from 'react';

// import style
import './App.css';

// import components
import { Profile } from './components/Profile/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        first: 'Kesiena',
        last: 'Akpobome',
        middle: 3
      },
      role: 'Technical Lead, Andela',
      funFacts: 'Software Artist, Scalable future enthusiast'
    }
  }

  render() {
    return (
      <div className="app">
        <Profile name={this.state.name}/>
      </div>
    );
  }
}

export default App;
