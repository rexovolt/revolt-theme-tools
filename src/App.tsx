import React from 'react';

import { Header } from './components/navigation';
import { PaneContainer } from './components/panes';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PaneContainer />
    </div>
  );
}

export default App;
