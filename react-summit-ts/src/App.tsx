import * as React from 'react';
import './App.css';

// import components
import { Profile } from './components/Profile/Profile';

class App extends React.Component {
  public state = {
    funFacts: 'Software Artist, Scalable future enthusiast',
    name: {
      first: 'Kesiena',
      last: 'Akpobome',
      middle: 3
    },
    role: 'Technical Lead, Andela',
  }

  public render() {
    const { name, role, funFacts } = this.state;

    return (
      <div className="app">
        <Profile name={name} role={role} funFacts={funFacts} />
      </div>
    );
  }
}

export default App;
